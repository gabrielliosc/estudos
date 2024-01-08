import { GithubUser } from "./GithubUser.js"

//Classe que vai conter a lógica dos dados, como serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('gabrielliosc').then(console.log)
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                throw new Error('Usuário já cadastrado')
            }
            const user = await GithubUser.search(username)
            
            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            //this.entries.push = user  Quebra o principio da imutabilidade

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
        


    }

    delete(user) {

        const filteredEntries = this.entries
            .filter(entry => entry.login !== user.login) //Principio da imutabilidade, cria um novo array e não modifica o antigo

        this.entries = filteredEntries //Apaga o antigo array e cria um novo filtrado
        this.update()
        this.save()
    }
}

//Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites { //Herança
    constructor(root) {
        super(root) //Chama o constructor de Favorites (Classe pai) passando o parametro root

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name} `
            row.querySelector('.user a').href = `https://github.com/${user.login}`

            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk) {
                    this.delete(user)
                }
            } //Só pode usar o .onevent se só for adicionar um único evento listener no elemento 

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <tr>
            <td class="user">
                <img src="" alt="">
                <a href="" target="_blank">
                    <p></p>
                    <span></span>
                </a>
            </td>
            <td class="repositories">
            </td>
            <td class="followers">
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
        </tr>
        `
        return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr') //Nodelist -> ArrayLike
            .forEach(tr => tr.remove()) 
    }
}
