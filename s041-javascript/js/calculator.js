function getProduct(){
  value1 = parseInt(document.getElementById("txtValue1").value);
  value2 = parseInt(document.getElementById("txtValue2").value);
  document.getElementById("lblResult").innerHTML = value1 * value2;
}