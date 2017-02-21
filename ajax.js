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

var xhr = createXHR();
xhr.onreadystatechange =function(){
	if (xhr.redyState == 4){
		if (xhr.status>=200 && xhr.status<300 || xhr.status == 304) {
			console.log(xhr.responseText);
		} else {
			console.log("Request was unsuccessful:" + xhr.status);
		}
	}
};
xhr.open("get","uri",true);
xhr.send(null);