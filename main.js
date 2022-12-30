const rootPath = window.location.origin

main()

function main(){
    loadComponents();
}

function loadComponents(){
    window.onload = function(){
        addComponent("head.html", "head");
        addComponent("nav.html", "nav");
    }
}

function addComponent(htmlPath, elementQuery){
    htmlPath = rootPath + "/public/components/" + htmlPath
    var xhr= new XMLHttpRequest();
    xhr.open('GET', htmlPath, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.querySelector(elementQuery).innerHTML= this.responseText;
    };
    xhr.send();
}
