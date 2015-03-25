<!--//
	function botMove() {
		// Set coords
		var x, y;
		var first=true;
		
		// Check if first move
		for(x=1; x<4; x++)
			for(y=1; y<4; y++)
				if(usedFields[x + "" + y]!="BLANK")
					first=false;
			
		// If first move make good move
		if(first) {
			x = randomize(5);
			switch (x) {
				case 0: 
					moveMake("22");
				break;
				case 1:
					moveMake("11");
				break
				case 2:
					moveMake("31");
				break
				case 3:
					moveMake("33");
				break
				default:
					moveMake("13");
			}
		} else {
			first=false;
			
			// Check for possible wins first
			for(x=0; x<8 && !first; x++) {
				if(usedFields[lines[x][1]]=="O" && usedFields[lines[x][2]]=="O" && usedFields[lines[x][3]]=="BLANK") {
					moveMake(lines[x][3]);
					first=true;
				} else if(usedFields[lines[x][2]]=="O" && usedFields[lines[x][3]]=="O" && usedFields[lines[x][1]]=="BLANK") {
					moveMake(lines[x][1]);
					first=true;
				} else if(usedFields[lines[x][1]]=="O" && usedFields[lines[x][3]]=="O" && usedFields[lines[x][2]]=="BLANK") {
					moveMake(lines[x][2]);
					first=true;
				}
			}

			// Check for possible wins of enemy and block them
			for(x=0; x<8 && !first; x++) {
				if(usedFields[lines[x][1]]=="X" && usedFields[lines[x][2]]=="X" && usedFields[lines[x][3]]=="BLANK") {
					moveMake(lines[x][3]);
					first=true;
				} else if(usedFields[lines[x][2]]=="X" && usedFields[lines[x][3]]=="X" && usedFields[lines[x][1]]=="BLANK") {
					moveMake(lines[x][1]);
					first=true;
				} else if(usedFields[lines[x][1]]=="X" && usedFields[lines[x][3]]=="X" && usedFields[lines[x][2]]=="BLANK") {
					moveMake(lines[x][2]);
					first=true;
				}
			}

			// Strategic move only possible in second move
			if(!first) {
				// De strategie die Xenia ontdekt heeft afblokken
				if(usedFields["32"]=="X" && usedFields["23"]=="BLANK" && usedFields["13"]=="BLANK" && usedFields["33"]=="BLANK") {
					moveMake("33");
					first=true;
				} else if(usedFields["23"]=="X" && usedFields["32"]=="BLANK" && usedFields["13"]=="BLANK" && usedFields["33"]=="BLANK") {
					moveMake("33");
					first=true;
				} else if(usedFields["22"]=="X" && usedFields["11"]=="O" && usedFields["33"]=="BLANK") {
					moveMake("33");
					first=true;
				} else if(usedFields["22"]=="X" && usedFields["13"]=="O" && usedFields["31"]=="BLANK") {
					moveMake("31");
					first=true;
				} else if(usedFields["22"]=="X" && usedFields["31"]=="O" && usedFields["13"]=="BLANK") {
					moveMake("13");
					first=true;
				} else if(usedFields["22"]=="X" && usedFields["33"]=="O" && usedFields["11"]=="BLANK") {
					moveMake("11");
					first=true;
				} else if(usedFields["11"]=="O" && usedFields["13"]=="X" && usedFields["21"]=="BLANK") {
					moveMake("21");
					first=true;
				} else if(usedFields["11"]=="O" && usedFields["31"]=="X" && usedFields["12"]=="BLANK") {
					moveMake("12");
					first=true;
				} else if(usedFields["13"]=="O" && usedFields["11"]=="X" && usedFields["23"]=="BLANK") {
					moveMake("23");
					first=true;
				} else if(usedFields["13"]=="O" && usedFields["33"]=="X" && usedFields["12"]=="BLANK") {
					moveMake("12");
					first=true;
				} else if(usedFields["31"]=="O" && usedFields["11"]=="X" && usedFields["32"]=="BLANK") {
					moveMake("32");
					first=true;
				} else if(usedFields["31"]=="O" && usedFields["33"]=="X" && usedFields["21"]=="BLANK") {
					moveMake("21");
					first=true;
				} else if(usedFields["33"]=="O" && usedFields["31"]=="X" && usedFields["23"]=="BLANK") {
					moveMake("23");
					first=true;
				} else if(usedFields["33"]=="O" && usedFields["13"]=="X" && usedFields["32"]=="BLANK") {
					moveMake("32");
					first=true;
				}
			}
			
			// If not, free play
			if(!first) {
				// Get in middle
				if(usedFields["22"]=="BLANK") {
					moveMake("22");
					first=true;
				} else {
					// Get a corner else get a free space
					if((usedFields["11"]=="X" && usedFields["33"]=="X") || (usedFields["13"]=="X" && usedFields["31"]=="X")) {
						if(usedFields["12"]=="BLANK") {
							moveMake("12");
							first=true;
						} else if(usedFields["21"]=="BLANK") {
							moveMake("21");
							first=true;
						} else if(usedFields["23"]=="BLANK") {
							moveMake("23");
							first=true;
						} else if(usedFields["32"]=="BLANK") {
							moveMake("32");
							first=true;
						}
					} 
					
					if(!first) {
						if(usedFields["11"]=="BLANK") {
							moveMake("11");
						} else if(usedFields["13"]=="BLANK") {
							moveMake("13");
						} else if(usedFields["31"]=="BLANK") {
							moveMake("31");
						} else if(usedFields["33"]=="BLANK") {
							moveMake("33");
						} else if(usedFields["12"]=="BLANK") {
							moveMake("12");
						} else if(usedFields["21"]=="BLANK") {
							moveMake("21");
						} else if(usedFields["23"]=="BLANK") {
							moveMake("23");
						} else {
							moveMake("32");
						}
					}
				}
			}
			
			// Check if won
			checkWin("O");
			checkTie();
		}
	}
//-->