<!--//
	function setField() {
		// Define coordinates
		var x,y;

		// Hide new game button
		newGameButton("hide");
		
		// Write score
		writeScore();
		
		// Set Log to empty
		document.getElementById("log").innerHTML = "";
		
		// Create field
		for(x=1; x<4; x++)
			for(y=1; y<4; y++) {
				// Write blank
				document.getElementById(x + "" + y).innerHTML = "<img src=\"BLANK.gif\" alt=\"BLANK\" onClick=\"clicked('" + x + "" + y + "');\" />";
				
				// Set to free
				usedFields[x + "" + y] = "BLANK";
			}
		
		// If starter is bot
		if(starter=="Computer") {
			botMove();
			starter = "Player";
		} else {
			starter = "Computer";
		}
	}
//-->