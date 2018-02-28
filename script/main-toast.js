var i = 1;
function creatediv() {
    mNewObj = document.createElement('div');
    i++;
    mNewObj.style.visibility = "show";
    mNewObj.style.width = "200px";
    mNewObj.style.height = "80px";
    var color = Math.floor((Math.random() * 300) + 1);
    mNewObj.style.background = "rgb("+color+","+color+","+color+")";
    mNewObj.style.margin = "10px";
    mNewObj.style.border = "1px solid black";
    mNewObj.innerHTML = "Toast Messages goes here";
    document.getElementById("newBox").appendChild(mNewObj);
     var time_parent = document.getElementById('newBox');
	 setTimeout(function () {
        time_parent.style.display='none';	
    }, 1000);
    i++;
}