var timer = 10;
var interval = setInterval(myTimer,1000);
 
function convertSeconds(timer)
{
var min = Math.floor (timer / 60);
var sec = timer % 60;
if (sec < 10) {
		sec = "0" + sec;
	}
return min + ':' + sec;
}


function myTimer()                         
{
document.getElementById("timer").innerHTML = convertSeconds(timer);
timer--; 
if (timer === 0)                        
 clearInterval(interval);
}