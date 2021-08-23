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
        var loss = (ini - fin) * qty;
        var lossPc = ((loss) / ini) * 100
        console.log("loss of " + loss + "\n i.e,. " + lossPc + "%");
    } else if (ini < fin) {
        var profit = (fin - ini) * qty
        var profitPc = ((profit) / ini) * 100
        console.log("profit of " + profit + "\n i.e,. " + profitPc + "%");
    } else {
        console.log("better luck next time");
    }
}