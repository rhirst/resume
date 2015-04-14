// Canvas Variables
var canvas;
var Canvas_width;
var Canvas_height;
var context;
var timer;
var center = Object();
background = new Background();
var LoseCondition = true;

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
var explosion_array = [];
var star_array = [];

var points = 0;
var timer = 0;
var game_level = 1;
var player = new ship();
var ship_level = 2;
var enemy_count = 0;
var gamestate = 0;


//enemy_array[1] = new enemy();

console.log("ship: " + ship_level);
// ****************GAME_INIT**********************************
function init() {
	points = 0;
	timer = 0;
	game_level = 1;
	player = new ship();
	ship_level = 0;
	enemy_count = 0;
	gamestate = 0;
	bullet_array= [];
	enemy_array= [];
	enemy_bullets= [];
	explosion_array= [];
	LoseCondition = false;
	makeships();
	Update_points(points);
	Update_level(game_level);
}

// ****************CONSTRUCTORS*******************************
// Ship Constructor
  
function ship() {
	var obj = {}; 
	obj.image = new Image();
	console.log("ship: " + ship_level);
	obj.image.src = "../img/FlightGame/shuttlesprites.png";
	if (ship_level == 0) obj.image.src = "../img/FlightGame/shuttlesprites.png";
	else if (ship_level == 1) obj.image.src = "../img/FlightGame/shuttlesprites.png";
	else if (ship_level == 2) obj.image.src = "../img/FlightGame/shuttlesprites.png";
	obj.x = Canvas_width/2;
	obj.y = Canvas_height*(3/4);
	obj.vy = 0;
	obj.xy = 0;
	obj.w = 52;
	obj.h = 52;
	obj.index = 4;
	obj.fw = 260;
	obj.frames = 5;
	obj.bombcount = 5;
	obj.color = "000000";
	obj.tick = 0;
	obj.tpf = 1;
	
	obj.update = function() {
		if (obj.index<8 && right_key){
			obj.index+=.5;
		}
		else if (obj.index>0 && left_key){
			obj.index-=.5;
		}

		if (!right_key && !left_key){
			if (obj.index>4){
				obj.index -=.5;
			}
			if (obj.index<4){
				obj.index +=.5;
			}
		}

		if (right_key && obj.x < (Canvas_width - obj.w)) obj.x += 7;
		else if (left_key && obj.x > 0) obj.x -=7;
		if (up_key && obj.y >0) obj.y -=7;
		else if(down_key && obj.y < (Canvas_height - obj.h)) obj.y +=7;
		for (var i = 0; i < enemy_bullets.length; i++) {
			//bullet check
			
			if ((enemy_bullets[i].x > (obj.x)) && (enemy_bullets[i].x < (obj.x+obj.w))){
				
				if ((enemy_bullets[i].y < (obj.y+obj.h))&&(enemy_bullets[i].y > (obj.y))){ 
		
				console.log("hit");
				
				//alert('you lose');
				//obj.os = false;
				var me_boom = new explosion(obj.x, obj.y);
				explosion_array.push(me_boom);
				LoseCondition = true;
				
				}
				}
		}
			
	};
	
	obj.draw = function() {
		//console.log("ship draw");
		//context.drawImage(obj.image, obj.x, obj.y);
		obj.draw = function () {
			context.drawImage(	obj.image, 
								(Math.floor(obj.index/2) * (obj.fw/obj.frames)), 
								0, 
								(obj.fw/obj.frames), 
								obj.h, 
								obj.x, 
								obj.y, 
								(obj.fw/obj.frames), 
								obj.h);
		}
	};
	return obj;
	}
	
// Bullet constructor

function bullet () {
	//console.log("bullet");
	var obj = {}; 
	obj.image = new Image();
	obj.image.src = "../img/FlightGame/laserblue.png";
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
	obj.image.src = "../img/FlightGame/laserred.png";
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
	};	
	
function enemy (type, power) {
	//console.log("enemy");
	var obj = {};
	obj.type = type;
	obj.image = new Image();
	if (obj.type == 0){
		obj.image.src = "../img/FlightGame/enemyship.png";
		obj.vy = Math.random() * 2;
		obj.vx = Math.random() * 10;
		obj.hp = 1;
		obj.fire_rate = Math.floor((Math.random()) * 150)+30;
		obj.shoot = function() {
			var shot = new enemy_bullet(obj.x, obj.y);
			enemy_bullets.push(shot);
		}
		}
	else if (obj.type == 1){ 
		obj.image.src = "../img/FlightGame/enemyshipFatty.png";
		obj.vy = Math.random();
		obj.vx = Math.random() * 2;
		obj.hp = 3;
		obj.fire_rate = Math.floor((Math.random()) * 100)+30;
		obj.shoot = function() {
			var shot = new enemy_bullet(obj.x, obj.y);
			var shot2 = new enemy_bullet(obj.x+obj.w, obj.y);
			enemy_bullets.push(shot);
			enemy_bullets.push(shot2);
		}
		}
	obj.powerup = power;
	obj.x = 50;
	obj.y = 100; 
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
	obj.update = function() {		
		if(timer%obj.fire_rate == 0) obj.shoot();
		
		obj.bounds();
		obj.x += obj.vx;
		obj.y += obj.vy;
	
		for (var i = 0; i < bullet_array.length; i++) {
			//bullet check
			
			if ((bullet_array[i].x > (obj.x)) && (bullet_array[i].x < (obj.x+obj.w))){
				
				if ((bullet_array[i].y < (obj.y+obj.h))&&(bullet_array[i].y > (obj.y))){ 
		
				console.log("hit");
				obj.hp --;
				if (obj.hp <= 0){
					obj.os = false;
				}
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
	//***************Create Enemies****************************
	
	function makeships () {
		if(game_level == 1) {
		for (i = 0; i < 10; i++){
			this_enemy = new enemy(0);
			this_enemy.x = Math.random() * (Canvas_width - 50);
			enemy_array.push(this_enemy);
			enemy_count ++;
		}
		}
		
		else {
			for(i = 0; i < (5 + game_level*5) ; i++){
				if(i%5)this_enemy = new enemy(0);
				else this_enemy = new enemy(1);
				this_enemy.x = Math.random() * (Canvas_width-50);
				
				enemy_array.push(this_enemy);
				enemy_count ++;
			}
		}
	}
	
	//***************CanvasFunctions***************************
	
	function draw() {
		clearCanvas();
		background.draw();
		for (var i = 0; i < star_array.length; i++) {
			star_array[i].draw();
		}
		if (LoseCondition){			
			var lose = {};
			lose.image = new Image();
			lose.image.src = "../img/FlightGame/Controls.png";    // font in image is 'i_fink_u_freeky' by author Frédéric Rich
			
			
			for (var i = 0; i < enemy_array.length; i++) {
				
				enemy_array[i].draw();
			}
			for (var i = 0; i < explosion_array.length; i++) {
				explosion_array[i].draw();
			}
			context.drawImage(lose.image, 0, 0);
		}
		else{
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
				
			for (var i = 0; i < explosion_array.length; i++) {
				explosion_array[i].draw();
			}
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
	
	function update(LoseCondition) {
		if(LoseCondition){
			timer ++;
			for (var i = 0; i < enemy_array.length; i++) {
				enemy_array[i].update();
				if(!enemy_array[i].os){
					Update_points(enemy_array[i].points);
					var x_splode = enemy_array[i].x;
					var y_splode = enemy_array[i].y;
					enemy_array.splice(i,1);
					var boom = new explosion(x_splode, y_splode);
					explosion_array.push(boom);
					enemy_count --;
					}
			}
			for (var i=0; i < bullet_array.length; i++) {
				bullet_array[i].update();
				if (!bullet_array[i].os){
					bullet_array.splice(i,1);
				}
			}
			for (var i = 0; i < explosion_array.length; i++) {
				explosion_array[i].update();
				if (explosion_array[i].index == explosion_array.frames){
					explosion_array.splice(i,1);
					}
				
			}
			

		}
		else {
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
					var x_splode = enemy_array[i].x;
					var y_splode = enemy_array[i].y;
					enemy_array.splice(i,1);
					var boom = new explosion(x_splode, y_splode);
					explosion_array.push(boom);
					enemy_count --;
					}
			}
			for (var i = 0; i < explosion_array.length; i++) {
				explosion_array[i].update();
				if (explosion_array[i].index == explosion_array.frames){
					explosion_array.splice(i,1);
					}
				
			}
			
			
		}
		for (var i = 0; i < star_array.length; i++) {
			star_array[i].update();
		}
	}
	
	
	
	function gameLoop() {
	if(LoseCondition){
		
		update(LoseCondition);
		draw(LoseCondition);


		}
	else{
		
		update(LoseCondition);
		draw(LoseCondition);
		
	
	
		if (enemy_count == 0){
			game_level++;
			Update_level(game_level);
			makeships();
			}
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
	makestars();
	
	return timer;
}

function Background () {
	var obj ={};
	obj.draw = function() {
		/*
		var gradient=context.createLinearGradient(0,0,0,Canvas_height);
		gradient.addColorStop(0.0, "#000000");
		gradient.addColorStop(0.4, "#8904B1");
		gradient.addColorStop(0.81, "#000000");
		gradient.addColorStop(1.0, "#8A2908");
		*/
		context.fillStyle = "#000000";
		context.fillRect(0, 0, Canvas_width, Canvas_height);

	};
	return obj;
	}
	
//****************KeyEvents*********************************
function handleKeyDown(event) {
	//event.preventDefault();
	if(event.keyCode == 37) left_key = true;
	else if(event.keyCode == 39) right_key = true;
	
	if(event.keyCode == 38) up_key = true;
	else if (event.keyCode == 40) down_key = true;
	
	if(event.keyCode == 32) space = true;

	if(event.keyCode == 82) init();
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
	
function Update_level(game_level){
	var levelElement = $('level');
	levelElement.innerHTML = game_level;
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
	
//***************Effects***************************************
function explosion(xcord, ycord){
	var obj = {};
	obj.image = new Image();
	obj.image.src = "../img/FlightGame/explosion2.png";
	obj.index = 0;
	obj.w = 4400;
	obj.h = 100;
	obj.frames = 44;
	obj.tick = 0;
	obj.tpf = 1;
	obj.draw = function () {
		context.drawImage(	obj.image, 
							(obj.index * (obj.w/obj.frames)), 
							0, 
							(obj.w/obj.frames), 
							obj.h, 
							xcord, 
							ycord, 
							(obj.w/obj.frames)/2, 
							obj.h/2);
	}
	obj.update = function () {
		console.log("update");
		obj.tick ++;
		if (obj.tick > obj.tpf) {
			obj.tick = 0;
			obj.index += 2;
		}
	}
	return obj;
	};

function star(){
	var obj = {};
	obj.x = Math.random()*Canvas_width;
	obj.y = Math.random()*Canvas_height;
	obj.vy = Math.random()*2+5;
	obj.update = function(){
		obj.y += obj.vy;
		if (obj.y > Canvas_height){
			obj.x = Math.random()*Canvas_width;
			obj.y = 0;
			obj.vy = Math.random()*2+5;
		}
	}
	obj.draw = function (){
		context.fillStyle = "#FFFFFF";
		context.fillRect(obj.x, obj.y, 1, 1);
	}
	return obj;
};

function makestars(){
	for (i = 0; i < 100; i++){
			this_star = new star();
			star_array.push(this_star);
		}
}



