// З клавіатури вводиться вік людини. Вивести на екран ким він є 
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let userAge= parseInt(prompt(`Введіть ваш вік`))
let whoAreYou

if( 3<=userAge &&  userAge<=6)
whoAreYou= `Ви дитина в садочку`
else if (7<=userAge && userAge<=18)
whoAreYou= `Ви школяр`
else if (18<=userAge && userAge<=24)
whoAreYou= `Ви студент`
else if (25<=userAge && userAge<=59)
whoAreYou= `Ви працівник`
else  (userAge>=60)
whoAreYou= `Ви пенсіонер`
alert(whoAreYou)