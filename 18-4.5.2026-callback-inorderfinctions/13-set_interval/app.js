setInterval(() => {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
    console.log(now.toLocaleTimeString());
  }, 1000);