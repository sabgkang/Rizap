function HC_Change_Order_Main_Model(mainOrderData) {
	var data = new Object;
	
	/// 異動單號
	data.change_Order_No = gm2_GetDateStrForChangeNo();
	/// <summary>
	/// 原訂單編號
	/// </summary>
	data.order_No = mainOrderData.order_No;
	/// <summary>
	/// 販售店鋪代號
	/// </summary>
	data.sold_Franchise_Code = mainOrderData.sold_Franchise_Code;
	/// <summary>
	/// 販售店鋪名稱
	/// </summary>
	data.sold_Franchise_Name = mainOrderData.sold_Franchise_Name;
	/// <summary>
	/// 所屬店鋪代號
	/// </summary>
	data.belonging_Franchise_Code = mainOrderData.belonging_Franchise_Code;
	/// <summary>
	/// 所屬店鋪名稱
	/// </summary>
	data.belonging_Franchise_Name = mainOrderData.belonging_Franchise_Name;
	/// <summary>
	/// 會員編號
	/// </summary>
	data.member_No = mainOrderData.member_No;
	/// <summary>
	/// 會員姓名
	/// </summary>
	data.member_Name = mainOrderData.member_Name;
	/// <summary>
	/// 手機號碼
	/// </summary>
	data.mobile_No = mainOrderData.mobile_No;
	/// <summary>
	/// 填單日期
	/// </summary>
	data.create_Date = kendo.toString(new Date(), "yyyy-MM-ddTHH:mm:ss");;
	/// <summary>
	/// 會籍狀態
	/// </summary>
	data.member_Type = mainOrderData.member_Type;
	/// <summary>
	/// 原每月出貨日
	/// </summary>
	data.original_Monthly_Shipment_Date = mainOrderData.monthly_Shipment_Date;
	/// <summary>
	/// 原收件人姓名
	/// </summary>
	data.original_Receiver_Name = mainOrderData.receiver_Name;
	/// <summary>
	/// 原收件人電話
	/// </summary>
	data.original_Receiver_TEL = mainOrderData.receiver_TEL;
	/// <summary>
	/// 原收件郵遞區號
	/// </summary>
	data.original_Receiver_Zip_Code = mainOrderData.receiver_Zip_Code;
	/// <summary>
	/// 原收件縣市
	/// </summary>
	data.original_Receiver_City = mainOrderData.receiver_City;
	/// <summary>
	/// 原收件鄉鎮
	/// </summary>
	data.original_Receiver_Town = mainOrderData.receiver_Town;
	/// <summary>
	/// 原收件地址
	/// </summary>
	data.original_Receiver_Address = mainOrderData.receiver_Address;
	/// <summary>
	/// 原信用卡號
	/// </summary>
	data.original_Credit_Card_No = mainOrderData.credit_Card_No;
	/// <summary>
	/// 原信用卡有效期限
	/// </summary>
	data.original_Credit_Card_Period = mainOrderData.credit_Card_Period;
	/// <summary>
	/// 原四合一盒數
	/// </summary>
	data.original_4in1_Number = mainOrderData.fourIn1_Number;
	/// <summary>
	/// 原檸檬盒數
	/// </summary>
	data.original_Lemon_Number = mainOrderData.lemon_Number;
	/// <summary>
	/// 原抹茶盒數
	/// </summary>
	data.original_Matcha_Number = mainOrderData.matcha_Number;
	/// <summary>
	/// 原芝麻盒數
	/// </summary>
	data.original_Sesame_Number = mainOrderData.sesame_Number;
	/// <summary>
	/// 原南瓜花生盒數
	/// </summary>
	data.original_PumpkinPeanut_Number = mainOrderData.pumpkinPeanut_Number;
	/// <summary>
	/// 原鐵觀音盒數
	/// </summary>
	data.original_tieguanyin_Number = mainOrderData.tieguanyin_Number;
	/// <summary>
	/// 原沛菌多盒數
	/// </summary>
	data.original_Probiotics_Number = mainOrderData.probiotics_Recurring_Number;
	///// <summary>
	///// 變更每月出貨日
	///// </summary>
	//data.change_Monthly_Shipment_Date = mainOrderData.monthly_Shipment_Date;
	///// <summary>
	///// 變更種類-訂購內容
	///// </summary>
	//data.change_Order_Content = false;
	///// <summary>
	///// 變更種類-信用卡
	///// </summary>
	//data.change_Credit_Card = false;
	///// <summary>
	///// 變更種類-配送地址
	///// </summary>
	//data.change_Receiver_Address = false;
	///// <summary>
	///// 變更四合一盒數
	///// </summary>
	//data.change_4in1_Number = mainOrderData.fourIn1_Number;
	///// <summary>
	///// 變更檸檬盒數
	///// </summary>
	//data.change_Lemon_Number = mainOrderData.lemon_Number;
	///// <summary>
	///// 變更抹茶盒數
	///// </summary>
	//data.change_Matcha_Number = mainOrderData.matcha_Number;
	///// <summary>
	///// 變更芝麻盒數
	///// </summary>
	//data.change_Sesame_Number = mainOrderData.sesame_Number;
	///// <summary>
	///// 變更沛菌多盒數
	///// </summary>
	//data.change_Probiotics_Number = mainOrderData.probiotics_Recurring_Number;
	///// <summary>
	///// 變更信用卡品項-乳清蛋白
	///// </summary>
	//data.change_Credit_Card_Protein = false;
	///// <summary>
	///// 變更信用卡品項-沛菌多
	///// </summary>
	//data.change_Credit_Card_Probiotics = false;
	///// <summary>
	///// 變更信用卡號
	///// </summary>
	//data.change_Credit_Card_No = mainOrderData.credit_Card_No;
	///// <summary>
	///// 變更信用卡有效期限
	///// </summary>
	//data.change_Credit_Card_Period = mainOrderData.credit_Card_Period;
	///// <summary>
	///// 變更持卡人關係
	///// </summary>
	//data.change_Credit_Card_Relation = mainOrderData.credit_Card_Relation;
	///// <summary>
	///// 變更持卡人簽名
	///// </summary>
	//data.change_Credit_Card_Sign = mainOrderData.credit_Card_Sign;
	///// <summary>
	///// 變更收件人品項-乳清蛋白
	///// </summary>
	//data.change_Receiver_Protein = false;
	///// <summary>
	///// 變更收件人品項-沛菌多
	///// </summary>
	//data.change_Receiver_Probiotics = false;
	///// <summary>
	///// 變更收件人姓名
	///// </summary>
	//data.change_Receiver_Name = mainOrderData.receiver_Name;
	///// <summary>
	///// 變更收件人聯絡電話
	///// </summary>
	//data.change_Receiver_TEL = mainOrderData.receiver_TEL;
	///// <summary>
	///// 變更收件郵遞區號
	///// </summary>
	//data.change_Receiver_Zip_Code = mainOrderData.receiver_Zip_Code;
	///// <summary>
	///// 變更收件縣市
	///// </summary>
	//data.change_Receiver_City = mainOrderData.receiver_City;
	///// <summary>
	///// 變更收件鄉鎮
	///// </summary>
	//data.change_Receiver_Town = mainOrderData.receiver_Town;
	///// <summary>
	///// 變更收件地址
	///// </summary>
	//data.change_Receiver_Address2 = mainOrderData.receiver_Address;
	/// <summary>
	/// 暫停品項-乳清蛋白
	/// </summary>
	data.suspend_Protein = false;
	/// <summary>
	/// 暫停品項-沛菌多
	/// </summary>
	data.suspend_Probiotics = false;
	/// <summary>
	/// 暫停原因-乳清蛋白及沛菌多
	/// </summary>
	data.suspend_Reason = "";
	/// <summary>
	/// 暫停出貨月份-起始
	/// </summary>
	data.suspend_Start_Month = data.create_Date;
	/// <summary>
	/// 暫停出貨月份-截止
	/// </summary>
	data.suspend_End_Month = data.create_Date;
	/// <summary>
	/// 我已確認將於N月暫停
	/// </summary>
	data.suspend_Confirm_Terms = false;
	/// <summary>
	/// 恢復出貨月份
	/// </summary>
	data.recovery_Shipment_Month = data.create_Date;
	/// <summary>
	/// 恢復出貨日
	/// </summary>
	data.recovery_Shipment_Day = data.create_Date;
	/// <summary>
	/// 退訂原因-乳清蛋白
	/// </summary>
	data.cancel_Reason_Protein = "";
	/// <summary>
	/// 我已確認退訂乳清蛋白
	/// </summary>
	data.cancel_Confirm_Terms_Protein = false;
	/// <summary>
	/// 最後出貨日-乳清蛋白
	/// </summary>
	data.last_Shipment_Date_Protein = data.create_Date;
	/// <summary>
	/// 退訂原因-沛菌多
	/// </summary>
	data.cancel_Reason_Probiotics = "";
	/// <summary>
	/// 我已確認退訂沛菌多
	/// </summary>
	data.cancel_Confirm_Terms_Probiotics = false;
	/// <summary>
	/// 最後出貨日-沛菌多
	/// </summary>
	data.last_Shipment_Date_Probiotics = data.create_Date;
	/// <summary>
	/// 沛菌多補差額費用
	/// </summary>
	data.difference_Charge = 0;
	/// <summary>
	/// 會員簽名
	/// </summary>
	data.member_Sign = "";
	/// <summary>
	/// 異動單備註
	/// </summary>
	data.change_Order_Remark = "";
	/// <summary>
	/// 送審日期
	/// </summary>
	data.submission_Date = data.create_Date;
	/// <summary>
	/// 核覆日期
	/// </summary>
	data.approved_Date = data.create_Date;
	/// <summary>
	/// 核可受理
	/// </summary>
	data.approved = false;
	/// <summary>
	/// 資料待補
	/// </summary>
	data.revise_Data = false;
	/// <summary>
	/// 異動型態
	/// </summary>
	data.change_Type = "";
	/// <summary>
	/// 功能編碼
	/// </summary>
	data.funtion_Code = mainOrderData.funtion_Code;
	/// <summary>
	/// 建檔日期
	/// </summary>
	data.created_Date = data.create_Date;
	/// <summary>
	/// 建檔人代碼
	/// </summary>
	data.creator_ID = "";
	/// <summary>
	/// 建檔人名稱
	/// </summary>
	data.creator_Name = "";
	/// <summary>
	/// 原訂單的 DbId
	/// </summary>
	data.orderDbId = mainOrderData.id;
	
	return data;
}