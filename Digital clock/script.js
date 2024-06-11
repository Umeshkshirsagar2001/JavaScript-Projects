function displaytime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = addzero(dateTime.getMinutes());
    let sec = addzero(dateTime.getSeconds());
    let ampm = document.getElementById("ampm");

    if (hr >= 12) {
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }

    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'
    hr = addzero(hr);

    document.getElementById("hours").innerHTML = hr;
    document.querySelector("#mins").innerHTML = min;
    document.querySelector("#seconds").innerHTML = sec;
}

function addzero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displaytime, 500);
displaytime(); 