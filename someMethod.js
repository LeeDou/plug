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
	};

	//选择兼容
	window.kantMT.Selectors = {
		querySA: function (){
			return querySelectorAll();
		},
		matchS: function (element,selector) {
			if(element.matchesSelectors){
				return element.matchesSelectors(selector);
			} else if(element.msmatchesSelector) {
				return element.msmatchesSelector(selector);
			} else if (element.mozmatchesSelectors) {
				return element.mozmatchesSelectors(selector);
			} else if (element.webkitmatchesSelectors){
				return element.webkitmatchesSelectors(selectors);
			} else {
				throw new error ("not supported");
			}
		}

	};
})()