	/*var midx = canvas.width/2;
	var midy = canvas.height/2;
	var cw = canvas.width;
	var ch = canvas.height;
	var pi = Math.PI;
	*/var guy = document.getElementById("guy");
	var guard = document.getElementById("guard");
	var xL = 125,xR = xL;
	var yL = 300,yR = yL;
	var xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
	var ypos = [0,-200,-400,-600];
	var x2pos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
	var y2pos = [0,-200,-400,-600];
	var random;

  // Does left player
	
	function leftPlayer(){
		
	  // Translates
		c.save();
		c.translate(100,0);
		
	  // Draws road
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillRect(0,0,300,ch);
		c.closePath();
		
	  // Draws character
		
		c.drawImage(guy,xL,yL);
		
	  // Draws guards
		
		for(let i=0; i<4; i++){
			c.drawImage(guard,xpos[i],ypos[i]);
		}
	  
	  // Moves guards down
		
		ymove = score*.1;
		
		for(var i = 0; i < 3; i++){
			if(score < 20)
				ypos[i] += 2;
			else
				ypos[i] += ymove;
		}
		
	  // Moves guards to top
		
		random = 250*Math.random() + 1;
		
		if(ypos[0] > ch){
			ypos[0] = 0;
			xpos[0] = random;
		}
		if(ypos[1] > ch){
			ypos[1] = 0;
			xpos[1] = random;
		}
		if(ypos[2] > ch){
			ypos[2] = 0;
			xpos[2] = random;
		}
		if(ypos[3] > ch){
			ypos[3] = 0;
			xpos[3] = random;
		}
		
		if(xL < 0)
			xL = 0;
		if(xL > 261)
			xL = 261;
		if(yL < 0)
			yL = 0;
		if(yL > 551)
			yL = 551;
		
		c.restore();
	}
	
  // Does right player
	
	function rightPlayer(){
		
	  // Translates
		c.save();
		c.translate(500,0);
		
	  // Draws road
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillRect(0,0,300,ch);
		c.closePath();
		
	  // Draws character
		
		c.drawImage(guy,xR,yR);
		
	  // Draws guards
		
		c.drawImage(guard,x2pos[0],y2pos[0]);
		c.drawImage(guard,x2pos[1],y2pos[1]);
		c.drawImage(guard,x2pos[2],y2pos[2]);
		c.drawImage(guard,x2pos[3],y2pos[3]);
	  
	  // Moves guards down
		
		for(var i = 0; i < 3; i++){
			if(score < 20)
				y2pos[i] += 2;
			else
				y2pos[i] += score*.1;
		}
		
	  // Moves guards to top
		
		random = 250*Math.random() + 1;
		
		if(y2pos[0] > ch){
			y2pos[0] = 0;
			x2pos[0] = random;
		}
		if(y2pos[1] > ch){
			y2pos[1] = 0;
			x2pos[1] = random;
		}
		if(y2pos[2] > ch){
			y2pos[2] = 0;
			x2pos[2] = random;
		}
		if(y2pos[3] > ch){
			y2pos[3] = 0;
			x2pos[3] = random;
		}
		
		if(xR < 0)
			xR = 0;
		if(xR > 261)
			xR = 261;
		if(yR < 0)
			yR = 0;
		if(yR > 551)
			yR = 551;
		
		c.restore();
	}
