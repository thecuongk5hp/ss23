function laSoHoanHao(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

function main() {
    // Yêu cầu người dùng nhập số
    const userInput = parseInt(prompt("Nhập một số:"));

    // Kiểm tra xem số nhập vào có phải là số hoàn hảo không
    if (laSoHoanHao(userInput)) {
        console.log(`${userInput} là số hoàn hảo.`);
    } else {
        console.log(`${userInput} không phải là số hoàn hảo.`);
    }
}

// Gọi hàm main khi trang web được tải
document.addEventListener("DOMContentLoaded", main);
