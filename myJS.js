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
    },
    {
        question: "Q5: In tennis, a serve that goes out or doesn't get over the net is called",
        answers: {
            a: "an ace",
            b: "a let",
            c: "a fault"
        },
        trueAnswer:"c"
    },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var geographyQuiz = [
    {
        question: "Q1: In which country is Mount Everest? ",
        answers: {
            a: "",
            b: "",
            c: "Nepal"
        },
        trueAnswer:"c"
    },
    {
        question: "Q2: Which continent has the biggest population? ",
        answers: {
            a: "Asia",
            b: "",
            c: ""
        },
        trueAnswer:"a"
    },
    {
        question: "Q3: What is the capital city of New Zealand? ",
        answers: {
            a: "",
            b: "",
            c: "Wellington"
        },
        trueAnswer:"c"
    },
    {
        question: "Q4: On which continent is the Sahara desert? ",
        answers: {
            a: "",
            b: "Africa",
            c: ""
        },
        trueAnswer:"b"
    },
    {
        question: "Q5: Name the two longest rivers in the world.",
        answers: {
            a: "",
            b: "",
            c: "Amazon/Nile"
        },
        trueAnswer:"c"
    },
]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var scienceQuiz = [
    {
        question: "Q1: Which planet is the fifth from the sun? ",
        answers: {
            a: "",
            b: "Jupiter",
            c: ""
        },
        trueAnswer:"b"
    },
    {
        question: "Q2: Who developed the theory of relativity? ",
        answers: {
            a: "",
            b: "",
            c: "Albert Einstein"
        },
        trueAnswer:"c"
    },
    {
        question: "Q3: Which chemical element is represented by the symbol N ",
        answers: {
            a: "",
            b: "Nitrogen",
            c: ""
        },
        trueAnswer:"b"
    },
    {
        question: "Q4: In which organelle of a living cell is DNA found? ",
        answers: {
            a: "Nucleus",
            b: "",
            c: ""
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
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var count = 65
var storeUser = ["YoUrNaMe@"]
$ ("#start").on("click",function(){
   count += 3
    var inputVal = $("#userName").val()
        for(var i = 0 ; i<storeUser.length ; i++ ){
        }
        if( inputVal !== storeUser[i] || storeUser === []){
            storeUser.push(inputVal)
            alert ("You register successfully with : " + inputVal)
        }
        if(inputVal === storeUser[i]){
                inputVal = inputVal + count
                storeUser.push(inputVal)
                alert("Your user name is taked befor, you are registred with " + inputVal )
                   
        }
 
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#question").text(sportQuiz[0].question)
$("#label-answ1").text(sportQuiz[0].answers.a)
$("#label-answ2").text(sportQuiz[0].answers.b)
$("#label-answ3").text(sportQuiz[0].answers.c)



    $("#question").text(geographyQuiz[0].question)
$("#label-geo-answ1").text(geographyQuiz[0].answers.a)
$("#label-geo-answ2").text(geographyQuiz[0].answers.b)
$("#label-geo-answ3").text(geographyQuiz[0].answers.c)



  
    $("#question").text(scienceQuiz[0].question)
$("#label-sc-answ1").text(scienceQuiz[0].answers.a)
$("#label-sc-answ2").text(scienceQuiz[0].answers.b)
$("#label-sc-answ3").text(scienceQuiz[0].answers.c)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var indexQ = 1
var index = 0
var result = 0
$("#nxt").on("click",function(){    
    console.log("this is nxt")
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
$("#answ1").prop('checked', false)
$("#answ2").prop('checked', false)
$("#answ3").prop('checked', false)
index++
indexQ++
})







