// this is how we can use a Node.js method to get data from the user

process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
