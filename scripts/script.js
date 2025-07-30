// Always use Eastern Time (EDT = UTC-4 on Oct 7, 2025)
// 5:00 PM EDT = 21:00 UTC (coordinated universal time)
const countdownDate = new Date(Date.UTC(2025, 9, 7, 21, 0, 0)).getTime(); // October = 9 (zero-indexed)

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").innerHTML = `${months} <span>Months</span>`;
    document.getElementById("weeks").innerHTML = `${weeks} <span>Weeks</span>`;
    document.getElementById("days").innerHTML = `${days} <span>Days</span>`;
    document.getElementById("hours").innerHTML = `${hours} <span>Hours</span>`;
    document.getElementById("minutes").innerHTML = `${minutes} <span>Minutes</span>`;
    document.getElementById("seconds").innerHTML = `${seconds} <span>Seconds</span>`;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown-container').innerHTML = "Countdown Finished!";
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
