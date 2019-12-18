	var canvas;
	var c;
	var pi = Math.PI;
	var money = 50;
	
    function initialize() {
        canvas = document.getElementById( "canvas" );
        if ( canvas && canvas.getContext ) {
            c = canvas.getContext( "2d" );
			
			var midx = canvas.width/2;
			var midy = canvas.height/2;
			var cw = canvas.width;
			var ch = canvas.height;
			
			//drawScreen();   // call the function to draw once
			window.setInterval("drawScreen()",1000/30);  // call repeatedly
			
        } // end if
    } // initialize()
	  
	  	  
	function drawScreen() {
		
	  // Background
	  
		c.beginPath();
		c.fillStyle = "black";
		c.fillRect(0,0, canvas.width, canvas.height);
		c.closePath();
		
	  // Makes and draws money
		
		c.beginPath();
		c.textAlign = "left";
		c.textBaseline = "top";
		c.fillStyle = "red";
		c.font = "40pt bold";
		c.fillText(money,40,40);
		c.closePath();
		
		for(let i=0; i<10; i++){
			c.beginPath();
			c.textBaseline = "center";
			c.fillStyle = "white";
			if(i <= 4){
				c.textAlign = "left";
				c.fillText(inc[i]*2,340,140+(90*i));
			}
			else{
				c.textAlign = "right";
				c.fillText(inc[i]*2,460,140+(90*(i-5)));
			}
			c.closePath();
		}
		
		run();
		
	} // end drawScreen
	
var progress = [0,0,0,0,0,0,0,0,0,0],
inc = [0,0,0,0,0,0,0,0,0,0],
bar = []

function run(){
	for(let i=0; i<10; i++){
		bar[i] = document.getElementById("bar" + (i+1));
		
		progress[i] += inc[i];
	
		if(progress[i] > 100){
			progress[i] = 0;
			switch(i){
				case 0:
					money += 5;
					break;
				case 1:
					money += 10;
					break;
				case 2:
					money += 20;
					break;
				case 3:
					money += 40;
					break;
				case 4:
					money += 80;
					break;
				case 5:
					money += 160;
					break;
				case 6:
					money += 320;
					break;
				case 7:
					money += 640;
					break;
				case 8:
					money += 3200;
					break;
				case 9:
					money += 6400;
					break;
			}
		}
		if(inc[i] < 201)
		bar[i].style.width = progress[i] + "%";
            else
                bar[i].style.width = "100%";
	}
}
