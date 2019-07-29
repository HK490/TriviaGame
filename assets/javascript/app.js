$(document).ready(function () {

    let question = $("p.question")
    let answer = $("p.answer")
    let answerTwo = $("p.answerB")
    let answerThree = $("p.answerC")
    let begin = $("p.start")
    let timer = $("p.timer")
    let number = 11;
    let intervalId;

    let roundOne = [
        {
            question: "Question?",
            choiceOne: ["One", "Two", "Three"]
        },
        {
            questionTwo: "Question 2?",
            choiceTwo: ["one", "two", "three"]
        },
        {
            questionThree: "Question 3?",
            choiceThree: ["one", "two", "three"]
        }
    ]

    let roundTwo = [
        {
            question: "Question?",
            choice: ["One", "Two", "Three"]
        },
        {
            questionTwo: "Question 2?",
            choice: ["one", "two", "three"]
        },
        {
            questionThree: "Question 3?",
            choice: ["one", "two", "three"]
        }
    ]

    let roundThree = [
        {
            question: "Question?",
            choice: ["1", "2", "3"]
        },
        {
            questionTwo: "Question 2?",
            choice: ["one", "two", "three"]
        },
        {
            questionThree: "Question 3?",
            choice: ["one", "two", "three"]
        }
    ]




    function start() {
        begin.append("<button>Start</button>")
    }
    start();

    begin.on("click", function () {
        begin.hide();
        for (let i=0; i<roundOne.length;i++) {
        answer.append(roundOne[i].question)
        answerTwo.append("<p>" + roundOne[i].choiceOne[0] + "</p>")
        answerTwo.append("<p>" + roundOne[i].choiceOne[1] + "</p>")
        answerTwo.append("<p>" + roundOne[i].choiceOne[2] + "</p>")
        }
    });


    

});
    // begin.on("click", function () {
    //     begin.hide();
    //     roundOneA();
    //     roundOneQuestionA();
    //     answer.click(function () {
    //         stop();
    //         $("p").empty();
    //         wrongAnswer();
    //         setTimeout(function () {
    //             $("p").empty();
    //             roundTwoA();

    //         }, 5000);
    //     });



    //     answerTwo.click(function () {
    //         $("p").empty();

    //     });
    //     answerThree.click(function () {
    //         $("p").empty();

    //     });
    // });



    // function roundOneQuestionA() {
    //     question.append("question 1");
    //     answer.append("<p>1. Answer</p>")
    //     answerTwo.append("<p>2. Answer1</p>")
    //     answerThree.append("<p>3. Answer3</p>")
    // }








    // function wrongAnswer() {
    //     question.append("<p>Wrong Answer!</p>")
    //     question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
    // }
    // function stop() {
    //     clearInterval(intervalId);
    // }
    // function roundOneA() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }
    // function decrement() {
    //     number--;
    //     timer.text(number);
    //     if (number === 0) {
    //         stop();
    //         $("p").empty();
    //         wrongAnswer();
    //     }
    // }




















    // function roundTwoQuestionA() {
    //     question.append("Phase Two Questions");
    //     answer.append("<p>1. Phase Two Answer</p>");
    //     answerTwo.append("<p>2. Phase Two Answer1</p>");
    //     answerThree.append("<p>3. Phase Two Answer3</p>");
    // }

    // function roundTwoA() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrementTwo, 1000);
    //     roundTwoQuestionA();
    // }
    // function decrementTwo() {
    //     number--;
    //     timer.text(number);
    //     if (number === 0) {
    //         stop();
    //         $("p").empty();
    //         wrongAnswer();
    //     }
    //}

