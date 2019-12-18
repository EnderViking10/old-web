function button1(){
	if(money >= 50){
		inc[0] += 1;
		money -= 50;
	}
}

function button2(){
	if(money >= 100){
		inc[1] += .9;
		money -= 100;
	}
}

function button3(){
	if(money >= 200){
		inc[2] += .8;
		money -= 200;
	}
}

function button4(){
	if(money >= 400){
		inc[3] += .7;
		money -= 400;
	}
}

function button5(){
	if(money >= 800){
		inc[4] += .6;
		money -= 800;
	}
}

function button6(){
	if(money >= 1600){
		inc[5] += .5;
		money -= 1600;
	}
}

function button7(){
	if(money >= 3200){
		inc[6] += .4;
		money -= 3200;
	}
}

function button8(){
	if(money >= 6300){
		inc[7] += .3;
		money -= 6400;
	}
}

function button9(){
	if(money >= 12800){
		inc[8] += .2;
		money -= 12800;
	}
}

function button10(){
	if(money >= 25600){
		inc[9] += .1;
		money -= 25600;
	}
}
