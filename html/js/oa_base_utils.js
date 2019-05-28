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

function userlist(){
    var right = document.getElementById("right");
    right.innerHTML = "<div class=\"table\"><div class=\"main-right-table-head\"><table style=\"width:100%;height: 100%;line-height: 50%;\">" + 
                      "<tr>" + 
                      "<td style=\"width: 20%;\">用户id</td><td style=\"width: 20%;\">姓名</td><td style=\"width: 20%;\">密码</td><td style=\"width: 20%;\">角色</td><td style=\"width: 10%;\">用户详情</td><td style=\"width: 5%;\">更新</td><td style=\"width: 5%;\">删除</td>"+
                      "</tr></table></div><table id=\"table_content\" class=\"main-right-table\">";
    var table = document.getElementById("table_content");
    for(var i=0;i<3;i++){
        table.innerHTML += "<tr id=\"tr" + i.toString() + "\" style=\"height: 3rem;\">" + 
                           "<td style=\"width: 20%;\">" + (i+10000).toString() + "</td>" +
                           "<td style=\"width: 20%;\">name:" + i.toString() + "</td>" +
                           "<td style=\"width: 20%;\">" + (i+12345).toString() + "</td>" +
                           "<td style=\"width: 20%;\">管理员</td>" +
                           "<td style=\"width: 10%;\"><button name=tr" + i.toString() + " onclick=\"edit_click(this)\">编辑</button></td>" +
                           "<td style=\"width: 5%;\"><button name=tr" + i.toString() + " onclick=\"update_click(this)\">更新</button></td>" +
                           "<td style=\"width: 5%;\"><button>删除</button></td>"+ 
                           "</tr>";
    }
    right.innerHTML += "</table></div>"
}