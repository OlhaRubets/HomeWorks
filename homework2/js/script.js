let a= parseInt(prompt(`Number a`))
        let c= parseInt(prompt(`Number c`))
        let b= parseInt(prompt(`Number b`))
        let s1= a+12+b
        let s2= Math.sqrt((a+b)/2*a)
        let s3=Math.cbrt((a+b)*c)
        let s4=Math.sin(a/-b)
        document.write(`
        <table class="table-task1">
            <tr>
                <td>S1</td>
                <td>${s1}</td>
            </tr>
            <tr>
                <td>S2</td>
                <td>${s2}</td>
            </tr>
            <tr>
                <td>S3</td>
                <td>${s3}</td>
            </tr>
            <tr>
                <td>S4</td>
                <td>${s4}</td>
            </tr>
         </table>`)

       

        


