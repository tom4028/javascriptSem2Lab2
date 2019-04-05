// const longest = (xs, ys) => (xs.length > ys.length) ? xs : ys;
 
// const lcs = (xx, yy) => {
//   if (!xx.length || !yy.length) { return ''; }
 
//   let x = xx[0];
//   //console.log("x:",x);
//     let  y = yy[0];
//     //console.log('y:',y);
//   xs = xx.slice(1);
//   //console.log('xs: ',xs);
//   ys = yy.slice(1);
//   //console.log('xy: ',ys);
//   return (x === y) ? lcs(xs, ys) :
//                      longest(lcs(xx, ys), lcs(xs, yy));
// };


// const s1 = 'karol';
// const s2 = 'rolki';
// const result = lcs(s1,s2);
// console.log(result);

// function LCS(a, b) {
//   var m = a.length, n = b.length,
//       C = [], i, j;
//       console.log(m,n);
//   for (i = 0; i <= m; i++) C.push([0]);
//   for (j = 0; j < n; j++) C[0].push(0);
//   console.log(C);
//   for (i = 0; i < m; i++)
//       for (j = 0; j < n; j++)
//           C[i+1][j+1] = a[i] === b[j] ? C[i][j]+1 : Math.max(C[i+1][j], C[i][j+1]);
//   return (function bt(i, j) {
//       if (i*j === 0) { return ""; }
//       if (a[i-1] === b[j-1]) { return bt(i-1, j-1) + a[i-1]; }
//       return (C[i][j-1] > C[i-1][j]) ? bt(i, j-1) : bt(i-1, j);
//   }(m, n));
// }

function lcs(s1,s2){
  let tabS1=[];
  let tab1 = s1.split("");
  let tabS2 = [];



}

function stringPermutations(str){
  let letters = str.split("");
  let results =[[letters.shift()]] ;
    while(letters.length){
      const currLetter = letters.shift();
      let tempResults = [];
      results.forEach(result=>{
        let rIdx = 0;
        while(rIdx <=result.length){
          const tmp = [...result];
          tmp.splice(rIdx,0,currLetter);
          tempResults.push(tmp)
          rIdx++;
        }
      })
      results = tempResults
    }
    return results.map(letterArray =>letterArray.join("")).filter((el,idx,self)=>(self.indexOf(el)===idx));
}

// function allCombination(str){
//   let tab = [];
//   for(let i=0;i<str.length;i++){
//     let char = str.split("").slice(0,i).join();
//     console.log(char);
//     let temp = stringPermutations(char);
    
//     for(let i=0;i<temp.length;i++){
//       tab.push(temp[i]);
//     }
//   }
//   return tab;
// }




const s1 = 'karol';

const s2 = 'rolki';
//console.log(LCS(s1,s2));
let char1 = s2.split("").slice(0,1).join("");
let char2 = s2.split("").slice(0,2).join("");
let char3 = s2.split("").slice(0,3).join("");
let char4 = s2.split("").slice(0,4).join("");
let char5 = s2.split("").slice(0,5).join("");
let tab = [];
let temp1 = stringPermutations(char1);
let temp2 = stringPermutations(char2);
let temp3 = stringPermutations(char3);
let temp4 = stringPermutations(char4);
let temp5 = stringPermutations(char5);
//-----------------------------------------------
console.table(char1);
console.table(temp1);
//-----------------------------------------------
console.table(char2);
console.table(temp2);
//-----------------------------------------------
console.table(char3);
console.table(temp3);
//-----------------------------------------------
console.table(char4);
console.table(temp4);
//-----------------------------------------------
console.table(char5);
console.table(temp5);
// -----------------------
console.table(temp1.concat(temp2).concat(temp3).concat(temp4).concat(temp5));
//console.table(allCombination(s1));