// Define the functions and their derivatives
const equations = [
    {
        equation: x => x**3 - 3*x + 1,
        derivative: x => 3*x**2 - 3
    },
    {
        equation: x => x**3 - 2*x - 5,
        derivative: x => 3*x**2 - 2
    },
    {
        equation: x => x**3 - 5*x + 3,
        derivative: x => 3*x**2 - 5
    },
    {
        equation: x => 3*x**3 - 9*x**2 + 8,
        derivative: x => 9*x**2 - 18*x
    }
];

// Newton-Raphson method implementation
function newtonRaphson(initialGuess, equation, derivative, tolerance) {
    let xn = initialGuess;
    let xn1;

    do {
        xn1 = xn - equation(xn) / derivative(xn);
        xn = xn1;
    } while (Math.abs(equation(xn1)) >= tolerance);

    return xn1;
}

// Solve each equation and print the results
equations.forEach((equationObj, index) => {
    const root = newtonRaphson(1, equationObj.equation, equationObj.derivative, 0.0001);
    console.log(`Root for equation (i${index + 1}): ${root.toFixed(3)}`);
});
