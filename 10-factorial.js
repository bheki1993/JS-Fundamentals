function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }

  const num = parseInt(n);

  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// Get the first argument passed from the command line
const input = process.argv[2];
const result = factorial(input);
console.log(result);
