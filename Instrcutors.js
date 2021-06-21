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