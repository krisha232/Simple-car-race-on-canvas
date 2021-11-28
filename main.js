canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 120;
rover_height = 70;
rover_x = 10;
rover_y = 10;
rover_image="car1.png";

car_width = 120;
car_height = 70;
car_x = 10;
car_y = 100;
car_image="car2.png";
background_image = "racing.jpg";


function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image

	car_imgTag = new Image(); //defining a variable with a new image
	car_imgTag.onload = uploadcar; // setting a function, onloading this variable
	car_imgTag.src = car_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			rover_up();
			console.log("up_arrow_key");
		}
		if(keyPressed == '40')
		{
			rover_down();
			console.log("down_arrow_key");
		}
		if(keyPressed == '37')
		{
			rover_left();
			console.log("left_arrow_key");
		}
		if(keyPressed == '39')
		{
			rover_right();
			console.log("right_arrow_key");
		}


		if(keyPressed == '87')
		{
			car_up();
			console.log("key w");
		}
		if(keyPressed == '65')
		{
			car_down();
			console.log("key a");
		}
		if(keyPressed == '83')
		{
			car_left();
			console.log("key s");
		}
		if(keyPressed == '68')
		{
			car_right();
			console.log("key d");
		}
	if(rover_x>700){
		console.log("Car 1 won");
		document.getElementById('game_status').innerHTML="Car 1 Won!!";
	}
	if(car_x>700){
		console.log("Car 2 won");
		document.getElementById('game_status').innerHTML="Car 2 Won!!";
	}
}

function rover_up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function rover_down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function rover_left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function rover_right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
		uploadcar();
   }
}


function car_up()
{
	if(car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When w is pressed,  x = " + car_x + " | y = " +car_y);
		 uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function car_down()
{
	if(car_y <=500)
	{
		car_y =car_y+ 10;
		console.log("When a is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function car_left()
{
	if(car_x >= 0)
	{
		car_x =car_x - 10;
		console.log("When s is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadrover();
		 uploadcar();
	}
}
function car_right()
{
	if(car_x <= 700)
	{
		car_x =car_x + 10;
		console.log("When d is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		uploadrover();
		uploadcar();
   }
}