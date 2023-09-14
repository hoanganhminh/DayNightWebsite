var dayNightButton = document.querySelector("#reverse");
var btn = document.querySelector(".btn");
var navBarButton = document.querySelector(".icon");
var navContent = document.querySelector(".nav-bar-content");
var day = document.querySelector(".day");
var night = document.querySelector(".night");
var ocean = document.querySelector(".ocean");
var oceanSwitch = document.querySelector("#switch");
//day.style.visibility = "hidden";
night.style.visibility = "hidden";
ocean.style.visibility = "hidden";
var count = 0;
function moringOrNight (){
    if (day.style.visibility === 'hidden') {
        document.querySelector(".night-animal").style.animation = "animal-out 1.5s linear forwards";
        document.querySelector(".moon").style.animation = "planet-out 1.5s linear forwards";
        document.querySelector(".night-sky-cloud-left").style.animation = "left-cloud-out 1.5s linear forwards";
        document.querySelector(".night-sky-cloud-right").style.animation = "right-cloud-out 1.5s linear forwards";
        document.querySelector(".night-main-text").style.animation = "blur-text-out 1.5s linear forwards";
        setTimeout(() => {
            night.style.visibility = 'hidden';
            document.querySelector(".day-sky-cloud-left").style.animation = "left-cloud-in 1s linear forwards";
            document.querySelector(".day-sky-cloud-right").style.animation = "right-cloud-in 1s linear forwards";
            document.querySelector(".day-animal").style.animation = "animal-in 1s linear forwards";
            document.querySelector(".day-main-text").style.animation = "blur-text-in 1s linear forwards";
            document.querySelector(".sun").style.animation = "planet-in 1s linear forwards";
            day.style.visibility = 'visible';
        }, 1500);
    } else {
        document.querySelector(".day-animal").style.animation = "animal-out 1.5s linear forwards";
        document.querySelector(".sun").style.animation = "planet-out 1.5s linear forwards";
        document.querySelector(".day-sky-cloud-left").style.animation = "left-cloud-out 1.5s linear forwards";
        document.querySelector(".day-sky-cloud-right").style.animation = "right-cloud-out 1.5s linear forwards";
        document.querySelector(".day-main-text").style.animation = "blur-text-out 1.5s linear forwards";
        setTimeout(() => {
            day.style.visibility = 'hidden';
            document.querySelector(".night-sky-cloud-left").style.animation = "left-cloud-in 1s linear forwards";
            document.querySelector(".night-sky-cloud-right").style.animation = "right-cloud-in 1s linear forwards";
            document.querySelector(".night-animal").style.animation = "animal-in 1s linear forwards";
            document.querySelector(".night-main-text").style.animation = "blur-text-in 1s linear forwards";
            document.querySelector(".moon").style.animation = "planet-in 1s linear forwards";
            night.style.visibility = 'visible';
        }, 1500);
    }
}
dayNightButton.onclick = function () {
    count += 180;
    dayNightButton.style.transform = "rotate(-" + count + "deg)";
    moringOrNight();
}

navBarButton.onclick = function () {
    count += 225;
    navBarButton.style.transform = "translate(-50%, -50%) rotate(" + count + "deg)";
    if (count % 2 != 0) {
        navContent.style.left = "0";
    } else {
        navContent.style.left = "-255px";
    }
}
oceanSwitch.onclick = function () {
     if (oceanSwitch.checked) {
        day.style.visibility = "hidden";
        night.style.visibility = "hidden";
        btn.style.visibility = "hidden";
        ocean.style.visibility = "visible";
    }else{
        moringOrNight();
        btn.style.visibility = "visible";
        ocean.style.visibility = "hidden";
    }
}
