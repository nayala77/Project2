function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12; //12 hour format
    }

    if (h > 12) {
        h = h - 12; //12 hour format
        session = "PM";
    }
    //if (h < 10) { //0-9
    //  h = "0" + " " + session;
    //}
    //if (m < 10) {
    //  m = "0" + m;
    //}
    //if (s < 10) {
    // s = "0" + s;
    // }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("digitalclock").innerHTML = h + ":" + m + ":" + s + " " + session;

    setTimeout(showTime, 1000);
}

showTime();