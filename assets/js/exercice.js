
let word_indice=0;
function display_letter(word){
    console.log(word[word_indice])
    word_indice++
    if(word_indice>=word.length){
        clearInterval(interval)
    }
}       

//const interval = setInterval(display_letter, 1000,"prout");


let time_seconde=0;
let time_minute=1;
let n=1;//multiple de 60
function display_time(){
    console.log(time_seconde)
    time_seconde++
    if(time_seconde==n*60){
        if(time_minute==1){
            console.log(" a minute has passed ")
            n++
            time_minute++
            }
        else{
            console.log(time_minute + " minutes have passed ")
            n++
            time_minute++
        }
    }
}

setInterval(display_time,100)








