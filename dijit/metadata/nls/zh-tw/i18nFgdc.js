// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"無",notComplete:"未完成",other:"其他",present:"存在",unknown:"未知",unpublishedMaterial:"未發佈材料"},hints:{integerGreaterThanOne:"(請輸入一個整數 > 1)",integer0To100:"(請輸入一個整數 0..100)"},citeinfo:{caption:"引用資訊",origin:"創作者",pubdate:"發佈日期",pubtime:"發佈時間",title:"標題",edition:"版本",geoform:{caption:"地理空間資料表達形式",atlas:"地圖集",audio:"音訊",diagram:"邏輯示意圖",sDocument:"文件",globe:"全球",map:"繪圖",model:"模型",multiMediaPresentation:"多媒體簡報",profile:"設定檔",rasterDigitalData:"光柵數位資料",remoteSensingImage:"遠距感應影像",section:"節",spreadsheet:"工作表",tabularDigitalData:"圖表數位資料",vectorDigitalData:"矢量數位資料",video:"影片",view:"視圖"},serinfo:{caption:"數列資訊",sername:"數列名稱",issue:"期別標示"},pubinfo:{caption:"發佈資訊",pubplace:"發佈地點",publish:"發佈者"},othercit:"其他引用詳細資訊",onlink:"線上連結(URL)"},cntinfo:{caption:"聯絡資訊",section:{primary:"主要",phoneAndEmail:"電話和電子郵件",hoursAndInstructions:"小時與指示"},cntorgp:{caption:"按組織",cntorg:"組織",cntper:"人員"},cntperp:{caption:"按人員",cntper:"人員",cntorg:"組織"},cntpos:"位置",cntaddr:{caption:"地址",addrtype:{caption:"位址類型",mailing:"郵寄",physical:"實際",mailingAndPhysical:"郵寄和實際"},address:"地址",city:"城市",state:"州",postal:"郵遞區號",country:"國家/地區"},cntvoice:"語音",cnttdd:"TDD/TTY 電話(聽力障礙)",cntfax:"傳真",cntemail:"電子郵件位址",hours:"小時",cntinst:"說明"},dataqual:{caption:"資料品質資訊",section:{attributeAccuracy:"屬性精確度",logicalConsistency:"邏輯一致性",completeness:"完整性",positionalAccuracy:"定位精確度",lineage:"譜系",cloudCover:"雲量"},attracc:{caption:"屬性精確度",attraccr:"屬性準確性報告",qattracc:{caption:"屬性精確度定量評估",attraccv:"屬性精確度值",attracce:"屬性精確度說明"}},logic:"邏輯一致性報告",complete:"完整性報告",posacc:"定位精確度",horizpa:{caption:"水平定位精確度",horizpar:"水平定位精確度報告",qhorizpa:{caption:"水平定位精確度定量評估",horizpav:"水平定位精確度值",horizpae:"水平定位精確度說明"}},vertacc:{caption:"垂直定位精確度",vertaccr:"垂直定位精確度報告",qvertpa:{caption:"垂直定位精確度定量評估",vertaccv:"垂直定位精確度值",vertacce:"垂直定位精確度說明"}},lineage:{caption:"譜系"},srcinfo:{caption:"來源資訊",srccite:"來源引用",srcscale:"來源比例分母",typesrc:{caption:"來源媒體類型",paper:"紙張",stableBaseMaterial:"基礎穩定的材料",microfiche:"微縮膠片",microfilm:"微縮膠捲",audiocassette:"錄音帶",chart:"圖表",filmstrip:"幻燈影片",transparency:"幻燈片",videocassette:"錄影帶",videodisc:"影碟",videotape:"錄影帶",physicalModel:"物理模型",computerProgram:"電腦程式",disc:"光碟",cartridgeTape:"匣式磁帶",magneticTape:"磁帶",online:"線上",cdrom:"CD-ROM",electronicBulletinBoard:"電子佈告板",electronicMailSystem:"電子郵件系統"},srctime:"來源內容時限",srccurr:"資料來源時間參考資訊",srccitea:"來源引用縮寫",srccontr:"資料來源作用"},procstep:{caption:"處理步驟",procdesc:"過程描述",srcused:"來源使用的引用縮寫",procdate:"處理日期",proctime:"處理時間",srcprod:"來源生成的引用縮寫",proccont:"流程接觸"},cloud:"雲量"},distinfo:{caption:"分發資訊",section:{distributor:"經銷商",description:"描述",orderProcess:"訂購程序",prerequisites:"先決條件",availability:"可用性"},distrib:"經銷商",resdesc:{caption:"資源描述",liveData:"即時資料和地圖",downloadableData:"可下載資料",offlineData:"離線資料",staticMapImages:"靜態地圖圖像",sDocument:"其他文件",application:"應用程式",geographicService:"地理服務",clearingHouse:"交換中心",mapFiles:"地圖檔案",geographicActivies:"地理活動"},distliab:"分發責任說明",custom:"客戶訂購程序",techpreq:"技術先決條件",availabl:"可用性"},eainfo:{caption:"實體和屬性資訊",overview:"概要描述",eaover:"實體和屬性概述",eadetcit:"實體和屬性詳細資訊引用"},idinfo:{caption:"身份識別資訊",section:{timeAndStatus:"時間和狀態",constraints:"約束",contact:"連絡人",additional:"附加"},citeinfo:"引用資訊",descript:{caption:"描述",sAbstract:"摘要",purpose:"用途",supplinf:"附加資訊"},timeperd:{caption:"內容時限",current:{caption:"時間參考資訊",groundCondition:"地面條件",publicationDate:"發佈日期"}},status:{caption:"狀態",progress:{caption:"進度",complete:"完成",inWork:"進行中",planned:"已計劃"},update:{caption:"維護和更新頻率",continual:"持續",daily:"每天",weekly:"每週",monthly:"每月",annually:"每年",unknown:"未知",asNeeded:"根據需要",irregular:"不定期",nonePlanned:"未計劃"}},spdom:{caption:"範圍",bounding:{caption:"邊界坐標",westbc:"西部邊界經度",eastbc:"東部邊界經度",northbc:"北部邊界緯度",southbc:"南部邊界緯度"}},keywords:{caption:"關鍵字",theme:"主題",place:"地點",stratum:"地層",temporal:"暫存",thesaursus:"相關的同義字",delimited:"關鍵字",themektIsoTopicCategory:"ISO 主題...",themektIsoTopicDialog:"ISO 主題...",placektGnis:"地理名稱資訊系統"},accconst:"存取限制",useconst:"使用限制",ptcontac:"資源的聯絡點",browse:{caption:"瀏覽圖",browsen:"瀏覽圖形 URL",browsed:"瀏覽圖形檔案描述",browset:"瀏覽圖形檔案類型"},datacred:"資料集點數",secinfo:{caption:"安全性資訊",secsys:"安全性分類系統",secclass:{caption:"安全性分類",topSecret:"絕對機密",secret:"秘密",confidential:"機密",restricted:"受限",unclassified:"未分類",sensitive:"敏感"},sechandl:"安全性處理描述"},sNative:"原生資料集環境",crossref:"交互參照"},metadata:{idinfo:"身份識別",dataqual:"品質",spdoinfo:"空間資料組織",spref:"空間參考",eainfo:"實體和屬性",distinfo:"分佈",metainfo:"中繼資料"},metainfo:{caption:"中繼資料資訊",section:{dates:"中繼資料日期",contact:"中繼資料連絡人",standard:"中繼資料標準",additional:"附加"},metd:"中繼資料日期",metrd:"中繼資料檢視日期",metfrd:"中繼資料未來檢視日期",metstdn:"中繼資料標準名稱",metstdv:"中繼資料標準版本",metac:"中繼資料存取限制",metuc:"中繼資料使用限制",metsi:{caption:"中繼資料安全性資訊",metscs:"中繼資料安全性分類系統",metsc:"中繼資料安全性分類",metshd:"中繼資料安全性處理描述"}},spref:{caption:"空間參考資訊",horizsys:{caption:"水平坐標系",geograph:{caption:"地理",latres:"緯度解析度",longres:"經度解析度",geogunit:{caption:"地理坐標單位",decimalDegrees:"十進制度",decimalMinutes:"十進制分",decimalSeconds:"十進制秒",degreesAndDecimalMinutes:"度和十進制分",degreesMinutesAndDecimalSeconds:"度、分和十進制秒",radians:"弧度",grads:"百分度"}},planar:{caption:"平面"},local:{caption:"本地",localdes:"局部描述",localgeo:"局部地理配准資訊"},geodetic:{caption:"大地測量模型",horizdn:{caption:"水平基準面名稱",nad83:"1983 年的北美基準面",nad27:"1927 年的北美基準面"},ellips:{caption:"橢圓體名稱",grs80:"大地測量參考系統 80",clarke1866:"Clarke 1866"},semiaxis:"半長軸",denflat:"扁平係數的分母"}},vertdef:{caption:"垂直坐標系",altsys:{caption:"高度系統",altdatum:{caption:"高度基準面名稱",navd88:"1988 年的北美垂直基準面",ngvd29:"1929 年的國家大地測量垂直基準面"},altres:"高度解析度",altunits:{caption:"高度距離單位",meters:"公尺",feet:"英呎"},altenc:{caption:"高度編碼方法",explicit:"水平坐標隨附的顯式高程坐標",implicit:"隱式坐標",attribute:"屬性值"}},depthsys:{caption:"深度系統",depthdn:{caption:"深度基準面名稱",option1:"局部曲面",option2:"圖表基準面；深度基準面",option3:"最低天文潮位",option4:"最高天文潮位",option5:"平均低潮面",option6:"平均高潮面",option7:"平均海平面",option8:"土地測量基準面",option9:"平均低潮面(大潮)",option10:"平均高潮面(大潮)",option11:"平均低潮面(小潮)",option12:"平均高潮面(小潮)",option13:"平均較低低潮面",option14:"平均較低低潮面(大潮)",option15:"平均較高高潮面",option16:"平均較高低潮面",option17:"平均較低高潮面",option18:"大潮",option19:"回歸較低低潮面",option20:"小潮",option21:"高潮面",option22:"較高高潮面",option23:"低潮面",option24:"低潮面基準面",option25:"最低潮面",option26:"較低低潮面",option27:"理論最低低潮面",option28:"平均潮面",option29:"印度洋大潮低潮面",option30:"平均朔望高潮間隙",option31:"平均朔望低潮間隙",option32:"哥倫比亞河基準面",option33:"墨西哥灣低潮面基準面",option34:"赤道大潮低潮面",option35:"近似最低天文潮位",option36:"無校正"},depthres:"深度解析度",depthdu:{caption:"深度距離單位",meters:"公尺",feet:"英呎"},depthem:{caption:"深度編碼方法",explicit:"水平坐標隨附的顯式深度坐標",implicit:"隱式坐標",attribute:"屬性值"}}}},timeinfo:{caption:"時間段資訊",sngdate:"單一日期",mdattim:"多個日期",rngdates:"日期範圍",caldate:"日期",time:"時間",begdate:"開始日期",begtime:"開始時間",enddate:"結束日期",endtime:"結束時間"}});