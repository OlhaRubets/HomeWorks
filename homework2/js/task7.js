let minMonth= 1, maxMonth=12
let minDay=0, maxDay=6

let monthRandom= minMonth+ Math.floor(Math.random()*(maxMonth-minMonth+1))
let dayRandom= minDay+ Math.floor(Math.random()*(maxDay-minDay+1))
let sumRandom= monthRandom+dayRandom
alert ("Рандомний номер місяця")
document.write(`Рандомний номер місяця ${monthRandom} <br>`)
alert ("Рандомний номер дня")
document.write(`Рандомний номер дня ${dayRandom} <br> та їх сума ${sumRandom}`)