let randomone = document.getElementById("firstNumber");
let randomtwo = document.getElementById("secondNumber");
let randomonetwo = document.getElementById("userInput");
let resultout = document.getElementById("gameResult");






function resertthesum() {
    randomone.textContent = parseInt(Math.ceil(Math.random() * 50));
    randomtwo.textContent = parseInt(Math.ceil(Math.random() * 50));
    randomonetwo.value = "";
    resultout.textContent = "";
}


function sumoftwonumbers() {
    if ((parseInt(randomone.textContent) + parseInt(randomtwo.textContent)) === parseInt(randomonetwo.value)) {
        resultout.textContent = "Congratulations! you got it right";
        resultout.style.backgroundColor = "#028a0f";
    } else if ((parseInt(randomone.textContent) + parseInt(randomtwo.textContent)) !== parseInt(randomonetwo.value)) {
        resultout.textContent = "Please Try Again!";
        resultout.style.backgroundColor = "#1e217c";




    }


}