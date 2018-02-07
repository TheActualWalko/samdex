const updateGradient = ()=>{
  const deg = (Date.now() / 100) % 360
  document.querySelector('#bg').style = `background-image:linear-gradient(${deg}deg, blue, red);`;
}

//setInterval(updateGradient, 30);
setTimeout(updateGradient, 100);