let currentDate = new Date().toLocaleDateString(
    "en-GB"
);

let dateContainer = document.getElementById("date-con");

dateContainer.innerHTML=`Date:${currentDate}`

let nameContainer = document.getElementById("dearName");
let correctCount = Number(sessionStorage.getItem("correct-count"));
let sorry = document.getElementById("sorry"); 
let sadFace = document.getElementById("sadFace"); 
let trophy = document.getElementById("trophy"); 
let congratulation = document.getElementById("congratulation"); 
let score = document.getElementById("score"); 
let whyPassOrFail = document.getElementById("whyPassOrFail"); 

let percent =Math.floor( correctCount*14.28571428571429);
if (percent < 70) {
    trophy.style.display="none";
    congratulation.style.display="none";
    score.innerHTML=`${percent}%`;
    youPassed.innerText="You have passed the HTML quiz";
} else {
    sorry.style.display="none";
    sadFace.style.display="none";
    score.innerHTML=`${percent}%`;
    whyFailed.innerText="This is less than the required passing percentage of 70";
}

    try {
        nameContainer.innerHTML=`Dear ${ sessionStorage.getItem("name")}`
    
       } catch (error) {
        console.log(error)
       }

       if(sessionStorage.getItem("name") == null){
        nameContainer.style.display="none";}