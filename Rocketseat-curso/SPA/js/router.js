export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    route(event) {

        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href) //Coloca no histórico da janela como se tivesse mudado de rota para o href mesmo sem mudar 
    
        this.handle()
    
    }
    
    handle() {
    
        // Primeira forma de acesso 
        //const pathname = window.location.pathname  => Retorna a "localização" atual da janela a partir da / Ex: /about
    
        //É possivel acessar o pathname da seguinte forma (Destruturando o objeto)
        const { pathname } = window.location
    
        const route = this.routes[pathname] || this.routes[404] 
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
        })
    
    }

}


/* Cria uma Instância do objeto 
const router = new Router() 
*/