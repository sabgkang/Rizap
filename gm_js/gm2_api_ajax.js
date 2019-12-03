/* GM2 Javascript for AJAX */

function gm2_AjaxApiGet(url, dataOutputFunction, errorFunction) {
	kendoConsole.log("try AJAX (GET)...");

	var xhttp = new XMLHttpRequest();
	
	// 進行傳輸
	gm2_AjaxApiFetch(xhttp, dataOutputFunction);

	xhttp.onerror = errorFunction;
	xhttp.open("GET", url, true);
	xhttp.send();
}

function gm2_AjaxApiPropfind(url, dataOutputFunction, errorFunction) {
	kendoConsole.log("try AJAX (PROPFIND)...");

	var xhttp = new XMLHttpRequest();
	
	// 進行傳輸
	gm2_AjaxApiFetch(xhttp, dataOutputFunction);

	xhttp.onerror = errorFunction;
	xhttp.open("PROPFIND", url, true);
	xhttp.send();
}

function gm2_AjaxApiPost(url, bodyContent, dataOutputFunction, errorFunction) {
	kendoConsole.log("try AJAX (POST)...");
	var xhttp = new XMLHttpRequest();

	// 進行傳輸
	gm2_AjaxApiFetch(xhttp, dataOutputFunction);

	xhttp.onerror = errorFunction;
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhttp.send(JSON.stringify(bodyContent));
}

function gm2_AjaxApiPut(url, bodyContent, dataOutputFunction, errorFunction) {
	kendoConsole.log("try AJAX (PUT)...");
	var xhttp = new XMLHttpRequest();

	// 進行傳輸
	gm2_AjaxApiFetch(xhttp, dataOutputFunction);

	xhttp.onerror = errorFunction;
	xhttp.open("PUT", url, true);
	xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhttp.send(JSON.stringify(bodyContent));
}

function gm2_AjaxApiDelete(url, dataOutputFunction, errorFunction) {
	kendoConsole.log("try AJAX (DELETE)...");

	var xhttp = new XMLHttpRequest();

	// 進行傳輸
	gm2_AjaxApiFetch(xhttp, dataOutputFunction);

	xhttp.onerror = errorFunction;
    xhttp.open("DELETE", url, true);
	xhttp.send();
}

function gm2_AjaxApiFetch(xhttp, dataOutputFunction) {
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			// 解析 MRS
			var objData = gm2_AjaxApi_MrsParser(this.responseText);
			// 解完資料向外傳
			dataOutputFunction(objData);
		}
		else {
			if (this.status === 500) kendoConsole.log("Server Error: 500 ");
			if (this.status === 403) kendoConsole.log("Server Error: 403 ");
		}
	};
}

// MRS Parser
function gm2_AjaxApi_MrsParser(respText) {
	var responseObj = JSON.parse(respText);

	// 增加判斷有沒有其他主機輸出的錯誤
	var gotErrors = responseObj.errPairs.filter(function(item, index, array){
		return item.errCode !== 0;
	});

	// 列印 Performance Info
	if (responseObj.perfs != null) {
		var PerfInfo = "";
		responseObj.perfs.forEach(function(item, index, array){
			PerfInfo += "Perf[" + item.perfIdx + "] " + item.perfName + " (" + item.durationString + ")<br/>";
		});
		kendoConsole.log(PerfInfo);
	}
	
	// 檢查是否有錯誤
	if (gotErrors.length > 0){
		var errMsg = "";
		gotErrors.forEach(function (item, index, array) {
			errMsg = errMsg + "ErrCode: " + item.errCode + ", ErrMsg: " + item.errMsg + "; ";
			kendoConsole.log("ErrCode: " + item.errCode + ", ErrMsg: " + item.errMsg);
		});

		gm2_MessageDialog("messageDialog", "注意", errMsg);
	}
	else{
		kendoConsole.log("Process successful");
	}
	
	return responseObj.obj;
}
