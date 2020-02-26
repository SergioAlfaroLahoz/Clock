(function(){

    var actualizeHour = function(){
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var dayName = date.getDay();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        if(hour<10){ hour = "0" + hour };
        if(minutes<10){ minutes = "0" + minutes };
        if(seconds<10){ seconds = "0" + seconds };

        var pHour = document.getElementById("hour");
        var pMinutes = document.getElementById("minutes");
        var pSeconds = document.getElementById("seconds");
        var pDayName = document.getElementById("dayName");
        var pDay = document.getElementById("day");
        var pMonth = document.getElementById("month");
        var pYear = document.getElementById("year");

        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        pDayName.textContent = week[dayName];

        pDay.textContent = day;

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        pMonth.textContent = months[month];

        pYear.textContent = year;

        pHour.textContent = hour;
        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;
    };

    actualizeHour();
    var interval = setInterval(actualizeHour, 1000);

}())