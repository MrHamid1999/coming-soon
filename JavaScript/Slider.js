window.addEventListener("load" , () =>{
 setInterval(() => {
  var futurDate = new Date(new Date().getFullYear() + 1  , 0 , 1);
  var nowDate = new Date();
   
  var delta =Math.abs(futurDate - nowDate)/1000;
  var days = Math.floor(delta / 86400);
  delta-= days * 86400;
  var hours = Math.floor(delta / 3600 );
  delta-= hours * 3600;
  var minutes = Math.floor(delta / 60 );
  delta-= minutes * 60;
  var seconds = Math.floor(delta);

  document.getElementsByClassName("timer-clock")[0].innerHTML = days;
  document.getElementsByClassName("timer-clock")[1].innerHTML = hours;
  document.getElementsByClassName("timer-clock")[2].innerHTML = minutes;
  document.getElementsByClassName("timer-clock")[3].innerHTML = seconds;
 }, 1000);
  
})