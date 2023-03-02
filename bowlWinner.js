
// scores are formatted [Final Score, Handicap, Number of Strings]
let scoresHandiStrings = [
    [1528,37,7],
    [1445,16,7],
    [1509,21,7],
    [1532,37,7],
    [1567,49,7],
    [1536,60,7],
    [1534,5,7],
    [1605,0,7],
    [1567,42,7],
    [1534,54,7],
    [1602,53,7],
    [1514,26,7],
    [1445,25,7],
    [1477,37,7],
    [1427,37,7],
    [1551,28,7],
    [1472,16,7],
    [1495,25,7],
    [1550,32,7],
    [1562,55,7],
    [1577,44,7],
    [1612,36,7],
    [1658,31,7]
];

// Finds score before handicap
// Takes in 1 teams score
function scoresBeforeHandi (finalScore, handicap, numOfStrings) {
    let totalHandicap = handicap * numOfStrings
    let scoreBefore = finalScore - totalHandicap

    return scoreBefore
}
// console.log(scoresBeforeHandi(1562,55,7)) //1177 -> 1562,55,7 = 385 handicap = 1177 score before handicap

let allScoresPreHandi = []
// Pushes scores into an array by calling the scoresBeforeHandi function
function preHandicapScores (allScoresPostHandi){
    for (let i = 0; i < allScoresPostHandi.length; i++){
        let beforeHandi = scoresBeforeHandi(allScoresPostHandi[i][0],allScoresPostHandi[i][1],allScoresPostHandi[i][2])
        allScoresPreHandi.push(beforeHandi)
    }
    return allScoresPreHandi
}

let finalScore = []
// Pushes final score only into an array (score POST handicap added)
function getFinalScoreOnly (ArrOfScoresHandiStrings){
    for (let i = 0; i < ArrOfScoresHandiStrings.length; i++){
        finalScore.push(ArrOfScoresHandiStrings[i][0])
    }
    return finalScore
}

// Takes in array of all scores (score, handi, strings)
// Pushes final and pre handicap scores into a nested array
// Sorts from first to last
function ultimateScores (arrOfScores) {
    let allScoresPostHandi = getFinalScoreOnly(arrOfScores)
    let allScoresPreHandi = preHandicapScores(arrOfScores)
    let postAndPre = []

    for (let i = 0; i < allScoresPostHandi.length; i++){
        postAndPre.push([allScoresPostHandi[i],allScoresPreHandi[i]])
    }

    postAndPre.sort(function compareScore(a, b) {
        if (a[0] < b[0]) {
          return 1;
        }
        if (a[0] > b[0]) {
          return -1;
        }
        // if a === b
        return 0;
      }
    )
    return postAndPre
}

let finalRank = ultimateScores(scoresHandiStrings)
// Prints place, final and pre handicap score by using the ultimateScores function
    for (let i = 0; i < finalRank.length; i++){
        console.log(`You finished in place ${i+1}`)
        console.log(`Your final score was ${finalRank[i][0]}`);
        console.log(`Your pre handicap score was ${finalRank[i][1]}\n`);
}

//Prints:
//You finished in place 1
//Your final score was 1658
//Your pre handicap score was 1441

//You finished in place 2
//Your final score was 1612
//Your pre handicap score was 1360

//Cont.......
