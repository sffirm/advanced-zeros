module.exports = function getZerosCount(count, system) {
	var pseudoCount;
	var finalZero = count;

	for (var i = 2; i <= system;i++){
		if (system % i == 0){
			pseudoCount = 0;
			while (system % i == 0){
				pseudoCount++;
				system = Math.floor(system / i);  
			}
			var numbZero = 0;
			number = count;

			while (Math.floor(number / i) > 0){
				numbZero += Math.floor(number / i);
				number = Math.floor(number / i);
			}
			finalZero = Math.min (finalZero , Math.floor(numbZero / pseudoCount));
		}
	}
	return finalZero;
}