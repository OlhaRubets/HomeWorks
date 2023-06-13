let numberOfSecond= parseFloat(prompt(`Кількість секунд`))

let numberOfHours= Math.floor((numberOfSecond % 3600)/60)
let numberOfMinutes= Math.floor(numberOfSecond % 3600)
let minutesAndHours=numberOfHours/numberOfMinutes

document.write(`Від початку доби пройшло ${numberOfHours} годин та ${minutesAndHours.toFixed(2)} хвилин`)