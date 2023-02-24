let xwins = 0
let owins = 0
let player = 0

const reset = document.querySelector('.reset')

const buttons = document.querySelectorAll('.buttons button')

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btn9 = document.querySelector('.btn9')

const p2 = document.querySelector('.p2')
const p5 = document.querySelector('.p5')

const winner = document.querySelector('.winner')





buttons.forEach(button => {
    button.addEventListener('click', switchTurns)
})

function switchTurns(event){
    event.target.disabled = true

    if ( player %2 == 1){
        
        event.target.classList.add('x') 
        player++

    }else {
        event.target.classList.add('o')
        player++
    
    }
    TicTacToeGame();

}



function TicTacToeGame (){
    if((btn1.classList.contains('x') && btn2.classList.contains('x') && btn3.classList.contains('x') ) || (btn4.classList.contains('x') && btn5.classList.contains('x') && btn6.classList.contains('x')) || (btn7.classList.contains('x') && btn8.classList.contains('x') && btn9.classList.contains('x')) || (btn1.classList.contains('x') && btn4.classList.contains('x') && btn7.classList.contains('x')) || (btn2.classList.contains('x') && btn5.classList.contains('x') && btn8.classList.contains('x')) || (btn3.classList.contains('x') && btn6.classList.contains('x') && btn9.classList.contains('x')) || (btn1.classList.contains('x') && btn5.classList.contains('x') && btn9.classList.contains('x')) || (btn3.classList.contains('x') && btn5.classList.contains('x') && btn7.classList.contains('x'))){

        xwins++
        p2.textContent = xwins
        winner.textContent = 'TOM WINS'

        buttons.forEach(button => {
            button.disabled = true
        })

        setTimeout(playAgain, 4000)
    
    }else if((btn1.classList.contains('o') && btn2.classList.contains('o') && btn3.classList.contains('o') ) || (btn4.classList.contains('o') && btn5.classList.contains('o') && btn6.classList.contains('o')) || (btn7.classList.contains('o') && btn8.classList.contains('o') && btn9.classList.contains('o')) || (btn1.classList.contains('o') && btn4.classList.contains('o') && btn7.classList.contains('o')) || (btn2.classList.contains('o') && btn5.classList.contains('o') && btn8.classList.contains('o')) || (btn3.classList.contains('o') && btn6.classList.contains('o') && btn9.classList.contains('o')) || (btn1.classList.contains('o') && btn5.classList.contains('o') && btn9.classList.contains('o')) || (btn3.classList.contains('o') && btn5.classList.contains('o') && btn7.classList.contains('o'))){

        owins++
        p5.textContent = owins
        winner.textContent = 'JERRY WINS'

        buttons.forEach(button => {
            button.disabled = true
            
        })

        setTimeout(playAgain, 4000)

    } else if(player == 9) {
        winner.textContent = 'DRAW'
        setTimeout(playAgain, 4000)
    }

    
}

reset.addEventListener('click', resetGame)


function resetGame(){
    xwins = 0
    owins = 0
    p2.textContent = 0
    p5.textContent = 0
    buttons.forEach(button => {
        button.classList.remove('x')
        button.classList.remove('o')
        button.disabled = false
    })
    player = 0


}

function playAgain (){
    buttons.forEach(button => {
        button.classList.remove('x')
        button.classList.remove('o')
        button.disabled = false
    })
    player = 0
    winner.textContent = ''
}



