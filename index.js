const clock = document.getElementById('clockDisplay');
const hex = document.getElementById('hexDisplay');
const colors = document.getElementById('colors');

//displays time in digital and as a hexcode and changes background
function timeDisplay() {
	let localTime = new Date();
	let h = underTen(localTime.getHours());
	let m = underTen(localTime.getMinutes());
	let s = underTen(localTime.getSeconds());

	// let trueH = localTime.getHours();
	// let trueM = localTime.getMinutes();
	// let trueS = localTime.getSeconds();

	//changes clock to 12 hour format
	if (h < 12) {
		clock.innerHTML = `Current Local Time: ${h}:${m}:${s} A.M.`;
	}else if (h===12){
		clock.innerHTML = `Current Local Time: ${h}:${m}:${s} P.M.`;
	}else{
		let newH = h - 12;
		newH = underTen(newH);
		clock.innerHTML = `Current Local Time: ${newH}:${m}:${s} P.M.`;
	}

	//displays clock in hex format and changes background colors
	let hexColor = `${h}${m}${s}`;
	let hexCode = parseInt(hexColor);
	colors.style.background = `#${hexColor}`;

	// inverts the color of the text relative to the background
	let textColor = hexInvert(hexColor);
	colors.style.color = `#${textColor}`;

	hex.innerHTML = `The background hex color code is:#${hexColor} <br> The inverted text color code is: #${textColor}`;
	//keeps clock updated every half second
	const updated = setTimeout(timeDisplay, 500);
}

//adds a 0 before number if under ten
function underTen(x) {
	if (x <10) {
		x = `0${x}`;
	}
	return x;
}

//text color inverter; inverts the hexCode for the color of text
function hexInvert(num) {
	let splitNum = num.toString().split('');
	let baseArray = "0123456789".split('');
	let inverseArray = "FEDCBA9876".split('') 
	let hexArray = [];
	let inverseCode = '';

	for ( i = 0; i < splitNum.length; i++) {
		let newCode = baseArray.indexOf(splitNum[i]);
		hexArray.push(inverseArray[newCode]);
	}
	
	inverseCode = hexArray.join('');
	return inverseCode;
}

