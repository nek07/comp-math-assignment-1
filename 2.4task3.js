// Define the equations
const equations = [
    x => x**3-5*x-1
];

// False position method implementation
function falsePositionMethod(a, b, equation, tolerance) {
    let c;

    do {
        c = (a * equation(b) - b * equation(a)) / (equation(b) - equation(a));

        if (equation(c) * equation(a) < 0) {
            b = c;
        } else {
            a = c;
        }
    } while (Math.abs(equation(c)) >= tolerance);

    return c;
}

// Solve each equation and print the results
equations.forEach((equation, index) => {
    let a, b;

    // Set initial interval [a, b] based on the nature of the equation
    a = 2
    b= 3

    const root = falsePositionMethod(a, b, equation, 0.0001);
    console.log(`Root for equation (i${index + 1}): ${root.toFixed(3)}`);
});
x=2.330
console.log(x**3 - 5*x - 1)
