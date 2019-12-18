var count = 0;
var score = 0;

// Does one player hitboxs

function onePlayer() {
	
  // Draws "hitboxes"
	
	if(xpos[0] < xL + 39 && xpos[0] + 39 > xL && ypos[0] < yL + 49 && ypos[0] + 49 > yL){
		leftLost();
	}else if(xpos[1] < xL + 39 && xpos[1] + 39 > xL && ypos[1] < yL + 49 && ypos[1] + 49 > yL){
		leftLost();
	}else if(xpos[2] < xL + 39 && xpos[2] + 39 > xL && ypos[2] < yL + 49 && ypos[2] + 49 > yL){
		leftLost();
	}else if(xpos[3] < xL + 39 && xpos[3] + 39 > xL && ypos[3] < yL + 49 && ypos[3] + 49 > yL){
		leftLost();
	}else if(xL < 10 && yL < 10 && score > 90 && score < 100){
		easterEgg();
	}else{
		leftPlayer();
		count++;
		if(count == 60){
			score++;
			count = 0;
		}
	}
}
	  
// Does two players hitboxes
   
function twoPlayers() {
	
  // Draws "hitboxes"
	
	if(xpos[0] < xL + 39 && xpos[0] + 39 > xL && ypos[0] < yL + 49 && ypos[0] + 49 > yL){
		leftLost();
	}else if(xpos[1] < xL + 39 && xpos[1] + 39 > xL && ypos[1] < yL + 49 && ypos[1] + 49 > yL){
		leftLost();
	}else if(xpos[2] < xL + 39 && xpos[2] + 39 > xL && ypos[2] < yL + 49 && ypos[2] + 49 > yL){
		leftLost();
	}else if(xpos[3] < xL + 39 && xpos[3] + 39 > xL && ypos[3] < yL + 49 && ypos[3] + 49 > yL){
		leftLost();
	}else if(x2pos[0] < xR + 39 && x2pos[0] + 39 > xR && y2pos[0] < yR + 49 && y2pos[0] + 49 > yR){
		rightLost();
	}else if(x2pos[1] < xR + 39 && x2pos[1] + 39 > xR && y2pos[1] < yR + 49 && y2pos[1] + 49 > yR){
		rightLost();
	}else if(x2pos[2] < xR + 39 && x2pos[2] + 39 > xR && y2pos[2] < yR + 49 && y2pos[2] + 49 > yR){
		rightLost();
	}else if(x2pos[3] < xR + 39 && x2pos[3] + 39 > xR && y2pos[3] < yR + 49 && y2pos[3] + 49 > yR){
		rightLost();
	}else{
		rightPlayer();
		leftPlayer();
		count++;
		if(count == 60){
			score++;
			count = 0;
		}
	}
}
