function gm2_GetCreditCardShowStr(credit_No) {
    var creditCardStr = "";
    if (credit_No !== null && credit_No.length >= 16) {
        for (var i = 0; i < 16; i++) {
            if (i < 12)
                creditCardStr = creditCardStr + "*";
            else
                creditCardStr = creditCardStr + credit_No.charAt(i);
        }
    }

    return creditCardStr;
}

function gm2_GetCreditCardShowStrLast4(credit_No) {
    var creditCardStr = "";
    if (credit_No !== null && credit_No.length >= 16) {
        for (var i = 0; i < 16; i++) {
            if (i >= 12)
                creditCardStr = creditCardStr + credit_No.charAt(i);
        }
    }

    return creditCardStr;
}

function gm2_GetBankNoStr(bank_Transfer_No) {
    var bandNoStr = "";
    if (bank_Transfer_No !== null && bank_Transfer_No.length >= 5) {
        for (var i = 0; i < bank_Transfer_No.length ; i++) {
            if (i >= bank_Transfer_No.length - 5)
				bandNoStr = bandNoStr + bank_Transfer_No.charAt(i);
            else 
				bandNoStr = bandNoStr + "*";
        }
    }

    return bandNoStr;
}

function gm2_GetYearMonthShowStr(dateTime) {
	var date = new Date(dateTime);
	var str = (date.getYear() + 1900) + "/" + (date.getMonth() + 1);
	return str === "1/1" ? "" : str;
}

function gm2_GetDateShowStr(dateTime) {
	var date = new Date(dateTime);
	var str = (date.getYear() + 1900) + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	return str === "1-1-1" ? "" : str;
}

function gm2_KendoGetDateShowStr(dateTime) {
	if (dateTime === null) return "";

	var str = kendo.toString(dateTime, "yyyy/MM/dd");
    return str === "0001/01/01" ? "" : str;
}

function gm2_KendoGetDateTimeShowStr(dateTime) {
    var str = kendo.toString(dateTime, "yyyy/MM/dd HH:mm:ss");
    return str === "0001/01/01 00:00:00" ? "" : str;
}

function gm2_GetDateStrForChangeNo() {
    var date = new Date();

    var month = ''+ (date.getMonth() + 1);
    var day = '' + date.getDate();

    var hour = ''+ date.getHours();
    var minutes = '' + date.getMinutes();
    var seconds = '' + date.getSeconds();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    return "H" + month + day + hour + minutes + seconds;
}

/**
 * 傳入 kendoGrid Obje
 * EX: var gridObject = $("#grid").data("kendoGrid");
 * */
function gm2_GetKendoGridFilteredDatas(gridObject) {
    if (gridObject === null || gridObject === undefined) return new Array;

    var filters = gridObject.dataSource.filter();
    var allData = gridObject.dataSource.data();
    var query = new kendo.data.Query(allData);
    var data = query.filter(filters).data;

    return data;
}

/**
 * Validate Series
 */
function gm2_Validate_加盟店代號(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "加盟店代號為空";
	} else {
		result.isMatch = data.match(/^[a-zA-Z]{1}\d{3}$/);
		result.formatMsg = "加盟店代號為英+數字3碼";
	}

	return result;
}

function gm2_Validate_加盟店編號(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "加盟店編號為空";
	} else {
		result.isMatch = data.match(/^\d+$/);
		result.formatMsg = "加盟店編號為純數字";
	}

	return result;
}

function gm2_Validate_電話號碼(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "電話號碼為空";
	} else {
		result.isMatch = data.match(/^\d+[-]?\d+[-]?\d+$/);
		result.formatMsg = "電話號碼格式不正確";
	}

	return result;
}

function gm2_Validate_傳真號碼(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "傳真號碼為空";
	} else {
		result.isMatch = data.match(/^\d+[-]?\d+[-]?\d+$/);
		result.formatMsg = "傳真號碼格式不正確";
	}

	return result;
}

function gm2_Validate_電子郵箱(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "E-Mail為空";
	} else {
		result.isMatch = data.match(/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/);
		result.formatMsg = "E -Mail格式不正確";
	}

	return result;
}

function gm2_Validate_郵遞區號(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "郵遞區號為空";
	} else {
		result.isMatch = data.match(/^\d+$/);
		result.formatMsg = "郵遞區號為純數字";
	}

	return result;
}

function gm2_Validate_統一編號(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "統一編號為空";
	} else {
		result.isMatch = data.match(/^\d{8}$/);
		result.formatMsg = "統一編號為8碼數字";
	}

	return result;
}

function gm2_Validate_信用卡卡號(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "信用卡卡號為空";
	} else {
		result.isMatch = data.match(/^\d{16}$/);
		result.formatMsg = "信用卡卡號為16碼數字";
	}

	return result;
}

function gm2_Validate_手機條碼載具(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "手機條碼載具為空";
	} else {
		result.isMatch = data.match(/^[/]{1}[a-zA-Z0-9+-.]{7}$/);
		result.formatMsg = "手機條碼載具為”/”開頭，共8碼";
	}

	return result;
}

function gm2_Validate_自然人憑證條碼載具(data) {
	var result = new Object;

	if (data.length === 0 || data === '') {
		result.isMatch = false;
		result.formatMsg = "自然人憑證條碼載具為空";
	} else {
		result.isMatch = data.match(/^[A-Z]{2}[0-9]{14}$/);
		result.formatMsg = "自然人憑證條碼載具2碼英文字母+14碼數字，共16碼";
	}

	return result;
}