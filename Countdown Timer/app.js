var daysCount = new Date("Aug 14, 2024 00:00:00").getTime();

var count = setInterval(function() {
    var now = new Date().getTime();
    var time = daysCount - now;

    if (time < 0) {
        clearInterval(count);
        document.getElementById("day").innerHTML = 0;
        document.getElementById("hour").innerHTML = 0;
        document.getElementById("minute").innerHTML = 0;
        document.getElementById("second").innerHTML = 0;
        document.getElementById("demo").innerHTML = "Happy Independence Day!";
    } else {
        var days = Math.floor(time / (1000 * 3600 * 24));
        var hours = Math.floor((time % (1000 * 3600 * 24)) / (1000 * 3600));
        var minutes = Math.floor((time % (1000 * 3600)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    }
}, 1000);