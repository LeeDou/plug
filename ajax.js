// 创建xhr对象
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

function readyStateChange(xhr){
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status <300 || xhr.status == 304) {
				if(type == 'text'){
	        		return xhr.responseText;
	      		} else if(type == 'json') {
	        		var json = eval('('+xhr.responseText+')');//把传回来的字符串解析成json对象
	        		return json;
	    		} else if(type == 'xml') {
	           		return xhr.responseXML; //返回的是一个XML DOM对象
	        		
	      		}
			} else {
				console.log("Request was unsuccessful:" + xhr.status);
			}
		}
	};
	
}

function doget(url,data) {
	var data = '';
	for (var d in jsonData){
		data += (d + '=' +data[d] + '&')
	}
	var xhr = createXHR();
	xhr.open("get", "url", true);
	xhr.send(data);
	readyStateChange(xhr);
}

function dopost(url,data){
	var data = '';
	for (var d in jsonData){
		data += (d + '=' +data[d] + '&')
	}
	var xhr = createXHR();
	xhr.open("post", "url", true);
	xhr.send(data);
	readyStateChange(xhr);
}
