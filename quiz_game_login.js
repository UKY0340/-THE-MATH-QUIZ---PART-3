function addUser() 
{
player1_login=document.getElementById("player1_login").value;
player2_login=document.getElementById("player2_login").value;
localStorage.setItem("player1_name",player1_login);
localStorage.setItem("player2_name",player2_login);
window.location="game_page.html";
}
function send(){
number1= document.getElementById("number1_input").value;
number2= document.getElementById("number2_input").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X"+ number2+"<h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box>'";
check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1_input").value="";
document.getElementById("number2_input").value = "";
}


