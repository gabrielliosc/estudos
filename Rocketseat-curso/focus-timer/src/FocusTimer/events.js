import state from './state.js'
import * as el from './elements.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
    
    el.controls.addEventListener('click', event => {
        const action = event.target.dataset.action //dataset é usado para agrupar o atributo data-* 
        if(typeof actions[action]() != 'function') {
            return
        }

        //actions["toggleRunning"]() É o mesmo que executar actions.toggleRunning()

        actions[action]() //substituindo pela variável action
    })
}

export function setMinutes(){

    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = event => /\d/.test(event.key) //Uso de regex

    el.minutes.addEventListener('blur', event => { //Blur é o contrário do focus
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}