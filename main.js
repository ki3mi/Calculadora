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
            console.log(addOp);
            
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
            count = 0
            total = Number(numbers[count])
            for (op in operat){
                count ++              
                switch(operat[op]){
                    case "sum":
                        total = total + Number(numbers[count])                                         
                        break
                    case "sub":
                        total = total - Number(numbers[count])
                        break
                    case "pro":
                        // total = total * Number(numbers[count])
                        break
                    case "div":
                        // total = total / Number(numbers[count])
                        break
                }
            }
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
    numbers.push(num)
    numTemp = ""
    contador = 0
}
function addOperationToArray(op){

}
// function StringToOperation(text){
//     let numbers = []
//     let probNum
//     for (char in text){
        
//     }
// }

// Operaciones

// Suma
// function sumNumber(num1, num2){
//     return num1 + num2
// }
// // Resta
// function subNumber(num1, num2){
//     return num1 - num2
// }
// // Multiplicación
// function mulNumber(num1, num2){
//     return num1 * num2
// }
// // División
// function divNumber(num1, num2){
//     if (num2 === 0){
//         return "Error"
//     }else{
//         return num1 / num2
//     }
// }