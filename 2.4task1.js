// Define the equations
const equations = [
    x => x**3 - x - 1,
    x => x**3 - x**2 - 1,
    x => 2*x**3 + x**2 - 20*x + 12,
    x => x**4 - x - 10
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

// Solve each equation and print the results
equations.forEach((equation, index) => {
    let a, b;

    // Adjust the initial interval [a, b] based on the nature of the equation
    if (index === 2) {
        // For the third equation, try a different initial interval
        a = 2.5;
        b = 3;
    } else {
        // For other equations, use the default initial interval
        a = 1;
        b = 2;
    }

    const root = bisectionMethod(a, b, equation, 0.001);
    console.log(`Root for equation (i${index + 1}): ${root.toFixed(3)}`);
});
x=2.522
console.log(2*x**3 + x**2 - 20*x + 12)