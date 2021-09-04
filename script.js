var hourhand = document.querySelector(".hour")
var minutehand = document.querySelector(".minute")
var secondhand = document.querySelector(".second")
function rotate(){
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

const secondsfraction = seconds/60;
const minutesfraction = (secondsfraction+minutes)/60;
const hoursfraction = (minutesfraction+hours)/12;

const secondsRotate = secondsfraction*360
const minutesRotate = minutesfraction*360
const hoursRotate = hoursfraction*360

secondhand.style.transform = `rotate(${secondsRotate}deg)`
minutehand.style.transform= `rotate(${minutesRotate}deg)`
hourhand.style.transform= `rotate(${hoursRotate}deg)`

}
setInterval(rotate,1000)