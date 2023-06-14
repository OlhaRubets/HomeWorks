//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let dayOfWeekNumber=parseInt(prompt(`Введіть номер дня тижня від 1-7`))
let result

switch (dayOfWeekNumber) {
    case 1: result= "Понеділок" 
        break;
    case 2: result= "Вівторок" 
        break;
    case 3: result= "Середа" 
        break;
    case 4: result= "Четвер" 
        break;
    case 5: result= "П'ятниця" 
        break;
    case 6: result= "Субота" 
        break;
    case 7: result= "Неділя" 
        break;
    default: result= "Такого дня тижня немає"
        break;
}
alert(result)