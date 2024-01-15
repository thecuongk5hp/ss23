    let soBatKi = parseInt(prompt("Nhập một số nguyên dương: "));
    let factorial = 1;
    for (let i = 1; i <= soBatKi; i++) {
        factorial *= i;
    }
    console.log(`Giai thừa của ${soBatKi} là: ${factorial}`);
