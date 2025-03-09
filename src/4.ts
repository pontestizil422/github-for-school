// Generate a random 5-digit number between 10 and 99
function getRandomNumber() {
  let num = "";
  while (num.length !== 5) {
    const randomNum = Math.floor(Math.random() * 89) + 10;
    if (num.includes(randomNum)) continue;
    num += randomNum;
  }
  return num;
}
