var click = 0;
var shots = 0;//houd je resterende kogels bij.
var totalHits = 0;//houd bij hoeveel eenden je geraakt hebt.
var score = 0;//houd je score bij.
var direction = "margin-left";

function miss() {//De functie voor als je je schot mist.

	if (click == 1) { //Zorgt ervoor dat deze functie niet word uitgevoerd als er op de eend geklikt word.
		click = 0;
	}else{
		console.log("miss");
	}
}

function hit() {//de functie voor als je je schot raakt.
	click = 1;
	console.log("hit");

	totalHits++
	move();
}

function death() {//speelt de death animation van de eend af

}
var eend = document.getElementById("background");
function move() {
	eend.style.marginLeft = (eend.style.marginLeft + "10px");
	console.log(document.getElementById("duck").style.marginLeft)
}//??????????????????????????????????????????????
