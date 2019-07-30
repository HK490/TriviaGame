$(document).ready(function () {

    let question = $("p.question")
    let answer = $("p.answer")
    let answerTwo = $("p.answerB")
    let answerThree = $("p.answerC")
    let begin = $("p.start")
    let timer = $("p.timer")
    let number = 6;


    let intervalId;

    function start() {
        begin.append("<button>Start</button>")
    }
    start();

    begin.on("click", function () {
        begin.hide();

        function roundTwoQuestionA() {
            question.append("Phase Two Questions");
            answer.append("<p>1. Phase Two Answer</p>");
            answerTwo.append("<p>2. Phase Two Answer1</p>");
            answerThree.append("<p>3. Phase Two Answer3</p>");
        }

        function roundTwoQuestionC() {
            question.append("Phase Three Questions");
            answer.append("<p>1. Phase Three Answer</p>");
            answerTwo.append("<p>2. Phase Three Answer1</p>");
            answerThree.append("<p>3. Phase Three Answer3</p>");
        }


        function correctAnswerC() {
            roundOneD();
            question.append("<p>Correct Answer!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }

        function correctAnswerB() {
            roundOneC();
            question.append("<p>Correct Answer!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }


        function correctAnswerA() {
            roundOneB();
            question.append("<p>Correct Answer!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")

        }

        function wrongAnswer() {
            question.append("<p>Wrong Answer!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        function stop() {
            clearInterval(intervalId);
        }


        function roundOneA() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            number--;
            timer.text(number);
            if (number === 0) {
                stop();
                $("p").empty();
                wrongAnswer();
            }
        }



        let numberOne = 6
        function roundOneB() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementB, 1000);
        }
        function decrementB() {
            numberOne--;
            timer.text(numberOne);
            if (numberOne === 0) {
                stop()
                $("p").empty();
                roundTwoQuestionA();
                timerForQA();
            }
        }

        let numberThree = 6;
        function timerForQA() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            numberThree--;
            timer.text(numberThree);
            if (numberThree === 0) {
                stop();
                $("p").empty();
                wrongAnswer();
            }
        }

        let numberTwo = 6
        function roundOneC() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementC, 1000);
        }
        function decrementC() {
            numberTwo--;
            timer.text(numberTwo);
            if (numberTwo === 0) {
                stop()
                $("p").empty();
                roundTwoQuestionC();
                timerForQC();
            }
        }


        let numberFive = 6
        function timerForQC() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementE, 1000);
        }
        function decrementE() {
            numberFive--;
            timer.text(numberFive);
            if (numberFive === 0) {
                stop()
                $("p").empty();
                wrongAnswer();
            }
        }


        function result() {
            answer.append("Correct:")
            answerTwo.append("Incorrect:")
            answerThree.append("GAME OVER")
        }


        let numberFour = 6
        function roundOneD() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementD, 1000);
        }
        function decrementD() {
            numberFour--;
            timer.text(numberFour);
            if (numberFour === 0) {
                stop()
                $("p").empty();
                result();
            }
        }



        roundOneA();
        question.text("Question")
        answer.text("One")
        answerTwo.text("Two")
        answerThree.text("Three")
        answer.click(function () {
            stop();
            $("p").empty();
            correctAnswerA();
            answer.off('click').click(function () {
                stop();
                $("p").empty();
                correctAnswerB();
                answer.off('click').click(function () {
                    stop();
                    $("p").empty();
                    correctAnswerC();
                });
            });






            answerTwo.click(function () {
                alert("clicked 2")
                stop();

            });
            answerThree.click(function () {
                alert("clicked 3")
                stop();
            });



        });



    });
    //     let userPick = $(this).val();
    //     console.log(userPick)
    //     if (userPick === answer) {
    //         alert("if statement!")

    //         // stop();
    //         // $("p").empty();
    //         // correctAnswer();
    //     }
    //     // alert("clicked 2")
    //     // stop();
    //     // $("p").empty();
    // });


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
});
