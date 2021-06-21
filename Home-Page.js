function content(){
    document.getElementById("loader").style.display="none";
    document.getElementById("content").style.display="block";
}

setTimeout(content,4000);

function show(){
    document.getElementById("sidebar").style.left="0px";
    document.getElementById("open").style.display="none";
}
function hide(){
    document.getElementById("sidebar").style.left="-250px";
    document.getElementById("open").style.display="block";
}

var images = [ "image1.jpg","image2.jpg","image3.jpeg","image4.jpg"] ;
var i=0;
function change(){
    i++;
    if(i >= 4){i = 0;}
    document.getElementById("container").style.backgroundImage="url(" + images[i] + ")";
}

setInterval(change,3000);

var colors = ["red","blue","yellow","orange"];
var i=0;
function color(){
    i++;
    if(i >= 4){
        i = 0;
    }
    document.getElementById("table").style.border=colors[i] + " 2px solid";
}

setInterval(color,2000);




function theme(){
    var theme = document.getElementById("theme");

    if (theme.value == 2){
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("body").style.color="yellow";
    }

    else if (theme.value == 3){
        document.getElementById("body").style.backgroundColor="darkgreen";
        document.getElementById("body").style.color="white";
    }

    else if(theme.value == "Default"){
        document.getElementById("body").style.backgroundColor="skyblue";
        document.getElementById("body").style.color="black";
    }
}