const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_box = document.querySelector(".option_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer_sec");
// these are all the required elements

// hopefully this will happen when my start button is clicked. a functioning button to take you to the next step
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// // for when my exit button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
};

// // if continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0); // calling for the showQuestions function
    queCounter(1); // passing 1 parameter to the queCounter
    startTimer(10); // calling the timer function
    startTimerline(0)// calling stl function
};

let timeValue = 10;
let que_count = 0;
let que_numb = 1;
let userScore;
let widthValue = 0;

const restart_quiz = quiz_box.querySelector(".buttons .restart");
const quit_quiz = quiz_box.querySelector(".buttons .quit");

// // if the restart button is clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // to show the quiz box
    result_box.classList.remove("activeResult"); // hide the result box
    timeValue = 10;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); // calling showQuestions function
    queCounter(que_numb); // passing the past function to the queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterline
    startTimer(timeValue); // calling startTimer function
    timeText.textContent = "Time Left"; // change the text for time left
     next_btn.classList.remove("show"); // hide the next button
    };

// // if the quit button is clicked
quit_quiz.onclick = () => {
    window.location.reload(); // for reloading the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// // if the next question button is clicked
next_btn.onclick = () => {
     if (que_count < questions.length - 1) {
        if the question count is less than the total lengthque_count++; // increment the question count value
        que_numb = que_count + 1; // increment the question number value
        showQuestions(que_numb); // calling showQuestions function
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterline
        startTimer(timeValue); // calling startTimer function
        startTimerLine(widthValue); // calling startTimerLine function
        timeText.textContent = "Time Left"; // change the time text to "Time Left"
        next_btn.classList.remove("show"); // hide the next button
    } else {
         clearInterval(counter); // clear counter
         clearInterval(counterLine); // clear counterline
         showResults(); // calling showResults function
        }
    };

// // making a new span and div tag for question and options and passing the value using an array
let que_tag = '<span>' + questions[index].numb +". " + questions[index].questions +"</span>";
let option_tag = '<div class="option"><span>' + questions[index].options[0] +"</span></div>" 
+ '<div class="option"><span>' +questions[index].options[1] +"</span></div>" 
+ '<div class="option"><span>' + questions[index].options[2] + "</span></div>" 
+ '<div class="option"><span>' + questions[index].options[3] + "</span></div>";
que_text.innerHTML = que_tag; // adding new span inside the que_text
option_list.innerHTML = option_tag; // adding new div inside the option_list

const options = option_list.querySelectorAll(".option");

// // setting the onclick attribute for all the available options
(var i=0; i < options.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");{

    }
}
