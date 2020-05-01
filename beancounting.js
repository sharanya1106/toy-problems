const countBs = function(a) {
	let counter = 0;
	for(let count = 0; count < a.length; count++) {
		if(a[count] == 'B') {
			counter = counter + 1;
		}
	}
	return counter;
}
 const countchar = function(a,b) {
	let counter = 0;
	for(let count = 0; count < a.length; count++) {
		if(a[count] == b) {
			counter = counter + 1;
		}
	}
	return counter;
}
console.log(countBs("Birth day"));
console.log(countchar("sharanya", "a"));