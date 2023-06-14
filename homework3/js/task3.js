// Випадковим чином генерується число від 1 до 5. 
// Спробуйте вгадати число за 2 спроби.


let minNumber=1, maxNumber=5
let riddledNumber= parseInt(prompt(`Спробуйте вгадати випадкове число від 1 до 5`))
 let randomNumber= minNumber + Math.floor(Math.random()*(maxNumber- minNumber+1))

 if (riddledNumber != randomNumber){
     riddledNumber= parseInt(prompt(`Ні, не вгадали, спробуйте ще раз`))
    if (riddledNumber != randomNumber )
    alert (`Нажаль Ви не вгадали це було число ${randomNumber}`)
    else 
    alert (`Ви вгадали`)
 }
 else
 alert(`Ви вгадали`)