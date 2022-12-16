const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const input = await Deno.readTextFile("input.txt");

const solvePartOne = (input: string) => {
  console.log(
    input
      .split("\n")
      .reduce(
        (prev, curr) => {
          if (curr === "") {
            prev.push(0);
          } else {
            prev[prev.length - 1] += Number(curr);
          }
          return prev;
        },
        <number[]>[0]
      )
      .sort((a, b) => b - a)[0]
  );
};

const solvePartTwo = (input: string) => {
  console.log(
    input
      .split("\n")
      .reduce(
        (prev, curr) => {
          if (curr === "") {
            prev.push(0);
          } else {
            prev[prev.length - 1] += Number(curr);
          }
          return prev;
        },
        <number[]>[0]
      )
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((prev, curr) => prev + curr)
  );
};

solvePartOne(testInput);
solvePartOne(input);

solvePartTwo(testInput);
solvePartTwo(input);
