$(document).ready(function(){

    var workbook = [
        {question:"What character had the first 'evolving' stand?",
            a:"Enrico Pucci",
            b:"Koichi Hirose",
            c:"Jotaro Kujo",
            d:"all the above",
            answer:"Koichi Hirose"
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


            function Display(){
                
                questionDiv.empty();
                answerA.empty();
                answerB.empty();
                answerC.empty();
                answerD.empty();

                questionDiv.append(workbook[0].question)
                answerA.text(workbook[0].a);
                answerB.text(workbook[0].b);
                answerC.text(workbook[0].c);
                answerD.text(workbook[0].d);
            }

            Display();
            $("button").on("click", function(){
                


                      
                        
                    
                
            })
})