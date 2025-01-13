document.getElementById("changeButton").addEventListener("click" , function (){
  let pars = document.getElementById("myParagraph")
    pars.textContent = ("when we click button this will lode up")
})



document.getElementById("changeOrder").addEventListener("click" , function(){
     let newO = document.getElementById("coffeeType")
     newO.textContent = ("Your order in deleted from our System `$ refund initiated`")
     newO.style.backgroundColor = "red"
     newO.style.fontSize = "50px"
})