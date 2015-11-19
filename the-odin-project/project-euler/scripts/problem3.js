function problem3() {
		factors = [];
		var d = 2;
		var n = 600851475143;
		//Going to determine all of the prime factors of n.
		while (n > 1) {
			while (n % d == 0) {
				factors.push(d);
				n /= d;
			}
			d += 1;
		}
		//Print out the largest prime factor in array of factors.
		var largest_prime_factor = Math.max.apply(Math, factors);
		alert("The largest prime factor of 600851475143 is " + largest_prime_factor + ".");
	}