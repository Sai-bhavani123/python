// 1.claaslist add and remove
// let div=document.querySelector("div");
// // div.style.backgroundColor="blue"
// div.style.width="200px"
// div.style.height="300px"
// div.style.border="2px solid black"
// div.className="NewClass"
// div.classList.add("sai1")
// div.classList.add("sai2")
// div.classList.add("sai3")


// // classlist.remove
// div.classList.remove ("sai1")
// console.log("div")


// 2.remove the text and add the text
// let div=document.querySelector("div");
// function add(){
//     div.innerText="hello there is div"
//     div.classList.add("bgColor")
// }

// function remove(){
//     div.classList.add("sai1")
//     div.classList.remove("bgColor")
// }

// 3.bg theme
// function themeToggler(){
//     document.body.classList.toggle("theme")
//     console.log(document.body)
//     if(document.body.classList.contains("theme")){
//         document.body.style.backgroundColor="black"
//         document.body.style.color="white"
//         modeIcon.innerText = "🌞";
//     }else{
//         modeIcon.innerText = "🌙";
//         document.body.style.color="black"
//         document.body.style.backgroundColor="white"

//     }
// }


// 4.events
// 1.onclick
// function changeText(){
//     document.querySelector("button").innerText="you clicked!";
// }

// 2.doubleclick
// function doubleClick(){
//     document.body.style.backgroundColor="aqua";
//     document.body.style.width="300px"
//     document.body.style.height="200px"
// }

// 3.on mouse enter
// function entereffect(){
//     document.getElementById("hoverbox").style.backgroundColor="lightgreen";
// }



// 4.on mouseleave
// function enterEffect() {
//     document.getElementById("leaveBox").style.backgroundColor = "lightgreen";
//   }
//   function leaveEffect() {
//     document.getElementById("leaveBox").style.backgroundColor = "lightgray";
//   }


// 5.on mousedown
// function showPress() {
//     document.querySelector("button").innerText = "Mouse Down!";
//   }



// muttiple events
// function doubleClick(){
//     document.body.style.backgroundColor="aqua";
// }
// function enterdisplayimage(){
//     let imgtag=document.createElement("img")
//     imgtag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_UuApyHfxcBNTchPlyxLD80fW9ogGGO4UCxpXLnjmjj-IOOCUBQdWNA&usqp=CAE&s"
//     imgtag.style.width="200px"
//     document.body.append(imgtag)
// }
// function leave(){
//     let imgtag=document.createElement("img")
//     imgtag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7chZmK6UuyxqwjW2UHUBACMGuVhiCRELqwDUw9KLfqoxW4fKhnQ-OA&s"
//     imgtag.style.width="200px"
//     document.body.append(imgtag)
// }


// keyboard events
// 1.keydown events:

// function keydown(event){
//     document.getElementById("text").innerHTML="key down result:--------"+event.key;

// }

// 2.oninput events:

// function oninput(event){
//     console.log(event)
//     document.getElementById("text").innerHTML="you have entered :--------"+event.target.value;
// }


// 3.keyup events:
// eex1
// function countCharacters(event) {
//     let length = event.target.value.length;
//     document.getElementById("charCount").innerText = `Character Count: ${length}`;
//   }
// eex2
// function countCharacters(event){
//     let length=event.target.value.length;
//     document.getElementById("textCount").innerText=`character count: ${length}`;
// }

// ex3
// function toUpperCaseText(event) {
//     let input = event.target;
//     input.value = input.value.toUpperCase(); // Convert text to uppercase
// }

