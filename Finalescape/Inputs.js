	var buttons = [];
	var axes = [];
	var scalexL,scalexR;
	var scaleyL,scaleyR;
	var lie = 0;
	
	/*
	Keyboard inputs
	*/
	window.addEventListener("keydown", keystroke);
	function keystroke(key){
		if(lost != 1){
			if(players == 1){
				switch(key.keyCode){
					case 65: // Moves left LP
						xL -= 10;
						break;
					case 68: // Moves right LP
						xL += 10;
						break;
					case 87: // Moves up LP
						yL -= 10;
						break;
					case 83: // Moves down LP
						yL += 10;
						break;
					case 37: // Moves left LP
						xL -= 10;
						break;
					case 39: // Moves right LP
						xL += 10;
						break;
					case 38: // Moves up LP
						yL -= 10;
						break;
					case 40: // Moves down LP
						yL += 10;
						break;
				}
			}
			if(players == 2){
				switch(key.keyCode){
					case 65: // Moves left LP
						xL -= 10;
						break;
					case 68: // Moves right LP
						xL += 10;
						break;
					case 87: // Moves up LP
						yL -= 10;
						break;
					case 83: // Moves down LP
						yL += 10;
						break;
					case 37: // Moves left RP
						xR -= 10;
						break;
					case 39: // Moves right RP
						xR += 10;
						break;
					case 38: // Moves up RP
						yR -= 10;
						break;
					case 40: // Moves down RP
						yR += 10;
						break;
				}
			}
		}
		if(ee != 1){
			switch(key.keyCode){
				case 82: // Resets
					reset();
					break;
			}
		}
	}
	
	/*
	Controller inputs
	*/
	
	function gamePadUpdate(){
		var gamepads = navigator.getGamepads();
		if(gamepads && gamepads.length > 0){
			var gamepad = gamepads[0];
			buttons = [];   
			for (var i = 0; i < gamepad.buttons.length; i++){
				buttons[i] = gamepad.buttons[i].pressed;
			}	
			axes = [];
			for (var i = 0; i < gamepad.axes.length; i++){
				axes[i] = gamepad.axes[i];
			}
		}
	}
	
  // Button presses
	function buttonPress(){
		if(buttons.length > 9){
			if(buttons[9] == true){
				reset();
			}
		}
		if(buttons.length > 15){
			if(buttons[15]){
				if(buttons.length > 2){
					if(buttons[2]){
						score = 90;
						lie = 1;
					}
				}
			}
		}
	}

	  // Axes moves
	function axesMove(){
		if(lost != 1){
			if(axes.length > 0){
				if(axes[0] > .05 || axes[0] < -.05){
					scalexL = axes[0];
					xL += scalexL*3;
				}
			}
			if(axes.length > 1){
				if(axes[1] > .05 || axes[1] < -.05){
					scaleyL = axes[1];
					yL += scaleyL*3;
				}
			}
			if(axes.length > 2){
				if(axes[2] > .05 || axes[2] < -.05){
					scalexR = axes[2]
					xR += scalexR*3;
				}
			}
			if(axes.length > 3){
				if(axes[3] > .05 || axes[3] < -.05){
					scaleyR = axes[3];
					yR += scaleyR*3;
				}
			}
		}
	}
	  
	/*
	Reset funciton
	*/
	   
	function reset(){
		score = 0;
		count = 0;
		lost = 0;
lie = 0;
		xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
		ypos = [0,-200,-400,-600];
		x2pos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
		y2pos = [0,-200,-400,-600];
		xL = 125;
		yL = midy;
		xR = 125;
		yR = yL;
		if(p == 1){
			music1.play();
			music1.currentTime = 0;
		}
		if(p == 2){
			music2.play();
			music2.currentTime = 0;
		}
	}
