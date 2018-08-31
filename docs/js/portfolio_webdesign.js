var imgArray = [];
var capArray = [];
var pgArray = [];
var counter = 0;
var end = 0;
var fading = false;

var auto_wait = 500;
var auto_index = 0;
var auto_id = setInterval(autoplay, 5);

function slide_image()
{
	for(var i = 0; i < arguments.length; i++)
	{
		imgArray[i] = new Image();
		imgArray[i].src = arguments[i];
	}
	end = imgArray.length - 1;
}
function slide_caption()
{
	for(var i = 0; i < arguments.length; i++)
	{
		capArray[i] = arguments[i];
	}
}
function slide_page()
{
	for(var i = 0; i < arguments.length; i++)
	{
		pgArray[i] = arguments[i];
	}
	document.getElementById("page").href = "portfolio_webdesign" + pgArray[counter] + ".html";
}

function slide_number(dot_selection)
{
	if(fading == false)
	{
		counter = dot_selection;
		slide_change();
	}
}
function prev()
{
	if(fading == false)
	{
		if(counter == 0)
		{
			counter = end;
		}
		else
		{
			counter--;
		}
		slide_change();
	}
}
function next()
{
	if(fading == false)
	{
		if(counter == end)
		{
			counter = 0;
		}
		else
		{
			counter++;
		}
		slide_change();
	}
}

function slide_change()
{
	document.s_current.src = s_next.src;
	document.s_next.src = imgArray[counter].src;
	document.getElementById("caption_current").innerHTML = document.getElementById("caption_next").innerHTML;
	document.getElementById("caption_next").innerHTML = capArray[counter];
	slide_fade();
	dot_number();
	auto_wait = 2000;
	auto_index = 0;
}
function slide_fade()
{
	document.getElementById("slide_next").style.opacity = 0;
	document.getElementById("caption_next").style.opacity = 0;

	var i = 0;
	var elem = document.getElementById("slide_next");
	var cap_elem = document.getElementById("caption_next");
    var id = setInterval(frame, 5);

    function frame() 
    {
    	elem.style.opacity = i;
    	cap_elem.style.opacity = i;
        if (i < 1) 
        {
        	i += .01;
        	fading = true;
        } 
        else 
        {
            clearInterval(id);
            fading = false;
        }
    }
}
function dot_number()
{
	if(imgArray.length > 10)
	{
		for(var i = 0; i < imgArray.length; i++)
		{
			document.getElementById("dot_" + (i + 1)).style.backgroundColor = "transparent";
		}
		document.getElementById("dot_" + (counter + 1)).style.backgroundColor = "black";
	}
	else
	{
		for(var i = 0; i < imgArray.length; i++)
		{
			document.getElementById("dot_0" + (i + 1)).style.backgroundColor = "transparent";
		}
		document.getElementById("dot_0" + (counter + 1)).style.backgroundColor = "black";
	}
}

function autoplay()
{
	if(typeof s_next !== "undefined")
	{
		if(auto_index < auto_wait)
		{
			auto_index++;
		}
		else
		{
			next();
			auto_wait = 500;
			auto_index = 0;
		}
	}
}

//gallery

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

//episodes

var video_number = "";
var video_id = "";
var videoArray = [];

function video_set(number, id)
{
	video_number = number;
	video_id = id;

	document.getElementById("responsive_video").src = "https://www.youtube.com/embed/" + video_id + "?rel=0&autoplay=1";

	for(var i = 0; i < videoArray.length; i++)
	{
		document.getElementById(videoArray[i]).style.backgroundColor = "lightcyan";
		document.getElementById(videoArray[i]).children[1].style.color = "darkcyan";
	}

	document.getElementById(videoArray[video_number]).style.backgroundColor = "darkcyan";
	document.getElementById(videoArray[video_number]).children[1].style.color = "lightcyan";
}