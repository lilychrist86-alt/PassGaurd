const inputbox = document.getElementById("pw");
const copybtn = document.getElementById("copy");

let pwLength = document.getElementById("pwLength");
let slider = document.getElementById("pwRange");

let checkUpperCase = document.getElementById("uppercase");
let checkNumbers = document.getElementById("numbers");
let checkSymbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const savePW = document.getElementById("SavePw");


slider.addEventListener("input", () => {
    pwLength.textContent = slider.value;
});

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "`~!@#$%^&*(){}-_[]+="




function GetPass(){
    let characters = "";
    let password = "";

    if(checkUpperCase.checked){
    characters = characters + uppercase;
}
    if(checkNumbers.checked){
    characters = characters + numbers;
}
    if(checkSymbols.checked){
    characters = characters + symbols;
}

characters += lowercase;

    let i = 0;
    while(i < slider.value){
        const randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
        const RandomIndex = randomNumber % (characters.length);
        password = password + characters[RandomIndex];
        i++;
    };    
    return password;
};

generateBtn.addEventListener("click", function(){
    password = GetPass()
    inputbox.value = password;
});


copybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputbox.value);

    copybtn.textContent = "✅";
    setTimeout(() => {
        copybtn.textContent = "COPY";
    }, 1500);
})