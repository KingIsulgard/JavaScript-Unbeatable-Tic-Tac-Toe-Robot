<!--//
	function selector(location) {
		// Set field to set
		document.getElementById(location).innerHTML = "<img src=\"O.gif\" alt=\"O\" />";
		
		// Write log
		setLog("The computer selected " + location);
		
		// Set array
		usedFields[location] = "O";
	}

	function moveMake(loc) {
		usedFields[loc]="O";
		selector(loc);
	}
		
	function clicked(clicker) {
		// Set field to set
		document.getElementById(clicker).innerHTML = "<img src=\"X.gif\" alt=\"X\" />";
		
		// Write log
		setLog("You selected " + clicker);
		
		// Set array
		usedFields[clicker] = "X";
		
		// Check if three in a row
		if(!checkWin("X"))
			if(!checkTie())
				botMove();
		
	}

//-->