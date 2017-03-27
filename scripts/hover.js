// #earth moving left 
earth.onmouseover = function() {
	canvas.style.background = "-webkit-linear-gradient(#470229, black, #470229) !important";
}
earth.onmouseout = function() {
	canvas.style.background = "-webkit-linear-gradient(#3E0030, black, #130024)";
}
earth.onclick = function() {
	earth.style.left = "700px";
}
earth.ondblclick = function() {
	earth.style.left = "800px";
}

//google maps
iss.onmouseover = function() {
	map.style.visibility = "visible";
	map.style.opacity = "0.8";
}
background.onmouseout = function() {
	map.style.visibility = "hidden";
}