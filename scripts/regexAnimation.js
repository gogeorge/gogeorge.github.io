function animation() {
	var codeRegex = "<b>var</b> string = 'An orange juice, an apple juice and a burger';<br><br><b>if</b> (string.<span id='regexBurger'>match(<span id='regexcolor'>/\\bburger\\b/</span></span>)<span id='delete2'> <b>&&</b> </span><span id='delete1'>string.match(<span id='regexTwo'>/\\bjuice\\b/</span>)</span>) {<br><br><span id='comment'>&nbsp&nbsp&nbsp/* ...code after string matches the regex... */</span><br><br> } <b>else</b> { <br><br><span id='comment'>&nbsp&nbsp/* string did not match */</span><br><br> }";
	pseudocode.innerHTML = codeRegex;
	/*setTimeout(function() { deleteCond.style.opacity = "0"; }, 2000);
	setTimeout(function() { 
		if (deleteCond.style.opacity == "0") deleteCond.innerHTML = ''
	}, 2050)*/
	setTimeout(function() { delete1.innerHTML = ''; }, 4000);
	setTimeout(function() { delete2.innerHTML = ''; }, 5000);

	//erase regexBurger
	setTimeout(function() { regexBurger.style.opacity = "0";}, 6000);

	//place has()
	setTimeout(function() { 
		regexBurger.style.opacity = "1";
		regexBurger.innerHTML = "<span style='color:deepskyblue;'>has<span id='brackets'>(</span><span id='hasStringParam'>'burger and juice'</span></span>";
		hasStringParam.style.opacity = "0";
	}, 7700);
	//regexBurger changes to a string
	setTimeout(function() { 
		hasStringParam.style.opacity = "1";
		hasStringParam.style.visibility = "visible";
	}, 8300);	
}
animation();
setInterval(function() { 
	animation();
}, 12000);