var sportQuiz = [
    {
        question: "Q1: Boxing matches are held in a boxing ",
        answers: {
            a: "square",
            b: "ring",
            c: "court"
        },
        trueAnswer:"b"
    },
    {
        question: "Q2: The multiple Olympic-medal winning runner Usain Bolt was born in ",
        answers: {
            a: "England",
            b: "Jamaica",
            c: "the USA"
        },
        trueAnswer:"b"
    },
    {
        question: "Q3: Which sport did Australia's Sir Donald Bradman play? ",
        answers: {
            a: "cricket",
            b: "golf",
            c: "tennis"
        },
        trueAnswer:"a"
    },
    {
        question: "Q4: Michael Jordan spent most of his career playing for the ",
        answers: {
            a: "Chicago Bulls",
            b: "San Antonio Spurs",
            c: "LA Lakers"
        },
        trueAnswer:"a"
    },
    {
        question: "Q5: In tennis, a serve that goes out or doesn't get over the net is called",
        answers: {
            a: "an ace",
            b: "a let",
            c: "a fault"
        },
        trueAnswer:"c"
    }
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var geographyQuiz = [
    {
        question: "Q1: In which country is Mount Everest? ",
        answers: {
            a: "Thailande",
            b: "Philippines",
            c: "Nepal"
        },
        trueAnswer:"c"
    },
    {
        question: "Q2: Which continent has the biggest population? ",
        answers: {
            a: "Asia",
            b: "Africa",
            c: "USA"
        },
        trueAnswer:"a"
    },
    {
        question: "Q3: What is the capital city of New Zealand? ",
        answers: {
            a: "Yamoussoukro",
            b: "Juba",
            c: "Wellington"
        },
        trueAnswer:"c"
    },
    {
        question: "Q4: On which continent is the Sahara desert? ",
        answers: {
            a: "Asia",
            b: "Africa",
            c: "USA"
        },
        trueAnswer:"b"
    },
    {
        question: "Q5: Name the two longest rivers in the world.",
        answers: {
            a: "Amazon/Mississippi",
            b: "Nile/Yangtze",
            c: "Amazon/Nile"
        },
        trueAnswer:"c"
    },
    {
        question: "Q5: Name the two longest rivers in the world.",
        answers: {
            a: "Amazon/Mississippi",
            b: "Nile/Yangtze",
            c: "Amazon/Nile"
        },
        trueAnswer:"c"
    }
]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var scienceQuiz = [
    {
        question: "Q1: Which planet is the fifth from the sun? ",
        answers: {
            a: "Venus",
            b: "Jupiter",
            c: "Saturn"
        },
        trueAnswer:"b"
    },
    {
        question: "Q2: Who developed the theory of relativity? ",
        answers: {
            a: "Isaac Newton",
            b: "Galileo",
            c: "Albert Einstein"
        },
        trueAnswer:"c"
    },
    {
        question: "Q3: Which chemical element is represented by the symbol N ",
        answers: {
            a: "Neon",
            b: "Nitrogen",
            c: "Nickel"
        },
        trueAnswer:"b"
    },
    {
        question: "Q4: In which organelle of a living cell is DNA found? ",
        answers: {
            a: "Nucleus",
            b: "Mitochondria",
            c: "Cell Membrane"
        },
        trueAnswer:"a"
    },
    {
        question: "Q5: Which travel faster, light or sound waves?",
        answers: {
            a: "Light waves",
            b: "Sound waves",
            c: "Both of them"
        },
        trueAnswer:"a"
    },
    {
        question: "Q5: Which travel faster, light or sound waves?",
        answers: {
            a: "Light waves",
            b: "Sound waves",
            c: "Both of them"
        },
        trueAnswer:"a"
    }
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// store the user name and show an alert
var storeUser = ""
$ ("#start").on("click",function(){
    storeUser = $("#userName").val()
    
    alert("Welcome to the quiz, "+storeUser)
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//to make the first questions and answers and hide the submit button to show her later

$("#question").text(sportQuiz[0].question)
$("#label-answ1").text(sportQuiz[0].answers.a)
$("#label-answ2").text(sportQuiz[0].answers.b)
$("#label-answ3").text(sportQuiz[0].answers.c)
$("#sub").hide()

$("#geo-question").text(geographyQuiz[0].question)
$("#label-geo-answ1").text(geographyQuiz[0].answers.a)
$("#label-geo-answ2").text(geographyQuiz[0].answers.b)
$("#label-geo-answ3").text(geographyQuiz[0].answers.c)
$("#geo-sub").hide()

$("#sc-question").text(scienceQuiz[0].question)
$("#label-sc-answ1").text(scienceQuiz[0].answers.a)
$("#label-sc-answ2").text(scienceQuiz[0].answers.b)
$("#label-sc-answ3").text(scienceQuiz[0].answers.c)
$("#sc-sub").hide()
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var indexQ = 1 //to loop for questions and result
var index = 0 //to loop for true answers
var result = 0 //to store result

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SPORT
// this button to affiche questions with his answers by looping in data , calculat the result of pts by showing a message of each action 
$("#nxt").on("click",function(){    
$("#question").text(sportQuiz[indexQ].question)
$("#label-answ1").text(sportQuiz[indexQ].answers.a)
$("#label-answ2").text(sportQuiz[indexQ].answers.b)
$("#label-answ3").text(sportQuiz[indexQ].answers.c)
        var radioValue = $(".butRad:checked").val();
        if(radioValue === sportQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== sportQuiz[index].trueAnswer){
            result -= 3
            
            alert("Wrong answer! you lost 3 pts")
        }
$(".butRad").prop('checked', false)

index++
indexQ++
  //show the submit button and hide the next button at last question, and make the submit button to calculat resulte also  
if(index === 4 && indexQ === 5){
    $("#sub").show().on("click",function(){
        var radioValue = $(".butRad:checked").val();
        if(radioValue === sportQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== sportQuiz[index].trueAnswer){
            result -= 3
            
            alert("Wrong answer! you lost 3 pts")
        }
$(".butRad").prop('checked', false)

index++
indexQ++
alert("Your score is "+result+" pts.")   
    })
    $("#nxt").hide()
}
})
//////////////////////////////////////////////////////////////////////////////////////////////////////

// geography

// this button to affiche questions with his answers by looping in data , calculat the result of pts by showing a message of each action 
$("#geo-nxt").on("click",function(){    
$("#geo-question").text(geographyQuiz[indexQ].question)
$("#label-geo-answ1").text(geographyQuiz[indexQ].answers.a)
$("#label-geo-answ2").text(geographyQuiz[indexQ].answers.b)
$("#label-geo-answ3").text(geographyQuiz[indexQ].answers.c)
        var radioValue = $(".geo-butRad:checked").val();
        if(radioValue === geographyQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== geographyQuiz[index].trueAnswer){
            result -= 3
            alert("Wrong answer! you lost 3 pts")
        }
$(".geo-butRad").prop('checked', false)

index++
indexQ++

//show the submit button and hide the next button at last question, and make the submit button to calculat resulte also  
if(index === 4 && indexQ === 5){
    $("#geo-sub").show().on("click",function(){
        var radioValue = $(".geo-butRad:checked").val();
        if(radioValue === geographyQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== geographyQuiz[index].trueAnswer){
            result -= 3
            alert("Wrong answer! you lost 3 pts")
        }
$(".geo-butRad").prop('checked', false)

index++
indexQ++   
alert("Your score is "+result+" pts.")   
    })
    $("#geo-nxt").hide()
}
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SCIENCE

// this button to affiche questions with his answers by looping in data , calculat the result of pts by showing a message of each action 
$("#sc-nxt").on("click",function(){      
$("#sc-question").text(scienceQuiz[indexQ].question)
$("#label-sc-answ1").text(scienceQuiz[indexQ].answers.a)
$("#label-sc-answ2").text(scienceQuiz[indexQ].answers.b)
$("#label-sc-answ3").text(scienceQuiz[indexQ].answers.c)
        var radioValue = $(".sc-butRad:checked").val();
        if(radioValue === scienceQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== scienceQuiz[index].trueAnswer){
            result -= 3
            alert("Wrong answer! you lost 3 pts")
        }

$(".sc-butRad:checked").prop('checked', false)

index++
indexQ++

//show the submit button and hide the next button at last question, and make the submit button to calculat resulte also  
if(index === 4 && indexQ === 5){
    $("#sc-sub").show().on("click",function(){
        var radioValue = $(".sc-butRad:checked").val();
        if(radioValue === scienceQuiz[index].trueAnswer){
            result += 5
            alert("Good answer! you win 5 pts");
        }
        if(radioValue !== scienceQuiz[index].trueAnswer){
            result -= 3
            alert("Wrong answer! you lost 3 pts")
        }

$(".sc-butRad:checked").prop('checked', false)

index++
indexQ++
alert("Your score is "+result+" pts.")
    })
    $("#sc-nxt").hide()
}
})
//////////////////////////////////////////////////////////////////////////////////////
   
    $("#title-res").text("You are finished your test. Press play again to re-play")
    
   
    //reset and re-game 
$("#reset").on("click",function(){
indexQ = 1
index = 0
result = 0
})


