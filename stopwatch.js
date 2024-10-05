let hrs = document.querySelector("#hours")
let mins = document.querySelector("#mins")
let secs = document.querySelector("#seconds")

let secCtr = 0
function updateSecs(){
    secCtr++;
    if(secCtr == 60){
        secCtr = 0
    }
    secs.innerText = secCtr
    console.log("Seconds =",secCtr)
}

let minCtr = 0
function updateMins(){
    minCtr++;
    if(minCtr == 60){
        minCtr = 0
    }
    mins.innerText = minCtr
    console.log("Minutes =",minCtr)
}

let hrCtr = 0
function updateHours(){
    hrCtr++;
    if(hrCtr == 60){
        hrCtr = 0
    }
    hrs.innerText = hrCtr
    console.log("Hours =",hrCtr)
}

setInterval(updateSecs,1000)
setInterval(updateMins,60000)
setInterval(updateHours,3600000)