// Функция для обновления счетчика
function updateCountdown() {
    const countdownDate = new Date("2026-12-31 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = countdownDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем элементы счетчика в верстке
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);

// Инициализируем счетчик при загрузке страницы
updateCountdown();

// Функция для свайпера
document.addEventListener("DOMContentLoaded", function () {
    const sellerGrid = document.getElementById("sellerGrid");
    const sellerCards = sellerGrid.querySelectorAll(".seller__card");
    const prevButton = document.querySelector(".seller__nav .prev");
    const nextButton = document.querySelector(".seller__nav .next");

    let currentIndex = 0;
    const cardsPerPage = 4;

    function showCards() {
        for (let i = 0; i < sellerCards.length; i++) {
            if (i >= currentIndex && i < currentIndex + cardsPerPage) {
                sellerCards[i].classList.add("visible");
            } else {
                sellerCards[i].classList.remove("visible");
            }
        }
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= cardsPerPage;
            showCards();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex + cardsPerPage < sellerCards.length) {
            currentIndex += cardsPerPage;
            showCards();
        }
    });

    showCards();
});
