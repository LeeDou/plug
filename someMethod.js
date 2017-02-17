(function (){
	window.kantMT = {};
	// 常用函数
	window.kantMT.UFunction = {
		// 浏览器窗口
		getLocal: function(){
			var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
			var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
			return(leftPos,tops);
		}，
		// 浏览器大小
		getWidth : function(){
			var pageWidth = window.innerWidth;
			if (typeof pageWidth != "number") {
				if (document.compatMode == "CSS1Compat") {
					pageWidth = document.documentElement.clientWidth;
				} else{
					pageWidth = document.body.clientWidth;
				}
			}
			return pageWidth;
		}
		getHeight : function() {
			var pageHeight = window.innerHeight;
			if (typeof pageHeight != "number") {
				if (document.compatMode == "CSS1Compat") {
					pageHeight = document.documentElement.clientHeight;
				} else {
					pageHeight = document.body.clientHeight;
				}
			}
			return pageHeight;
		}
	}
})()