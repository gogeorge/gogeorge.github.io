	document.getElementById('fiverr').addEventListener('click', function() { 
		window.open('https://www.fiverr.com/theworkhelper'); 
	});
	document.getElementById('gmail').addEventListener('click', function() { 
		window.open('mailto:george.valtas.isb@gmail.com?'); 
	});
	document.getElementById('github').addEventListener('click', function() { 
		window.open('https://github.com/gogeorge'); 
	});
	
	function proScroll() { window.scrollBy(0, window.innerHeight); }
	function workScroll() { window.scrollTo(0, (window.innerHeight)*2.5); }
	function aboutScroll() { window.scrollTo(0, (window.innerHeight)*3.75); }

	function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
	}

	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');
	var img3 = document.getElementById('img3');
	var proYveete = document.getElementById('pro-yveete');
	var proAfrodita = document.getElementById('pro-afrodita');
	var proBash = document.getElementById('pro-bash-profile');
	var img21 = document.getElementById('img21');
	var portofolio = document.getElementById('work-portofolio');
	var img22 = document.getElementById('img22');
	var fiverr = document.getElementById('work-fiverr');

	proYveete.onmouseover = function() {
		img1.style.visibility = "visible";
	} 
	proYveete.onmouseout = function() {
		img1.style.visibility = "hidden";
	}

	proAfrodita.onmouseover = function() {
		img2.style.visibility = "visible";
	}
	proAfrodita.onmouseout = function() {
		img2.style.visibility = "hidden";
	}
	proBash.onmouseover = function() {
		img3.style.visibility = "visible";
	}
	proBash.onmouseout = function() {
		img3.style.visibility = "hidden";
	}
	portofolio.onmouseover = function() {
		img21.style.visibility = "visible";
	}
	portofolio.onmouseout = function() {
		img21.style.visibility = "hidden";
	}
	fiverr.onmouseover = function() {
		img22.style.visibility = "visible";
	}
	fiverr.onmouseout = function() {
		img22.style.visibility = "hidden";
	}

	function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
	}
		window.onclick = function(event2) {
	  if (!event2.target.matches('.dropbtn2')) {

	    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
	    var i;
	    for (i = 0; i < dropdowns2.length; i++) {
	      var openDropdown2 = dropdowns2[i];
	      if (openDropdown2.classList.contains('show2')) {
	        openDropdown2.classList.remove('show2');
	      }
	    }
	  }
	}