function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
  xhttp.send();
}
