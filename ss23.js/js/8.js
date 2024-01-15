function laSoNguyenTo(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function inSoNguyenToNhoHon(number) {
    console.log(`Các số nguyên tố nhỏ hơn ${number}:`);
    for (let i = 2; i < number; i++) {
        if (laSoNguyenTo(i)) {
            console.log(i);
        }
    }
}

function main() {
    const userInput = parseInt(prompt("Nhập một số nguyên dương:"));

    inSoNguyenToNhoHon(userInput);
}
document.ad
