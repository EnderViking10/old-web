var question = 0;
var correct = 0;
var answer;
var WRONG = 0;
var ee = 0;

function easterEgg(){
	
	if(lost != 1){
		var body = document.getElementById("body");
		
		var text = document.createElement("input");
		text.type = "text";
		text.id = "text";
		
		body.appendChild(text);
	}
	lost = 1;
	ee = 1;
		
	var text = document.getElementById("text");
	answer = text.value;
	
  // Draws background
	c.beginPath();
	c.fillStyle = "white"
	c.fillRect(0,0,cw,ch);
	c.closePath();
	
  // Writes question 1
	if(question == 0){
		c.font = "24pt Bold Arial";
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillText("What does 'HTTP' stand for with no capitals?",200,10);
		c.closePath();
		
		c.beginPath();
		c.fillStyle = "white";
		c.fillText("What color is this text?",200,200);
		c.closePath();
		
		console.log(answer);
		if(answer == "hypertext transfer protocol" || answer == "white"){
			correct ++;
			question++;
		}
	}
  // Writes question 2
	else if(question == 1){
		c.beginPath();
		c.fillStyle = "white";
		c.fillRect(0,0,cw,ch);
		c.closePath();
		
		c.font = "24pt Bold Arial";
		
		c.beginPath();
		c.fillStyle = 'black';
		c.fillText("What is often seen as the smallest unit of memory?",200,10);
		c.closePath();
		
		c.beginPath();
		c.fillStyle = "white";
		c.fillText("Is this a question?",200,200);
		c.closePath();
		
		if(answer == "byte" || answer == "yes"){
			correct++;
			question++;
		}
	}
  // Writes question 3
	else if(question == 2){
		c.beginPath();
		c.fillStyle = "white";
		c.fillRect(0,0,cw,ch);
		c.closePath();
		
		c.font = "24pt Bold Arial";
		
		c.beginPath();
		c.fillStyle = "black";
		c.fillText("Who is often called the father of the computer?",200,10);
		c.closePath();
		
		c.beginPath();
		c.fillStyle = "white";
		c.fillText("How many question have you answered not including this one?",200,200);
		c.closePath();
		
		if(answer == "Charles Babbage" || answer == "2"){
			correct++;
			question++;
			WRONG = 1;
		}
	}
	
  // Gives prize
	if(WRONG == 1){
		if(correct == 3){
			alert("Alright you amazing");
			
			continu();
		}
		if(correct == 2){
			alert("Ur pretty good, but not amazing");
			
			continu();
		}
		if(correct == 1){
			alert("Come on, you are good at the game, but you don't know anything about texhnology");
			
			continu();
		}
	}
}

// Continues game 
function continu(){
	lost = 0;
	xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
	ypos = [0,-200,-400,-600];
	xL = 125;
	yL = 300;
	
	question = 0;
	correct = 0;
	WRONG = 0;
	
	body.removeChild(text);
}
