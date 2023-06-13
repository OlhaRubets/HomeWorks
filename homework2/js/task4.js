let lengthCm= parseFloat(prompt(`Довжина`))

let lengthMeter=lengthCm/100
let lengthKm=lengthCm/1000

document.write(`
<table class="table-task1">
    <tr>
        <td>Метр</td>
        <td>${lengthMeter}</td>
    </tr>
    <tr>
        <td>Кілометр</td>
        <td>${lengthKm}</td>
    </tr>
   
 </table>`)
