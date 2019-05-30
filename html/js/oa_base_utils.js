function edit_click(obj){
    var td = document.getElementById(obj.name).getElementsByTagName("td");
    for(var i=0;i<td.length-3;i++){
        td[i].setAttribute("contenteditable","true");
    }
}

function update_click(obj){
    var td = document.getElementById(obj.name).getElementsByTagName("td");
    for(var i=0;i<td.length-3;i++){
        td[i].setAttribute("contenteditable","false");
    }
}

function ul_click(obj){
    var name = obj.getAttribute("name");
    var ul = document.getElementById(name).getElementsByTagName("ul")[0];
    if(ul.style.height != "auto"){
        ul.style.height = "auto"
        document.getElementById(name).getElementsByTagName("i")[1].className="fa fa-angle-down"
    }else{
        ul.style.height = "0px"
        document.getElementById(name).getElementsByTagName("i")[1].className="fa fa-angle-right"
    }
}

function  personnel_management(){
    var right = document.getElementById("right");
    right.innerHTML = "<iframe \" src=\"./Base_html/personnel_management.html\"></iframe>";
}

function userlist(){
    var right = document.getElementById("right");
    right.innerHTML = "<iframe \" src=\"./Base_html/userlist.html\"></iframe>";
}