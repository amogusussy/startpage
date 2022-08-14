function startTime() {
    const date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h == 0){h=12;} 
    else if (h<10){h = "0" + String(h);}
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
} function checkTime(i) {if (i < 10) {i = "0" + i}; return i;}
