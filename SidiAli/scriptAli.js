function slider(any){
    document.querySelector('.buttel').src = any;
}

function changecolor(color){
    const circle = document.querySelector('.circle');
    circle.style .background = color ;
}
var icon = document.getElementById("icon");
icon.onclick = function(){
    
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/sun.png";
    }
    else{
        icon.src = "icons/moon.png";
    }
}