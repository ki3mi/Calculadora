const botones = document.getElementById("botones")
const screen = document.getElementById("screen")
const point = document.getElementById("point")

let text = ""
let numTemp = ""
let numbers = []
let contador = 0
restarScreen()

botones.addEventListener("click", (e)=>{    
    if(e.target.className == "buttons"){    
        switch(e.target.dataset.btn){
        case "num":
            text += e.target.textContent
            numTemp = text
            screen.textContent = text
            break
        case "clean":
            point.classList.toggle("blocked")
            restarScreen()
            break
        case "point":
            if (numTemp === ""){
                text = "0"
            }
            for (i in numTemp){
                if (numTemp[i] === "."){
                    contador++
                }
            }
            if(contador === 0){
                text+="."
                numTemp = text
                screen.textContent = text
                point.classList.toggle("blocked")
            }
            break
        }
        
    }
})

function cleanScreen(){
    screen.textContent = ""
}
function restarScreen(){
    text = ""
    numTemp = ""
    screen.textContent = "0"
}