$(document).ready(function(){
    var workbook = [{
        question:"What character had the first 'evolving' stand?",
        a:"Enrico Pucci",
        b:"Koichi Hirose",
        c:"Jotaro Kujo",
        d:"all the above",
        answer:"b"
        },
        {question:"Joseph Joestar, at the end of part 3, was listening to what band on his walkman?",
        a:"Queen",
        b:"Pink Floyd",
        c:"Pearl Jam",
        d:"The Beatles",
        answer:"d"
        },
        {question:"What is the name of the person that Yoshikage Kira kills and takes the identity of?",
        a:"Ken Oyanagi",
        b:"Kosaku Kawajiri",
        c:"Tonio Trussardi",
        d:"Shigekiyo Yangu",
        answer:"b"
        },
        {question:"Yoshikage Kira has a fetish that is expressed throughout part 4. What is this fetish?",
        a:"Hand Fetish",
        b:"Foot Fetish",
        c:"Hair Fetish",
        d:"Teeth Fetish",
        answer:"a"
        },
        {question:"Which one of these is NOT true about Stands?",
        a:"If a stand dies, the user dies and vice versa.",
        b:"A stand can be damaged by a stand user.",
        c:"Any stand can shrink if desired by the user.",
        d:"Stands protect their users at all cost.",
        answer:"d"
        },
        {question:"What does Josuke do when he's scared?",
        a:"Straighten his hair",
        b:"Bite his fingernails",
        c:"Sweat in great amounts",
        d:"Bite his lower lip",
        answer:"d"
        },
        {question:"How old is Joseph Joestar in Part 4?",
        a:"64",
        b:"79",
        c:"81",
        d:"90",
        answer:"b"
        },
        {question:"What is Ryohei Highashikata's occupation?",
        a:"Lawyer",
        b:"Cop",
        c:"Dentist",
        d:"House Maid",
        answer:"b"
        },
        {question:"In which part does Jotaro develop the ability to stop time?",
        a:"Part 4",
        b:"Part 5",
        c:"Part 3",
        d:"Part 6",
        answer:"a"
        },]

    var questionDiv = $("#question");
    var answerA = $("#a1");
    var answerB = $("#b1");
    var answerC = $("#c1");
    var answerD = $("#d1");
    var counter = 0;
    var wincount = 0;
    var losscount = 0;
    var nocount = 0;
    var timerOn = true;
    var interval; 
    var timer = {
        number:20,
        count: function(){
            if(timer.number > 0){
                timer.number--;
            }
            if(timer.number <=0){
                timer.timerOn = false;
            }
            var convertnum = timer.convertTime(timer.number);
            $("#timer").text(convertnum);
        },
        convertTime: function(t){
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;                   
        },
        reset: function(){
            timer.number = 10;
        }
    }
    function timeUp(){
        if(timer.number <= 0){
            clearInterval(interval);
            counter++;
            nocount++;
            if((wincount+losscount+nocount)<=workbook.length){
                Display(counter);
                timer.number =20;
                timerOn = true;
            }
        }
    }
    function Display(x){
        questionDiv.empty();
        answerA.empty();
        answerB.empty();
        answerC.empty();
        answerD.empty();
        interval = setInterval(timer.count, 1000)
        if (x <= workbook.length - 1){
            questionDiv.text(workbook[x].question)
            answerA.text(workbook[x].a);
            answerB.text(workbook[x].b);
            answerC.text(workbook[x].c);
            answerD.text(workbook[x].d);
            setTimeout(timeUp, 21*1000);
        }
        else{
            FinalDisplay();
            intervalId(interval);
            $("#timer").empty();
        }
    }
    function FinalDisplay(){
        questionDiv.append("<p>Correct: "+wincount+"</p>");
        questionDiv.append("<p>Unanswered: "+nocount+"</p>");
        questionDiv.append("<p>Incorret: "+losscount+"</p>");
    }

    $("#nextbutton").on("click", function(){
        clearInterval(interval);
        Display(counter)
        counter++;
        nocount++;
        timer.number = 20;

    })
    $(".answer").on("click", function(){
        var text = $(this).attr("data-value");
        if (text == workbook[counter].answer){
            counter++;
            wincount++;
            timer.number =20;
            clearInterval(interval);
            Display(counter);
        }
        else {
            losscount++;
            counter++;
            timer.number =20;
            clearInterval(interval);
            Display(counter);
        }
    })  
})