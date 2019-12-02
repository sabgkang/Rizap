/* GM2 Javascript for Message Dialog */

function gm2_MessageDialog(divObjId, title , message) {
 //   var messageDialog = $("#" + divObjId);
 //   kendoConsole.log(messageDialog);
	//messageDialog.kendoDialog({
	//	width: "450px",
	//	title: title,
	//	closable: false,
	//	modal: true,
	//	content: "<p>" + message + "<p>",
	//	actions: [
	//		{ text: '��𣈯��', primary: true }
	//	],
	//	close: function (){
	//		messageDialog = null;
	//	}
	//});
	kendo.alert(message);
}
