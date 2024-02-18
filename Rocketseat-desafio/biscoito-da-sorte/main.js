const closedCookie = document.getElementById('closed-cookie')
const openedCookie = document.getElementById('opened-cookie')

const title = document.getElementById('title')
const titleOpened = document.getElementById('title-opened')

const open = document.getElementById('open')
const message = document.getElementById('message')

const button = document.getElementById('open-button')

closedCookie.addEventListener('click', openCookie)
button.addEventListener('click', closeCookie)

function openCookie(){

    title.classList.add('none')

    titleOpened.classList.remove('none')

    open.classList.add('none')

    message.classList.remove('none')

    closedCookie.classList.add('none')

    openedCookie.classList.remove('none')

    openedCookie.classList.remove('none')

    button.classList.remove('none')
}

function closeCookie(){

    title.classList.remove('none')

    titleOpened.classList.add('none')

    open.classList.remove('none')

    message.classList.add('none')

    closedCookie.classList.remove('none')

    openedCookie.classList.add('none')

    openedCookie.classList.add('none')

    button.classList.add('none')
}