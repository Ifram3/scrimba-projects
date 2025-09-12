// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
//     "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
//     "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
//     "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
//     "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
//     ":",";","<",">",".","?","/"];
    
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let numbers = ["0","1","2","3","4","5","6","7","8","9"];

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Generate two random passwords when the user clicks the button
// Each password should be 15 characters long 

let passwordLengthInput = document.getElementById("password-length");
let generateBtn = document.getElementById("generate-password-btn");
let showPasswordBtn = document.getElementById("password-display");
let displayPasswordBtn = document.getElementById("generated-password");
let copyIcon = document.getElementById("copy-icon");
let copySymbol = document.getElementById("copy-symbol");
let copiedMsgOne = document.getElementById("copied-msg-one");
let copiedMsgTwo = document.getElementById("copied-msg-two");
let includeNumbersCheckbox = document.getElementById("include-numbers");
let includeSymbolsCheckbox = document.getElementById("include-symbols");

function getRandomCharacters(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    let firstPassword = "";
    let secondPassword = "";
    let passwordLength = passwordLengthInput.value;
    let characters = letters;

    if (includeNumbersCheckbox.checked) {
        characters = characters.concat(numbers); 
    };

    if (includeSymbolsCheckbox.checked) {
        characters = characters.concat(symbols); 
    };

    for ( let i = 0; i < parseInt(passwordLength); i++) {
        firstPassword += getRandomCharacters(characters);
        secondPassword += getRandomCharacters(characters);
        // +passwordLength
        //firstPassword += characters[ Math.floor( Math.random() * characters.length ) ];
        //secondPassword += characters[ Math.floor( Math.random() * characters.length ) ];
    }

    showPasswordBtn.textContent = firstPassword;
    copyIcon.style.display = "inline";
     //copyIcon.textContent = "📋";

    displayPasswordBtn.textContent = secondPassword;
    copySymbol.style.display = "inline";
    //carrySymbol.textContent = "📋";  
}

generateBtn.addEventListener("click", generatePassword);

copyIcon.addEventListener("click", function() {
    navigator.clipboard.writeText(showPasswordBtn.textContent);
    copiedMsgOne.style.display = "inline";

    setTimeout(function() {
        copiedMsgOne.style.display = "none";
    }, 1500);
});

copySymbol.addEventListener("click", function() {
    navigator.clipboard.writeText(displayPasswordBtn.textContent);
    copiedMsgTwo.style.display = "inline";

    setTimeout(function() {
        copiedMsgTwo.style.display = "none";
    }, 1500);
});