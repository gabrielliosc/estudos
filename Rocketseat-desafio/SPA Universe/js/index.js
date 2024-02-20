import { Router } from "./router.js"

const router = new Router()

router.add("/", "./Rocketseat-desafio/SPA%20Universe/pages/home.html")
router.add("/universo", "./Rocketseat-desafio/SPA%20Universe/pages/universo.html")
router.add("/exploracao", "./Rocketseat-desafio/SPA%20Universe/pages/exploracao.html")
router.add(404, "./Rocketseat-desafio/SPA%20Universe/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


