// З клавіатури вводиться ціна товару і кількість грошей. 
// Якщо грошей не вистачає то відмовляємо у покупці, інакше, 
// якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.


    let priceOfProduct= parseFloat(prompt(`Ціна товару`))
    let amountOfMoney= parseFloat(prompt(`Скільки грошей маєте?`))
    const lottery= 4

    if (amountOfMoney <  priceOfProduct)
    alert (`You can't buy this item`)
    else if (amountOfMoney - priceOfProduct >=lottery)
    alert (`Buy the lottery)`)