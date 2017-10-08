const clock = document.getElementById('clockDisplay');
const hex = document.getElementById('hexDisplay');
const body = document.getElementById('body');

//displays time in digital and as a hexcode and changes background
function timeDisplay() {
	let localTime = new Date();
	let h = underTen(localTime.getHours());
	let m = underTen(localTime.getMinutes());
	let s = underTen(localTime.getSeconds());

	//changes clock to 12 hour format
	if (h < 12) {
		clock.innerHTML = `Current Local Time: ${h}:${m}:${s} A.M.`;
	}else if (h===12){
		clock.innerHTML = `Current Local Time: ${h}:${m}:${s} P.M.`;
	}else{
		let newH = underTen(h - 12);
		clock.innerHTML = `Current Local Time: ${newH}:${m}:${s} P.M.`;
	}

	//changes background color
	let backColor = `${h}${m}${s}`;
	body.style.background = `#${backColor}`;

	// inverts the color of the text relative to the background
	let textColor = hexInvert(backColor);
	body.style.color = `#${textColor}`;

	//displays the hex codes for background and text
	hex.innerHTML = `The background hex color code is:#${backColor} <br> The inverted text color code is: #${textColor}`;

	//keeps clock updated every half second by calling timeDisplay recursively at the end of each execution.
	setTimeout(timeDisplay, 500);
}//end timeDisplay function

//adds a 0 before number if under ten
function underTen(x) {
	if (x <10) {
		x = `0${x}`;
	}
	return x;
}

//text color inverter; inverts the hexCode for the color of text
function hexInvert(num) {
	let splitNum = num.split('');
	let baseArray = "0123456789".split('');
	let inverseArray = "FEDCBA9876".split('') 
	let hexArray = [];
	let inverseCode = '';

	for (i = 0; i < splitNum.length; i++) {
		let newCode = baseArray.indexOf(splitNum[i]);
		hexArray.push(inverseArray[newCode]);
	}
	
	inverseCode = hexArray.join('');
	return inverseCode;
}

timeDisplay();
