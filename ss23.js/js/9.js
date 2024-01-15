function inDayFibonacci(n) {
    let fib = [0, 1];
    let sum = 0;

    while (sum < n) {
        sum = fib[fib.length - 1] + fib[fib.length - 2];
        if (sum < n) {
            fib.push(sum);
        }
    }

    console.log(`Dãy Fibonacci nhỏ hơn ${n}:`);
    console.log(fib.join(", "));
}

function main() {
    const userInput = parseInt(prompt("Nhập một số nguyên dương:"));

    inDayFibonacci(userInput);
}

document.addEventListener("DOMContentLoaded", main);
