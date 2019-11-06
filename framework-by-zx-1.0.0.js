let operators = {
	summa: function(a, b){
		return a + b;
	},
	subtraction: function(a, b){
		return a - b;
	},
	multiplication: function(a, b){
		return a * b;
	},
	residual: function(a, b){
		return a / b;
	},
	exponent: function(a, b){
		let c = 1;
		if(a && b >= 0){
			for(let i = 0; i <= b; i++){
				c = c * a;
			}
		}
		return c;
	}
}