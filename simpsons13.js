// Define the function to be integrated
function f(x) {
    return 1 / (1 + x*x); // Function to integrate
}

// Simpson's 1/3 rule function
function simpsonsOneThirdRule(a, b, n) {
    if (n % 2 !== 0) {
        console.log("Error: Number of intervals must be even for Simpson's 1/3 rule.");
        return NaN;
    }
    
    var h = (b - a) / n;
    var sum = f(a) + f(b); // Start with the values at the endpoints
    
    for (var i = 1; i < n; i++) {
        var x = a + i * h;
        sum += (i % 2 === 0 ? 2 : 4) * f(x); // Alternate terms are multiplied by 4, others by 2
    }
    
    return (h / 3) * sum;
}

// Define integration limits
var a = 0; // Lower limit of integration
var b = 6; // Upper limit of integration
var n = 2; // Number of intervals (must be even for Simpson's 1/3 rule)

// Calculate the integral using Simpson's 1/3 rule
var result = simpsonsOneThirdRule(a, b, n);
console.log("Approximate value of the integral:", result);
