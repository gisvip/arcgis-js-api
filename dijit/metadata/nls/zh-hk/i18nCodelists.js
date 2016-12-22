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

define({CI_OnLineFunctionCode:{"001":"下載","002":"資訊","003":"離線存取","004":"順序","005":"搜尋","006":"上傳","007":"Web 服務","008":"電子郵件服務","009":"瀏覽","010":"檔案存取","011":"Web 地圖服務"},CI_PresentationFormCode:{"001":"數位文件","002":"紙本文件","003":"數位圖像","004":"紙本圖像","005":"數位地圖","006":"紙本地圖","007":"數位模型","008":"紙本模型","009":"數位設定檔","010":"紙本設定檔","011":"數位表格","012":"紙本表格","013":"數位影片","014":"紙本影片","015":"數位音訊","016":"紙本音訊","017":"數位多媒體","018":"紙本多媒體","019":"數位圖表","020":"紙本圖表"},CI_RoleCode:{"001":"資源提供者","002":"管理人","003":"擁有者","004":"使用者","005":"經銷商","006":"創作者","007":"聯絡點","008":"首席調查員","009":"處理器","010":"發佈者","011":"作者","012":"協作者","013":"編輯器","014":"暫留處理器","015":"權利持有人"},DQ_EvaluationMethodTypeCode:{"001":"直接內部","002":"直接外部","003":"間接"},DS_AssociationTypeCode:{"001":"交叉引用","002":"較大型作業引用","003":"無縫資料庫的一部分","004":"來源","005":"立體正射像片","006":"組成"},DS_InitiativeTypeCode:{"001":"活動","002":"集合","003":"練習","004":"實驗","005":"調查","006":"任務","007":"感應器","008":"操作","009":"平台","010":"流程","011":"程式","012":"專案","013":"研究","014":"任務","015":"試用"},MD_CellGeometryCode:{"001":"點","002":"面積","003":"體素"},MD_CharacterSetCode:{"001":"ucs2","002":"ucs4","003":"utf7","004":"utf8","005":"utf16","006":"8859part1","007":"8859part2","008":"8859part3","009":"8859part4","010":"8859part5","011":"8859part6","012":"8859part7","013":"8859part8","014":"8859part9","015":"8859part10","016":"8859part11","018":"8859part13","019":"8859part14","020":"8859part15","021":"8859part16","022":"jis","023":"shiftJIS","024":"eucJP","025":"usAscii","026":"ebcdic","027":"eucKR","028":"big5","029":"GB2312"},MD_ClassificationCode:{"001":"未分類","002":"受限","003":"機密","004":"秘密","005":"絕對機密","006":"敏感","007":"公務用"},MD_CoverageContentTypeCode:{"001":"圖像","002":"主題分類","003":"實際測量值"},MD_DimensionNameTypeCode:{"001":"行(y 軸)","002":"列(x 軸)","003":"垂直(z 軸)","004":"追蹤","005":"交叉追蹤","006":"線","007":"採樣","008":"時間"},MD_GeometricObjectTypeCode:{"001":"複雜","002":"複合","003":"曲線","004":"點","005":"實心","006":"表面分析"},MD_ImagingConditionCode:{"001":"模糊圖像","002":"雲","003":"降低斜度","004":"霧","005":"濃煙或粉塵","006":"夜晚","007":"雨","008":"半暗","009":"陰影","010":"雪","011":"地形遮蔽"},MD_MaintenanceFrequenceCode:{998:"未知","001":"持續","002":"每天","003":"每週","004":"每兩週","005":"每月","006":"季度","007":"一年兩次","008":"每年","009":"根據需要","010":"不定期","011":"未計劃","012":"未知","013":"半月"},MD_MediumFormatCode:{"001":"CPIO","002":"TAR","003":"High Sierra","004":"ISO 9660","005":"ISO 9660 Rock Ridge","006":"ISO 9660 Apple HFS","007":"UDF"},MD_MediumNameCode:{"001":"CD-ROM","002":"DVD","003":"DVD-ROM","004":"3.5 英吋磁碟","005":"5.25 英吋磁碟","006":"7 軌磁帶","007":"9 軌磁帶","008":"3480 卡匣","009":"3490 卡匣","010":"3580 卡匣","011":"4mm 匣式磁帶","012":"8mm 匣式磁帶","013":"1.25 英吋匣式磁帶","014":"數位線性磁帶","015":"線上","016":"衛星連結","017":"電話連結","018":"紙本","019":"重氮聚酯 08","020":"微縮膠片","021":"微縮膠捲 240","022":"微縮膠捲 35","023":"微縮膠捲 70","024":"普通微縮膠捲","025":"微縮膠捲","026":"底片","027":"紙張","028":"Diazo","029":"照片","030":"描圖紙","031":"硬碟","032":"USB 快閃磁碟機"},MD_PixelOrientationCode:{"001":"居中對齊","002":"左下","003":"右下","004":"右上","005":"左上"},MD_ProgressCode:{"001":"已完成","002":"歷史封存","003":"廢棄","004":"正在進行","005":"已計劃","006":"必選項","007":"開發中","008":"已提議"},MD_RestrictionCode:{"001":"版權","002":"專利","003":"專利申請中","004":"商標","005":"授權","006":"智慧財產權","007":"受限","008":"其他限制","009":"無限制授權","010":"最終使用者授權","011":"經銷商授權","012":"隱私政策","013":"法律規定","014":"機密","015":"靈敏度"},MD_Metadata_MD_ScopeCode:{"001":"屬性","002":"屬性類型","003":"採集硬體","004":"採集工作階段","005":"資料集","006":"數列","007":"非地理資料集","008":"尺寸群組","009":"圖徵","010":"圖徵類型","011":"屬性類型","012":"欄位工作階段","013":"軟體","014":"服務","015":"模型","016":"圖磚","017":"倡議","018":"立體正射像片","019":"感應器","020":"平台數列","021":"感應器數列","022":"生產數列","023":"傳輸數列","024":"其他數列"},MD_ScopeCode:{"001":"屬性","002":"屬性類型","003":"採集硬體","004":"採集工作階段","005":"資料集","006":"數列","007":"非地理資料集","008":"尺寸群組","009":"圖徵","010":"圖徵類型","011":"屬性類型","012":"欄位工作階段","013":"軟體","014":"服務","015":"模型","016":"圖磚","017":"倡議","018":"立體正射像片","019":"感應器","020":"平台數列","021":"感應器數列","022":"生產數列","023":"傳輸數列","024":"其他數列"},MD_SpatialRepresentationTypeCode:{"001":"矢量","002":"網格","003":"文字表格","004":"Tin","005":"立體模型","006":"影片"},MD_TopicCategoryCode:{"001":"農業","002":"生物群","003":"邊界","004":"大氣科學","005":"經濟","006":"高程","007":"環境","008":"地球科學","009":"健康","010":"影像與底圖","011":"軍事與情報","012":"內陸水域","013":"位置","014":"海洋圖","015":"規劃和地籍","016":"社會","017":"結構","018":"交通運輸","019":"公用設施和通訊"},MD_TopologyLevelCode:{"001":"僅限幾何","002":"1D 拓撲","003":"平面圖","004":"完整平面圖","005":"表面圖","006":"完整表面圖","007":"3D 拓撲","008":"完整 3D 拓撲","009":"摘要"},SV_CouplingType:{"001":"鬆散","002":"混合","003":"緊密"},AddressType:{postal:"郵遞區號",physical:"實際",both:"兩者"},PresentationForm:{atlas:"地圖集",audio:"音訊",diagram:"邏輯示意圖",document:"文件",globe:"全球",map:"繪圖",model:"模型","multimedia presentation":"多媒體簡報",profile:"設定檔","raster digital data":"光柵數位資料","remote-sensing image":"遠距感應影像",section:"節",spreadsheet:"工作表","tabular digital data":"圖表數位資料","vector digital data":"矢量數位資料",video:"影片",view:"視圖"},DQ_ElementDimension:{horizontal:"水平對齊",vertical:"垂直"},DQ_ElementType:{DQCompComm:"完整性調試",DQCompOm:"完整性省略",DQConcConsis:"概念一致性",DQDomConsis:"網域一致性",DQFormConsis:"格式一致性",DQTopConsis:"拓撲一致性",DQAbsExtPosAcc:"絕對外部定位精確度",DQGridDataPosAcc:"網格化資料定位精確度",DQRelIntPosAcc:"相對內部定位精確度",DQThemClassCor:"主題分類正確性",DQNonQuanAttAcc:"非定量屬性精確度",DQQuanAttAcc:"定量屬性精確度",DQAccTimeMeas:"時間測量精確度",DQTempConsis:"時態一致性",DQTempValid:"時態有效性"},IMS_ContentType:{"001":"即時資料和地圖","002":"可下載資料","003":"離線資料","004":"靜態地圖圖像","005":"其他文件","006":"應用程式","007":"地理服務","008":"交換中心","009":"地圖檔案","010":"地理活動"},LI_SourceType:{used:"已使用",produced:"已生成"},RS_Dimension:{horizontal:"水平對齊",vertical:"垂直",temporal:"時態"},CountryCode:{AF:"阿富汗",AX:"奧蘭群島",AL:"阿爾巴尼亞",DZ:"阿爾及利亞",AS:"美屬薩摩亞",AD:"安道爾",AO:"安哥拉",AI:"安圭拉島",AQ:"南極洲",AG:"安地卡及巴布達",AR:"阿根廷",AM:"亞美尼亞",AW:"阿魯巴島",AU:"澳大利亞",AT:"奧地利",AZ:"阿塞拜然",BS:"巴哈馬",BH:"巴林",BD:"孟加拉",BB:"巴貝多",BY:"白俄羅斯",BE:"比利時",BZ:"貝里斯",BJ:"貝南",BM:"百慕達",BT:"不丹",BO:"玻利維亞多民族共和國",BQ:"荷蘭加勒比區(博奈爾島、聖尤斯特歇斯島和薩巴島)",BA:"波士尼亞與赫塞哥維納",BW:"波札那",BV:"布威島",BR:"巴西",IO:"英屬印度洋領地",BN:"汶萊",BG:"保加利亞",BF:"布吉納法索",BI:"蒲隆地",KH:"柬埔寨",CM:"喀麥隆",CA:"加拿大",CV:"維德角",KY:"開曼群島",CF:"中非共和國",TD:"查德",CL:"智利",CN:"中國",CX:"聖誕島",CC:"科科斯(基林)群島",CO:"哥倫比亞",KM:"葛摩",CG:"剛果",CD:"剛果民主共和國",CK:"庫克群島",CR:"哥斯大黎加",CI:"象牙海岸",HR:"克羅埃西亞",CU:"古巴",CW:"庫拉索島",CY:"塞浦路斯",CZ:"捷克共和國",DK:"丹麥",DJ:"吉布地",DM:"多明尼加",DO:"多明尼克共和國",EC:"厄瓜多",EG:"埃及",SV:"薩爾瓦多",GQ:"赤道幾內亞",ER:"厄利垂亞",EE:"愛沙尼亞",ET:"衣索比亞",FK:"福克蘭群島(馬爾維納斯)",FO:"法羅群島",FJ:"斐濟",FI:"芬蘭",FR:"法國",GF:"法屬蓋亞那",PF:"法屬玻里尼西亞",TF:"法屬南部領地",GA:"加彭",GM:"甘比亞",GE:"喬治亞",DE:"德國",GH:"加納",GI:"直布羅陀",GR:"希臘",GL:"格陵蘭",GD:"格瑞那達",GP:"法屬瓜德羅普島",GU:"關島",GT:"瓜地馬拉",GG:"根西",GN:"幾內亞",GW:"幾內亞比紹",GY:"蓋亞那",HT:"海地",HM:"赫德島和麥克唐納群島",VA:"羅馬教廷(梵蒂岡)",HN:"宏都拉斯",HK:"中國香港特別行政區",HU:"匈牙利",IS:"冰島",IN:"印度",ID:"印尼",IR:"伊朗伊斯蘭共和國",IQ:"伊拉克",IE:"愛爾蘭",IM:"曼島",IL:"以色列",IT:"義大利",JM:"牙買加",JP:"日本",JE:"澤西",JO:"約旦",KZ:"哈薩克",KE:"肯亞",KI:"吉里巴斯",KP:"朝鮮民主人民共和國",KR:"大韓民國",KW:"科威特",KG:"吉爾吉斯",LA:"寮人民民主共和國",LV:"拉脫維亞",LB:"黎巴嫩",LS:"賴索托",LR:"賴比瑞亞",LY:"利比亞",LI:"列支敦士登",LT:"立陶宛",LU:"盧森堡",MO:"中國澳門特別行政區",MK:"前南斯拉夫馬其頓共和國",MG:"馬達加斯加",MW:"馬拉威",MY:"馬來西亞",MV:"馬爾地夫",ML:"馬利",MT:"馬爾他",MH:"馬紹爾群島",MQ:"馬丁尼克島",MR:"茅利塔尼亞",MU:"模里西斯",YT:"馬約特島",MX:"墨西哥",FM:"密克羅尼西亞聯邦國",MD:"摩爾多瓦共和國",MC:"摩納哥",MN:"蒙古",ME:"蒙特內哥羅",MS:"蒙特塞拉特山",MA:"摩洛哥",MZ:"莫三比克",MM:"緬甸",NA:"納米比亞",NR:"諾魯",NP:"尼泊爾",NL:"荷蘭",NC:"新喀里多尼亞",NZ:"紐西蘭",NI:"尼加拉瓜",NE:"尼日",NG:"奈及利亞",NU:"紐埃島",NF:"諾福克島",MP:"北馬里亞納群島",NO:"挪威",OM:"阿曼",PK:"巴基斯坦",PW:"帛琉",PS:"巴勒斯坦自治區",PA:"巴拿馬",PG:"巴布亞紐幾內亞",PY:"巴拉圭",PE:"秘魯",PH:"菲律賓",PN:"皮特凱恩",PL:"波蘭",PT:"葡萄牙",PR:"波多黎各",QA:"卡達",RE:"留尼旺島",RO:"羅馬尼亞",RU:"俄羅斯聯邦",RW:"盧安達",BL:"聖巴泰勒米島",SH:"聖赫勒拿、亞森欣與垂斯坦昆哈",KN:"聖克里斯多福及尼維斯",LC:"聖露西亞",MF:"聖馬丁(法屬)",PM:"聖皮耶與密克隆群島",VC:"聖文森與格瑞那丁",WS:"薩摩亞群島",SM:"聖馬利諾",ST:"聖多美與普林西比",SA:"沙烏地阿拉伯",SN:"塞內加爾",RS:"塞爾維亞",SC:"塞席爾",SL:"獅子山共和國",SG:"新加坡",SX:"聖馬丁島(荷屬)",SK:"斯洛伐克",SI:"斯洛維尼亞",SB:"索羅門群島",SO:"索馬利亞",ZA:"南非",GS:"南喬治亞與南三明治群島",SS:"南蘇丹",ES:"西班牙",LK:"斯里蘭卡",SD:"蘇丹",SR:"蘇利南",SJ:"斯瓦巴和揚馬延",SZ:"史瓦濟蘭",SE:"瑞典",CH:"瑞士",SY:"敘利亞阿拉伯共和國",TW:"臺灣",TJ:"塔吉克",TZ:"坦尚尼亞",TH:"泰國",TL:"東帝汶",TG:"多哥共和國",TK:"托克勞",TO:"東加",TT:"千里達及托巴哥",TN:"突尼西亞",TR:"土耳其",TM:"土庫曼",TC:"特克斯和凱科斯群島",TV:"吐瓦魯",UG:"烏干達",UA:"烏克蘭",AE:"阿拉伯聯合大公國",GB:"英國",US:"美國",UM:"美國本土外小島嶼",UY:"烏拉圭",UZ:"烏茲別克",VU:"萬那杜",VE:"委內瑞拉玻利瓦爾共和國",VN:"越南",VG:"英屬維京群島",VI:"美屬維京群島",WF:"瓦利斯和富圖納",EH:"西撒哈拉",YE:"葉門",ZM:"尚比亞",ZW:"辛巴威"},LanguageCode:{aar:"阿法爾語",abk:"阿布哈茲語",ace:"亞齊語",ach:"阿柯利語",ada:"阿當梅語",ady:"阿迪格語",afa:"亞非語系",afh:"阿弗里希利語",afr:"阿非利堪斯語",ain:"阿伊努語",aka:"阿坎語",akk:"阿卡德語",alb:"阿爾巴尼亞語",ale:"阿留申語",alg:"阿爾岡昆諸語言",alt:"南阿爾泰語",amh:"阿姆哈拉語",ang:"英語，古(約 450-1100)",anp:"昂加語",apa:"阿帕契諸語言",ara:"阿拉伯語",arc:"官方阿拉米語 (700-300 BCE); 帝國阿拉米語 (700-300 BCE)",arg:"阿拉貢語",arm:"亞美尼亞語",arn:"馬普切語",arp:"阿拉帕霍語",art:"人工語言",arw:"阿拉瓦克語",asm:"阿薩姆語",ast:"阿斯圖裡亞斯語",ath:"阿薩巴斯卡諸語言",aus:"澳大利亞諸語言",ava:"阿瓦爾語",ave:"阿維斯陀語",awa:"阿瓦德語",aym:"艾馬拉族語",aze:"阿塞拜語",bad:"班達語",bai:"巴米雷克語",bak:"巴什基爾語",bal:"巴盧希語",bam:"班巴拉語",ban:"峇里語",baq:"巴斯克語",bas:"巴薩語",bat:"波羅的海語",bej:"貝雅語；貝賈語",bel:"白俄羅斯語",bem:"本巴語",ben:"孟加拉語",ber:"柏柏爾諸語言",bho:"比哈爾語",bih:"比哈爾語",bik:"比口語",bin:"比尼語；埃多語",bis:"比斯拉瑪語",bla:"西克西卡語",bnt:"班圖諸語言(其他)",bos:"波士尼亞語",bra:"布拉吉語",bre:"布列塔尼語",btk:"巴塔克語",bua:"布利亞特語",bug:"布吉語",bul:"保加利亞語",bur:"緬甸語",byn:"比林語",cad:"喀多語",cai:"中美洲印第安諸語言",car:"加勒比語",cat:"加泰羅尼亞語；瓦倫西亞語",cau:"高加索語",ceb:"宿霧語",cel:"凱爾特諸語言",cha:"查莫羅語",chb:"奇布查語",che:"車臣語",chg:"察合台語",chi:"中文",chk:"丘克語",chm:"馬利語",chn:"奇努克語",cho:"喬克托語",chp:"奇帕維安語",chr:"切羅基語",chu:"教會斯拉夫語",chv:"楚瓦什語",chy:"夏安語",cmc:"占語諸語言",cop:"科普特語",cor:"康沃爾語",cos:"科西嘉語",cpe:"克里奧混合語，以英語為基礎的",cpf:"克里奧語和匯雜語，以法語為基礎",cpp:"克里奧語和匯雜語，以葡萄牙語為基礎的",cre:"克利語",crh:"克里米亞韃靼語",crp:"克里奧語和匯雜語",csb:"卡舒比語",cus:"庫希特語",cze:"捷克語",dak:"達科他語",dan:"丹麥語",dar:"達爾格瓦語",day:"陸達雅語",del:"德拉瓦爾語",den:"斯拉維語(阿薩巴斯卡語系)",dgr:"多格里布語",din:"丁卡語",div:"迪維希語；馬爾地夫語",doi:"多格拉語",dra:"達羅毗荼諸語言",dsb:"下索布語",dua:"杜亞拉語",dum:"荷蘭語，中古(約 1050-1350)",dut:"荷蘭語；佛蘭德語",dyu:"迪尤拉語",dzo:"不丹語",efi:"埃菲克語",egy:"埃及語(古)",eka:"艾卡朱克語",elx:"埃蘭語",eng:"英語",enm:"中古英語(1100-1500)",epo:"世界語",est:"愛沙尼亞語",ewe:"埃維語",ewo:"埃翁多語",fan:"芳語",fao:"法羅語",fat:"芳蒂語",fij:"斐濟語",fil:"菲律賓語",fin:"芬蘭語",fiu:"芬蘭烏戈爾語",fon:"豐語",fre:"法語",frm:"法語，中古(約 1400-1600)",fro:"古法語(842-約 1400)",frr:"北弗里西亞語",frs:"東弗里西亞語",fry:"西弗里西亞語",ful:"富拉語",fur:"弗留利語",gaa:"加語",gay:"加尤語",gba:"格巴亞語",gem:"日耳曼語",geo:"格魯吉亞語",ger:"德語",gez:"吉茲語",gil:"吉爾伯特語",gla:"蓋爾語；蘇格蘭蓋爾語",gle:"愛爾蘭語",glg:"加利西亞語",glv:"馬恩島語",gmh:"德語，中古高地(約 1050-1500)",goh:"古高地德語(約 750-1050)",gon:"貢德語",gor:"哥倫打洛語",got:"哥特語",grb:"格列博語",grc:"古希臘語(1453 以前)",gre:"現代希臘語(1453-)",grn:"瓜拉尼",gsw:"瑞士德語；阿勒曼尼語；阿爾薩斯語",guj:"古吉拉特語",gwi:"庫欽語",hai:"海達語",hat:"海地語；海地克裡奧爾語",hau:"豪薩語",haw:"夏威夷語",heb:"希伯來語",her:"赫雷羅語",hil:"希利蓋農語",him:"喜馬偕爾語；西部帕哈里語",hin:"印地語",hit:"希提語",hmn:"苗語",hmo:"希裡莫圖語",hrv:"克羅埃西亞語",hsb:"上索布語",hun:"匈牙利語",hup:"胡帕語",iba:"伊班語",ibo:"伊博語",ice:"冰島語",ido:"伊多語",iii:"四川彝語",ijo:"伊喬諸語言",iku:"伊努伊特語",ile:"國際語；西方語",ilo:"伊洛卡諾語",ina:"國際語(國際輔助語言協會)",inc:"印度語",ind:"印尼語",ine:"印歐諸語言",inh:"印古什語",ipk:"依努庇克語",ira:"伊朗語",iro:"伊拉克語",ita:"義大利語",jav:"爪哇語",jbo:"邏輯語",jpn:"日語",jpr:"猶太-波斯語",jrb:"猶太-阿拉伯語",kaa:"卡拉卡爾帕克語",kab:"卡拜爾語",kac:"克欽語",kal:"格陵蘭語",kam:"坎巴語",kan:"坎納達語",kar:"克倫諸語言",kas:"克什米爾語",kau:"卡努里語",kaw:"卡威語",kaz:"哈薩克語",kbd:"卡巴爾德語",kha:"卡西語",khi:"科伊桑諸語言",khm:"中高棉語",kho:"和闐語",kik:"基庫尤語",kin:"金亞旺達語",kir:"吉爾吉斯語",kmb:"金邦杜語",kok:"孔卡尼語",kom:"科米語",kon:"剛果語",kor:"朝鮮語",kos:"科斯拉伊語",kpe:"克佩勒語",krc:"卡拉恰伊-巴爾卡爾語",krl:"卡累利阿語",kro:"克魯諸語言",kru:"庫盧克語",kua:"寬亞瑪語",kum:"庫密克語",kur:"庫爾德語",kut:"庫特內語",lad:"拉地諾語",lah:"拉達亨語",lam:"蘭巴語",lao:"寮語",lat:"拉丁語",lav:"拉脫維亞語",lez:"列茲金語",lim:"林堡語",lin:"林加拉語",lit:"立陶宛語",lol:"蒙戈語",loz:"洛齊語",ltz:"盧森堡語",lua:"盧巴-盧拉語",lub:"盧巴卡丹加語",lug:"干達語",lui:"盧伊塞諾語",lun:"隆達語",luo:"盧奧語(肯亞和坦桑尼亞)",lus:"盧薩語",mac:"馬其頓語",mad:"馬都拉語",mag:"馬加赫語",mah:"馬紹爾語",mai:"米德勒語",mak:"望加錫語",mal:"馬拉雅拉姆語",man:"曼丁哥語",mao:"毛利語",map:"澳斯特羅尼西亞諸語言",mar:"馬拉地語",mas:"馬薩伊語",may:"馬來語",mdf:"莫克沙語",mdr:"曼達語",men:"門德語",mga:"愛爾蘭語，中古(900-1200)",mic:"米克馬克語",min:"米南加保語",mis:"未編碼的語言",mkh:"孟-高棉語族",mlg:"馬達加斯加語",mlt:"馬爾他語",mnc:"滿州語",mni:"曼尼普爾語",mno:"馬諾博諸語言",moh:"莫霍克語",mon:"蒙古語",mos:"莫西語",mul:"多語言",mun:"蒙達諸語言",mus:"克里克語",mwl:"米蘭德斯語",mwr:"馬爾瓦利語",myn:"馬雅諸語言",myv:"厄爾茲亞語",nah:"納瓦特爾語",nai:"北美印第安諸語言",nap:"拿坡里語",nau:"諾魯",nav:"納瓦霍語",nbl:"南恩德貝勒語",nde:"北恩德貝勒語",ndo:"尼東閣語",nds:"低地德語；低地撒克遜語",nep:"尼泊爾語","new":"尼泊爾語；紐瓦麗語",nia:"尼亞斯語",nic:"尼日-科爾多凡語諸語言",niu:"紐埃語",nno:"挪威尼諾斯克語",nob:"挪威波克默爾語",nog:"諾蓋語",non:"諾爾斯語，古",nor:"挪威語",nqo:"西非書面語言(N'Ko)",nso:"北索托語",nub:"努比亞語",nwc:"尼瓦爾語",nya:"尼揚賈語",nym:"尼揚韋齊語",nyn:"尼昂加語",nyo:"尼奧羅語",nzi:"恩濟馬語",oci:"奧克西坦語(1500 年以後)；普羅旺斯語",oji:"奧吉布瓦語",ori:"奧利亞語",orm:"奧洛莫語",osa:"奧塞奇語",oss:"奧賽梯語",ota:"奧斯曼土耳其語(1500-1928)",oto:"奧托米諸語言",paa:"巴布亞語",pag:"邦阿西楠語",pal:"巴列維語",pam:"邦板牙語",pan:"旁遮普語",pap:"帕皮阿門托語",pau:"帛琉語",peo:"波斯語，古(約公元前 600-400)",per:"波斯語",phi:"菲律賓諸語言",phn:"腓尼基語",pli:"巴利語",pol:"波蘭語",pon:"波恩培語",por:"葡萄牙語",pra:"普拉克里特語",pro:"古普羅旺斯語(1500 年以前)",pus:"普什圖語","qaa-qtz":"保留以供本地使用",que:"凱楚阿語",raj:"拉賈斯坦語",rap:"拉帕努伊語",rar:"拉羅湯加語(庫克島毛利語)",roa:"羅曼語",roh:"羅曼什語",rom:"吉普賽語",rum:"羅馬尼亞語；摩爾達維亞語",run:"基隆迪語",rup:"阿羅馬尼亞語；馬其頓-羅馬尼亞語",rus:"俄語",sad:"桑達韋語",sag:"桑戈語",sah:"雅庫特語",sai:"南美印第安語(其他)",sal:"薩利什諸語言",sam:"薩馬利亞阿拉米語",san:"梵語",sas:"薩薩克語",sat:"桑塔利語",scn:"西西里語",sco:"蘇格蘭語",sel:"塞爾庫普語",sem:"閃米特諸語言",sga:"古愛爾蘭語(900 以前)",sgn:"手語",shn:"撣語",sid:"錫達莫語",sin:"僧伽羅語",sio:"蘇族語",sit:"漢藏語系",sla:"斯拉夫語",slo:"斯洛伐克語",slv:"斯洛凡尼亞語",sma:"南薩米語",sme:"北薩莫斯語",smi:"薩米語",smj:"律勒歐薩米語",smn:"伊納裡薩米語",smo:"薩摩亞語",sms:"斯科特-薩米語",sna:"修納語",snd:"信德語",snk:"索寧克語",sog:"粟特語",som:"索馬利語",son:"桑海語",sot:"索托語，南部",spa:"西班牙語",srd:"撒丁語",srn:"蘇利南東加語",srp:"塞爾維亞語",srr:"塞雷爾語",ssa:"尼羅-撒哈拉語",ssw:"斯瓦特語",suk:"蘇庫馬語",sun:"巽他語",sus:"蘇蘇語",sux:"蘇美爾語",swa:"斯瓦希里語",swe:"瑞典語",syc:"古典敘利亞語",syr:"敘利亞語",tah:"塔希提語",tai:"傣語諸語言",tam:"泰米爾語",tat:"韃靼語",tel:"泰盧固語",tem:"滕內語",ter:"特列納語",tet:"特塔姆語",tgk:"塔吉克語",tgl:"塔加拉語",tha:"泰語",tib:"藏語",tig:"提格雷語",tir:"蒂格尼亞語",tiv:"蒂夫語",tkl:"托克勞",tlh:"克林貢語",tli:"特領吉語",tmh:"塔馬舍克語",tog:"東加語(尼亞薩)",ton:"東加(東加群島)",tpi:"托克皮辛語",tsi:"欽西安語",tsn:"茨瓦納語",tso:"宗加語",tuk:"土庫曼語",tum:"通布卡語",tup:"圖皮語",tur:"土耳其語",tut:"阿爾泰語",tvl:"圖瓦盧",twi:"特威語",tyv:"圖瓦語",udm:"烏德穆爾特語",uga:"烏加里特語",uig:"維吾爾語",ukr:"烏克蘭語",umb:"姆邦杜語",und:"未知",urd:"烏爾都語",uzb:"烏茲別克語",vai:"瓦伊語",ven:"溫達語",vie:"越南語",vol:"沃拉普克語",vot:"沃提克語",wak:"瓦卡希語",wal:"瓦拉莫語",war:"瓦瑞語",was:"瓦肖語",wel:"威爾斯語",wen:"索布諸語言",wln:"瓦龍語",wol:"沃洛夫語",xal:"卡爾梅克語",xho:"科薩語",yao:"瑤語",yap:"雅浦語",yid:"依地語",yor:"約魯巴語",ypk:"尤皮克語",zap:"薩巴特克語",zbl:"布列斯符號；布列斯符號的；布列斯",zen:"哲納加語",zha:"壯語",znd:"贊德語",zul:"祖魯語",zun:"祖尼語",zxx:"無語言內容；不適用",zza:"紮紮其語；南紮紮其語；北紮紮其語"},MonetaryUnits:{XUA:"非洲開發銀行帳戶單位",AFN:"阿富汗幣",DZD:"阿爾及利亞第納爾",ARS:"阿根廷批索",AMD:"亞美尼亞德拉姆",AWG:"阿魯巴盾",AUD:"澳大利亞元",AZN:"阿塞拜然馬納特",BSD:"巴哈馬元",BHD:"巴林第納爾",THB:"泰銖",PAB:"巴波亞",BBD:"巴巴多斯元",BYR:"白俄羅斯盧布",BZD:"貝里斯元",BMD:"百慕達元",VEF:"委內瑞拉元",BOB:"玻利維亞諾",XBA:"債券市場單位歐洲貨幣合成單位 EURCO",XBB:"債券市場單位歐洲貨幣單位 EMU 6",XBD:"債券市場單位歐洲帳戶單位 17 EUA 17",XBC:"債券市場單位歐洲帳戶單位 9 EUA 9",BRL:"巴西雷亞爾",BND:"汶萊元",BGN:"保加利亞列瓦",BIF:"布隆迪法郎",CAD:"加拿大元",CVE:"佛得角埃斯庫多",KYD:"開曼島元",GHS:"塞地",XOF:"多哥非洲共同體法郎",XAF:"非洲金融共同體法郎",XPF:"太平洋法郎",CLP:"智利披索",XTS:"專門保留供測試用代碼",COP:"哥倫比亞披索",KMF:"科摩羅法郎",CDF:"剛果法郎",BAM:"可兌換馬克",NIO:"科爾多瓦奧羅",CRC:"哥斯大黎加科朗",HRK:"克羅埃西亞庫納",CUP:"古巴披索",CZK:"捷克克朗",GMD:"達拉西",DKK:"丹麥克朗",MKD:"第納爾",DJF:"吉布提法郎",STD:"多布拉",DOP:"多米尼加披索",VND:"越南盾",XCD:"東加勒比元",EGP:"埃及鎊",SVC:"薩爾瓦多科朗",ETB:"埃塞俄比亞比爾",EUR:"歐元",FKP:"福克蘭群島鎊",FJD:"斐濟元",HUF:"福林",GIP:"直布羅陀鎊",XAU:"黃金",HTG:"古德",PYG:"瓜拉尼",GNF:"幾內亞法郎",GYD:"圭亞那元",HKD:"港幣",UAH:"格里夫尼亞",ISK:"冰島克朗",INR:"印度盧比",IRR:"伊朗里亞爾",IQD:"伊拉克第納爾",JMD:"牙買加元",JOD:"約旦第納爾",KES:"肯亞先令",PGK:"基那",LAK:"基普",KWD:"科威特第納爾",MWK:"克瓦查",AOA:"寬紮",MMK:"緬甸元",GEL:"拉里",LVL:"拉脫維亞拉特",LBP:"黎巴嫩鎊",ALL:"列克",HNL:"倫皮拉",SLL:"利昂",RON:"列伊",LRD:"利比里亞元",LYD:"利比亞第納爾",SZL:"里蘭吉尼",LTL:"立陶宛立特",LSL:"魯梯",MGA:"馬達加斯加阿里亞里",MYR:"馬來西亞林吉特",MUR:"模里西斯盧比",MZN:"梅蒂卡爾",MXN:"墨西哥披索",MXV:"墨西哥披索 UDI",MDL:"摩爾多瓦元",MAD:"摩洛哥迪拉姆",BOV:"玻利維亞諾",NGN:"奈拉",ERN:"納克法",NAD:"納米比亞元",NPR:"尼泊爾盧比",ANG:"荷屬安第列斯盾",ILS:"以色列謝克爾",TMT:"新馬納特",TWD:"新臺幣",NZD:"紐西蘭元",BTN:"努紮姆",KPW:"北朝鮮圓",NOK:"挪威克朗",PEN:"新索爾",MRO:"烏吉亞",TOP:"潘加",PKR:"巴基斯坦盧比",XPD:"鈀",MOP:"澳門元",CUC:"可兌換比索",UYU:"烏拉圭比索",PHP:"菲律賓比索",XPT:"鉑金",GBP:"英鎊",BWP:"普拉",QAR:"卡塔爾里亞爾",GTQ:"格查爾",OMR:"阿曼里亞爾",KHR:"瑞爾",MVR:"拉菲亞",IDR:"印尼盧比",RUB:"俄羅斯盧布",RWF:"盧旺達法郎",SHP:"聖赫倫那島鎊",SAR:"沙烏地阿拉伯里亞爾",XDR:"SDR 特別提款權",RSD:"塞爾維亞第納爾",SCR:"塞什爾盧比",XAG:"銀",SGD:"新加坡元",SBD:"所羅門群島元",KGS:"索姆",SOS:"索馬里先令",TJS:"索莫尼",ZAR:"南非蘭特",LKR:"斯里蘭卡盧比",XSU:"蘇克雷",SDG:"蘇丹鎊",SRD:"蘇利南元",SEK:"瑞典克朗",CHF:"瑞士法郎",SYP:"敘利亞鎊",BDT:"塔卡",WST:"塔拉",TZS:"坦桑尼亞先令",KZT:"哈薩克斯坦堅戈",XXX:"為不涉及貨幣的交易分配的代碼",TTD:"特立尼達和多巴哥元",MNT:"圖格里克",TND:"突尼斯第納爾",TRY:"土耳其里拉",AED:"阿聯酋迪拉姆",UGX:"烏干達先令",XFU:"UIC 法郎",COU:"哥倫比亞基金",CLF:"智利發展單位",UYI:"與指數掛鉤的烏拉圭比索 URUIURUI",USD:"美元",USN:"美元(次日)",USS:"美元(當日)",UZS:"烏茲別克蘇姆",VUV:"瓦圖",CHE:"WIR 歐元",CHW:"WIR 法郎",KRW:"韓元",YER:"葉門里亞爾",JPY:"日元",CNY:"人民幣元",ZMK:"尚比亞克瓦查",ZWL:"辛巴威元",PLN:"茲羅提"},UCUM_Length:{"[fth_i]":"水深: 英尋 [fth_i]","[hd_i]":"馬的高度: 手 [hd_i]",Ao:"長度: 埃(Ao)",AU:"長度: 天文單位(AU)","[cicero]":"長度: 西塞羅(迪多派卡)  [cicero]","[didot]":"長度: 迪多(迪多磅) [didot]","[fth_us]":"長度: 英尋 [fth_us]","[fth_br]":"長度: 英尋 [fth_br]","[ft_i]":"長度: 英呎 [ft_i]","[ft_us]":"長度: 英呎 [ft_us]","[ft_br]":"長度: 英呎 [ft_br]","[fur_us]":"長度: 弗隆 [fur_us]","[ch_br]":"長度: 岡特鏈 [ch_br]","[ch_us]":"長度: 岡特鏈(測量員鏈) [ch_us]","[in_i]":"長度: 英吋 [in_i]","[in_us]":"長度: 英吋 [in_us]","[in_br]":"長度: 英吋 [in_br]","[ly]":"長度: 光年 [ly]","[ligne]":"長度: ligne (法語中的線) [ligne]","[lne]":"長度: 英分 [lne]","[lk_us]":"長度: 岡特鏈的令 [lk_us]","[lk_br]":"長度: 岡特鏈的令 [lk_br]","[rlk_us]":"長度: 冉斯登鏈的令 [rlk_us]",um:"長度: 微米(µm) um",mm:"長度:公釐(mm)",cm:"長度:公分(cm)",m:"長度: 公尺(m)",km:"長度:公里(km)","[mil_i]":"長度: 英里 [mil_i]","[mil_us]":"長度: 英里 [mil_us]","[mi_us]":"長度: 英里 [mi_us]","[mi_br]":"長度: 英里 [mi_br]","[nmi_i]":"長度: 海浬 [nmi_i]","[nmi_br]":"長度: 海浬 [nmi_br]","[pc_br]":"長度: 步長 [pc_br]",pc:"長度: 秒差距(pc)","[pca]":"長度: 派卡 [pca]","[pied]":"長度: 英呎(法語中的英呎) [pied]","[pnt]":"長度: 磅 [pnt]","[pouce]":"長度: pouce (法語中的英吋) [pouce]","[pca_pr]":"長度: 印表機的派卡 [pca_pr]","[pnt_pr]":"長度: 印表機的磅 [pnt_pr]","[rch_us]":"長度: 冉斯登鏈(工程鏈) [rch_us]","[rd_us]":"長度: 杆 [rd_us]","[rd_br]":"長度: 杆 [rd_br]","[smoot]":"長度: 斯穆特 [smoot]","[mi_i]":"長度: 法定英里 [mi_i]","[yd_i]":"長度: 碼 [yd_i]","[yd_us]":"長度: 碼 [yd_us]","[yd_br]":"長度: 碼 [yd_br]"},UCUM:{"[k]":"(未分類): 波茲曼常數 [k]","[G]":"(未分類): 牛頓引力常數 [G]",Gal:"加速度: 伽(Gal)","[g]":"加速度: 標準自由落體加速度 [g]","[pH]":"酸度: pH [pH]","[h]":"作用: 普朗克常數 [h]",b:"作用面積: 靶恩(b)","[CFU]":"繁殖生物的數量: 群體形成單位 [CFU]","[FFU]":"致病因子數量: 免疫學病灶形成單位 [FFU]","[PFU]":"致病因子數量: 血小板形成單位 [PFU]",bit_s:"資訊量: 位(bit_s)",bit:"資訊量: 位(bit)",By:"資訊量: 位元組(By)",eq:"物品質: 當量(eq)",mol:"物質的量: 摩爾(mol)",osm:"物品質(溶解顆粒): 滲透壓摩爾(osm)","[arb'U]":"任意: 任意單位 [arb'U]","[iU]":"任意: 國際單位 [iU]","[USP'U]":"任意: 美國藥典單位 [USP'U]","[knk'U]":"任意生物活性: 孔克爾單位 [knk'U]","[mclg'U]":"任意生物活性: Mac Lagan 單位 [mclg'U]","[acr_us]":"面積: 英畝 [acr_us]","[acr_br]":"面積: 英畝 [acr_br]",ar:"面積: 公畝(ar)",har:"面積:公頃(har)","[cml_i]":"面積: 圓密耳 [cml_i]","[sct]":"面積: 一平方英里 [sct]","[sft_i]":"面積: 平方英呎 [sft_i]","[sin_i]":"面積: 平方英吋 [sin_i]","[smi_us]":"面積: 平方英里 [smi_us]","[srd_us]":"面積: 平方杆 [srd_us]","[syd_i]":"面積: 平方碼 [syd_i]","[twp]":"區域: 鎮區 [twp]","[CCID_50]":"致病因子製劑的生物活性(傳染性): 半數細胞培養感染劑量 [CCID_50]","[TCID_50]":"致病因子製劑的生物活性(感染性): 50% 組織培養物感染劑量 [TCID_50]","[todd'U]":"抗鏈球菌溶血素 O 的生物活性: 托德單位 [todd'U]","[dye'U]":"澱粉酶的生物活性: 染料單位 [dye'U]","[smgy'U]":"澱粉酶的生物活性: 澱粉酶單位 [smgy'U]","[APL'U]":"抗心磷脂抗體 IgA 的生物活性: APL 單位 [APL'U]","[GPL'U]":"抗心磷脂抗體 IgG 的生物活性: GPL 單位 [GPL'U]","[MPL'U]":"抗心磷脂抗體 IgM 的生物活性: MPL 單位 [MPL'U]","[beth'U]":"因子 VIII 抑制物的生物活性: 貝塞斯達單位 [beth'U]","[bdsk'U]":"磷酸酶的生物活性: 博丹斯基單位 [bdsk'U]","[ka'U]":"磷酸酶的生物活性: 金-阿二氏單位 [ka'U]","[tb'U]":"結核菌素的生物活性: 結核菌素單位 [tb'U]",Lmb:"亮度: 朗伯(Lmb)",kat:"催化活性: 開特(kat)",U:"催化活性: 單位(U)","[fth_i]":"水深: 英尋 [fth_i]",REM:"劑量當量: 人體輻射當量(REM)",Sv:"劑量當量: 希沃特(Sv)","[bu_us]":"幹量: 蒲式耳 [pk_us]","[dpt_us]":"乾燥容積: 乾品脫 [dpt_us]","[dqt_us]":"乾燥容積: 乾夸脫 [dqt_us]","[gal_wi]":"乾燥容積: 溫徹斯特加侖(歷史) [gal_wi]","[pk_us]":"乾燥容積: 配克 [pk_us]",P:"動態粘滯度: 泊(P)",F:"電容: 法拉(F)",C:"電荷: 庫侖(C)","[e]":"電荷: 元電荷 [e]",mho:"電導: 姆歐(mho)",S:"電導: 西門子(S)",A:"電流: 安培(A)",Bi:"電流: 畢奧(Bi)","[eps_0]":"電容率: 真空介電常數 [eps_0]",V:"電勢: 伏(V)","B[uV]":"電勢級: 貝爾微伏(B) [uV]","B[mV]":"電勢級: 貝爾毫伏(B) [mV]","B[V]":"電勢級: 貝爾伏(B) [V]",Ohm:"電阻: 歐姆(Ohm)","[Btu]":"能量: 英制熱量單位 [Btu]","[Btu_39]":"能量: 英制熱單位(39°F) [Btu_39]","[Btu_59]":"能量: 英制熱量單位(59°F) [Btu_59]","[Btu_60]":"能量: 英制熱量單位(60°F) [Btu_60]",cal:"能量: 卡路里(cal)","cal_[15]":"能量: 15°C 卡路里 cal_[15]","cal_[20]":"能量: 20℃ 卡路里 cal_[20]",eV:"能量: 電子伏(eV)",erg:"能量: 爾格(erg)","[Btu_IT]":"能量: 國際蒸汽表英制熱量單位 [Btu_IT]",cal_IT:"能量: 國際蒸汽表卡路里(cal_IT)",J:"能量: 焦耳(J)","[Btu_m]":"能量: 平均英制熱量單位 [Btu_m]",cal_m:"能量: 平均卡路里(cal_m)","[Cal]":"能量: 營養標記卡路里 [Cal]","[Btu_th]":"能量: 熱化學英制熱量單位 [Btu_th]",cal_th:"能量: 熱化學卡路里(cal_th)",Gy:"能量劑量: 戈瑞(Gy)",RAD:"能量劑量: 輻射吸收劑量(RAD)","[PRU]":"流體阻力: 周邊血管阻力單位 [PRU]","[bbl_us]":"液體容積: 桶 [bbl_us]","[crd_us]":"液體容積: 考得 [crd_us]","[fdr_us]":"液體容積: 液量打蘭 [fdr_us]","[foz_us]":"液體容積: 液量盎司 [foz_us]","[gil_us]":"液體容積: 吉耳 [gil_us]","[min_us]":"液體容積: 量滴 [min_us]","[pt_us]":"液體容積: 品脫 [pt_us]","[qt_us]":"液體容積: 夸脫 [qt_us]","[gal_us]":"液體容積: 安妮皇后的酒加侖 [gal_us]",Mx:"磁感應通量: 麥克斯韋(Mx)",dyn:"力: 達因(dyn)",gf:"力: 克力(gf)",N:"力: 牛頓(N)","[lbf_av]":"力: 磅力 [lbf_av]","[ppb]":"分數: 十億分率 [ppb]","[ppm]":"分數: 百萬分率 [ppm]","[ppth]":"分數: 千分率 [ppth]","[pptr]":"分數: 萬億分率 [pptr]","%":"分數: 百分比(%)",Hz:"頻率: 赫茲(Hz)","[Ch]":"導管規格: Charrire (法語) [Ch]","[hd_i]":"馬的高度: 手 [hd_i]","[hp_C]":"順勢療法效用: 百進位的順勢療法效用 [hp_C]","[hp_X]":"順勢療法效用: 十進位的順勢療法效用 [hp_X]",lx:"照明度: 勒克司(lx)",ph:"照明度: 輻透(ph)",H:"電感: 亨利(H)",R:"離子劑量: 倫琴(R)",St:"運動粘度: 斯托克斯(St)",Ao:"長度: 埃(Ao)",AU:"長度: 天文單位(AU)","[cicero]":"長度: 西塞羅(迪多派卡)  [cicero]","[didot]":"長度: 迪多(迪多磅) [didot]","[fth_us]":"長度: 英尋 [fth_us]","[fth_br]":"長度: 英尋 [fth_br]","[ft_i]":"長度: 英呎 [ft_i]","[ft_us]":"長度: 英呎 [ft_us]","[ft_br]":"長度: 英呎 [ft_br]","[fur_us]":"長度: 弗隆 [fur_us]","[ch_br]":"長度: 岡特鏈 [ch_br]","[ch_us]":"長度: 岡特鏈(測量員鏈) [ch_us]","[in_i]":"長度: 英吋 [in_i]","[in_us]":"長度: 英吋 [in_us]","[in_br]":"長度: 英吋 [in_br]","[ly]":"長度: 光年 [ly]","[ligne]":"長度: ligne (法語中的線) [ligne]","[lne]":"長度: 英分 [lne]","[lk_us]":"長度: 岡特鏈的令 [lk_us]","[lk_br]":"長度: 岡特鏈的令 [lk_br]","[rlk_us]":"長度: 冉斯登鏈的令 [rlk_us]",um:"長度: 微米(µm) um",mm:"長度:公釐(mm)",cm:"長度:公分(cm)",m:"長度: 公尺(m)",km:"長度:公里(km)","[mil_i]":"長度: 英里 [mil_i]","[mil_us]":"長度: 英里 [mil_us]","[mi_us]":"長度: 英里 [mi_us]","[mi_br]":"長度: 英里 [mi_br]","[nmi_i]":"長度: 海浬 [nmi_i]","[nmi_br]":"長度: 海浬 [nmi_br]","[pc_br]":"長度: 步長 [pc_br]",pc:"長度: 秒差距(pc)","[pca]":"長度: 派卡 [pca]","[pied]":"長度: 英呎(法語中的英呎) [pied]","[pnt]":"長度: 磅 [pnt]","[pouce]":"長度: pouce (法語中的英吋) [pouce]","[pca_pr]":"長度: 印表機的派卡 [pca_pr]","[pnt_pr]":"長度: 印表機的磅 [pnt_pr]","[rch_us]":"長度: 冉斯登鏈(工程鏈) [rch_us]","[rd_us]":"長度: 杆 [rd_us]","[rd_br]":"長度: 杆 [rd_br]","[smoot]":"長度: 斯穆特 [smoot]","[mi_i]":"長度: 法定英里 [mi_i]","[yd_i]":"長度: 碼 [yd_i]","[yd_us]":"長度: 碼 [yd_us]","[yd_br]":"長度: 碼 [yd_br]",B:"等級: 貝爾(B)",Np:"級別: 奈培(Np)",Ky:"線數: 凱塞(Ky)","[mesh_i]":"線數: 網格 [mesh_i]",sb:"照度密度: 熙提(sb)",lm:"光通量: 流明(lm)",cd:"照度: 坎德拉(cd)",Wb:"磁通量: 韋伯(Wb)",Oe:"磁場強度: 奧斯特(Oe)",G:"磁通密度: 高斯(G)",T:"磁通密度: 特斯拉(T)","[mu_0]":"導磁率: 真空導磁率 [mu_0]",Gb:"磁張力: 吉伯(Gb)","[dr_av]":"質量: 打蘭 [dr_av]","[dr_ap]":"質量: 打蘭 [dr_ap]","[m_e]":"質量: 電子品質 [m_e]","[gr]":"質量: 穀 [gr]",ug:"品質: 微克(µg) ug",mg:"質量:毫克(mg)",g:"質量: 克(g)",kg:"質量: 公斤(kg)","[lcwt_av]":"質量: 長擔(英擔) [lcwt_av]","[ltom_av]":"質量: 長噸(英噸) [lton_av]","[car_m]":"質量: 公制克拉 [car_m]","[oz_av]":"質量: 盎司 [oz_av]","[oz_tr]":"質量: 盎司 [oz_tr]","[oz_ap]":"質量: 盎司 [oz_ap]","[pwt_tr]":"質量: 本尼威特 [pwt_tr]","[lb_av]":"質量: 磅 [lb_av]","[lb_tr]":"質量: 磅 [lb_tr]","[lb_ap]":"質量: 磅 [lb_ap]","[m_p]":"質量: 質子質量 [m_p]","[sc_ap]":"質量: 吩 [sc_ap]","[scwt_av]":"質量: 短擔(美擔) [scwt_av]","[ston_av]":"質量: 短噸(美噸) [ston_av]","[stone_av]":"質量: 石(英石) [stone_av]",t:"質量: 公噸(t)",u:"質量: 統一的原子品質單位(u)","g%":"質量濃度: 克%(g%)","[car_Au]":"質量分數: 克拉(金合金) [car_Au]","[MET]":"體力活動的代謝值: 代謝當量 [MET]","[pi]":"數值: 圓周率值 [pi]","10*":"數值: 10 的任意次冪 10*","10^":"數量: 十的任意次冪(10^)",circ:"平面角: 圓周(circ)",deg:"平面角: 度(deg)",gon:"平面角: 哥恩(百分度) gon","'":"平面角: 分 '",rad:"平面角: 弧度(rad)",'"':"平面角: 秒 ''","[HP]":"功率: 馬力 [HP]",W:"功率: 瓦特(W)","B[kW]":"功率級: 貝爾千瓦(B) [kW]","B[W]":"功率級: 貝爾瓦特(B) [W]",bar:"壓力: 巴(bar)","[in_i'Hg]":"壓力: 汞柱英吋數 [in_i'Hg]","[in_i'H2O]":"壓力: 水柱英吋數 [in_i'H2O]","m[Hg]":"壓力: 汞柱公尺數(m) [Hg]","m[H2O]":"壓力: 水柱公尺數(m) [H2O]",Pa:"壓力: 帕斯卡 帕","[psi]":"壓力: 磅每平方英吋 [psi]",atm:"壓力: 標準大氣壓(atm)",att:"壓力: 工業大氣壓(att)","B[SPL]":"聲壓級: 貝爾聲壓(B) [SPL]",Bq:"放射能: 貝克勒耳(Bq)",Ci:"放射能: 居禮(Ci)","[diop]":"鏡片折射: 屈光度 [diop]","[p'diop]":"棱鏡的折射: 棱鏡屈光度 [p'diop]","[S]":"沉降係數: Svedberg 單位 [S]",Bd:"信號傳輸速率: 波特(Bd)","%[slope]":"坡度: 坡度百分比 %[slope]",sph:"立體角: 球(sph)",sr:"立體角: 球面度(sr)",Cel:"溫度: 攝氏度(Cel)","[degF]":"溫度: 華氏度 [degF]",K:"溫度: 絕對溫度(K)",d:"時間: 天(d)",h:"時間: 小時(h)",mo_g:"時間: 平均公曆月(mo_g)",a_g:"時間: 平均公曆年(a_g)",mo_j:"時間: 平均儒略月(mo_j)",a_j:"時間: 平均儒略年(a_j)",min:"時間: 分(min)",mo:"時間: 月(mo)",s:"時間: 秒(s)",mo_s:"時間: 陰曆月(mo_s)",a_t:"時間: 回歸年(a_t)",wk:"時間: 週(wk)",a:"時間: 年(a)","[kn_i]":"速度: 節 [kn_i]","[kn_br]":"速度: 節 [kn_br]","[c]":"速度: 光速 [c]","[HPF]":"顯微鏡中的視圖區域: 高倍視野 [HPF]","[LPF]":"顯微鏡中的視圖區域: 低倍視野 [LPF]","[bf_i]":"體積: 板英呎 [bf_i]","[bu_br]":"容量: 蒲式爾 [bu_br]","[cr_i]":"體積: 考得 [cr_i]","[cft_i]":"容積: 立方英呎 [cft_i]","[cin_i]":"體積: 立方英吋 [cin_i]","[cyd_i]":"體積: 立方碼 [cyd_i]","[cup_us]":"容積: 杯 [cup_us]","[drp]":"體積: 滴 [drp]","[fdr_br]":"容積: 液量打蘭 [fdr_br]","[foz_br]":"容積: 液量盎司 [foz_br]","[gal_br]":"容積: 加侖 [gal_br]","[gil_br]":"容積: 吉耳 [gil_br]",l:"容積: 升(l)",L:"容積: 升(l)","[min_br]":"容積: 量滴 [min_br]","[pk_br]":"容積: 配克 [pk_br]","[pt_br]":"容積: 品脫 [pt_br]","[qt_br]":"容積: 夸脫 [qt_br]",st:"體積: 立方公尺(st)","[tbs_us]":"容量: 湯匙 [tbs_us]","[tsp_us]":"容積: 茶匙 [tsp_us]","[hnsf'U]":"x 射線衰減: 亨氏單位 [hnsf'U]"},DCPList:{"001":"XML","002":"CORBA","003":"JAVA","004":"COM","005":"SQL","006":"Web 服務"},SV_ParameterDirection:{"001":"英吋","002":"外","003":"內/外"},MD_DatatypeCode:{"001":"類別","002":"編碼列表","003":"列舉","004":"編碼列表元素","005":"抽象類別","006":"匯聚類別","007":"指定的類別","008":"資料類別","009":"介面類別","010":"聯合類別","011":"中繼類別","012":"類型類別","013":"字元串","014":"整數","015":"關聯"},MD_ObligationCode:{"001":"必需","002":"可選項","003":"條件分析>"},GeometryTypeCode:{0:"空",1:"點",2:"多點",3:"折線",4:"面",5:"包絡矩形",6:"路徑",7:"任意",9:"多面體",11:"圓環",13:"線",14:"圓弧",15:"貝塞爾 3 曲線",16:"橢圓弧",17:"袋",18:"三角條帶",19:"三角扇",20:"光線",21:"球體",22:"三角形"}});