const passwordinput = document.getElementById("CreatePwBox");
const passwordfor = document.getElementById("pwfor");
const strength = document.getElementById("PwStrength");
const savebtn = document.getElementById("savebtn");



AllPasswords = [];

let StoredData = localStorage.getItem("PW:");
if(StoredData){
    AllPasswords = JSON.parse(StoredData)
};

// Strength check
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "`~!@#$%^&*(){}-_[]+=";

passwordinput.addEventListener("input", ()=>{
    let score = 0;
    let hasUppercase = false;
    let hasNumbers = false;
    let hasSymbols = false;

    let i = 0;
while(i < passwordinput.value.length){
    const upperChars = passwordinput.value[i];
    

    if(uppercase.includes(upperChars)){
        console.log("uppercase found!")
        
        hasUppercase = true;
    };
    i++;
};
if(hasUppercase){
    score += 1;
}



i = 0;
while(i < passwordinput.value.length){
    const numChars = passwordinput.value[i];

    if(numbers.includes(numChars)){
        console.log("numbers found!");
        
        hasNumbers = true;
    };
    i++;
};
if(hasNumbers){
    score += 1;
};



i = 0;
while(i < passwordinput.value.length){
    const symbolChars = passwordinput.value[i];

    if(symbols.includes(symbolChars)){
        console.log("symbols found!");

        hasSymbols = true;
    };
    i++;
};
if(hasSymbols){
    score += 1;
};



if(passwordinput.value.length >= 8){
    score += 1;
};

// main logic:
if (score === 4){
    strength.textContent = "STRONG";
    strength.style.color = "#11b44d"
} else if (score === 3){
    strength.textContent = "MEDIUM";
    strength.style.color = "#f5e400"
} else if (score === 2){
    strength.textContent = "LOW";
    strength.style.color = "#df7c0b"
} else if (score <= 1){
    strength.textContent = "WEAK";
    strength.style.color = "#DC2626";
};
});



savebtn.addEventListener("click", ()=> {
    const password = passwordinput.value;
    const service = passwordfor.value;

    const PasswordData = {
        Service: service,
        Password: password
    };

    AllPasswords.push(PasswordData);

    let StringDataToStore = JSON.stringify(AllPasswords);

    localStorage.setItem("PW:", StringDataToStore);
    console.log(StringDataToStore);

    location.reload();
});







