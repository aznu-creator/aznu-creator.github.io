document.addEventListener('DOMContentLoaded', () => {
    calculateDays();
    setInterval(calculateDays, 1000); // Update every second
});

function calculateDays() {
    const today = new Date();
    const birthday = new Date('2024-08-04T00:00:00'); // Test date set to today

    // Calculate the difference in milliseconds
    const differenceInMillis = birthday - today;
    const daysLeft = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((differenceInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((differenceInMillis % (1000 * 60)) / 1000);

    // Check if it's the special birthday
    if (today.toDateString() === birthday.toDateString()) {
        document.getElementById('specialMessage').classList.remove('hidden');
        document.getElementById('title').classList.add('hidden'); // Hide title on birthday
        startBalloons();
        startConfetti();
    } else {
        document.getElementById('specialMessage').classList.add('hidden');
        document.getElementById('title').classList.remove('hidden'); // Show title otherwise
        stopBalloons();
        stopConfetti();
        document.getElementById('result').textContent = 
            `Time left until the special date: ${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds.`;
    }
}

function startConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.innerHTML = ''; // Clear previous confetti

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.appendChild(confettiPiece);
    }
    confetti.classList.remove('hidden');
}

function stopConfetti() {
    document.getElementById('confetti').classList.add('hidden');
}

function startBalloons() {
    const balloons = document.getElementById('balloons');
    balloons.innerHTML = ''; // Clear previous balloons

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = `-100px`; // Start below the viewport
        balloons.appendChild(balloon);
    }
    balloons.classList.remove('hidden');
}

function stopBalloons() {
    document.getElementById('balloons').classList.add('hidden');
}

function getRandomColor() {
    const colors = ['#ff4d4d', '#ff8c00', '#ffd700', '#32cd32', '#1e90ff', '#9370db'];
    return colors[Math.floor(Math.random() * colors.length)];
}
