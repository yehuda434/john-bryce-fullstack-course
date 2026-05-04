counter = 0; 
setInterval(() => {
  let colors = ["red", "green", "blue", "yellow", "purple"];
  document.body.style.backgroundColor = colors[counter];
  counter++;
  if(counter >= colors.length){
    counter = 0;
  }
  
  }, 1000);