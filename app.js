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
