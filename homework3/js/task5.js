// З клавіатури вводиться назва категорії водія 
// (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
// Вивести на екран назву транспортного засобу, яким він може керувати.


    let categoryDriverLicense= prompt(`Яка у Вас категорія водійського посвідчення А, В чи С?`)
    let result

switch (categoryDriverLicense) {
        case 'A': 
        case 'a': 
        case 'А': 
        case 'а': result= 'Ви можете керувати мотоциклом';
            break;
        case 'B':
        case 'b':
        case 'В':
        case 'в': result= 'Ви можете керувати легковим автомобілем';
            break;
        case 'C':
        case 'c': 
        case 'С': 
         case 'с':  result= 'Ви можете керувати вантажним автомобілем';
            break;
        default: result= 'Невірне значення'
            break;
}
alert(result);