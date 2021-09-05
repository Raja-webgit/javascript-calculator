var inputBox= document.getElementById("calculation");
function userClickButton(input) {
  var oldInput=inputBox.value;
  var newInput=oldInput+""+input;
  inputBox.value=newInput;
}
function calculateValue() {
var input=inputBox.value;
var result=eval(input);
inputBox.value= result;
}
function clearData(){
    inputBox.value=" ";
}