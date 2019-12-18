
var canvas;
var c;
var midx,midy,cw,ch;
var pi = Math.PI;
var players;
var p = 0, k = 0;
var score = 0;

function initialize() {
	canvas = document.getElementById("canvas");
	if(canvas && canvas.getContext){
		c = canvas.getContext("2d");
		
		window.addEventListener("gamepadconnected", function(e){
			console.log(e.gamepad.index);
			k = 1;
		});
		window.addEventListener("gamepaddisconnected", function(e){
			console.log(e.gamepad.index);
			k = 0;
		});
		
		music1 = document.getElementById("music1");
		music2 = document.getElementById("music2");
		
		// Center of screen
		
		midx = canvas.width/2;
		midy = canvas.height/2;
		cw = canvas.width;
		ch = canvas.height;
		
		do{
			players = parseInt(prompt("Enter the number of players"));
		}while(players != 1 && players != 2);
	
		guy = document.getElementById("guy");
		guard = document.getElementById("guard");
		
		window.setInterval("drawScreen()",1000/60);  // call repeatedly
		
	} // end if
} // initialize()
  
function drawScreen(){
	
	if(k == 1){
		axesMove();
		buttonPress();
		gamePadUpdate();
	}
	
  // Background
  
	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(0,0, canvas.width, canvas.height);
	c.closePath();	

  // Does score
	
	c.beginPath();
	c.font = "15pt Arial";
	c.textAlign = "left";
	c.textBaseline = "top";
	c.fillStyle = "black";
	c.fillText("score: " + score,0,0);
	c.closePath();
	
	if(players == 1)
		onePlayer();
	else if(players == 2)
		twoPlayers();
}
	/*
	Music functions
	*/
	   
	// Seven Nations Army
	function sna(){
		if(p != 2){
			music1.play();
			p = 1;
		}
	}
	// Fortunate Son
	function fs(){
		if(p != 1){
			music2.play();
			p = 2;
		}	
	}
	// Stop
	function stop(){
		music1.pause();
		music2.pause();
		music1.currentTime = 0;
		music2.currentTime = 0;
		p = 0;
	}
