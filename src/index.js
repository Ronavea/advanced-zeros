module.exports = function getZerosCount(number, base) {
	let count = 0;
	let num = 0;	
	let n = 0;

	for(let i = 2; i <= base; i++){
		if(base%i == 0){
			n=0;
			while(base%i == 0){
				base /= i;
				n++;	
			}
			if(base == 1){ num = i; }
		}
		else{ num = base; }	
	}


	for(let i = 1; Math.pow(num,i) < number; i++){		
		count += Math.floor(number/(Math.pow(num,i)));  
	}
	count = Math.floor(count/n);
	return count;
}