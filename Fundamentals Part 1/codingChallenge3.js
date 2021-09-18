// Coding Challenge 3

// Average score 

// // TEST DATA 1 
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// // TEST DATA 2 
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// TEST DATA 3
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinsAverageScore = calculateAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
console.log(dolphinsAverageScore);

const koalasAverageScore = calculateAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("The Dolphins win 🏆!!!!");
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log("The Koala's win🏆!!!");
} else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= 100 && dolphinsAverageScore >= 100) {
    console.log("It's a draw!!!!");
}
else {
    console.log("No team wins");
}

function calculateAverage(x, y, z) {
    return (x + y + z) / 3;
}