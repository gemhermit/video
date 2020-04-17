
function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
var rname = getParameter("rname");
    alert(rname);//若参数值是中文会乱码
     if (rname) {
         var rname = window.decodeURIComponent(rname);//decode解码
     }
 alert(rname);
}
