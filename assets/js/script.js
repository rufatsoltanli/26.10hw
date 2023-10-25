// task-1
// function verilen(...params) {
//     let num = 45
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] == num ) {

// return i
//         }


//     }

// } console.log(verilen(1, 2, 3, 12, 23, 45, 56, 78, 90));

// task-2
// function verilen(...params) {
//     let num = 3
//     let numinindexi = 0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] == num) {
//             numinindexi++
//         }


//     }
//     return numinindexi
// } console.log(verilen(1, 2, 3, 12, 3, 45, 3, 78, 3));

// task-3

// function verilen(...params) {
//     let maxnum = params[0]
//     let minnum = params[0]
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < params.length; i++) {
//         sum1 += params[i]

//         for (let i = 0; i < params.length; i++) {

//             if (minnum > params[i]) {
//                 minnum = params[i]

//             }

//         }
//         for (let i = 0; i < params.length; i++) {

//             if (maxnum < params[i]) {
//                 maxnum = params[i]

//             }

//         }


//     }
//     console.log("butov arrayin summasi: " + sum1);
//     console.log("en kiciy elemnt: " + minnum);
//     console.log("en boyuk elemnt: " + maxnum);
//     sum2 = sum1 -= maxnum
//     sum2 = sum2 -= minnum
//     return sum2

// } console.log("en kicik elementle en boyuku nezere almayanda summa: " + verilen(2, 5, 3, 12, 23, 45, 56, 78, 90));

// task-4 ???
// function reqem(...params) {
//     let sade
//     let deyiwilmiw

//     sade = params[0] + params[params.length - 1]
//     console.log(sade);


// }
// reqem(1,4, 5)
