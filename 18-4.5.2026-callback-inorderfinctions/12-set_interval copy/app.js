function clock(){
    count=0;
    setInterval(function(){
        count++;
        document.getElementById("clock").innerHTML = count;
    }, 5000);
}

clock();