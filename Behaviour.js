window.onload = function()  {
	Alert.render('Made By Karan Singh');
};


function customAlert() {
	this.render = function (dialog) {
		var winw = window.innerWidth;
		var winh = window.innerHeight;
		var overlay = document.getElementById('overlay');
		var alertbox = document.getElementById('alertbox');
		overlay.style.display = "block";
		overlay.style.height = winh+"px";
		alertbox.style.left = (winw/2) - (550 *.5)+"px";
		alertbox.style.display = "block";
		alertbox.style.top = "170px";
		document.getElementById('boxtop').innerHTML = "Acknowledge This Message";
		document.getElementById('boxmid').innerHTML = dialog;
		document.getElementById('boxfoot').innerHTML = "<button onclick='Alert.ok()'>OK</button>"; 
		document.getElementById('menu1').style.display = "none";
		document.getElementById('menu2').style.display = "none";
		document.getElementById('menu3').style.display = "none";
	}
	
	this.ok = function () {
	 document.getElementById('overlay').style.display = "none";	
	 document.getElementById('alertbox').style.display = "none";	
	}	
}

var Alert = new customAlert();

var arrow = document.getElementsByClassName('up');
var darrow = document.getElementsByClassName('down'); 
var ma = ["menu1","menu2","menu3"];
function show(x) {
	for(var m in ma) {
		if(ma[m] != x)  {
			document.getElementById(ma[m]).style.display = "none";	
			darrow.innerHTML =""; 
			arrow.innerHTML = "&#9658";
		}
		else if (document.getElementById(x).style.display == "block") {
			document.getElementById(x).style.display = "none";
			
		}


		else
		{
				document.getElementById(ma[m]).style.display = "block";
				darrow.innerHTML ="&#9660"; 
				arrow.innerHTML = "";
		}
		
		
	}
	
	
}
