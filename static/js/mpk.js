
function collapse(id){
    elem = document.getElementById(id);
    display = elem.style.display;
    if (display) {
        elem.style.display = "";
    }
    else {
        elem.style.display = "block";
    }
}