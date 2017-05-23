var cmdInterface = document.getElementById('cmd_interface');
var cmdTitle = document.getElementById('cmd_title');
//command line animation
window.onload = function() { bashAnimation();}
function bashAnimation() {
	cmdTitle.innerHTML = "Bash Profile - 600 x 280";
	var d = new Date();
	var ps1 = "<span style='color:magenta;'>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + 
			  "</span> <span style='color:orange;'>@</span><span style='color:blue;'>desktop</span> <span style='color:cyan;'> - </span><span style='color: yellow;'>admin</span><br><span style='color: red';>$</span>";
	setTimeout(function() {
		cmdInterface.innerHTML = "Last Login : Unknown<br>This is the bash profile<br>";
	}, 1000);
	setTimeout(function() {
		cmdInterface.innerHTML += ps1;
	}, 3000);
	setTimeout(function() { cmdInterface.innerHTML += ' l'}, 3100);
	setTimeout(function() { cmdInterface.innerHTML += 'i'}, 3200);
	setTimeout(function() { cmdInterface.innerHTML += 's'}, 3300);
	setTimeout(function() { cmdInterface.innerHTML += 't'}, 3400);
	setTimeout(function() {
		var d = new Date();
		var ps1 = "<span style='color:magenta;'>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</span> <span style='color:orange;'>@</span><span style='color:blue;'>desktop</span> <span style='color:cyan;'> - </span><span style='color: yellow;'>admin</span><br><span style='color: red';>$</span>"; 
		cmdInterface.innerHTML += "<br><br>useless-index.html<br>0500_m16_in_32.pdf<br>0500_m16_qp_32.pdf<br><span style='color:RebeccaPurple;'>Adobe Photoshop CC 2014<br>CodeBlocks.app<br>Pictures</span><br><br>" + ps1;
	}, 3600);
	setTimeout(function() { cmdInterface.innerHTML += ' r'}, 4600);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 4670);
	setTimeout(function() { cmdInterface.innerHTML += 'm'}, 4790);
	setTimeout(function() { cmdInterface.innerHTML += 'o'}, 4890);
	setTimeout(function() { cmdInterface.innerHTML += 'v'}, 4980);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 5095);
	setTimeout(function() { cmdInterface.innerHTML += ' '}, 5170);
	setTimeout(function() { cmdInterface.innerHTML += 'u'}, 5200);
	setTimeout(function() { cmdInterface.innerHTML += 's'}, 5300);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 5400);
	setTimeout(function() { cmdInterface.innerHTML += 'l'}, 5500);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 5600);
	setTimeout(function() { cmdInterface.innerHTML += 's'}, 5700);
	setTimeout(function() { cmdInterface.innerHTML += 's'}, 5800);
	setTimeout(function() { cmdInterface.innerHTML += '.'}, 5900);
	setTimeout(function() { cmdInterface.innerHTML += 'h'}, 6000);
	setTimeout(function() { cmdInterface.innerHTML += 't'}, 6100);
	setTimeout(function() { cmdInterface.innerHTML += 'm'}, 6200);
	setTimeout(function() { cmdInterface.innerHTML += 'l'}, 6300);
	setTimeout(function() {
		var d = new Date();
		var ps1 = "<span style='color:magenta;'>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</span> <span style='color:orange;'>@</span><span style='color:blue;'>desktop</span> <span style='color:cyan;'> - </span><span style='color: yellow;'>admin</span><br><span style='color: red';>$</span>";
		cmdInterface.innerHTML += "<br>" + ps1;
	}, 6400);
	setTimeout(function() { cmdInterface.innerHTML += ' c'}, 7000);
	setTimeout(function() { cmdInterface.innerHTML += 'r'}, 7170);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 7290);
	setTimeout(function() { cmdInterface.innerHTML += 'a'}, 7390);
	setTimeout(function() { cmdInterface.innerHTML += 't'}, 7480);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 7595);
	setTimeout(function() { cmdInterface.innerHTML += ' '}, 7670);
	setTimeout(function() { cmdInterface.innerHTML += 'i'}, 7700);
	setTimeout(function() { cmdInterface.innerHTML += 'n'}, 7800);
	setTimeout(function() { cmdInterface.innerHTML += 'd'}, 7900);
	setTimeout(function() { cmdInterface.innerHTML += 'e'}, 8000);
	setTimeout(function() { cmdInterface.innerHTML += 'x'}, 8100);
	setTimeout(function() { cmdInterface.innerHTML += '.'}, 8200);
	setTimeout(function() { cmdInterface.innerHTML += 'h'}, 8300);
	setTimeout(function() { cmdInterface.innerHTML += 't'}, 8400);
	setTimeout(function() { cmdInterface.innerHTML += 'm'}, 8500);
	setTimeout(function() { cmdInterface.innerHTML += 'l'}, 8600);
	setTimeout(function() {
		var d = new Date();
		var ps1 = "<span style='color:magenta;'>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</span> <span style='color:orange;'>@</span><span style='color:blue;'>desktop</span> <span style='color:cyan;'> - </span><span style='color: yellow;'>admin</span><br><span style='color: red';>$</span>";
		cmdInterface.innerHTML = "";
		cmdInterface.innerHTML = 
		ps1 + " list <br><br>useless-index.html<br>" +
		"0500_m16_in_32.pdf<br>0500_m16_qp_32.pdf<br>Adobe Photoshop CC 2014<br>CodeBlocks.app<br>Pictures<br><br>" + 
		ps1 + " remove useless-index.html<br>" + 
		ps1 + " create index.html<br>" + ps1;
	}, 8900);
	setTimeout(function() { cmdInterface.innerHTML += ' l'}, 9600);
	setTimeout(function() { cmdInterface.innerHTML += 'o'}, 9700);
	setTimeout(function() { cmdInterface.innerHTML += 'c'}, 9800);
	setTimeout(function() { cmdInterface.innerHTML += 'a'}, 9900);
	setTimeout(function() { cmdInterface.innerHTML += 'l'}, 10000);
	setTimeout(function() { cmdInterface.innerHTML += 'h'}, 10100);
	setTimeout(function() { cmdInterface.innerHTML += 'o'}, 10200);
	setTimeout(function() { cmdInterface.innerHTML += 's'}, 10300);
	setTimeout(function() { cmdInterface.innerHTML += 't'}, 10400);
	setTimeout(function() {
		cmdTitle.innerHTML = "index.html - python -m SimpleHTTPServer - 600 x 240";
		cmdInterface.innerHTML = "";
		cmdInterface.innerHTML = "0500_m16_in_32.pdf<br>0500_m16_qp_32.pdf<br>Adobe Photoshop CC 2014<br>CodeBlocks.app<br>Pictures<br><br>" + 
		ps1 + " remove useless-index.html<br>" + 
		ps1 + " create index.html<br>" + ps1 + " localhost<br>Serving HTTP on 0.0.0.0 port 8000 ...";
	}, 10500);
	setTimeout(function() { cmdInterface.innerHTML += '<br>127.0.0.1 - - [05/Feb/2017 00:05:10] "GET / HTTP/1.1" 200 -'}, 10600);
	setTimeout(function() { cmdInterface.innerHTML += "<br>Visit this link to see the source: <a href='https://github.com/gogeorge/bash-profile/' target='_blank'>https://github.com/gogeorge/bash-profile/</a>";}, 13000);
}
setInterval(function() { bashAnimation();}, 15000);
