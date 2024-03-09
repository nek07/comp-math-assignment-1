// Define the equations
const equations = [
    x => x*Math.exp(x)- Math.cos(x) 
];

// Bisection method implementation
function bisectionMethod(a, b, equation, tolerance) {
    let c;

    do {
        c = (a + b) / 2;

        if (equation(c) * equation(a) < 0) {
            b = c;
        } else {
            a = c;
        }
    } while ((b - a) >= tolerance);

    return c;
}

// Adjust initial intervals and tolerance for faster convergence
const intervals = [
    { a: 0, b: 1 }   // Initial interval for equation (iii)
];

const tolerance = 0.0001;  // Adjusted tolerance

// Solve each equation and print the results
equations.forEach((equation, index) => {
    const { a, b } = intervals[index];
    const root = bisectionMethod(a, b, equation, tolerance);
    console.log(`Root for equation (i${index + 1}): ${root.toFixed(4)}`);
});
x=0.5178
console.log( x*Math.exp(x)-  Math.cos(x) )