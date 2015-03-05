var canvas;
var context;
var timer;
var shoot_speed;

var bullet_array=[]; 
var bullet_total = 0;
var current_bullet = 0; 

var enemy_array = [];
var enemy_total = 0; 
var current_ship = 0;

var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var space = false;

var center = Object();

var player = Object();
player.w = 10;
player.h = 20;
player.color = "000000";
player.image = null;

background = new Background();

var bad_guy = new enemy();
enemy_array[0] = bad_guy;
console.log("enemy_array.length: "+enemy_array.length);


function clearCanvas() {
	// Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	context.restore();
}

function handleKeyDown(event) {
	if(event.keyCode == 37) leftKey = true;
	else if(event.keyCode == 39) rightKey = true;
	
	if(event.keyCode == 38) upKey = true;
	else if (event.keyCode == 40) downKey = true;
	
	if(event.keyCode == 32) space = true;
}

function handleKeyUp(event) {
	if(event.keyCode == 37) leftKey = false;
	else if(event.keyCode == 39) rightKey = false;
	
	if(event.keyCode == 38) upKey = false;
	else if (event.keyCode == 40) downKey = false;
	
	if(event.keyCode == 32) {
	space = false;
	}
	}
	
function handleKeyPress(event) {
	if (event.keyCode == 32) shoot();
	}

function draw() {
	// Clear the screen.
	clearCanvas();
	background.draw();
	// Draw my player
	context.fillStyle = player.color;
	context.drawImage( player.image, player.x, player.y );
	// Draw enemy ships
	if (enemy_array.length){
	for (var i = 0; i < enemy_array.length; i++){
		console.log(enemy_array.length);
		context.drawImage(enemy_array[i].image, enemy_array[i].x, enemy_array[i].y);
		}
	}
	//draw lasers
	if (bullet_array.length){
		for (var i = 0; i < bullet_array.length - 1; i++){
			context.drawImage(bullet_array[i].image, bullet_array[i].x, bullet_array[i].y);
			}
	}
	
}

function update() {
bullet_total = 0;
for (var i = 0; i < bullet_array.length-1; i++) {
 bullet_array[i].update();
 
 if (bullet_array[i].os == true){ 
	bullet_total += 1;
 }
 for (var i = 0; i < enemy_array.length; i++) {
	enemy_array[i].update();
	}
 }
if (rightKey) player.x += 5;
else if (leftKey) player.x -= 5;
if (upKey) player.y -= 5;
else if (downKey) player.y += 5;
}

function gameLoop() {
	update();
	draw();
}

function onLoad() {
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
	CanvasWidth = canvas.width;
	CanvasHeight = canvas.height;
	
	window.addEventListener("keydown",handleKeyDown,false);
	window.addEventListener("keyup",handleKeyUp,false);
	window.addEventListener("keypress", handleKeyPress, false);
	center.x = canvas.width / 2;
	center.y = canvas.height / 2;

	player.x = 300;
	player.y = 300;
	
	player.image = new Image();
	player.image.src = "images/shuttle.png";
	
	

	timer = setInterval(gameLoop, 30);
	return timer;
}

function Background () {
var obj ={};
obj.draw = function() {
	var gradient=context.createLinearGradient(0,0,0,CanvasHeight);
	gradient.addColorStop(0.0, "#000000");
	gradient.addColorStop(0.4, "#8904B1");
	gradient.addColorStop(0.81, "#000000");
	gradient.addColorStop(1.0, "#8A2908");
	context.fillStyle=gradient;
	context.fillRect(0, 0, CanvasWidth, CanvasHeight);

};
return obj;
}

//bullet constructor
function bullet () {
	console.log("bullet");
	var obj = {}; 
	obj.image = new Image();
	obj.image.src = "images/laser.png";
	obj.x = player.x + 5;
	obj.y = player.y;
	obj.vy = 10;
	obj.xy = 0;
	obj.os = true;
	obj.update = function() {
		obj.y -= obj.vy;
		obj.bounds();
		};
	obj.bounds = function() {
		if ((obj.x > 600)||(obj.x < 0)){
			obj.vx = -obj.vx;
		}
		if ((obj.y > 620)||(obj.y < 0)){
			obj.os = false;
			//delete obj;
		}
	};
	obj.draw = function() {
	console.log("bullet.draw");
	context.drawImage(obj.image, obj.x, obj.y);

	};
	return obj;
	}
	
	
//enemy ship constructor

function enemy() {
	var obj = {};
	obj.image = new Image();
	obj.image.src = "images/enemyship.png";
	obj.x = 250;
	obj.y = 300;
	obj.vy = 0; 
	obj.vx = 0; 
	obj.id = current_ship;
	obj.update = function(){
	for (var i = 0; i > bullet_array.length; i++){
		console.log("bulletcheck");
		if ((bullet_array[i].x > (obj.x-120)) && (bullet_array[i].x < (obj.x+120))&&((bullet_array[i].y < (obj.y+110))&&(bullet_array[i].y > (obj.y-110)))){ 
			delete obj;
			console.log("hit");
			}
		}
	
	};
	obj.draw = function() {
		context.drawImage(obj.image, obj.x, obj.y);
	};
	return obj;
	}
	
function shoot () {
	var player_state = false;
	if (bullet_total < 4) player_state = true;
	if (player_state){
		if (bullet_array.length < 6) {
			laser = new bullet();
			bullet_array[current_bullet] = laser;
			current_bullet ++;
			
			console.log("bt" + bullet_total);
			console.log("cb" + current_bullet);
			if (current_bullet == 5) current_bullet = 0;
			
		}
	}
	 
}
