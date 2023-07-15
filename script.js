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
const timeCount= document.querySelector(".timer .timer_sec");
// these are all the required elements

// hopefully this will happen when my start button is clicked. a functioning button to take you to the next step
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

// for when my exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

// if contine button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hid the info box
    quiz_box.classList.add("activeQuiz");   // show the quiz box
    showQuestions(0);    // calling for the Showmequestons function
    queCounter(1);    // passing 1 parameter to the queCounter
    startTimer(10);     // calling out for the timer function
}

let timeValue = 10;
let que_count = 0;
let que_numb = 1;
let userScore;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// for is the restart button is clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");     // to show the quiz box
    result_box.classList.remove("activeResult");    // hide the result box
    timeValue = 10;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count);    // calling on the showquestions function
    queCounter(que_numb);    // passing on the past function to the quecounter
    clearInterval(counter);   // clear counter
    clearInterval(counterLine);    // clear counterline
    startTimer(timeValue); //calling on starttimer function
    timeText.textContent = "Time Left";    // change tge text for time left
    next_button.classList.remove("show"); // hide the next button
}

// for when the quit button is clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); // for reloading the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que")

// if the next que button is clicked
next_btn.onclick = ()=>{
    if (que_count < questions.length - 1){ //if question is less then the total length
        que_count++; //increment the que_count value
        que_numb+que_count; //incremnt the quenumb value
        showQuestions(que_numb); //calling showwues function
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterline
        startTimer(timeValue); //calling on startertime function
        startTimer(widthValue); //calling on starttimerline function
        textText.textContent = "Time Left"; //change the timetext to time lft
        next_btn.classList.remove("show"); //hide the nxt button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine) //clear counterline
        showResults(); //calling on showresults function
    }
}

// making a new span and div tag for ques and option and passing the value using array 
let que_tag = '<span>' + questions[index].numb + ". " + questions[index].questions + '</span>';
let option_tag = '<div class="option"><span>' + questions[index].options[0] 
+ '</span></div>' +'<div class="option"><span>' + questions[index].options[1]  +'<span></div>'
+ '</span></div>' +'<div class="option"><span>' + questions[index].options[2]  +'<span></div>'
+ '</span></div>' +'<div class="option"><span>' + questions[index].options[3]  +'<span></div>';
