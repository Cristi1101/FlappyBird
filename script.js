var ctx = null;
var canvas = null;
var img = null;
var cloudimg = null;
var myGamePiece = null;

var flappyPosition = 0;
var cloudPosition = 340;
var s = 0;
var xhttp;
var xmlDoc;

class Flappy {
   constructor(x){
		this.x = x;		
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        img = document.getElementById("flappyImg");
		flappyPosition = canvas.height / 2 - img.height / 2;
		ctx.drawImage(img, x, flappyPosition);

	}
}

class Component {
	constructor(x, y){
		this.x = x;  
		this.y = y;
		cloudimg = document.getElementById("cloudImg");
		ctx.drawImage(cloudimg, x, y);
	}
}



window.onload = function start() {
		fp = new Flappy(10);	
		comp = new Component(cloudPosition, 0);

		myFunction();
};

function draw() {
    if (flappyPosition <= 600)
	{
		if(cloudPosition <= -1000)
		{	
			cloudPosition = 360;
		}
		cloudPosition -= 50;
		
		if (window.XMLHttpRequest)
		{ xhttp = new XMLHttpRequest() }
		else
		{ xhttp = new ActiveXObject("Microsoft.XMLHTTP") }
		
		xhttp.open("GET","http://davos.science.upm.ro/~traian/web_curs/ap_electric.php", false);
		xhttp.send("");
		xmlDoc = xhttp.responseXML;

		s = xmlDoc.getElementsByTagName("val")[0].childNodes[0].nodeValue;
		console.log(s);
		document.form2.fname.value = "Wind intensity: " + s/2;


		var c = document.getElementById("myCanvas2");
		var ctx2 = c.getContext("2d");
		
		ctx2.clearRect(0, 0, c.width, c.height);
		ctx2.fillRect(200, 640, 50, -s/2);
		
		flappyPosition += getRandomArbitrary(-35, 35);
		
        ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(cloudimg, cloudPosition, 0);
		ctx.drawImage(img, 10, flappyPosition);
		
		requestAnimationFrame(myFunction);
    }
}

function myFunction() {
	var min = 1,
    max = 1.5;
	let rand = Math.floor(Math.random() * (max - min + 1) + min);
	
	setTimeout(draw, rand * 300);
	
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


