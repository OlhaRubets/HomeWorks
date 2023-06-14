// З клавіатури вводиться номер місяця. 
// Вивести до якої пори він відноситься

let monthNumber=parseInt(prompt(`Введіть номер місяця від 1 до 12`))
let result

switch (monthNumber) {
    case 12:
    case 1:
    case 2: result='Це Зима' 
        break;
    case 3:
    case 4:
    case 5: result='Це Весна' 
        break;
    case 6:
    case 7:
    case 8: result='Це Літо' 
        break;
    case 9:
    case 10:
    case 11: result='Це Осінь' 
        break;
    default: result= 'Такого місяця немає'
        break;
}
alert(result)