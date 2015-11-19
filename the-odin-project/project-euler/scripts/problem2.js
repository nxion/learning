function problem2() {

		//Keep track of sums as well as sequence numbers
		var firs_num = 1;
		var sec_num = 2;
		var sum = firs_num + sec_num;
		var total_sum = 0;

		//The value of the sum must be less than 4 million
		while(sum < 4000000) {
			if (sum % 2 == 0) {
				total_sum += sum;
			}
			//Update values according to Fibonacci sequence
			firs_num = sec_num;
			sec_num = sum;
			sum = firs_num + sec_num;
		}
		alert("The sum of the even-valued terms is " + total_sum + ".");
}