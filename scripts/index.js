	document.getElementById('gmail').addEventListener('click', function() { 
		window.open('mailto:grvaltas@gmail.com?'); 
	});
	document.getElementById('github').addEventListener('click', function() { 
		window.open('https://github.com/gogeorge'); 
	});
	document.getElementById('linkedin').addEventListener('click', function() { 
		window.open('	https://www.linkedin.com/in/george-valtas-1624111bb/'); 
	});

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

function scroll() {

	if (window.pageYOffset > 700) {
		proj_btn.style.opacity = "1"
		proj_btn.style.fontSize = "45px"
	}
	if (window.location.hash == '#projects' || window.pageYOffset > 800) {
		myDropdown.style.opacity = '1'
	}
	if (window.pageYOffset > 1400) {
		other_btn.style.opacity = "1"
		other_btn.style.fontSize = "45px"
	}
	if (window.location.hash == '#other' || window.pageYOffset > 1500) {
		myDropdown2.style.opacity = '1'
	}
}
window.onscroll = scroll
