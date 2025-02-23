const botones = document.getElementById("botones")
const screen = document.getElementById("screen")
botones.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
    screen.textContent += e.target.textContent
})