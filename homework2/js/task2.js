const currentYear= parseInt(prompt(`Введіть поточний рік`))
let yearOfBirth= parseInt(prompt(`Введіть рік народження`))

let userAge= currentYear-yearOfBirth

document.write(`Вік користувача ${userAge}р.`)