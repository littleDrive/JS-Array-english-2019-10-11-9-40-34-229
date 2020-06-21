// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a不是array类型，是String类型
// b是array类型

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log(a.map(e => e*2));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
// case1:
colors.join(' ');
// case2:
colors.join('+');
//case3:
colors.join(',');

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(f, s){
    return s - f;
});

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var maxEle;
var maxNum = 1;
var obj = a.reduce(function(pre, cur) {
    pre[cur] ? pre[cur]++ : pre[cur] = 1;
    if (pre[cur] > maxNum) {
        maxEle = cur;
        maxNum++;
    }
    return pre;
}, {});
console.log(maxEle);
