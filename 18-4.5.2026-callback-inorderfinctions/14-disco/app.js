counter = 0; 
setInterval(() => {
  let colors = ["red", "green", "blue", "yellow", "purple"];
  document.body.style.backgroundColor = colors[counter % 5];
  counter++;
  }, 1000);