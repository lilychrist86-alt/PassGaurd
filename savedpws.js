console.log("server started. page is working.");

let ShowPasswordDiv = document.querySelector(".savedpw");


let AllPasswords = [];

let fromLocalStorageString = localStorage.getItem("PW:");

if (fromLocalStorageString) {
    AllPasswords = JSON.parse(fromLocalStorageString);
}

let i = 0;
while(i < AllPasswords.length){

    const card = document.createElement("div");
    card.className = "pwCard";
    

const details = document.createElement("div");

    const serviceName = document.createElement("h3");
    serviceName.textContent = AllPasswords[i].Service;
    
    const passwordshow = document.createElement("h3");
    passwordshow.textContent = AllPasswords[i].Password;
    
    const copybtn = document.createElement("button");
    copybtn.textContent = "COPY";
    copybtn.className = "cpybtn";

    const currentPasswword = AllPasswords[i];


    copybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(currentPasswword.Password);

    copybtn.textContent = "✅";
    setTimeout(() => {
        copybtn.textContent = "COPY"
    }, 1500);
});

    details.appendChild(serviceName);
    details.appendChild(passwordshow);


    card.appendChild(details);
    card.appendChild(copybtn);
    ShowPasswordDiv.appendChild(card);
    i++;
};







