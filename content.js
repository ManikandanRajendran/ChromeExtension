checkCookie();


function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (1 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("alerted");
    let value2 = getTimeToCompareCookie();
    if (user != "") {
        if (parseInt(user) <= parseInt(value2)) {
            setCookie("alerted", "");
            setTimeCookie();
        }
    } else {
        setTimeCookie();
    }
}

function setTimeCookie() {
    user = confirm("Looks like you are testing in LIVE. click [ok] to continue my check or [cancel] to snooze me for 30 mins");
    if (!user) {
        let value1 = getTimeToSetCookie();
        setCookie("alerted", value1);
        alert("Thank you!! snoozing my check for 30 minutes :)");
    } else {
        alert("Thank you!! I'm going to continue my check :)");
    }
}

function getTimeToSetCookie() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    min = min + 30;
    if (min > 60) {
        hr = hr + 1;
        min = min - 60;
        if (min < 10) {
            min = "0" + min.toString();
        }
    }
    let timeToSetCookie = hr.toString() + min;
    return timeToSetCookie;
}

function getTimeToCompareCookie() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    if (min < 10) {
        min = "0" + min.toString();
    }
    let timeToSetCookie = hr.toString() + min;
    return timeToSetCookie;
}