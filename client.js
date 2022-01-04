
function blockPopaps(){
	
	console.log("popaps block script runs");
	for (var i = 0; i < 10000; i++) clearInterval(i);

	//www.tipranks.com
	var tipranksHide = ['client-components-stock-research-table-style__tableRestrict client-components-stock-research-insiders-table__tableRestrict restricted'
	,'client-components-stock-research-table-style__tableRestrict client-components-stock-research-bloggers-table__tableRestrict restricted'
	,'client-components-stock-research-insiders-confidence-signal-style__restricted client-components-stock-research-news-sentiment-styles__newsScoreRestrictor client-components-stock-research-news-sentiment-styles__restricted'
	];

	var yandexZenHide = ['infinity-zen'
	,'zen-widget'
	,'article__dzen'

	];

	
	var tipranksRename = ['client-components-stock-research-insiders-table__isRestricted'
	,'client-components-stock-research-bloggers-table__isRestricted'
	,'client-components-stock-research-StockPageBox-style__tableChildren rt-table'
	,'client-components-stock-research-StockPageBox-style__children'
	,"company-report"
	];

	var simpleWallStreetHide = ["sc-phfh3g-14 jOpUVf"]

	var simpleWallStreetAttr = ["[data-cy-id='modal-ModalPortal-0-']"];

	var simpleWallStreetClearHtml = ["blur-css"];

	var renameGroup = [tipranksRename];
	var attrGroup = [ simpleWallStreetAttr];
	var cleanHtmlGroup = [ simpleWallStreetClearHtml];
	var hideGroup = [tipranksHide,yandexZenHide,simpleWallStreetHide];

attrGroup.forEach(function(hide) {
	hide.forEach(function(banner) {
		var vv = document.querySelector(banner)
		if (vv){
			vv.style.visibility = "hidden";
			vv.style.height = "0px"
		}
	});	
});

hideGroup.forEach(function(hide) {
	hide.forEach(function(banner) {
		var vv = document.getElementsByClassName(banner)
		if (vv && vv.length > 0){
			vv[0].style.visibility = "hidden";
			vv[0].style.height = "0px"
		}
	});	
});

renameGroup.forEach(function(rename) {
	rename.forEach(function(banner) {
		var vv = document.getElementsByClassName(banner)
		if (vv && vv.length > 0){
			vv[0].className = "asss";
		}
	});	
});

cleanHtmlGroup.forEach(function(rename) {
	rename.forEach(function(banner) {
		var vv = document.getElementById(banner)
		if (vv){
			vv.outerHTML="";
		}
	});	
});
}

function doActTimed()
{
	window.setTimeout(blockPopaps, 1000);
}

blockPopaps();
// window.addEventListener("load", doActTimed );
// window.addEventListener("onload", doActTimed );
// document.addEventListener("DOMContentLoaded", doActTimed);

