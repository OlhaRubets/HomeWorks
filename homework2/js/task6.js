let firstCoastProduct= parseFloat(prompt(`Вартість першого товару`))
let firstNumberProduct= parseInt(prompt(`Кількість першого товару`))
let secondCoastProduct= parseFloat(prompt(`Вартість другого товару`))
let secondNumberProduct= parseInt(prompt(`Кількість другого товару`))
let thirdCoastProduct= parseFloat(prompt(`Вартість третього товару`))
let thirdNumberProduct= parseInt(prompt(`Кількість третього товару`))

let firstProductPrice=firstCoastProduct * firstNumberProduct
let secondProductPrice=secondCoastProduct * secondNumberProduct
let thirdProductPrice=thirdCoastProduct * thirdNumberProduct

let totalPrice=firstProductPrice + secondProductPrice + thirdProductPrice

document.write(`<div class="product">
        
<h1 class="title-order">ЧЕК</h1>
<div class="grid">
    <p class="goods">Ціна першого товару</p> 
    <p class="goods">${firstProductPrice} грн</p>
    <p class="goods">Ціна другого товару</p> 
    <p class="goods">${secondProductPrice} грн</p> 
    <p class="goods">Ціна третього товару</p> 
    <p class="goods">${thirdProductPrice} грн</p> 
    <p class="goods1">Загальна вартість</p> 
    <p class="goods">${totalPrice} грн</p> 
</div>
</div>`)