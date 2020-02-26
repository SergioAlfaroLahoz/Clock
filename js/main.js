(function(){

    var flag = true;

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
        var pSeconds2 = document.getElementById("seconds2");
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
        pSeconds2.textContent = seconds;

        if(flag){
            pSeconds2.style.height = "115px"
            //pSeconds2.style.padding = "10px"
            pSeconds2.style.transition = "500ms all ease";
            pSeconds.style.height = "0px"
            //pSeconds.style.padding = "0px"
            pSeconds.style.transition = "10ms all ease";
            flag = false;
        }else{
            pSeconds2.style.height = "0px"
            //pSeconds2.style.padding = "0px"
            pSeconds2.style.transition = "10ms all ease";
            pSeconds.style.height = "115px"
            //pSeconds.style.padding = "10px"
            pSeconds.style.transition = "500ms all ease";
            flag = true;
        }

    };

    actualizeHour();
    var interval = setInterval(actualizeHour, 1000);

}())