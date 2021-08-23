var initial = document.querySelector("#initial")
var current = document.querySelector("#current")
var qty = document.querySelector("#qty")
var btn = document.querySelector("#btn")
var out = document.querySelector("#output")
var profitGif = document.querySelector("#profit")
var lossGif = document.querySelector("#loss")
var nothingGif = document.querySelector("#nothing")


profitGif.style.display = "none";
lossGif.style.display = "none";
nothingGif.style.display = "none";

function onClick() {
    var iniPrice = Number(initial.value);
    var finPrice = Number(current.value);
    var stockqty = Number(qty.value);
    showResults(iniPrice, finPrice, stockqty);
}
btn.addEventListener("click", onClick)

function showResults(ini, fin, qty) {
    if (ini > fin) {
        nothingGif.style.display = "none";

        profitGif.style.display = "none";
        nothingGif.style.display = "none";
        var loss = (ini - fin) * qty;
        var lossPc = ((loss) / ini) * 100
        out.innerText = "Loss of ₹" + loss + "\n i.e., " + lossPc + "%"
        lossGif.style.display = "block";

    } else if (ini < fin) {
        lossGif.style.display = "none";
        nothingGif.style.display = "none";
        var profit = (fin - ini) * qty
        var profitPc = ((profit) / ini) * 100
        out.innerText = "Profit of ₹" + profit + "\n i.e., " + profitPc + "%"
        profitGif.style.display = "block";
    } else {
        profitGif.style.display = "none";
        lossGif.style.display = "none";
        out.innerText = "Better luck next time"
        nothingGif.style.display = "block";

    }
}