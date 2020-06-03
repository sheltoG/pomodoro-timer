var timer = 66;
var interval = setInterval(myTimer,1000);
  
function myTimer()                         
{
timer--; 
document.getElementById("timer").innerHTML = timer;
if (timer === 0)                        
 clearInterval(interval);
}