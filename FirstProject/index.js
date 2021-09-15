var readlineSync = require("readline-sync")
var usernamequestion= "Enter your name!: "
var username = readlineSync.question(usernamequestion)
console.log("Welcome "+username)
console.log("This is a quiz about Divyansh Chandna and how well you know him! ")

//Here you can add questions
var questionf=[
  {
  question: "How old is Divyansh?\na. 25\nb. 21 \nc. 34\nd. 19\n",
  answer:"b"
  },
  {
  question: "Where does Divyansh live?\na.Delhi\nb. Gurgaon\nc. Bangalore\nd. Yamuna Nagar\n",
  answer:"d"
  }
]

var score=0
function quiz(question,answer){
  var useranswer =readlineSync.question(question)
  
  if (useranswer.toLowerCase()==answer)
  {
    score=score+1
  }
  
  else{
    if(score>0){
    score=score-1
    }
  }
 
  
}
for (var i=0;i<questionf.length;i=i+1)
  {
    var currentquestion=questionf[i]
    quiz(currentquestion.question,currentquestion.answer)
  }

  console.log("Final Score is:"+score)





 