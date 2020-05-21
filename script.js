var timer = 60;
var interval = setInterval(myTimer,1000);
  
function myTimer()                         
{
 timer--;
 $('.timer').text(timer);
 if (timer === 0)                        clearInterval(interval);
}