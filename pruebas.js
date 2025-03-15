const operations = ["sum", "pro", "sum", "div", "pro"]
const numbers = [2, 7, 12, 2, 4, 10]

function operateListNumbers(num, operat){
    let isFinish = true
    let provNumber 
    for( i in operat){
        // Product and división
        if(operat[i] === "pro" || operat[i] === "div"){
            switch (operat[i]){
                case "pro":
                    provNumber = num[i] * num[Number(i)+1]
                    break
                case "div":
                    if(num[Number(i)+1] == 0){
                        return "ERROR"
                    }else{
                        provNumber = num[i] / num[Number(i)+1]
                    }
                    break
            }
            delete operat[i]
            num[Number(i)+1] = provNumber
            delete num[i]
            isFinish = false
            break
        }
    }
    if(isFinish){        
        const newNumbers = num.filter(item => item !== undefined)
        const newOperat = operat.filter(item => item !== undefined)
        let total = num[0]
        
        for(let i = 0; i < newOperat.length; i++){
            switch(newOperat[i]){
                case "sum":
                    total += newNumbers[i+1]                                         
                    break
                case "sub":
                    total -= newNumbers[i+1]
                    break
            }
        }
        return total
    }else{
        return (operateListNumbers(num, operat))
    }
}
const prueba = operateListNumbers(numbers, operations)
console.log(prueba);