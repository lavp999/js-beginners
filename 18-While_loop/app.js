
//fix this function:
function startCounting(min)
{
	let counter = 100;
	while(counter > min)
	{
		counter --;
		console.log(counter);
	}
	
	return counter;
}

console.log(startCounting(0));