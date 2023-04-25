// function abc() {
//     console.log(arguments[0])
//     console.log(xyz)
//     console.log(b)
// }

// abc('ghous',757,true)

// function abc(a) {
 
//     console.log("ghous")
// }

// function xyz() {
//     console.log("ahmed")
// }
// xyz()
// abc(xyz)


// function foo(){

// }


// console.log(foo())



// var min = 2;
// var sec = 5;
// var timer;

// function abc(){
//     var beep = document.getElementById("beep");
//     beep.autoplay = true;
//     beep.load()
//     beep.addEventListener("load", function() {
//         console.log("jhgghg")
//         beep.play();
//     }, true);
//     beep.src = source;

//     console.log(min + ":" + sec--);
//     if(sec < 1){
//         sec = 5;
//         min--
//     }
//     if(min < 1){
//         clearInterval(timer)
//         console.log("time over")
//         beep.play()
//     }
// }
// timer = setInterval(abc,1000)

// function resetTimer(){
//     clearInterval(timer);
//     min = 5;
//     sec = 10
//     console.log(min + ":" + sec);
// }

// function foo(){
//     console.log("hh")
// }

// setTimeout(foo,3000)

// var input = document.querySelector('input').innerHTML=input;
// function insertNumber(number) {
//   input.value += number;
// }

// function insertOperator() {
//    if (display === "AC"){
//   display.value = '';
// } else {
//     display.value = display.value.slice(0,0);
// }
// }
// function deleteLastValue(){
//   if (display === "C"){
//       display.value = '';
//   } else {
//       display.value = display.value.slice(0,-1);
//   }
// }
// function oprator(value){
//   // display.value += value;
//   display.value += value;
//   display.disabled = true;
//   }function callcu(){
//       display.value = eval(display.value);
//   }


var display = document.querySelector("#input").innerHTML=input;
function buttonsFunction(value){
    display.value += value;
}
function button1(){
    if (display === "AC"){
        display.value = '';
    } else {
        display.value = display.value.slice(0,0);
    }
}
function deleteLastValue(){
    if (display === "C"){
        display.value = '';
    } else {
        display.value = display.value.slice(0,-1);
    }
}


function oprator(value){
    // display.value += value;
    display.value += value;
    display.disabled = true;
    }function callcu(){
        display.value = eval(display.value);
    }