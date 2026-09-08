const passwordinput = document.getElementById("CreatePwBox");
const passwordfor = document.getElementById("pwfor");
const strength = document.getElementById("PwStrength");
const savebtn = document.getElementById("savebtn");



AllPasswords = [];

let StoredData = localStorage.getItem("PW:");
if(StoredData){
    AllPasswords = JSON.parse(StoredData)
};


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
});







