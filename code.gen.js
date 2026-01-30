const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById("first-pass");
let secondPass = document.getElementById("sec-pass");
let thirdPass = document.getElementById("third-pass");
let fourthPass = document.getElementById("fourth-pass");
const generateBtn = document.getElementById("generate-btn");

let length = document.getElementById("length-pass").value;

function makePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomPass = Math.floor(Math.random() * characters.length);
        password += characters[randomPass];
    }
    return password;
}

function generatePassword() {
    let length = Number(document.getElementById("length-pass").value);

    if (length > 20) length = 20;
    if (length < 4) length = 4;

    firstPass.textContent = makePassword(length);
    secondPass.textContent = makePassword(length);
    thirdPass.textContent = makePassword(length);
    fourthPass.textContent = makePassword(length);
}



generateBtn.addEventListener("click", generatePassword);

let passwordsDivs = [firstPass, secondPass, thirdPass, fourthPass];

passwordsDivs.forEach(div => {
    div.addEventListener("click", ()=> {
        navigator.clipboard.writeText(div.textContent);
        div.classList.add("copied");
        setTimeout(()=> div.classList.remove("copied"), 1500);
    })
})

/* firstPass.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPass.textContent);
});

secondPass.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPass.textContent);
});

thirdPass.addEventListener("click", function() {
    navigator.clipboard.writeText(thirdPass.textContent);
})

fourthPass.addEventListener("click", function() {
    navigator.clipboard.writeText(fourthPass.textContent);
}) */

