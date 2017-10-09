const digital = document.getElementById('digit');
const minHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');
const secHand = document.getElementById('second');

//displays time
function timeDisplay() {
	let localTime = new Date();
	let h = underTen(localTime.getHours());
	let m = underTen(localTime.getMinutes());
	let s = underTen(localTime.getSeconds());

	digital.innerHTML = `Current Local Time: ${h}:${m}:${s}`;

	//calls the hand rotation functions
	secHandRotate(s);
	minHandRotate(m);
	hourHandRotate(h,m, s);

	setTimeout(timeDisplay, 500);
}

//rotates the minute hand 
function minHandRotate(minutes) {
	let minRotate = minutes * 6;
	minHand.style.transformOrigin = 'center bottom';
	minHand.style.transform = `rotate(${minRotate}deg)`;
}

//rotates the hour hand
function hourHandRotate(hours, minutes, seconds) {
	let hourRotate = ((hours + (minutes/60) + (seconds/3600))/12)*360;
	hourHand.style.transformOrigin = 'center bottom';
	hourHand.style.transform = `rotate(${hourRotate}deg)`;
}

//rotates the second hand
function secHandRotate(seconds){
	let secRotate = seconds * 6;
	secHand.style.transformOrigin = 'center bottom';
	secHand.style.transform = `rotate(${secRotate}deg)`;
}

//adds a 0 if generated number is under 10
function underTen(x) {
	if (x <10) {
		x = `0${x}`;
	}
	return x;
}

timeDisplay();
