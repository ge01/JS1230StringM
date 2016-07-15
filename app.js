/****************************************************
*                   String Length                   *
****************************************************/
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("length").innerHTML = txt.length;

/****************************************************
*            Finding a String in a String           *
****************************************************/
function myFunction() {
  var str = document.getElementById("p1").innerHTML;
  var pos = str.indexOf("locate");
  document.getElementById("finding").innerHTML = pos;
}

function myFunction1() {
  var str = document.getElementById("p2").innerHTML;
  var pos = str.lastIndexOf("locate");
  document.getElementById("last").innerHTML = pos;
}

/****************************************************
*                 The slice() Method                *
****************************************************/
var str = "Apple, Banana, Kiwi";
document.getElementById("slice").innerHTML = str.slice(7,13);

/****************************************************
*              Replacing String Content             *
****************************************************/
function myFunction() {
  var str = document.getElementById("replace").innerHTML;
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("replace").innerHTML = txt;
}
