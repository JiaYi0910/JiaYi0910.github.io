function animateProgress(circle, targetPercentage) {
    let currentPercentage = 0;
    const increment = 1;
    const interval = 20;

    const progressBar = circle.querySelector('.progress-bar');
    const innerCircleText = circle.querySelector('.inner-circle');

    const intervalId = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(intervalId);
        } else {
            currentPercentage += increment;
            progressBar.style.background = `conic-gradient(#6B705C ${currentPercentage * 3.6}deg, #B7B7A4 ${currentPercentage * 3.6}deg)`;
            innerCircleText.textContent = `${currentPercentage}%`;
        }
    }, interval);
}

document.querySelectorAll('.circle').forEach(circle => {
    const targetPercentage = parseInt(circle.querySelector('.progress-bar').style.getPropertyValue('--target-percentage'));
    animateProgress(circle, targetPercentage);
});