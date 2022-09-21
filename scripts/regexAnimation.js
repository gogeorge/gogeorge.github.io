var temp
function animation() {
	pseudocode.innerHTML = "<b>var</b> string = 'An orange juice, an apple juice and a burger';<br><br><b>if</b> (string.<span id='regexBurger'>match(<span id='regexcolor'>/\\bburger\\b/</span></span>)<span id='delete1'> <b>&&</b> string.match(<span id='regexTwo'>/\\bjuice\\b/</span>)</span>) {<br><br><span id='comment'>&nbsp&nbsp&nbsp/* ...code after string matches the regex... */</span><br><br> } <b>else</b> { <br><br><span id='comment'>&nbsp&nbsp/* string did not match */</span><br><br> }";
	setTimeout(() => {
		console.log(temp, delete1)
		var delStr = document.getElementById('delete1').innerText
		console.log(delStr)
		setInterval(() => {
			delStr = delStr.slice(0, -1)
			document.getElementById('delete1').innerHTML = delStr
			!delStr.length && clearInterval()
		}, 100)
	}, 4000);


	//erase regexBurger
	setTimeout(() => { regexBurger.style.opacity = "0";}, 7000);

	//place has()
	setTimeout(() => { 
		regexBurger.style.opacity = "1";
		regexBurger.innerHTML = "<span style='color:deepskyblue;'>has<span id='brackets'>(</span><span id='hasStringParam'>'burger and juice'</span></span>";
		hasStringParam.style.opacity = "0";
	}, 8700);
	//regexBurger changes to a string
	setTimeout(() => { 
		hasStringParam.style.opacity = "1";
		hasStringParam.style.visibility = "visible";
	}, 10000);	
}
animation();
// setInterval(() => {
// 	delete1.innerText = " <b>&&</b> string.match(<span id='regexTwo'>/\\bjuice\\b/</span>)</span>"
// 	console.log(delete1.innerText)
// 	delete1.innerHTML = " <b>&&</b> string.match(<span id='regexTwo'>/\\bjuice\\b/</span>)</span>"
// 	console.log(delete1.innerHTML)
// 	delete1 = temp
// 	animation();
// }, 14000);