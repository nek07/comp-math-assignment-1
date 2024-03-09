// Define the equations
const equations = [
    x => x*Math.log10(x)-1.2
];

// Secant method implementation
function secantMethod(x0, x1, equation, tolerance) {
    let x2;

    do {
        x2 = x1 - (equation(x1) * (x1 - x0)) / (equation(x1) - equation(x0));

        x0 = x1;
        x1 = x2;
    } while (Math.abs(equation(x2)) >= tolerance);

    return x2;
}

// Solve each equation and print the results
equations.forEach((equation, index) => {
    let x0, x1;

    // Set initial values x0 and x1 based on the nature of the equation
    x0=1;
    x1=2;

    const root = secantMethod(x0, x1, equation, 0.0001);
    console.log(`Root for equation (i${index + 1}): ${root.toFixed(6)}`);
});
x=2.7954

console.log(x**3 + 2*x**2 -5)