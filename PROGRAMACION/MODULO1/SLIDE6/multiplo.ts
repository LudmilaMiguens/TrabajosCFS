let result: string = "";
for (let i: number = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) result += `${i}, `;
}
console.log(result);

