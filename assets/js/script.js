let list_hole=document.getElementsByClassName("game__hole")
let score=0
let Nodescore=document.getElementsByClassName("game__score")
let time=1000;
let displaytime=1000;
// event 
for(let hole of list_hole){
    hole.addEventListener("click", (e) => {
        if(e.target.style.backgroundColor=="red"){
            e.target.style.backgroundColor="white"
            score=score+100
            Nodescore[0].textContent="Score : " + score
        }
})}

//mole 
function display_mole(){
    length=list_hole.length
    random=Math.floor(Math.random() * length);
    while(list_hole[random].style.backgroundColor=="red"){
        random=Math.floor(Math.random() * length);
    }
    let last_hole=list_hole[random]
    last_hole.style.backgroundColor="red"
    setTimeout(() => {
        last_hole.style.backgroundColor="white"
    },displaytime);
}
interval=setInterval(display_mole,time)

select=document.querySelector("select")

select.addEventListener("change", (e) => {
    score=0;
    clearInterval(interval)
    Nodescore[0].textContent="Score : " + score
    if(e.target.value=="easy"){
        time=2000
        interval=setInterval(display_mole,time)
    }
    else if(e.target.value=="normal"){
        time=1000
        interval=setInterval(display_mole,time)
    }
    else if(e.target.value=="hard"){
        time=500
        displaytime=500
        interval=setInterval(display_mole,time)
    }
    else if(e.target.value=="very-hard"){
        time=350
        displaytime=500
        interval=setInterval(display_mole,time)
    }
})
