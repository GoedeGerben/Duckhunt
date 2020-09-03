var click = 0;
var shots = 0;//houd je resterende kogels bij.
var totalHits = 0;//houd bij hoeveel eenden je geraakt hebt.
var scorecount = 0;//houd je score bij.
var directions = ["marginLeft", "marginTop"]
var direction = "marginLeft";
var eend = document.getElementById("duck");
eend.style.marginLeft = "550px";
eend.style.marginTop = "400px";
document.getElementById("bullets").style.clip = "rect(0px,110px,25px,0px)";

function miss() {//De functie voor als je je schot mist.

	if (click == 1) { //Zorgt ervoor dat deze functie niet word uitgevoerd als er op de eend geklikt word.
		click = 0;
	}else{
		console.log("miss");
		shooting()
	}
}

function raak() {//de functie voor als je je schot raakt.
	click = 1;
	console.log("raak");
	totalHits++
	eend.style.marginTop = "8400px";
}

function shooting() {
	shots++
	if (shots == 1) {
		document.getElementById("bullets").style.clip = "rect(0px,80px,25px,0px)";
	}else if (shots == 2) {
		document.getElementById("bullets").style.clip = "rect(0px,40px,25px,0px)";
	}else {
		alert("Je hebt al je kogels gebruikt")
		location.reload();
	}
}


setInterval(function move() {
	var randomnumber = Math.floor(Math.random()*4);

	if (randomnumber == 0) {
		eend.style.marginLeft = parseInt(eend.style.marginLeft) + 10 + "px";
	}else if (randomnumber == 1) {
		eend.style.marginTop = parseInt(eend.style.marginTop) + 10 + "px";	
	}else if (randomnumber == 2) {
		eend.style.marginLeft = parseInt(eend.style.marginLeft) - 10 + "px";
	}else if (randomnumber == 3) {
		eend.style.marginTop = parseInt(eend.style.marginTop) - 10 + "px";
	}
	console.log(randomnumber)
	console.log(eend.style.marginTop)
	console.log(eend.style.marginLeft)
},1500);

