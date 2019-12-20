const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date ().toLocaleTimeString();
setInterval(updateTime, 1000);