let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"))


buttons.map( button =>{
    button.addEventListener("click", (event) =>{
        switch(event.target.innerText){
            case "C":
                display.innerText =""
                break
            case "←":
                if(display.innnerText){
                    display.innerText = display.innerText.slice(0,-1)
                }
                break
            case  "="  :
                try{
                    display.innerText = eval(display.innerText)
                } catch{
                    display.innerText ="Error!"
                }
                
                break;
                case "&#8730": //Square root
                    display.innerText = Math.sqrt(parseFloat(display.innerText))
                    break
                case "%":
                    display.innerText = parseFloat(display.innerText) / 100
                    break;
            default:
                display.innerText += event.target.innerText
        }
    })
})