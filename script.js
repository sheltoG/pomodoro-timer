var timer = 1500;
var secondsRemaining;
var interval = setInterval(myTimer,1000);
 
function convertSeconds(timer)
{
var min = Math.floor (timer / 60);
var sec = timer - (min * 60);
  
//add a leading zero (as a string value) if seconds less than 10
if (sec < 10) {
		sec = "0" + sec;
	}
return min + ':' + sec;
}

//
function myTimer()                         
{
document.getElementById("timer").innerHTML = convertSeconds(timer);
timer--; 
if (timer < 0)                        
  clearInterval(interval);
}