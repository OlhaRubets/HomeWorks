let numberOne=parseInt(prompt(`Number 1`)) 
        let numberTwo=parseInt(prompt(`Number 1`)) 

        let sum=numberOne+numberTwo
        let prod=numberOne*numberTwo
        let fraction=numberOne/numberTwo

        document.write(`
        <table class="table-task1">
            <tr>
                <td>Сума</td>
                <td>${sum}</td>
            </tr>
            <tr>
                <td>Добуток</td>
                <td>${prod}</td>
            </tr>
            <tr>
                <td>Частка</td>
                <td>${fraction}</td>
            </tr>
         </table>`)