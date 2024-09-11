const pElement = document.getElementById("ansText");
const button = document.getElementById("submitanswer");
const y = Math.floor(Math.random() * 10 + 1);

button.addEventListener("click", changeWords);

function changeWords(){
    
    let x = parseInt(document.getElementById("guessbox").value); // Integer
     
    if(x > y){
        pElement.innerText = "Too High! Go Lower!";
    }
    else if(x === y){
        pElement.innerText = "You're Winner!";
    }
    else{
        pElement.innerText = "Too Low! Go Higher!"
    }
}

