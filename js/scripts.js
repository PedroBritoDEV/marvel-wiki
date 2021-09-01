var heroi_btn = document.querySelector('.herois-btn')
var site_btn = document.querySelector('.site-btn')
document.querySelector('.filme-btn').addEventListener("mouseover", hover)
document.querySelector('.site-btn').addEventListener("mouseover", hover)
document.querySelector('.filme-btn').addEventListener("mouseout", out)
document.querySelector('.site-btn').addEventListener("mouseout", out)
function hover() {
    heroi_btn.style.color = "black"
    heroi_btn.style.transform = "scale(1)"
}
function out() {
    heroi_btn.style.color = "white"
    heroi_btn.style.transform = "scale(1.1)"
}

//botao-mobile

