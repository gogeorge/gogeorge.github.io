function animation() {
	var codeRegex = "<b>var</b> string = 'two sodas and two burgers';<br><br><b>if</b> (string.match(<span id='regexSoda'>'.*\\bsodas\\b.*'</span>) <span id='plus1'></span> <span id='or'>||</span> <span id='plus2'></span> string.match(<span id='regexTwo'>'/two+/g'</span>)) {<br><br><span id='comment'>&nbsp&nbsp&nbsp/* ...code after string matches the regex... */</span><br><br> } <b>else</b> { <br><br><span id='comment'>&nbsp&nbsp/* string did not match */</span><br><br> }";
	pseudocode.innerHTML = codeRegex;
	//erase regexSoda
	setTimeout(function() { regexSoda.style.opacity = "0";}, 2000);
	//place hasString()
	setTimeout(function() { 
		regexSoda.style.opacity = "1";
		regexSoda.innerHTML = "<span style='color:deepskyblue;'>hasString<span id='brackets'>(</span><span id='hasStringParam'>'sodas'</span><span id='brackets'>)</span></span>";
		hasStringParam.style.opacity = "0";
	}, 2500);
	//regexSoda changes to a string
	setTimeout(function() { 
		hasStringParam.style.opacity = "1";
		hasStringParam.style.visibility = "visible";
	}, 3500);
	// erase the '||'
	setTimeout(function() { or.style.opacity = "0";}, 4000);
	//place the first +
	setTimeout(function() { plus1.innerHTML = "+";}, 4250);
	//place the or()
	setTimeout(function() {
		or.style.opacity = "1";
		or.innerHTML = "<span style='color:deepskyblue;'>or<span id='brackets'>(</span><span id='brackets'>)</span></span>"
	}, 4500);
	//place the second +
	setTimeout(function() { plus2.innerHTML = "+";}, 4750);
	//erase regexTwo
	setTimeout(function() { regexTwo.style.opacity = "0";}, 5250);
	//place atLeastOne()
	setTimeout(function() { 
		regexTwo.style.opacity = "1";
		regexTwo.innerHTML = "<span style='color:deepskyblue;'>atLeastOne<span id='brackets'>(</span><span id='hasStringParam2'>'two'</span><span id='brackets'>)</span></span>";
		hasStringParam2.style.opacity = "0";
	}, 5750);
	setTimeout(function() { 
		hasStringParam2.style.opacity = "1";
		hasStringParam2.style.visibility = "visible";
	}, 6750);	
}
animation();
setInterval(function() { animation() }, 10000);



