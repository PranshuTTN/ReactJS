function currentTime() {
    const date = new Date();

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours >= 12 ? hours-12 : hours;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById("time").innerText = hours + ":" + date.getMinutes() + 
    ":" + date.getSeconds() + " " + ampm;
    document.getElementById("date").innerText = date.getDate() + " " + 
    months[date.getMonth()] + " " + date.getFullYear();

    let greeting = '';
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    document.getElementById("greeting").innerText = greeting;
}

currentTime();
