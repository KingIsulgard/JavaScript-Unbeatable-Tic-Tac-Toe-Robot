<!--//
	function checkTie() {
		// Set coordinates
		var x, y;
		var tied=true;
		
		// Check all values
		for(x=1; x<4; x++)
			for(y=1; y<4; y++)
				if(usedFields[x + "" + y]=="BLANK")
					tied=false;
					
		// If won
		if(tied) {
			// Set score
			tiescore++;
			setLog("Tied");

			// End game
			endGame();
		}
		
		return tied;
	}
	
	function checkWin(whatType) {
		// Coords
		var x, y;
		
		// No won
		var won = false;
		
		// Check all lines
		for(x=0; x<8; x++) {
			if(usedFields[lines[x][1]]==whatType && usedFields[lines[x][2]]==whatType && usedFields[lines[x][3]]==whatType) {
				won = true;
				document.getElementById(lines[x][1]).innerHTML = "<img src=\"won" + whatType + ".gif\" alt=\"" + whatType + "\" />";
				document.getElementById(lines[x][2]).innerHTML = "<img src=\"won" + whatType + ".gif\" alt=\"" + whatType + "\" />";
				document.getElementById(lines[x][3]).innerHTML = "<img src=\"won" + whatType + ".gif\" alt=\"" + whatType + "\" />";

				break;
			}
		}
			
		// If won
		if(won) {
			// Check who won
			if(whatType == "X") {
				setLog("You win!");
				yourscore++;
			} else {
				setLog("Computer wins!");
				botscore++;
			}
			
			// Block open fields
			for(x=1; x<4; x++)
				for(y=1; y<4; y++)
					if(usedFields[x + "" + y]=="BLANK")
						document.getElementById(x + "" + y).innerHTML = "<img src=\"BLANK.gif\" alt=\"BLANK\" />";
			
			// End game
			endGame();
		}
		
		return won;
	}
//-->