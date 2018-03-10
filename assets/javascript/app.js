// creates a function with the timer
$("#questions").hide();
var number = 30;
var right = 0;
var wrong = 0;
var counter;
$("#start").on("click", start)
$("#submit").on("click", submit);
$("#restart").on("click", restart);

function start() {
    counter = setInterval(timer, 1000)
    $("#questions").show();
}

function timer() {
    number--;
    $("#timer").html(number);
    if (number === 0) {
        alert("Time's Up!");
        stop();
        submit()
    }
}
function stop() {
    clearInterval(counter);
}
function submit() {
    stop();
    answerCheck();
    alert("Correct: " + right);
    alert("Incorrect: " + wrong);
    restart();
}

function restart() {
    stop();
    number = 30;
    $(".answer").prop("checked", false);
    right = 0;
    wrong = 0
    $("#questions").hide();
    $("#timer").html(number);
    
}

function answerCheck() {
    if ($("#q1a").prop("checked")) {
        right++;
    } else if ($("#q1b").prop("checked") || $("#q1c").prop("checked") || $("#q1d").prop("checked")) {
        wrong++;
    } else if ($("#q1a").prop("checked", false) && $("#q1b").prop("checked", false) && $("#q1c").prop("checked", false) && $("#q1d").prop("checked", false)) {
        wrong++;
    };
    if ($("#q2c").prop("checked")) {
        right++;
    } else if ($("#q2b").prop("checked") || $("#q2a").prop("checked") || $("#q2d").prop("checked")) {
        wrong++
    } else if ($("#q2a").prop("checked", false) && $("#q2b").prop("checked", false) && $("#q2c").prop("checked", false) && $("#q2d").prop("checked", false)) {
        wrong++;
    };
    if ($("#q3d").prop("checked")) {
        right++;
    } else if ($("#q3b").prop("checked") || $("#q3c").prop("checked") || $("#q3a").prop("checked")) {
        wrong++
    } else if ($("#q3a").prop("checked", false) && $("#q3b").prop("checked", false) && $("#q3c").prop("checked", false) && $("#q3d").prop("checked", false)) {
        wrong++;
    };
    if ($("#q4a").prop("checked")) {
        right++;
    } else if ($("#q4b").prop("checked") || $("#q4c").prop("checked") || $("#q4d").prop("checked")) {
        wrong++
    } else if ($("#q4a").prop("checked", false) && $("#q4b").prop("checked", false) && $("#q4c").prop("checked", false) && $("#q4d").prop("checked", false)) {
        wrong++;
    };
    if ($("#q5b").prop("checked")) {
        right++;
    } else if ($("#q5a").prop("checked") || $("#q5c").prop("checked") || $("#q5d").prop("checked")) {
        wrong++
    } else if ($("#q5a").prop("checked", false) && $("#q5b").prop("checked", false) && $("#q5c").prop("checked", false) && $("#q5d").prop("checked", false)) {
        wrong++;
    };
}



// on click event to run the function with the timer

// if statement for when the timer runs out. 

// on click event for if they finish to end the timer. 


// if statements for each question. if correct answer is selected
// mark as correct. else mark as wrong. correct++ or wrong++

// send an alert with the number correct and incorrect