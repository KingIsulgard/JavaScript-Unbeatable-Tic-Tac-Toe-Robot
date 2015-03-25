<!--//
	function writeScore() {
		// Set your score
		document.getElementById("yourscore").innerHTML = yourscore;
		
		// Set computer score
		document.getElementById("botscore").innerHTML = botscore;
		
		// Set ties
		document.getElementById("tiescore").innerHTML = tiescore;
	}
	
	function newGameButton(action) {
		// Get element
		var style = document.getElementById("startbutton").style;
		
		// Change element
		if(action=="show")
			style.visibility="visible";
		else
			style.visibility="hidden";
	}
	
	function setLog(theLogMessage) {
		document.getElementById("log").innerHTML += theLogMessage + "<br>";
	}
	
	function endGame() {
		// Write down scores
		writeScore();
		
		// Show button to start new game
		newGameButton("show");
	}
//-->