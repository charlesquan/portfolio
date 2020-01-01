var video_id = "";
var counter = 0;

function video_set(id)
{
	document.getElementById("responsive_video").src = "https://www.youtube.com/embed/" + id + "?rel=0&autoplay=1";
	document.getElementById("overlay").style.display = "block";
}
function video_close()
{
	document.getElementById("overlay").style.display = "none";
	document.getElementById("responsive_video").src = "";
}
function thumbnail_set(id, old, image)
{
	var url = "";
	var x = document.createElement("div");
	x.style.maxWidth = "100%";
	x.style.paddingTop = "100%";

	if(image)
	{
		url = id;
	}
	else
	{
		if(old)
		{
			url = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
		}
		else
		{
			url = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
		}
	}
	
	x.style.backgroundImage = "url(" + url + ")";
	x.style.backgroundSize = "cover";
	x.style.backgroundPosition = "center center";
	document.getElementsByClassName("thumbnail")[counter].appendChild(x);
	counter++;
}
function burger(x)
{
	x.classList.toggle("cross");

	var y = document.getElementById("nav");
	y.style.display = "block";
	if(y.className === "nav" || y.className === "nav close")
	{
		y.className += " responsive";
	}
	else
	{
		y.className = "nav close";
	}
}
function menu_close()
{
	var x = document.getElementById("menu");
	var y = document.getElementById("nav");
	if(window.innerWidth >= 600)
	{
		x.classList.remove("cross");
		y.className = "nav";
	}
}
var image_src = "";
var image_id = "";
var image_type = "";

function image_set(src)
{
	document.getElementById("overlay").style.display = "block";
	document.image_current.src = src;
}
function image_close()
{
	document.getElementById("overlay").style.display = "none";
}