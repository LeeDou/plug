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
	window.kantMT.EventUtil = {
		// event:event | window.event;
		addHander:function(element,type,handler){
			if (element.addEventListener) {
				element.addEventListener(type,handler,false);
			} else if (element.attahEvent) {
				element.attachEvent("on"+type,handler);
			} else {
				element["on"+type] = handler;
			}
		},
		removeHander:function(element.type,handler){
			if (element.removeEventListener) {
				element.removeEventListener(type,handler
					,false)
			} else if (element.detachEvent) {
				element.detachEvent("on"+type,handler);
			} else {
				element["on"+type] = null;
			}
		},
		getEvent: function(event) {
			return event? event : window.event;
		},
		getTarget: function(event) {
			return event.target || event.srcElement;
		},
		preventDefault: function(event) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		},
		getRelatedTarget: function (event) {
			if (ecent.relatedTarget) {
				return event.relatedTarget;
			} else if (event.toElement) {
				return event.toElement;
			} else if (event.fromeElement) {
				return event.fromeElement;
			} else {
				return null;
			}
		}

	};
})()