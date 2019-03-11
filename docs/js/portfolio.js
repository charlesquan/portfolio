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

function thumbnail_set(id)
{
	var x = document.createElement("img");
    x.setAttribute("src", "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg");
    document.getElementsByClassName("thumbnail")[counter].appendChild(x);
    counter++;
}