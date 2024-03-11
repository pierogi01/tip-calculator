const inputBill = document.getElementById("input-el")
const inputTip = document.getElementById("input-el2")
const totalNum = document.getElementById("total-el")
const sumEl = document.getElementById("sum-el")
const buttonEl = document.getElementById("button-el")

buttonEl.addEventListener("click", function(){
    let sumNum = (JSON.parse(inputTip.value)*JSON.parse(inputBill.value))/100
    sumEl.innerText = `$${sumNum+JSON.parse(inputBill.value)}`
})
