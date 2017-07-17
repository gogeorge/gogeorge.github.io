	document.getElementById('gmail').addEventListener('click', function() { 
		window.open('mailto:george.valtas.isb@gmail.com?'); 
	});
	document.getElementById('github').addEventListener('click', function() { 
		window.open('https://github.com/gogeorge'); 
	});

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
	//loading images from another site
	proj_btn.onmouseover = function() {
		img1.src = "http://georgevaltas.kissr.com/IMG_0441.JPG";
		img2.src = "http://georgevaltas.kissr.com/nasa front cover landscape.jpg";
		img3.src = "http://georgevaltas.kissr.com/bash_img.JPG";
	}
	work_btn.onmouseover = function() {
		img22.src = "http://georgevaltas.kissr.com/logo background george.jpg";
	}
	//back to top function
	document.addEventListener('scroll', function() {
    	if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
    		back_to_top.style.transform = "rotate(0deg)";
    	} else {
    		back_to_top.style.transform = "rotate(180deg)";
    	}
	});
	//link to github repo
	footer.onclick = function() {
		window.open('https://www.github.com/gogeorge/gogeorge.github.io');
	}
	//birthday event
	var d = new Date();
	var now = d.getDate() + "" + (d.getMonth() + 1);
	if (now == "193") {
		confetti.src = "http://georgevaltas.kissr.com/confetti.gif";
		setTimeout(function() {
			bday_event.style.opacity = "1";
			bday_event.style.top = "80";
			bday_event.style.transform = "rotate(30deg)";
		}, 3000);
		setTimeout(function() {
			confetti.style.visibility = "visible";
			confetti.style.opacity = "1";
		}, 3500);
	} else { 
		confetti.style.visibility = "hidden";
	}