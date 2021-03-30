/* Import UI, Data */
import RandomWord from './api.js'
/* import Ui from '/js/ui.js'
import Data from '/js/data.js' */
/*  Main function that links back to ui, data.  */

 (function app(){
    loadApi()

    /* Funktion för att hämta API */
    function loadApi(){
        console.log('jek')
        let newWord = RandomWord.getWord()
        console.log()
    }
    
    document.querySelector('.ng-btn').addEventListener('click', function(){

        let nextScreen = document.querySelector('.new-game')
        const currentScreen = document.querySelector('.sp')
        nextScreen.classList.add('show')
        nextScreen.classList.remove('hidden')
        currentScreen.classList.add('hidden')
        currentScreen.classList.remove('show')
    })
    
    document.querySelector('.htp-btn').addEventListener('click', function(){

        let nextScreen = document.querySelector('.htp-container')
        const currentScreen = document.querySelector('.sp')
        nextScreen.classList.add('show')
        nextScreen.classList.remove('hidden')
        currentScreen.classList.add('hidden')
        currentScreen.classList.remove('show')
    })

    document.querySelectorAll('.mm-btn').forEach(function(item){
        item.addEventListener('click', function(){
            let nextScreen = document.querySelector('.sp')
            const currentScreen = document.querySelector('.htp-container')
            const currentScreen2 = document.querySelector('.new-game')
            nextScreen.classList.add('show')
            nextScreen.classList.remove('hidden')
            currentScreen.classList.add('hidden')
            currentScreen.classList.remove('show')
            currentScreen2.classList.add('hidden')
            currentScreen2.classList.remove('show')
        })
    })
    
    
    /* ngBtn */
    
}())
