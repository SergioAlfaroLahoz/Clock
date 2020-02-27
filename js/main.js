(function(){

    var flagS = true;
    var flagM = true;
    var flagH = true;

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
        var pHour2 = document.getElementById("hour2");
        var pMinutes = document.getElementById("minutes");
        var pMinutes2 = document.getElementById("minutes2");
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

        if(pHour.textContent!=hour){
            pHour.textContent = hour;
            pHour2.textContent = hour;

            if(flagH){
                pHour2.style.height = "120px"
                pHour2.style.transition = "500ms all ease";
                pHour.style.height = "0px"
                pHour.style.transition = "10ms all ease";
                flagH = false;
            }else{
                pHour.style.height = "120px"
                pHour.style.transition = "500ms all ease";
                pHour2.style.height = "0px"
                pHour2.style.transition = "10ms all ease";
                flagH = true;
            }
        }

        if(pMinutes.textContent!=minutes){
            pMinutes.textContent = minutes;
            pMinutes2.textContent = minutes;

            if(flagM){
                pMinutes2.style.height = "120px"
                pMinutes2.style.transition = "500ms all ease";
                pMinutes.style.height = "0px"
                pMinutes.style.transition = "10ms all ease";
                flagM = false;
            }else{
                pMinutes.style.height = "120px"
                pMinutes.style.transition = "500ms all ease";
                pMinutes2.style.height = "0px"
                pMinutes2.style.transition = "10ms all ease";
                flagM = true;
            }
        }


        pSeconds.textContent = seconds;
        pSeconds2.textContent = seconds;

        if(flagS){
            pSeconds2.style.height = "120px"
            pSeconds2.style.transition = "500ms all ease";
            pSeconds.style.height = "0px"
            pSeconds.style.transition = "10ms all ease";
            flagS = false;
        }else{
            pSeconds.style.height = "120px"
            pSeconds.style.transition = "500ms all ease";
            pSeconds2.style.height = "0px"
            pSeconds2.style.transition = "10ms all ease";
            flagS = true;
        }

    };

    actualizeHour();
    var interval = setInterval(actualizeHour, 1000);

}())