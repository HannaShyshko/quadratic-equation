module.exports = function solveEquation(equation) {
  
  let array = equation.split(' ');

    let a = parseInt(array[0]);
    let b = parseInt(array[3] + array[4]);
    let c = parseInt(array[7] + array[8]);

 let d = b*b-4*a*c;

 let x1 = Math.round((-b + Math.sqrt(d)) / (2*a));
 let x2 = Math.round((-b - Math.sqrt(d)) / (2*a));
  
  return x1 < x2 ? [x1, x2] : [x2, x1];
}
