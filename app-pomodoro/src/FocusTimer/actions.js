import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay(25,0)
    sounds.buttonPressAudio.play()
}

export function set() {
    document.documentElement.classList.toggle('options-on')
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

export function time(minutes) {
    switch (minutes) {
        case 20:
            document.documentElement.classList.replace('twenty-five-minutes', 'twenty-minutes')
            break
        case 15:
            document.documentElement.classList.replace('twenty-minutes', 'fifteen-minutes')
            break
        case 10:
            document.documentElement.classList.replace('fifteen-minutes', 'ten-minutes')
            break
        case 5:
            document.documentElement.classList.replace('ten-minutes', 'five-minutes')
            break
        case 0:
            document.documentElement.classList.replace('five-minutes', 'twenty-five-minutes')  
            break            
    }
}