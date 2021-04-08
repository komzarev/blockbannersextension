
function blockPopaps(){
	
	console.log("popaps block script run");

	//www.tipranks.com
	var tipranksHide = ['client-components-stock-research-table-style__tableRestrict client-components-stock-research-insiders-table__tableRestrict restricted'
	,'client-components-stock-research-table-style__tableRestrict client-components-stock-research-bloggers-table__tableRestrict restricted'
	,'client-components-stock-research-insiders-confidence-signal-style__restricted client-components-stock-research-news-sentiment-styles__newsScoreRestrictor client-components-stock-research-news-sentiment-styles__restricted'
	];

	var yandexZenHide = ['infinity-zen'
	,'zen-widget'
	,'article__dzen'

	];

	
	var hideGroup = [tipranksHide,yandexZenHide];

	var tipranksRename = ['client-components-stock-research-insiders-table__isRestricted'
	,'client-components-stock-research-bloggers-table__isRestricted'
	,'client-components-stock-research-StockPageBox-style__tableChildren rt-table'
	,'client-components-stock-research-StockPageBox-style__children'
	,"company-report"
	];

	var renameGroup = [tipranksRename];

	var simpleWallStreetAttr = ["[data-cy-id='modal-ModalPortal-0-']"];
	var attrGroup = [ simpleWallStreetAttr];

	var simpleWallStreetClearHtml = ["blur-css"];
	var cleanHtmlGroup = [ simpleWallStreetClearHtml];

attrGroup.forEach(function(hide) {
	hide.forEach(function(banner) {
		var vv = document.querySelector(banner)
		if (vv !== undefined){
			vv.style.visibility = "hidden";
			vv.style.height = "0px"
		}
	});	
});

hideGroup.forEach(function(hide) {
	hide.forEach(function(banner) {
		var vv = document.getElementsByClassName(banner)
		if (vv.length > 0){
			vv[0].style.visibility = "hidden";
			vv[0].style.height = "0px"
		}
	});	
});

renameGroup.forEach(function(rename) {
	rename.forEach(function(banner) {
		var vv = document.getElementsByClassName(banner)
		if (vv.length > 0){
			vv[0].className = "asss";
		}
	});	
});

cleanHtmlGroup.forEach(function(rename) {
	rename.forEach(function(banner) {
		var vv = document.getElementById(banner)
		if (vv !== undefined){
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

