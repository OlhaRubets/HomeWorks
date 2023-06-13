let costOfOneProduct= parseFloat(prompt(`Яка вартість товару?`))
let quantityOfProduct= parseInt(prompt(`Яка кількість товару?`))
const tax=5

let costOfAllProducts= costOfOneProduct*quantityOfProduct
let sumTax= (costOfAllProducts*tax)/100

document.write(`
<table class="table-task3">
    <tr>
        <td>Вартість</td>
        <td>${costOfAllProducts}</td>
    </tr>
    <tr>
        <td>ПДВ</td>
        <td>${sumTax}</td>
    </tr>
   
 </table>`)
