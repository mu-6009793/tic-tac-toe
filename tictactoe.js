console.log("welcome to tic tac toe");
let music = new Audio('/1.mp3');
let turn = new Audio('/ting.mp3');
let gameover = new Audio('/gameover.mp3');
let isgameover= false;
let turn1 = "X"
const changeturn=()=>{
    return turn1==="X"?"0":"X";
}
const checkwin=()=>{
    let boxtext= document.getElementsByClassName('boxtext')
  let wins= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){

      document.querySelector('.info').innerText = boxtext[e[0]].innerText+ 'won'
      isgameover=  true;
      console.log('hii')
    }
  })
}
// checkwin()
//game logic
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
let boxtext =element.querySelector('.boxtext')
element.addEventListener('click', ()=>{
    if(boxtext.innerText===''){
     boxtext.innerText=turn1;
      turn1 = changeturn()
     turn.play()
     checkwin();
   if(!isgameover){
    document.getElementsByClassName('info').innerText='trun for' +turn1
   }
    }
})
})


const resetfunc = () => {
  Array.from(boxes).forEach(e=>{
    let reset = document.getElementsByClassName('boxtext');
    reset.reset();
  })
}


let reset = document.getElementById("reset-btn")
reset.addEventListener('click', resetfunc)