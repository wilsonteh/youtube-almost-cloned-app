
const abbreviateNum = (num: string) => {
  let number = Number(num);
  let unitIndex = 0;
  
  while (number >= 1000) {
    number /= 1000;
    unitIndex++;
  }
  
  return [number, unitIndex];
}

// 3301311 -> 3M, 3301 -> 3K
export const displayWholeNum = (num: string) => {
  const units = ['', 'K', 'M', 'B'];
  const [number, unitIndex] = abbreviateNum(num);
  
  return Math.floor(number) + units[unitIndex];
}


// 3301311 -> 3.3M, 3301 -> 3.3K
export const displayDecimalNum = (num: string) => {
  const units = ['', 'K', 'M', 'B'];
  const [number, unitIndex] = abbreviateNum(num);

  return number.toFixed(unitIndex ? 1 : 0) + units[unitIndex];
}