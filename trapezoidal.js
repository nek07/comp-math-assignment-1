// Define the function to be integrated
function f(x) {
    return 1 / (1 + x*x); // Function to integrate
}

// Trapezoidal rule function
function trapezoidalRule(a, b, h) {
    var sum = 0;
    var n = Math.floor((b - a) / h); // Calculate the number of intervals
    
    sum += f(a) + f(b); // Add the first and last terms
    
    for (var i = 1; i < n; i++) {
        var x = a + i * h;
        sum += 2 * f(x); // Multiply intermediate terms by 2
    }
    
    return (h / 2) * sum; // Multiply by h/2 as per the Trapezoidal rule formula
}

// Define integration limits and step size
var a = 0; // Lower limit of integration
var b = 1; // Upper limit of integration
var h = 1/4; // Step size

// Calculate the integral using the Trapezoidal rule
var result = trapezoidalRule(a, b, h);
console.log("Approximate value of the integral:", result);
var ans = 0.7827