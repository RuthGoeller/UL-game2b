/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432; // NB. we are now using a variable for the floor position

	// NB. We are now using the built-in variables height and width
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	treePos_x = width / 2;
	treePos_y = height / 2;

	canyon = {
		x_pos: 0,
		width: 100
	};

	collectable = {
		x_pos: 100,
		y_pos: 100,
		size: 50
	};

	mountain = {
		x_pos: 400,
		y_pos: floorPos_y,
		height: 200,
		width: 200
	};

	cloud = {
		x_pos: 200,
		y_pos: 100,
		width: 100,
		height: 50
	};
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); // draw some green ground

	// Draw mountain
	fill(100);
	triangle(
		mountain.x_pos,
		mountain.y_pos,
		mountain.x_pos + mountain.width / 2,
		mountain.y_pos - mountain.height,
		mountain.x_pos + mountain.width,
		mountain.y_pos
	);

	// Draw tree
	push();
	translate(treePos_x, treePos_y);
	fill(139, 69, 19); // Brown color for the tree trunk
	noStroke(); // No outline
	rect(0, 0, 40, 96);
	fill(34, 139, 34); // Dark green color for the tree top
	ellipse(20, -56, 120, 120);
	fill(255);
	text("tree", 80, 10);
	pop();

	// Draw cloud
	fill(255);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.width, cloud.height);

	// Draw canyon
	fill(100);
	rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);

	// Draw collectable item
	fill(255, 255, 0);
	ellipse(
		collectable.x_pos,
		collectable.y_pos,
		collectable.size,
		collectable.size
	);

	// Draw game character
	fill(255, 0, 0);
	rect(gameChar_x - 10, gameChar_y - 20, 15, 40);
	fill(0);
	rect(gameChar_x - 10, gameChar_y + 20, 15, 10);
}

function mousePressed() {
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
