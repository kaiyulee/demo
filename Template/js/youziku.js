// 毛泽东字体
// class="maozedongziti"
function youziku45805() {
    var resultStr = $(".maozedongziti").text();
    var md5 = "";
    resultStr = Trim(resultStr);
    resultStr = SelectWord(resultStr);
    md5 = $.md5("e55f9fd56ac3495f98bff27e07f75a20" + "maozedongziti" + resultStr);
    $.getJSON("http://www.youziku.com/webfont/CSSPOST?jsoncallback=?", {
        "id": md5,
        "guid": "e55f9fd56ac3495f98bff27e07f75a20",
        "type": "5"
    }, function(json) {
        if (json.result == 0) { /*alert("需要生成");*/
            $.post("http://www.youziku.com/webfont/PostCorsCreateFont", {
                "name": "maozedongziti",
                "gid": "e55f9fd56ac3495f98bff27e07f75a20",
                "type": "5",
                "text": resultStr
            }, function(json) {
                if (json == "0") { /*alert("参数不对");*/ } else if (json == "2") { /*alert("超过每日生成字体数的上限");*/ } else if (json == "3") { /*alert("当前正在生成请稍后");*/ } else { /*alert("正在生成");*/ }
            });
        } else { /*alert("下载css文件");*/
            loadExtentFile("http://www.youziku.com/webfont/css?id=" + md5 + "&guid=" + "e55f9fd56ac3495f98bff27e07f75a20" + "&type=5");
        }
    });
}
// 经典繁颜体
//  在您要使用该字体的标签上添加class引用，class="jdfyanti"
// 例如：<h1>调用方式<h1 class="jdfyanti">
// 例如：<div>调用方式<div class="jdfyanti">
function youziku19638() {
    var resultStr = $(".jdfyanti").text();
    var md5 = "";
    resultStr = Trim(resultStr);
    resultStr = SelectWord(resultStr);
    md5 = $.md5("85294cb0929044c487233bedf4ba19a3" + "jdfyanti" + resultStr);
    $.getJSON("http://www.youziku.com/webfont/CSSPOST?jsoncallback=?", {
        "id": md5,
        "guid": "85294cb0929044c487233bedf4ba19a3",
        "type": "5"
    }, function(json) {
        if (json.result == 0) { /*alert("需要生成");*/
            $.post("http://www.youziku.com/webfont/PostCorsCreateFont", {
                "name": "jdfyanti",
                "gid": "85294cb0929044c487233bedf4ba19a3",
                "type": "5",
                "text": resultStr
            }, function(json) {
                if (json == "0") { /*alert("参数不对");*/ } else if (json == "2") { /*alert("超过每日生成字体数的上限");*/ } else if (json == "3") { /*alert("当前正在生成请稍后");*/ } else { /*alert("正在生成");*/ }
            });
        } else { /*alert("下载css文件");*/
            loadExtentFile("http://www.youziku.com/webfont/css?id=" + md5 + "&guid=" + "85294cb0929044c487233bedf4ba19a3" + "&type=5");
        }
    });
}
(function youziku() {
    if (window.location.href.toString().substring(0, 7) == "file://") {
        alert("你当前是通过双击打开html文件，进行本地测试的，这样看不到字体效果，一定要通过本地建立的虚拟网站或发布到外网进行测试。详见有字库的使用说明。");
    } else {
        youziku45805();
        youziku19638();
    }
})();