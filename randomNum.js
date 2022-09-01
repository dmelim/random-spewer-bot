const randomNum = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};
export default randomNum;
