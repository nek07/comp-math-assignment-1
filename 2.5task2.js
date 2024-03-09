// Define the functions and their derivatives
const equations = [
    {
        equation: x => x**3 - 2*x-5,
        derivative: x => 3*x**2-2
    }
];

// Newton's iterative method implementation
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
    const root = newtonRaphson(2.5, equationObj.equation, equationObj.derivative, 0.0001);
    console.log(`Root for equation (ii${index + 1}): ${root.toFixed(4)}`);
});
x=2.0946
 console.log((x**3 - 2*x-5)/(3*x**2-2))