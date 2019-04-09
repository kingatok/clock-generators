const h = document.querySelector("#h");
const m = document.querySelector("#m");
const s = document.querySelector("#s");

const currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

function* setSeconds() {
    yield seconds + 1
}

const sec = setSeconds()

const getSeconds = () => {
    setInterval(() => {
        sec.next()
    }, 1000);
}



window.onload = function() {
    getSeconds()
};
