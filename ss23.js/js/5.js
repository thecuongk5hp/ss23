function main() {
  
    const targetNumber = Math.floor(Math.random() * 10) + 1;

    while (true) {
  
        const userGuess = parseInt(prompt("Nhập một số từ 1 đến 10:"));


        if (userGuess > targetNumber) {
            alert("Lớn hơn! Hãy thử lại.");
        } else if (userGuess < targetNumber) {
            alert("Nhỏ hơn! Hãy thử lại.");
        } else {

            alert("Chính xác! Bạn đã đoán đúng.");
            break;
        }
    }
}
document.addEventListener("DOMContentLoaded", main);
