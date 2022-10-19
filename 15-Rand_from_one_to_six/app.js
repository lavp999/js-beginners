function getRandomInt(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 6));