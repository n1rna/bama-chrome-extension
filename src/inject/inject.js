chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		$(".overview").map(function() {
			for(var i=0;i<this.childNodes.length;i++){
				if(this.childNodes[i].nodeType == 8){
					$(this).html(this.childNodes[i].data);
				}
			}
		}).get();

	}
	}, 10);
});