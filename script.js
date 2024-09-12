// pElement gets the user input, button submits your answer
const pElement = document.getElementById("ansText");
const button = document.getElementById("submitanswer");
const y = Math.floor(Math.random() * 25 + 1);

// If you click the submit button, it will activate the code below
button.addEventListener("click", changeWords);

// You will get your answer from here based on if your answer is true or false
function changeWords(){
    
    // This changes the x into a whole number
    let x = parseInt(document.getElementById("guessbox").value); 
     
    if(x > y){
        pElement.innerText = "Too High! Go Lower!";
        pElement.style.color = "red";
    }
    else if(x === y){
        pElement.innerText = "You're Winner!";
        pElement.style.color = "green";
    }
    else{
        pElement.innerText = "Too Low! Go Higher!";
        pElement.style.color = "red";
    }
}

