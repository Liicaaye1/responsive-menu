let iconButton = document.querySelector("#menuBtn")
let ulElement = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let closeButton= document.querySelector("#closeBtn")

iconButton.addEventListener("click", function(){
    ulElement.style.display = "flex"
    buttons.style.display = "block"
})
iconButton.addEventListener("click", function(){
    ulElement.style.display = "flex"
    buttons.style.display = "block"
    iconButton.style.display ="none"
    closeButton.style.display ="block"
})
closeButton.addEventListener("click" , function(){
    ulElement.style.display ="none"
    buttons.style.display= "none"
    iconButton.style.display="block"
    closeButton.style.display= "none"
})

