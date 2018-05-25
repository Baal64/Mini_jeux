

function updateMove() {			
	if (isMoveUp) {
		y -= 1;
	} 
	if (isMoveDown) {
		y += 1;
	}
	if (isMoveLeft) {
		x -= 1;
	}
	if (isMoveRight) {
		x += 1;
	}

}

document.addEventListener('keydown', move);
document.addEventListener('keyup', noMove);


function move(evt) {
	switch (evt.keyCode) {
		case 37:
			isMoveLeft= true;
			break;
		case 38:
			isMoveUp= true;
			break;
		case 39:
			isMoveRight= true;
			break;
		case 40:
			isMoveDown= true;
			break;
	}
}

function noMove(evt) {
	switch (evt.keyCode) {
		case 37:
			isMoveLeft= false;
			break;
		case 38:
			isMoveUp= false;
			break;
		case 39:
			isMoveRight= false;
			break;
		case 40:
			isMoveDown= false;
			break;
	}
}