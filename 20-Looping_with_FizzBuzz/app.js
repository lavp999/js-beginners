function fizzBuzz() {  
	let entre3 = 0;
	let entre5 = 0;
	let cadena = "";

	for(let i = 1; i <= 100; i++){
		entre3 = (i % 3);
		entre5 = (i % 5);
		cadena = "";
	
		if (entre3 == 0){
			cadena = 'Fizz';
		}
		if(entre5 == 0){
			cadena = cadena + 'Buzz';
		}
		if (cadena === ""){
			cadena = i;
		}
		console.log(cadena);
	}
}
fizzBuzz();
