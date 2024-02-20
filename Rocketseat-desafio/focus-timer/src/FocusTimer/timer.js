import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000) //Recursão a cada 1s
    //countdownId - O setTimeout retorna um id ao ser criado por padrão, estamos guardando esse id para excluir o setTimeout que estiver na espera 
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes // nullish coaleshing operator
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0") 
    el.seconds.textContent = String(seconds).padStart(2, "0")
}