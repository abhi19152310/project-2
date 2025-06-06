//function for getting reaction time
var start;
function move(){
var top=Math.random()*250;
var left=Math.random()*1000;
var widthheight=(Math.random()*400)+100;
document.getElementById("intialbox").style.left=left+"px";
document.getElementById("intialbox").style.top=top+"px";
document.getElementById("intialbox").style.width=widthheight+"px";
document.getElementById("intialbox").style.height=widthheight+"px";
document.getElementById("intialbox").style.display="block";
start=new Date().getTime();
 }
//  function for colour of the box using rgb values
function colour(){
    var x=Math.random()*256;
    var y=Math.random()*256;
    var z=Math.random()*256;
    document.getElementById("intialbox").style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}
move();
document.getElementById("intialbox").onclick = function(){
    document.getElementById("intialbox").style.display="none";
    var end= new Date().getTime();
    var reactiontime=(end-start)/1000;
    colour();
    if((end-start)/1000<1){
         alert("Great! reaction time is :"+ reactiontime+"seconds");
    }
    else{
       alert("try to be a bit faster! reaction time is :"+ reactiontime+"seconds"); 
    }
    move();
}

