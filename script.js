var zero_btn = document.getElementById("0-btn")
var one_btn = document.getElementById("1-btn")
var two_btn = document.getElementById("2-btn")
var three_btn = document.getElementById("3-btn")
var four_btn = document.getElementById("4-btn")
var five_btn = document.getElementById("5-btn")
var six_btn = document.getElementById("6-btn")
var seven_btn = document.getElementById("7-btn")
var eight_btn = document.getElementById("8-btn")
var nine_btn = document.getElementById("9-btn")
var plus_btn = document.getElementById("plus-btn")
var minus_btn = document.getElementById("minus-btn")
var mul_btn = document.getElementById("mul-btn")
var divide_btn = document.getElementById("divide-btn")
var equal_btn = document.getElementById("equal-btn")
var clear_btn = document.getElementById("clear-btn")

var input = document.getElementById("input")
var backspace = document.getElementById("back-space")
var char = document.getElementById("char")

var value1=null



zero_btn.addEventListener("click",()=>{
    input.value+=0

}) 

one_btn.addEventListener("click",()=>{
    input.value+=1
    
})

two_btn.addEventListener("click",()=>{
    input.value+=2
    
})

three_btn.addEventListener("click",()=>{
    input.value+=3
    
})

four_btn.addEventListener("click",()=>{
    input.value+=4
    
})

five_btn.addEventListener("click",()=>{
    input.value+=5
    
})

six_btn.addEventListener("click",()=>{
    input.value+=6
    
})

seven_btn.addEventListener("click",()=>{
    input.value+=7
})

eight_btn.addEventListener("click",()=>{
    input.value+=8
})

nine_btn.addEventListener("click",()=>{
    input.value+=9
})

plus_btn.addEventListener("click",()=>{
    char.innerHTML="+"
    value1=input.value
    input.value=""
   

    
})

minus_btn.addEventListener("click",()=>{
    char.innerHTML="-"
    value1=input.value
    input.value=""
    
})

mul_btn.addEventListener("click",()=>{
    char.innerHTML="x"
    value1=input.value
    input.value=""
    
})

divide_btn.addEventListener("click",()=>{
    char.innerHTML="/"
    value1=input.value
    input.value=""
    
})

equal_btn.addEventListener("click",()=>{

    var value2=input.value
    
    if(char.innerHTML=="+"){
     input.value=parseInt(value1)+parseInt(value2)
    }
    else if(char.innerHTML=="-"){
        input.value=parseInt(value1)-parseInt(value2)
    }
    else if(char.innerHTML=="x"){
        input.value=parseInt(value1)*parseInt(value2)
    }
    else if(char.innerHTML=="/"){
        input.value=parseInt(value1)/parseInt(value2)
    }

    
})

clear_btn.addEventListener("click",()=>{
    input.value=""
    
})

backspace.addEventListener("click",()=>{

    var value = input.value.toString()
    value = value.substring(0,input.value.length-1)
    input.value = value
    
})