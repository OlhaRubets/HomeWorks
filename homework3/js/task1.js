// З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, 
// або вивести, що кількість однакова.


let nameFirstChild= prompt(`Ім'я першої дитини`)
let nameSecondChild= prompt(`Ім'я другої дитини`)
let numberCandyFirstKid= parseInt(prompt(`Кількість цукерок у першої дитини`))
let numberCandySecondKid= parseInt(prompt(`Кількість цукерок у другої дитини`))

if (numberCandyFirstKid > numberCandySecondKid)
   alert (`Більше цукерок у ${nameFirstChild}`)
   else
   alert (`Більше цукерок у ${nameSecondChild} `)