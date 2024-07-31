    let canRun = true;
    let check = true;
    function Aimball(){
        if(canRun){
     let time = parseInt(document.getElementsByName("timer")[0].value);   
     let difficulty = parseInt(document.getElementsByName("Difficulty")[0].value);   
    const stop = setInterval(() => {
    let i = Math.floor(Math.random() * 46) + 'vw';
    let j = Math.floor(Math.random() * 33) +'vw';
   let dom = document.getElementsByClassName("ball")[0];
   dom.style.visibility = "visible";
   dom.style.left = i;
   dom.style.top = j; 
   let dom1 = document.getElementsByClassName("overlay")[0];
   dom1.style.visibility = "visible";
   dom1.style.left = i;
   dom1.style.top = j; 
        }, difficulty);
        setTimeout(() => {
            let dom = document.getElementsByClassName("ball")[0];
            let dom1 = document.getElementsByClassName("overlay")[0];
            clearInterval(stop);
            dom.style.visibility = "hidden";
            dom1.style.visibility = "hidden";
          
        }, time);
    }
    }
  
    let count = 0;
    function score(){
       let audio = new Audio('./audio/gunshot.mp3');
        let dom = document.getElementsByClassName("score")[0];
        count++;
         dom.innerHTML = "Score: "+count+"";
       audio.play();
    }
   

function timeCount(){
    if(canRun){
        canRun = false;
     let dom = document.getElementsByClassName("counter")[0];
    let time = parseInt(document.getElementsByName("timer")[0].value);
      let count = time/1000;
     setInterval(() => { 
    if(count>0){
    count--;
    dom.innerHTML = "Time: "+count+" sec"; 
    }
    }, 1000);
    setTimeout(() => { canRun = true; check = true;}, time);
}
}

function handleClick(){
     if(check){
        check = false;
         let dom = document.getElementsByClassName("score")[0];
    count = 0;
    dom.innerHTML = "Score: " + count; 
     }
}
const button = document.getElementsByClassName('start')[0];
button.addEventListener('click', handleClick);