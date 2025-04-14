// // const divElem=document.createElement("div")
// // divElem.textContent="hello33r"
// // divElem.style.color="white"
// // document.body.appendChild(divElem)
// // console.log(divElem)

// function colorHandler(color){
//     document.body.style.background=color
// }
// function createcircle(){
//     let circle=document.createElement("div")
//     circle.id="circle"
//     document.getElementById("container").appendChild(circle)
// }
// function createsquare(){
//     let square=document.createElement("div")
//     square.id="Square"
//     document.getElementById("container").appendChild(square)
// }
// function createrectangle(){
//     let rectangle=document.createElement("div")
//     rectangle.id="rectangle"
//     document.getElementById("container").appendChild(rectangle)
// }

function handle_traffic_signal(color){
    document.getElementById("red").style.background=color === "red"? "red":"gray"
    document.getElementById("green").style.background=color === "green"? "green":"gray"
    document.getElementById("orange").style.background=color === "orange"? "orange":"gray"
}

