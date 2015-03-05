// Canvas Variables
var canvas;
var Canvas_width;
var Canvas_height;
var context;
var timer;
var center = Object();
background = new Background();

// Key Variable
var right_key = false;
var left_key = false;
var up_key = false;
var down_key = false;
var space = false;

// Sprite Arrays
var bullet_array = [];
var enemy_array = [];
var enemy_bullets = [];

var points = 0;
var timer = 0;
var game_level = 0;
var player = new ship();
var ship_level = 2;
var enemy_count = 0;
var gamestate = 0;


//enemy_array[1] = new enemy();

console.log("ship: " + ship_level);

// ****************CONSTRUCTORS*******************************
// Ship Constructor

function ship() {
	var obj = {}; 
	obj.image = new Image();
	console.log("ship: " + ship_level);
	obj.image.src = "images/shuttle.png";
	if (ship_level == 0) obj.image.src = "images/shuttle.png";
	else if (ship_level == 1) obj.image.src = "images/ship1.png";
	else if (ship_level == 2) obj.image.src = "images/ship2.png";
	obj.x = 150;
	obj.y = 450;
	obj.vy = 0;
	obj.xy = 0;
	obj.w = 52;
	obj.h = 52;
	obj.bombcount = 5;
	obj.color = "000000";
	
	obj.update = function() {
		if (right_key && obj.x < (Canvas_width - obj.w)) obj.x += 7;
		else if (left_key && obj.x > 0) obj.x -=7;
		if (up_key && obj.y >0) obj.y -=7;
		else if(down_key && obj.y < (Canvas_height - obj.h)) obj.y +=7;
		for (var i = 0; i < enemy_bullets.length; i++) {
			//bullet check
			
			if ((enemy_bullets[i].x > (obj.x)) && (enemy_bullets[i].x < (obj.x+obj.w))){
				
				if ((enemy_bullets[i].y < (obj.y+obj.h))&&(enemy_bullets[i].y > (obj.y))){ 
					
					console.log("hit");
					alert('you lose');
				//obj.os = false;
				obj.x = -150;
				obj.vy = 0;
				bullet_array[i].os = false;
				
			}
		}
	}
	
};

obj.draw = function() {
		//console.log("ship draw");
		context.drawImage(obj.image, obj.x, obj.y);
	};
	return obj;
}

// Bullet constructor

function bullet () {
	//console.log("bullet");
	var obj = {}; 
	obj.image = new Image();
	obj.image.src = "images/laser.png";
	obj.x = player.x + 15;
	obj.y = player.y;
	obj.vy = 10;
	obj.vx = 0;
	obj.os = true;
	obj.update = function() {
		obj.y -= obj.vy;
		obj.bounds();
	};
	obj.bounds = function() {
		if ((obj.x > Canvas_width)||(obj.x < 0)){
			obj.os = false;
		}
		if ((obj.y > Canvas_height)||(obj.y < 0)){
			if (obj.os){
				obj.os = false;
			}
			
		}
	};
	obj.draw = function() {
	//console.log("bullet.draw");
	
	context.drawImage(obj.image, obj.x, obj.y);

};
return obj;
}


// enemy bullet constructor

function enemy_bullet(x_cord, y_cord) {
	var obj = {}; 
	obj.image = new Image();
	obj.image.src = "images/laser.png";
	obj.x = x_cord;
	obj.y = y_cord;
	obj.vy = 10;
	obj.vx = 0;
	obj.os = true;
	obj.update = function() {
		obj.y += obj.vy;
		obj.bounds();
	};
	obj.bounds = function() {
		if ((obj.x > Canvas_width)||(obj.x < 0)){
			obj.os = false;
		}
		if ((obj.y > Canvas_height)||(obj.y < 0)){
			if (obj.os){
				obj.os = false;
			}
			
		}
	};
	obj.draw = function() {
		
		context.drawImage(obj.image, obj.x, obj.y);

	};
	return obj;
}	

function enemy () {
	//console.log("enemy");
	var obj = {};
	obj.image = new Image();
	obj.image.src = "images/enemyship.png";
	obj.x = 50;
	obj.y = 100; 
	obj.vy = Math.random() * 2;
	obj.vx = Math.random() * 10;
	obj.h = 30;
	obj.w = 30;
	obj.os = true;
	obj.points = 50;
	obj.bounds = function() {
		if (((obj.x + obj.w)> Canvas_width)||(obj.x < 0)){
			obj.vx = -obj.vx
		}
		if ((obj.y > (Canvas_height/2))||(obj.y < 0)){
			obj.vy = -obj.vy
			
		}
	};
	obj.shoot = function() {
		
		var shot = new enemy_bullet(obj.x, obj.y);
		enemy_bullets.push(shot);
	}
	obj.update = function() {
		var timer_change = Math.floor((Math.random()) * 150)+30;
		
		if(timer%timer_change == 0) obj.shoot();
		
		obj.bounds();
		obj.x += obj.vx;
		obj.y += obj.vy;
		
		for (var i = 0; i < bullet_array.length; i++) {
			//bullet check
			
			if ((bullet_array[i].x > (obj.x)) && (bullet_array[i].x < (obj.x+obj.w))){
				
				if ((bullet_array[i].y < (obj.y+obj.h))&&(bullet_array[i].y > (obj.y))){ 
					
					console.log("hit");
					obj.os = false;
					obj.x = -150;
					obj.vy = 0;
					bullet_array[i].os = false;
					
				}
			}
		}
		
	}
	obj.draw = function() {
		if (obj.os){
			context.drawImage(obj.image, obj.x, obj.y, obj.w, obj.h);
		}
	}
	return obj;
}



	//***************EndConstructors***************************
	
	function makeships () {
		if(game_level == 1) {
		}
		
		for(i = 0; i < 10 ; i++){
			this_enemy = new enemy();
			this_enemy.x = Math.random() * (Canvas_width-50);
			
			enemy_array.push(this_enemy);
			enemy_count ++;
		}
	}
	
	//***************CanvasFunctions***************************
	
	function draw() {
	// Clear the screen.
	clearCanvas();
	background.draw();
	// Draw my player
	context.fillStyle = player.color;
	//context.drawImage( player.image, player.x, player.y );
	player.draw();
	// Draw enemy ships
	
	for (var i = 0; i < enemy_array.length; i++) {
		
		enemy_array[i].draw();
	}
	
	// Draw Bullets
	//console.log(bullet_array.length)
	for (var i = 0; i < bullet_array.length; i++) {
		
		bullet_array[i].draw();
	}
	
	for (var i = 0; i < enemy_bullets.length; i++){
		enemy_bullets[i].draw();
	}
}
function clearCanvas() {
	// Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	context.restore();
}

function update() {
	player.update()
	timer ++;
	for (var i=0; i < bullet_array.length; i++) {
		bullet_array[i].update();
		if (!bullet_array[i].os){
			bullet_array.splice(i,1);
		}
	}
	for (var i=0; i < enemy_bullets.length; i++) {
		enemy_bullets[i].update();
		if (!enemy_bullets[i].os){
			enemy_bullets.splice(i,1);
		}
	}
	for (var i = 0; i < enemy_array.length; i++) {
		enemy_array[i].update();
		if(!enemy_array[i].os){
			Update_points(enemy_array[i].points);
			enemy_array.splice(i,1);
			enemy_count --;
		}
	}
	console.log(enemy_count);
	
}


function gameLoop() {
	if (gamestate == 0){
		update();
		draw();
	}
	else if (gamestate == 1) {
		//lose screen
	}
	if (enemy_count == 0){
		game_level++;
		makeships();
	}
}

function onLoad() {
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
	Canvas_width = canvas.width;
	Canvas_height = canvas.height;
	ship_level = 0;

	
	window.addEventListener("keydown",handleKeyDown,false);
	window.addEventListener("keyup",handleKeyUp,false);
	center.x = canvas.width / 2;
	center.y = canvas.height / 2;

	player.x = center.x;
	player.y = center.y;	

	timer = setInterval(gameLoop, 30);
	makeships();
	
	return timer;
}

function Background () {
	var obj ={};
	obj.draw = function() {
		var gradient=context.createLinearGradient(0,0,0,Canvas_height);
		gradient.addColorStop(0.0, "#000000");
		gradient.addColorStop(0.4, "#8904B1");
		gradient.addColorStop(0.81, "#000000");
		gradient.addColorStop(1.0, "#8A2908");
		context.fillStyle = gradient;
		context.fillRect(0, 0, Canvas_width, Canvas_height);

	};
	return obj;
}

//****************KeyEvents*********************************
function handleKeyDown(event) {
	if(event.keyCode == 37) left_key = true;
	else if(event.keyCode == 39) right_key = true;
	
	if(event.keyCode == 38) up_key = true;
	else if (event.keyCode == 40) down_key = true;
	
	if(event.keyCode == 32) space = true;
}

function handleKeyUp(event) {
	if(event.keyCode == 37) left_key = false;
	else if(event.keyCode == 39) right_key = false;
	
	if(event.keyCode == 38) up_key = false;
	else if (event.keyCode == 40) down_key = false;
	
	if(event.keyCode == 32) {
		shoot();
	}
}

//***************UI Updates*******************************
function $(id) {
	var element = document.getElementById(id);
	if (element == undefined)
		alert("Missing " + id + " please check your HTML");
	return element;
}

function Update_points(points_val){
	points += points_val;
	var pointsElement = $('points');
	pointsElement.innerHTML = points;
}

//***************PlayerFunctions**************************

function shoot () {
	
	laser = new bullet();
	if (ship_level == 2){
		laser2 = new bullet();
		laser2.x += 40;
		console.log("two bullet");
		bullet_array.push(laser2);
	}
	bullet_array.push(laser);
	console.log("bt" + bullet_array.length);
	
}
