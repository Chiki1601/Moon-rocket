var eys_ball_1 = document.getElementsByClassName("eye-ball-1");
var eys_ball_2 = document.getElementsByClassName("eye-ball-2");
		console.log(eys_ball_1,eys_ball_2);
		document.onmousemove = function()
		{
			var x = event.clientX * 100 / window.innerWidth;
			var y = event.clientY * 100 / window.innerWidth; 			
 			// eye ball 1
 			eys_ball_1[0].style.cx = 649.195 + (x / 10);
			eys_ball_1[0].style.cy = 368.063 + (y / 10);
			eys_ball_1[0].style.transform = "transform(-"+x+",-"+y+")";

 			// eye ball 2
 			eys_ball_2[0].style.cx = 706.042 + (x / 10); 
			eys_ball_2[0].style.cy = 368.633 + (y / 10);
			eys_ball_2[0].style.transform = "transform(-"+x+",-"+y+")";
		}