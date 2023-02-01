function increaseC(){
var startNumber = document.getElementById('number').innerHTML;
startNumber++;
document.getElementById("number").innerHTML = startNumber++;
if(startNumber <= 0){
    document.getElementById("number").style.color = "red";}
    else{
    document.getElementById("number").style.color = "green";
    }
}

function decreaseC(){
var lowerNumber = document.getElementById("number").innerHTML;
lowerNumber--;
document.getElementById("number").innerHTML = lowerNumber--;
if(lowerNumber < 0){
document.getElementById("number").style.color = "red";}
else{
document.getElementById("number").style.color = "green";
}
}

