var video_number = "";
var video_id = "";
var videoArray = [];

function video_set(number, id)
{
	video_number = number;
	video_id = id;

	document.getElementById("responsive_video").src = "http://www.youtube.com/embed/" + video_id + "?rel=0&autoplay=1";

	for(var i = 0; i < videoArray.length; i++)
	{
		document.getElementById(videoArray[i]).style.border = "none";
		document.getElementById(videoArray[i]).style.backgroundColor = "silver";
	}

	document.getElementById(videoArray[video_number]).style.border = "4px solid dimgray";
	document.getElementById(videoArray[video_number]).style.backgroundColor = "dimgray";
}

//games & fanart

var image_src = "";
var image_id = "";
var image_type = "";

function image_set(src, id, type)
{
	image_src = src;
	image_id = id;
	image_type = type;
	document.getElementById("overlay").style.display = "block";
	document.image_current.src = image_src + image_id + image_type;
}
function image_close()
{
	document.getElementById("overlay").style.display = "none";
}

//small image scaling
/*
function image_resize(width, height)
{
	var image_w = width;
	var image_h = height;

	if(window.innerWidth < window.innerHeight * (image_w / image_h))
	{
		image_current.style.width = window.innerWidth + "px";	
		image_current.style.height = window.innerWidth / (image_w / image_h) + "px";
	}
	if(window.innerHeight <  window.innerWidth / (image_w / image_h))
	{		
		image_current.style.height = window.innerHeight + "px";	
		image_current.style.width = window.innerHeight * (image_w / image_h) + "px";
	}
	if(window.innerWidth >= image_w && window.innerHeight >= image_h)
	{
		
		image_current.style.width = image_w + "px";
		image_current.style.height = image_h + "px";
	}
}
*/