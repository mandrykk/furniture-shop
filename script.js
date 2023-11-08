// Функция для обновления счетчика
function updateCountdown() {
    const countdownDate = new Date("2026-12-31 00:00:00").getTime(); // Установите дату окончания счетчика
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
