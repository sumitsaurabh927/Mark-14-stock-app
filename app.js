var initial = document.querySelector("#initial")
var current = document.querySelector("#current")
var qty = document.querySelector("#qty")
var btn = document.querySelector("#btn")
var out = document.querySelector("#output")

function onClick() {
    var iniPrice = Number(initial.value);
    var finPrice = Number(current.value);
    var stockqty = Number(qty.value);
    showResults(iniPrice, finPrice, stockqty);
}
btn.addEventListener("click", onClick)

function showResults(ini, fin, qty) {
    if (ini > fin) {
        console.log("loss");
    } else if (ini < fin) {
        console.log("profit");
    } else {
        console.log("nothing");
    }
}