const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Development";
    }, 000);
    setTimeout(() => {
        text.textContent = " Data Analyst";
    }, 2000);
    setTimeout(() => {
        text.textContent = "AI/ML Automation";
    }, 4000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Internet of Things(IoT)";
    }, 6000);
    setTimeout(() => {
        text.textContent = "Java Development";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);