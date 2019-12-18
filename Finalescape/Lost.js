	var hscore = 103;
	var lost = 0;
	
  // Left loosing
	
	function leftLost(){
	
	  // Draws stuff
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillRect(0,0,cw,ch);
		c.closePath();
		
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.font = "24pt bold Comic Sans MS";
		c.lineWidth = 1;
		
		c.beginPath();
		c.fillStyle = "red";
		c.fillText("Player 1 is a loser", midx,midy);
		c.closePath();
		if(players == 1){
			if(score >= hscore){
				if(lie != 1){
					hscore = score;
					c.beginPath();
					c.fillStyle = "blue"
					c.fillText("Good job. You beat the world record",midx,100);
					c.fillText("Text your highscore to (607)-422-2492",midx,150);
					c.closePath();
				}
			}
			
			c.beginPath();
			c.strokeStyle = "red";
			c.strokeText("Your score is " + score, midx,400);
			c.strokeText("The highscore is " + hscore,midx,500);
			c.closePath();
		
		}
		
		music1.pause();
		music2.pause();
		
		lost = 1;
	}
	
  // Right loosing
	
	function rightLost(){
		
	  // Draws stuff
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillRect(0,0,cw,ch);
		c.closePath();
		
		c.beginPath();
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.lineWidth = 1;
		c.font = "24pt bold Comic Sans MS";
		c.fillStyle = "red";
		c.fillText("Player 2 is a loser", midx,midy);
		c.closePath();
		
		music1.pause();
		music2.pause();
		
		lost = 1;
	}
