function ajax(url,fc,type,data) {
  //url表示请求路径
  //type表示希望收到数据类型
  //fc表示get或post方法
  //data表示插入数据
  //创建Ajax对象,ActiveXObject兼容IE5,6
  var xhr = createXHR();
  //打开请求
  if (fc=='get') {
    xhr.open('get', url, true);
  } else {
    xhr.open('post',url,true);//方法,URL,异步传输
  }
  //发送请求
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(data);
  //接收返回,当服务器有东西返回时触发
  xhr.onreadystatechange = function (){    
    if(xhr.readyState == 4 && xhr.status == 200){
      if(type == 'text'){
        console.log(xhr.responseText);
        return text = xhr.responseText; 
      } else if(type == 'json'){
        var json = eval('('+xhr.responseText+')');//把传回来的字符串解析成json对象
        console.log(json);
        return json;
      } else if(type == 'xml'){
        var oXml = xhr.responseXML; //返回的是一个XML DOM对象        
        console.log(oXml);
        return oXml;
      }
 
    }
  }
}

//支持IE5、6及IE7以后版本
function createXHR (){
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
          i, len;
          for(i=0,len=version.length;i < len ;i++){
            try {
              new ActiveXObject(version[i]);
              arguments.callee.activeXString = version[i];
              break;
            } catch(ex){
              //error
            }
          }
    }

    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error("No XHR object available.")
  }
}
