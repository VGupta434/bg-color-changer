const body = document.querySelector("body")

let colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach(button => { 
    let color = button.classList[2];
    button.addEventListener("click", () =>{changeColor(color)});
});


function changeColor(color)
{
    console.log("color: "+color);
    if(color != "default")
        body.style.backgroundColor = color;
    else
        body.style.backgroundColor = "white"
}