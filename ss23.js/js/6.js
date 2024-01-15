function inBangCuuChuong() {
    for (let i = 1; i <= 2; i++) {
        console.log(`Bảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("");
    }
}

document.addEventListener("DOMContentLoaded", inBangCuuChuong);