const testInput = `A Y
B X
C Z`;

const input = await Deno.readTextFile("input.txt");

const SignScore: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const solvePartOne = (input: string) => {
  console.log(
    input
      .trim()
      .split("\n")
      .map((value) => {
        const [opponent, player] = value.split(" ");
        return {
          opponent,
          player,
        };
      })
      .map((value) => {
        let score = SignScore[value.player];
        if (value.opponent === "A") {
          score += value.player === "Y" ? 6 : value.player === "X" ? 3 : 0;
        } else if (value.opponent === "B") {
          score += value.player === "Z" ? 6 : value.player === "Y" ? 3 : 0;
        } else {
          score += value.player === "X" ? 6 : value.player === "Z" ? 3 : 0;
        }
        return score;
      })
      .reduce((prev, curr) => prev + curr)
  );
};

const solvePartTwo = (input: string) => {
  console.log(
    input
      .trim()
      .split("\n")
      .map((value) => {
        const [opponent, outcome] = value.split(" ");
        let player;
        // X = lose, Y = draw, Z = win
        if (opponent === "A") {
          player = outcome === "X" ? "Z" : outcome === "Y" ? "X" : "Y";
        } else if (opponent === "B") {
          player = outcome === "X" ? "X" : outcome === "Y" ? "Y" : "Z";
        } else {
          player = outcome === "X" ? "Y" : outcome === "Y" ? "Z" : "X";
        }
        return {
          opponent,
          player,
        };
      })
      .map((value) => {
        let score = SignScore[value.player];
        if (value.opponent === "A") {
          score += value.player === "Y" ? 6 : value.player === "X" ? 3 : 0;
        } else if (value.opponent === "B") {
          score += value.player === "Z" ? 6 : value.player === "Y" ? 3 : 0;
        } else {
          score += value.player === "X" ? 6 : value.player === "Z" ? 3 : 0;
        }
        return score;
      })
      .reduce((prev, curr) => prev + curr)
  );
};

solvePartOne(testInput);
solvePartOne(input);
solvePartTwo(testInput);
solvePartTwo(input);
