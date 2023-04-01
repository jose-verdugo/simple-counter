//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";
//import your own components
// let seconds = 0
// let decenas = 0
// let centenas = 0

// let interval = setInterval(() =>{
//     if(seconds === 9){
//         decenas ++
//         seconds = -1
//       }
//        if(decenas === 9){
//         centenas ++
//         decenas = 0
//       }

//       if(decenas === 9){
//         clearInterval(interval)
//       }
//     seconds ++
//     ReactDOM.render(<SecondsCounter seconds = {seconds}  decenas = {decenas} centenas = {centenas}/>, document.querySelector("#app"));
// },100)



let seconds = 0
let decenas = 0
let centenas = 0
let millar = 0
let dMillar = 0
let cMillar = 0

let intervalId = setInterval(() =>{
    if(seconds === 9){
        decenas ++
        seconds = -1
    }else if(decenas === 9){
        centenas ++
        decenas = 0
    }else if(centenas === 9){
        millar ++
        centenas = 0
    }else if(millar === 9){
      dMillar ++
      millar = 0
    }else if(dMillar === 9){
      cMillar ++
      dMillar = 0
    }
    else if(cMillar === 9){
      clearInterval(intervalId)
    }
    seconds ++
    ReactDOM.render(<SecondsCounter seconds = {seconds}  decenas = {decenas} centenas = {centenas} millar = {millar} dMillar = {dMillar} cMillar = {cMillar}/>, document.querySelector("#app"));
},1000)
