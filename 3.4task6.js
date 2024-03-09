function gaussSeidel(A, B, initialGuess, maxIterations, tolerance) {
    const n = A.length;
    let x = [...initialGuess];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let xNew = new Array(n);

        for (let i = 0; i < n; i++) {
            let sum = B[i];

            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum -= A[i][j] * x[j];
                }
            }

            xNew[i] = sum / A[i][i];
        }

        
        let maxError = Math.max(...xNew.map((value, index) => Math.abs(value - x[index])));
        
        if (maxError < tolerance) {
            console.log(`Converged after ${iteration + 1} iterations.`);
            return xNew;
        }

        x = xNew;
    }

    console.log("Did not converge within the specified number of iterations.");
    return x;
}

// Define the coefficients matrix A and the constants matrix B
const A = [
    [10, 1, 1],
    [2, 10, 1],
    [2, 2, 10]
];

const B = [12, 13, 14];

const initialGuess = [0, 0, 0];
const maxIterations = 50;
const tolerance = 1e-6;

const solution = gaussSeidel(A, B, initialGuess, maxIterations, tolerance);

console.log("Solution:", solution);
