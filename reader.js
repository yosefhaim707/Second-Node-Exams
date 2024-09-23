const _ = require('loadsh');
const fs = require('fs');
const { log } = require('console');
let result = fs.readFileSync("data.txt", 'utf-8');

// Exam 1
console.log(result);

// Exam 2
function count(str) {
    arr = _.words(str);
    return arr.length;
}

let amount = count(result);
console.log(amount);

// Exam 3
function reverseTxt(str) {
    let strToArr = _.words(str);
    strToArr = _.reverse(strToArr);
    let final = _.join(strToArr, ' ');
    return final;
}

let reTxt = reverseTxt(result);
console.log(reTxt);

// Exam 4
function getUnique(str) {
    return _.join(_.uniq(_.words(str)), ' ');
}
let countUniq = getUnique(result);
console.log(countUniq);
console.log(count(countUniq));
