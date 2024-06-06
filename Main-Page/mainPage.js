// Not For Adani  eg.Vallabh,etc.
// timer logic
let seconds = 0;
let minutes = 0;
let hours = 0;

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateTimer() {
    // Increment the timer by one second
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format the time as hh:mm:ss
    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Update the timer display
    document.getElementById('timer').textContent = timeString;
}

// Call the updateTimer function every second
setInterval(updateTimer, 1000);

let userName = sessionStorage.getItem("name");
console.log(userName)
let name_con = document.getElementById("name-con");
try {
    name_con.innerHTML = userName.toUpperCase();
} catch {
    console.log("Name is not defined")
}



var questionsInfo = [
    {
        questionNo: 1,
        question: "Q1. What does HTML stand for ?",
        option1: "Hyper Text Markup Language",
        option2: "HyperLinks and Text Markup Language",
        option3: "Home Tool Markup Language",
        option4: "HyperLink Markup Language",
        ans: "Hyper Text Markup Language"
    },
    {
        questionNo: 2,
        question: "Q2. The Bootstrap grid system is based on how many columns ?",
        option1: 6,
        option2: 9,
        option3: 12,
        option4: 3,
        ans: 12
    },
    {
        questionNo: 3,
        question: "Q3. What does CSS stand for ?",
        option1: "Colorful Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Creative Style Sheets",
        option4: "Computer Style Sheets",
        ans: "Cascading Style Sheets"
    },
    {
        questionNo: 4,
        question: "Q4. Which property is used to change the background color ?",
        option1: "bgcolor",
        option2: "color",
        option3: "background-color",
        option4: "text-align",
        ans: "background-color"
    },
    {
        questionNo: 5,
        question: "Q5. Javasctipt is the same as Java ?",
        option1: "True",
        option2: "False",
        option3: "Both Of Above",
        option4: "None Of These",
        ans: "False"
    },
    {
        questionNo: 6,
        question: "Q6. Which event occurs when the user clicks on an HTML element ?",
        option1: "onchange",
        option2: "onmouseclick",
        option3: "onmouseover",
        option4: "onclick",
        ans: "onclick"
    },
    {
        questionNo: 7,
        question: "Q7. Is JavaScript case-sensitive ?",
        option1: "True",
        option2: "False",
        option3: "Both Of Above",
        option4: "None Of These",
        ans: "True"
    }
]


var options = document.getElementsByName("option");
var submitBtn = document.getElementById("submitBtn");
var continueBtn = document.getElementById("continueBtn");
function enableBtn() {

    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#0ca2fd";
    submitBtn.style.border = "#0ca2fd";
    submitBtn.style.color = "white";
    submitBtn.style.borderRadius = "0px";
    // Set Blue background on selection
for (let i = 0; i < options.length; i++) {
    options[i].nextElementSibling.classList.remove("selectAnswer");
    if(options[i].checked){
        options[i].nextElementSibling.classList.add("selectAnswer");
        
    }
    
}

}

var no = 0;
var question = document.getElementById("question");
var opt1 = document.getElementById("l1");
var opt2 = document.getElementById("l2");
var opt3 = document.getElementById("l3");
var opt4 = document.getElementById("l4");
var ques_no = document.getElementById("ques-no");
var correct_count = document.getElementById("no-correct-count");

sessionStorage.setItem("no", 0)
sessionStorage.setItem("correct-count", 0)
let getCorrectCount = sessionStorage.getItem("correct-count");
let getNo = sessionStorage.getItem("no")

opt1.innerHTML = questionsInfo[sessionStorage.getItem("no")].option1;
opt1.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option1;

opt2.innerHTML = questionsInfo[sessionStorage.getItem("no")].option2;
opt2.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option2;

opt3.innerHTML = questionsInfo[sessionStorage.getItem("no")].option3;
opt3.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option3;

opt4.innerHTML = questionsInfo[sessionStorage.getItem("no")].option4;
opt4.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option4;

ques_no.innerHTML = questionsInfo[sessionStorage.getItem("no")].questionNo;
question.innerHTML = questionsInfo[sessionStorage.getItem("no")].question;
correct_count.innerHTML = sessionStorage.getItem("correct-count");


function submitYourAnswer() {
    if(sessionStorage.getItem("no") >= 6){
        continueBtn.textContent="";
        continueBtn.textContent="FINISH"; 
    }
    submitBtn.style.display = "none"
    continueBtn.style.display = "inline-block";
    for (i = 0; i < options.length; i++) {

     
            options[i].removeAttribute("onclick");
        
        
        // Set Green background for correct answer 
        if (options[i].value == questionsInfo[sessionStorage.getItem("no")].ans) {
           options[i].nextElementSibling.classList.add("correctAnswer");

        }
        // Set Red background for wrong answer 
        if (options[i].checked) {
            if (options[i].value !== questionsInfo[sessionStorage.getItem("no")].ans) {
                options[i].nextElementSibling.classList.add("incorrectAnswer");

            } else {
                sessionStorage.setItem("correct-count", Number(sessionStorage.getItem("correct-count")) + 1)

                opt1.innerHTML = questionsInfo[sessionStorage.getItem("no")].option1;
                opt1.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option1;

                opt2.innerHTML = questionsInfo[sessionStorage.getItem("no")].option2;
                opt2.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option2;

                opt3.innerHTML = questionsInfo[sessionStorage.getItem("no")].option3;
                opt3.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option3;

                opt4.innerHTML = questionsInfo[sessionStorage.getItem("no")].option4;
                opt4.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option4;

                ques_no.innerHTML = questionsInfo[sessionStorage.getItem("no")].questionNo;
                question.innerHTML = questionsInfo[sessionStorage.getItem("no")].question;
                correct_count.innerHTML = sessionStorage.getItem("correct-count");
            }
        }

    }



}

function continueToNextQuestion() {    
    for (i = 0; i < options.length; i++) {
    options[i].setAttribute("onclick" , "enableBtn()");

    }
  console.log(sessionStorage.getItem("no"))
    if(sessionStorage.getItem("no") >= 6){
        window.location.href = "../End-Page/endPage.html";
    }else{
        try {
            sessionStorage.setItem("no", Number(sessionStorage.getItem("no")) + 1)
            console.log(sessionStorage.getItem("no"))
          } catch (error) {
            console.log(error)
          }
        
            opt1.innerHTML = questionsInfo[sessionStorage.getItem("no")].option1;
            opt1.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option1;
        
            opt2.innerHTML = questionsInfo[sessionStorage.getItem("no")].option2;
            opt2.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option2;
        
            opt3.innerHTML = questionsInfo[sessionStorage.getItem("no")].option3;
            opt3.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option3;
        
            opt4.innerHTML = questionsInfo[sessionStorage.getItem("no")].option4;
            opt4.previousElementSibling.value = questionsInfo[sessionStorage.getItem("no")].option4;
        
            ques_no.innerHTML = questionsInfo[sessionStorage.getItem("no")].questionNo;
            question.innerHTML = questionsInfo[sessionStorage.getItem("no")].question;
            correct_count.innerHTML = sessionStorage.getItem("correct-count");
        
            submitBtn.disabled = true
            submitBtn.style.fontSize = "20px"
            submitBtn.style.fontFamily = "Arial";
            submitBtn.style.marginTop = "3%";
            submitBtn.style.padding = "0.5%";
            submitBtn.style.paddingLeft = "1%";
            submitBtn.style.paddingRight = "1%";
            submitBtn.style.color = "black";
            submitBtn.style.display = "inline-block";
            submitBtn.style.backgroundColor = "#d9d9d9";
            submitBtn.style.border = "2px solid black";
            submitBtn.style.borderRadius = "5px";
            submitBtn.style.marginLeft = "8%";
            submitBtn.style.marginBottom = "47px";
            continueBtn.style.display = "none";
            submitBtn.style = "none";
            for (let i = 0; i < options.length; i++) {
                options[i].nextElementSibling.classList.remove("selectAnswer");
                options[i].nextElementSibling.classList.remove("correctAnswer");
                options[i].nextElementSibling.classList.remove("incorrectAnswer");
            }
        
    }
   
}


