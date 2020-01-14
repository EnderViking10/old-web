var canvas, c;
var midx, midy, cw, ch;
var pi = Math.PI;
var UP = 87 || 38, DOWN = 83 || 40, LEFT = 65 || 37, RIGHT = 68 || 39
var snake = [ {x: 20, y: 20} ];
var dx = 20, dy = 0;
var foodX  = 20*parseInt(Math.random()*40), foodY = 20*parseInt(Math.random()*30);
var score = 0;

function initialize() {
    canvas = document.getElementById( "canvas" );
    if ( canvas && canvas.getContext ) {
        c = canvas.getContext( "2d" );
		
		// Center of screen

		midx = canvas.width/2;
		midy = canvas.height/2;
		cw = canvas.width;
		ch = canvas.height;
		
		document.addEventListener("keydown", function(key){
			switch(key.keyCode){
				case UP:
					dx = 0;
					dy = -20;
					break;
				case DOWN:
					dx = 0;
					dy = 20;
					break;
				case LEFT:
					dx = -20;
					dy = 0;
					break;
				case RIGHT:
					dx = 20;
					dy = 0;
					break;
			}
		});

		window.setInterval("drawScreen()",1000/10);  // call repeatedly
		
    } // end if
} // initialize()
  
  	  
function drawScreen() {

  // Ends game

  	if(gameEnd())
  		return looser();

  // Background
  
	c.beginPath();
	c.fillStyle = "black";
	c.fillRect(0,0, canvas.width, canvas.height);
	c.closePath();

   // Draws and moves snake

	advanceSnake();
	snake.forEach(drawSnake);

  // Draws food

  	c.beginPath();
  	c.fillStyle = "Red";
  	c.fillRect(foodX, foodY,20,20);
  	c.closePath();

} // end drawScreen

function drawSnake(sp){
	 // Draws snake

	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(sp.x, sp.y, 20, 20);
	c.strokeRect(sp.x, sp.y, 20, 20);
	c.closePath();
}

function advanceSnake() {  
	const head = {x: snake[0].x + dx, y: snake[0].y + dy};
	snake.unshift(head);
	if(snake[0].x == foodX && snake[0].y == foodY){
		foodX = 20*parseInt(Math.random()*40);
 		foodY = 20*parseInt(Math.random()*30);
 		score++;
	}
	else
		snake.pop();
}

function gameEnd() { 
	for(let i = 4; i < snake.length; i++){
		if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) 
			return true;  
	}
	const hitLeftWall = snake[0].x < 0;  
	const hitRightWall = snake[0].x > cw - 20;
	const hitToptWall = snake[0].y < 0;
	const hitBottomWall = snake[0].y > ch - 20;

	 return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function looser(){
	c.beginPath();
	c.fillStyle = "black";
	c.fillRect(0,0,cw,ch);
	c.closePath();

	c.beginPath();
	c.fillStyle = "red";
	c.strokeStyle = "white";
	c.font = "20pt Bold Arial";
	c.textBaseline = "middle";
	c.textAlign = "center";
	c.fillText("You lost with a score of " + score, midx, midy);
	c.stroke();
	c.closePath();
}
