const getRandomNumbers = (quantity) => {
  const maxNumber = 905;
  let numbers = [];

  for (let index = 0; index < quantity; index++) {
    numbers.push(Math.floor(Math.random() * maxNumber));
  }

  return numbers;
};

export default { getRandomNumbers };
