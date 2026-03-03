// Hide Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000);
});

// Users (Demo)
const users = {
    "admin@viralvault.com": {
        password: "1234",
        name: "Habineza"
    }
};

// Auto login if saved
document.addEventListener("DOMContentLoaded", () => {

    if(localStorage.getItem("darkMode") === "enabled"){
        document.body.classList.add("dark");
    }

    const savedUser = localStorage.getItem("user");
    if(savedUser){
        openApp(savedUser);
    }
});

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(users[email] && users[email].password === password){
        localStorage.setItem("user", users[email].name);
        openApp(users[email].name);
    }else{
        document.getElementById("loginError").textContent = "Invalid Email or Password";
    }
}

function openApp(name){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("username").textContent = name;
}

function logout(){
    localStorage.removeItem("user");
    location.reload();
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("darkMode","enabled");
    }else{
        localStorage.removeItem("darkMode");
    }
}