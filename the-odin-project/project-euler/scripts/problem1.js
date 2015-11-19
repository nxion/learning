function problem1() {
		var sum = 0;
		for (var i = 2; i < 1000; i++) {
			if ((i % 3 == 0) || (i % 5 == 0)) {
				sum += i;
			}
		}
		alert("The sum of all multiples of 3 or 5 below 1000 is " + sum + ".");
}