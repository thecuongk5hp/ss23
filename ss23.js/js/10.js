function inTamGiacVuong(n) {
    console.log();
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }

    console.log();
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {
            row += "  ";
        }
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

function main() {
    const userInput = parseInt(prompt("Nhập một số nguyên dương:"));

    inTamGiacVuong(userInput);
}

document.addEventListener("DOMContentLoaded", main);
