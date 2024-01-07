import { Router } from "./router.js"

const router = new Router()

router.add("/", "./pages/home.html")
router.add("/about", "./pages/about.html")
router.add("/contact", "./pages/contact.html")
router.add(404, "./pages/404.html")

router.handle()

window.onpopstate = () => router.handle() //onpopstate é usado para quando o usuário clica na setinha de ir e voltar da janela ao lado da url
window.route = () => router.route()


//Mapeamento das rotas

// const routes = {

//     "/": "Rocketseat-curso/SPA/pages/home.html",
//     "/about": "Rocketseat-curso/SPA/pages/about.html",
//     "/contact": "Rocketseat-curso/SPA/pages/contact.html",
//     404: "Rocketseat-curso/SPA/pages/404.html"

// }

