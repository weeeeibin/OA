function  personnel_management(){
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML += "<div style=\"width:85%;position: relative;left: 0;right: 0;margin: auto;\">" + 
    "<input class=\"update_files\" type=\"submit\" value=\"上传excel\">" +
    "<label for=\"update\" class=\"update_files\">选择文件</label>" +
    "<from><input id=\"update\" type=\"file\" action=\"./UploadServlet\" method=\"post\" enctype=\"multipart/form-data\" style=\"position:absolute;clip:rect(0 0 0 0);\" \></from>" +
    "</div>";
}

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

function alluser(){
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = "<div class=\"table\"><div class=\"main-right-table-head\"><table style=\"width:100%;height: 100%;line-height: 50%;\">" + 
                      "<tr>" + 
                      "<td style=\"width: 20%;\">id</td><td style=\"width: 20%;\">姓名</td><td style=\"width: 20%;\">密码</td><td style=\"width: 10%;\">部门</td><td style=\"width: 10%;\">权限</td><td style=\"width: 10%;\">用户详情</td><td style=\"width: 5%;\">更新</td><td style=\"width: 5%;\">删除</td>"+
                      "</tr></table></div><table id=\"table_content\" class=\"main-right-table\">";
    var table = document.getElementById("table_content");
    for(var i=0;i<72;i++){
        table.innerHTML += "<tr id=\"tr" + i.toString() + "\" style=\"height: 3rem;\">" + 
                           "<td style=\"width: 20%;\">" + (i+10000).toString() + "</td>" +
                           "<td style=\"width: 20%;\">name:" + i.toString() + "</td>" +
                           "<td style=\"width: 20%;\">" + (i+12345).toString() + "</td>" +
                           "<td style=\"width: 10%;\">部门1</td>" +
                           "<td style=\"width: 10%;\">管理员</td>" +
                           "<td style=\"width: 10%;\"><button name=tr" + i.toString() + " onclick=\"edit_click(this)\">编辑</button></td>" +
                           "<td style=\"width: 5%;\"><button name=tr" + i.toString() + " onclick=\"update_click(this)\">更新</button></td>" +
                           "<td style=\"width: 5%;\"><button>删除</button></td>"+ 
                           "</tr>";
    }
    body.innerHTML += "</table></div>"
}

function userlist(){
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = "<div class=\"table\"><div class=\"main-right-table-head\"><table style=\"width:100%;height: 100%;line-height: 50%;\">" + 
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
    body.innerHTML += "</table></div>"
}