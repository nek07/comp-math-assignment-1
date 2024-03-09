// Define the function to be integrated
function f(x) {
    return Math.sin(x) - Math.log(x) + Math.exp(x); // Function to integrate
}

// Simpson's 3/8 rule function
function simpsonsThreeEighthRule(a, b, n) {
    if (n % 3 !== 0) {
        console.log("Error: Number of intervals must be divisible by 3.");
        return NaN;
    }
    
    var h = (b - a) / n;
    var sum = f(a) + f(b); // Start with the values at the endpoints
    
    for (var i = 1; i < n; i++) {
        var x = a + i * h;
        sum += (i % 3 === 0 ? 2 : 3) * f(x); // Every third term is multiplied by 2, others by 3
    }
    
    return (3 * h / 8) * sum;
}

// Define integration limits
var a = 0.2; // Lower limit of integration
var b = 1.4; // Upper limit of integration
var n = 6; // Number of intervals (must be divisible by 3)

// Calculate the integral using Simpson's 3/8 rule
var result = simpsonsThreeEighthRule(a, b, n);
console.log("Approximate value of the integral:", result);
