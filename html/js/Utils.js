/*
    toast(信息) 显示信息
    submit(提交地址,成功后转跳的url) 表单提交
*/

var div = document.getElementById("toast");
div.addEventListener("animationend",function(e){
    div.style.animation = "";
});
function toast(message){
    div.innerHTML = '<i style="font-size:17px;color:red;" class="fa fa-times" aria-hidden="true"></i>' + message;
    div.style.animation = "toast-animation 2s";
}

function  submit(data,url){
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState == 4){
            if (xmlhttp.status==200){
                if(xmlhttp.responseText != 1){
                    toast("账号密码错误");
                }else{
                    window.location.href=url;
                }
            }else{
                toast("连接超时...");
            }
        }
    }
    xmlhttp.open("GET",data ,true); 
    xmlhttp.send();
}