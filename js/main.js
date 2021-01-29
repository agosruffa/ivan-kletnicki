//menu 
$(document).ready(function(){
  $("a").click(function(){
    $("#collapsibleNavbar").hide();
  });
  $("button").click(function(){
    $("#collapsibleNavbar").show();
  });
});

// portfolio 

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// segunda linea 

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// tercera linea 

function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

var slideIndex = 1;
showDivs3(slideIndex);

function plusDivs3(n) {
  showDivs3(slideIndex += n);
}

function currentDiv3(n) {
  showDivs3(slideIndex = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementById("caption3");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// cuarta linea 

function openModal4() {
  document.getElementById('myModal4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModal4').style.display = "none";
}

var slideIndex = 1;
showDivs4(slideIndex);

function plusDivs4(n) {
  showDivs4(slideIndex += n);
}

function currentDiv4(n) {
  showDivs4(slideIndex = n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("demo4");
  var captionText = document.getElementById("caption4");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// quinta linea 

function openModal5() {
  document.getElementById('myModal5').style.display = "block";
}

function closeModal5() {
  document.getElementById('myModal5').style.display = "none";
}

var slideIndex = 1;
showDivs5(slideIndex);

function plusDivs5(n) {
  showDivs5(slideIndex += n);
}

function currentDiv5(n) {
  showDivs5(slideIndex = n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("demo5");
  var captionText = document.getElementById("caption5");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// sexta linea 

function openModal6() {
  document.getElementById('myModal6').style.display = "block";
}

function closeModal6() {
  document.getElementById('myModal6').style.display = "none";
}

var slideIndex = 1;
showDivs6(slideIndex);

function plusDivs6(n) {
  showDivs6(slideIndex += n);
}

function currentDiv6(n) {
  showDivs6(slideIndex = n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("demo6");
  var captionText = document.getElementById("caption6");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// septima linea 

function openModal7() {
  document.getElementById('myModal7').style.display = "block";
}

function closeModal7() {
  document.getElementById('myModal7').style.display = "none";
}

var slideIndex = 1;
showDivs7(slideIndex);

function plusDivs7(n) {
  showDivs7(slideIndex += n);
}

function currentDiv7(n) {
  showDivs7(slideIndex = n);
}

function showDivs7(n) {
  var i;
  var x = document.getElementsByClassName("mySlides7");
  var dots = document.getElementsByClassName("demo7");
  var captionText = document.getElementById("caption7");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





// octava linea 

function openModal8() {
  document.getElementById('myModal8').style.display = "block";
}

function closeModal8() {
  document.getElementById('myModal8').style.display = "none";
}

var slideIndex = 1;
showDivs8(slideIndex);

function plusDivs8(n) {
  showDivs8(slideIndex += n);
}

function currentDiv8(n) {
  showDivs8(slideIndex = n);
}

function showDivs8(n) {
  var i;
  var x = document.getElementsByClassName("mySlides8");
  var dots = document.getElementsByClassName("demo8");
  var captionText = document.getElementById("caption8");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// novena linea 

function openModal9() {
  document.getElementById('myModal9').style.display = "block";
}

function closeModal9() {
  document.getElementById('myModal9').style.display = "none";
}

var slideIndex = 1;
showDivs9(slideIndex);

function plusDivs9(n) {
  showDivs9(slideIndex += n);
}

function currentDiv9(n) {
  showDivs9(slideIndex = n);
}

function showDivs9(n) {
  var i;
  var x = document.getElementsByClassName("mySlides9");
  var dots = document.getElementsByClassName("demo9");
  var captionText = document.getElementById("caption9");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}