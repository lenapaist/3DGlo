const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
    const nowDate = new Date();
    const deadlineDate = new Date(deadline);
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        let hours = getTime.hours < 10 ? `0${getTime.hours}` : getTime.hours;
        let minutes =
            getTime.minutes < 10 ? `0${getTime.minutes}` : getTime.minutes;
        let seconds =
            getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;
        if (getTime.timeRemaining > 0) {
            timerHours.textContent = hours;
            timerMinutes.textContent = minutes;
            timerSeconds.textContent = seconds;
        }
    };
    if (nowDate < deadlineDate) {
        setInterval(updateClock, 1000);
    }
};

export default timer;
