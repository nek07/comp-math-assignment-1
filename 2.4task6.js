// Define the equation
const equation = x => Math.pow(x, 10) - 1;

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

// Initial interval [a, b]
const a = 0;
const b = 1.3;

// Tolerance
const tolerance = 0.0001;

// Using Bisection method
const bisectionRoot = bisectionMethod(a, b, equation, tolerance);
console.log(`Root using Bisection method: ${bisectionRoot.toFixed(3)}`);

// Using False position method
const falsePositionRoot = falsePositionMethod(a, b, equation, tolerance);
console.log(`Root using False position method: ${falsePositionRoot.toFixed(3)}`);
