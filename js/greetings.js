const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

const greetWorld = [
    '안녕',
    'Hi',
    'Hello',
    'Hola',
    'Bonjour',
    'Ola',
    'Guten Tag',
]

function paintGreeting(username){
    const greetWorldRandom = greetWorld[Math.floor(Math.random() * greetWorld.length)]
    greeting.innerText = `${greetWorldRandom} ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}