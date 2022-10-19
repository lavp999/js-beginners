/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	let randomNumber = Math.random();
	return Math.floor(randomNumber*10)+1;
}


console.log(getRandomInt());