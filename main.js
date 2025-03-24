const botones = document.getElementById("botones")
const screen = document.getElementById("screen")
const point = document.getElementById("point")

let text = ""
let numTemp = ""
let numbers = []
let operat = []
let contador = 0
let addOp = false

let total
let count

const operations = {
    "sum": "+",
    "sub": "-",
    "pro": "*",
    "div": "/"
}
restarScreen()

botones.addEventListener("click", (e)=>{    
    if(e.target.className == "buttons"){    
        switch(e.target.dataset.btn){
        case "num":
            addOp = true
            text += e.target.textContent
            numTemp += e.target.textContent
            showInScreen()
            break
        case "clean":
            point.classList = "buttons"
            restarScreen()
            break
        case "point":
            checkEmpyList()
            for (i in numTemp){
                if (numTemp[i] === "."){
                    contador++
                }
            }
            if(contador === 0){
                text+="."
                if (numTemp === ""){
                    numTemp +="0"+e.target.textContent
                }else{
                    numTemp +=e.target.textContent
                }
                showInScreen()
                point.classList.toggle("blocked")
            }
            break
        case "op":
            const type = e.target.dataset.type
            
            if(addOp){
                point.classList = "buttons"
                addNumberToArray(numTemp)
                operat.push(type)
                text += operations[type]
                showInScreen()
            }
            addOp = false
            break
        case "equ":
            addNumberToArray(numTemp)
            numbers.forEach(element => {
                console.log(element)
            });            
            total = operateListNumbers(numbers, operat)
            text = total  
            screen.textContent = text                    
            break
        }
        
    }
})

function showInScreen(){
    screen.textContent = text
}

function cleanScreen(){
    screen.textContent = ""
}
function restarScreen(){
    addOp = false
    text = ""
    numTemp = ""
    numbers = []
    operat = []
    screen.textContent = "0"
}
function checkEmpyList(){
    if(numTemp === "" && text === ""){
        text = "0"
    }
}
function addNumberToArray(num){
    numbers.push(Number(num))
    numTemp = ""
    contador = 0
}
function addOperationToArray(op){

}
// Función para operar la lista de números
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
            operat = operat.filter(item => item !== undefined)
            num = num.filter(item => item !== undefined)
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
        console.log(total);
        
        return total
    }else{
        return (operateListNumbers(num, operat))
    }
}