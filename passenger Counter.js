let counter = document.querySelector(".count")
let saveEl = document.querySelector(".save-el")
let errorEL = document.querySelector(".error")
let num = 0
function increment() {
    num = num + 1
    counter.innerText = num
}
function save() {
    let countstr = num + " - "
    saveEl.textContent += countstr
    num = 0
    counter.innerText = num
}
function error() {
    errorEL.innerText = "Sorry , SomeThing Went Wrong"
}