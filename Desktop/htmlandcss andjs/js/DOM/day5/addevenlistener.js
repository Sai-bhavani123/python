// function step1(item,fun1){
//     alert(`your order is confirmed ${item}`)
//     setTimeout(()=>{
//         fun1()
//     },3000)
// }
// step1("Cloths",()=>{
// alert("your ship is confirmed")
// })


// without one by one (or)nested call back function
// setTimeout(()=>{
//     alert("you are order is success");
//     setTimeout(()=>{
//         alert("you are ordered shipped");   
//         setTimeout(()=>{
//             alert("you are ordered is placed at home")
//         },2000)
//     },4000)
// },2000)


// click me then change the colour
let click=document.getElementById("clickMe")
let redBtn=document.getElementById("red")
let yellowBtn=document.getElementById("yellow")
let purpleBtn=document.getElementById("purple")
let orangeBtn=document.getElementById("orange")


click.addEventListener("click",()=>{
    alert("you can click the colour")
})
redBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor=redBtn.textContent
    setTimeout(() => {
        document.body.style.backgroundColor=orangeBtn.textContent
    },2000);
})
yellowBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor=yellowBtn.textContent
})
purpleBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor=purpleBtn.textContent
})
orangeBtn.addEventListener("click",()=>{
    setTimeout(() => {
        document.body.style.backgroundColor=orangeBtn.textContent
    },2000);
})