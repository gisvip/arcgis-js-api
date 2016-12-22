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

define({documentTypes:{arcgis:{caption:"คำอธิบายข้อมูล",editorCaption:"คำอธิบายข้อมูล",description:""}},emptyOption:"ว่าง",conditionals:{ISO19139A1_ROW4:"หากระดับคำอธิบายข้อมูลเป็นชุดข้อมูล ต้องกำหนดกล่องขอบเขตทางภูมิศาสตร์ หรือคำบรรยายเชิงภูมิศาสตร์",ISO19139A1_ROW6:"ต้องกรอกตัวบ่งชี้ชุดข้อมูลหรือชื่อชุดข้อมูล",ISO19139A1_ROW7:"หากข้อจำกัดอื่นๆ ถูกเลือก ต้องระบุข้อจำกัดอื่นๆ ด้วย",ISO19139A1_ROW9:"หากขอบเขตไม่ใช่ชุดข้อมูล ต้องระบุคำอธิบายชุดข้อมูล",ISO19139A1_ROW10_11_12:"หากขอบเขตไม่ใช่ชุดข้อมูล ต้องระบุรายงาน กระบวนการ หรือ แหล่งที่มาข้อมูล",ISO19139A1_ROW15:"หากจุดตรวจสอบถูกเลือก ต้องระบุรายละเอียดของจุดตรวจสอบ",ISO19139A1_ROW18:"หากเป็นเอกสารที่จัดจำหน่ายรูปแบบ หรือต้องระบุผู้จัดจำหน่าย / รูปแบบ",INSPIRE_AccessLimitation:" อย่างน้อยหนึ่งข้อจำกัด การเข้าถึงรหัสตามกฎหมายหรือต้องระบุรหัสการจำแนกการรักษาความปลอดภัย (แรงบันดาลใจ)",INSPIRE_UseLimitation:" ต้องระบุอย่างน้อยหนึ่งข้อจำกัด (แรงบันดาลใจ)",INSPIRE_ConformanceResult:"รายงานความสอดคล้องโดเมนต้องมีผลสอดคล้อง (แรงบันดาลใจ)",INSPIRE_DomainConsistency:"ต้องระบุรายงานความสอดคล้องโดเมน (แรงบันดาลใจ)",INSPIRE_LineageStatement:"หากขอบเขตเป็นชุดข้อมูล ต้องระบุรายละเอียดของความเป็นมา (แรงบันดาลใจ)",FGDC_DescIfTemporal:"ต้องระบุคำบรรยายสำหรับขอบเขตชั่วคราว (FGDC)",FGDC_Keywords:"ต้องระบุชื่อเรื่อง แท็ก หรือ คำหลัก (FGDC)",FGDC_Reports:"ต้องระบุความไม่ครบถ้วนและรายงานความสอดคล้องแนวคิด (FGDC)",FGDC_Temporal:"ต้องรุบอย่างน้อยหนึ่งขอบเขตชั่วคราว (FGDC)",NAP_Contact:"ต้องระบุที่อยู่/ที่จัดส่ง โทรศัพท์/จำนวนเสียง หรือทรัพยากรออนไลน์/URL (NAP)",GEN_BoundingBox:"ต้องระบุอย่างน้อยหนึ่งขอบเขตเชิงพื้นที่",GEN_ReportResult:"ต้องระบุทั้งสอดคล้องหรือผลเชิงปริมาณ",minLessThanMax:"มูลค่าน้อยที่สุด ต้องน้อยกว่ามูลค่าสูงที่สุด"},hints:{integerGreaterThanZero:"(กรอกจำนวนเต็ม > 0)",integerGreaterThanOne:"(กรอกจำนวนเต็ม > 1)",integer0To100:"(กรอกจำนวนเต็ม  0..100)",maxScale:"(กรอกจำนวนเต็ม > 0, เช่น 50000)",minScale:"(กรอกจำนวนเต็ม > 0, เช่น 150000000)",number0To100:"(กรอกตัวเลข  0..100)",number0To360:"(กรอกตัวเลข > 0..360)",number90To90:"(กรอกตัวเลข > -90..90)",listOfDoubles:"(กรอกชุดของตัวเลข ใช้เว้นวรรคเพื่อคั่นตัวเลข)"},htmlEditor:{button:"แก้ไข…"},sections:{overview:"ภาพรวม",esri:"Esri",resource:"ทรัพยากร",reference:"อ้างอิง",content:"เนื้อหา",distribution:"กระจาย",quality:"คุณภาพ",eainfo:"ฟิลด์",representation:"ตัวแทน",metadata:"คำอธิบายข้อมูล"},metadataStyle:{caption:"รูปแบบคำอธิบายข้อมูล ArcGIS",changeButton:"เปลี่ยนแปลง…",dialogTitle:"เลือกรูปแบบคำอธิบายข้อมูล",updating:"กำลังอัพเดทเอกสาร…","Item Description":"คำบรรยายรายการ","FGDC CSDGM Metadata":"คำอธิบายข้อมูล FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"รายละเอียดการดำเนินงานคำอธิบายข้อมูล ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"รายละเอียดการดำเนินงานคำอธิบายข้อมูล ISO 19139 GML3.2","INSPIRE Metadata Directive":"คำอธิบายข้อมูล","North American Profile of ISO19115 2003":"โปรไฟล์ของอเมริกาเหนือ ISO19115 2003"},aggrInfo:{caption:"ข้อมูลรวม",datasetHint:"ต้องกรอกตัวบ่งชี้ชุดข้อมูลหรือชื่อชุดข้อมูล",aggrDSIdent:"ตัวบ่งชี้ชุดข้อมูล",aggrDSName:"ชื่อชุดข้อมูล"},appSchInfo:{caption:"สกีมาโปรแกรมประยุกต์",asName:"ชื่อสกีมา",asSchLang:"ภาษาสกีมา",asCstLang:"ข้อจำกัดภาษา",asAscii:"แอสกี",asGraFile:"ไฟล์ภาพ",asGraFile_src:"แหล่งที่มาของไฟล์ภาพ",asSwDevFile:"ไฟล์การพัฒนาซอฟต์แวร์",asSwDevFile_src:"ที่มาของไฟล์การพัฒนาซอฟต์แวร์",asSwDevFiFt:"รูปแบบของไฟล์การพัฒนาซอฟต์แวร์"},citation:{caption:"อ้างอิง",section:{titlesAndDates:"ชื่อเรื่องและวันที่",links:"URLs",identifiers:"ตัวบ่งชี้",presentation:"ฟอร์ม",other:"อื่นๆ",edition:"ฉบับ",series:"ชุด"},conditionalDate:{caption:"วันที่อ้างอิง",msg:"ต้องกรอกวันที่สร้างอย่างน้อยหนึ่งวัน วันที่ตีพิมพ์หรือวันที่ปรับปรุง",msg_nap:"ต้องการวันที่อ้างอิง"},resTitle:"ชื่อ",resAltTitle:"ชื่ออื่น",collTitle:"ชื่อกลุ่ม",date:{createDate:"การสร้างวันที่",pubDate:"วันที่ตีพิมพ์",reviseDate:"วันที่ปรับปรุง",notavailDate:"วันที่ไม่ได้จำหน่าย",inforceDate:"วันที่ใช้งาน",adoptDate:"วันที่นำมาใช้",deprecDate:"วันที่เลิกใช้",supersDate:"แทนที่วัน"},isbn:"ไอเอสบีเอ็น",issn:"ไอเอสเอสเอ็น",citId:{caption:"ตัวบ่งชี้",identCode:"รหัส",identAuth:"ผู้มีอำนาจในการอ้างอิง"},resEd:"ฉบับ",resEdDate:"ฉบับวนที่",datasetSeries:{seriesName:"ชื่อ",issId:"ประเด็น",artPage:"หน้า"},otherCitDet:"รายละเอียดอื่นๆ",contactCaption:"อ้างอิงผู้ติดต่อ"},cntAddress:{caption:"ที่อยู่",delPoint:"จุดจัดส่งสินค้า",city:"เทศบาล",adminArea:"พื้นที่ขอบเขตการปกครอง",postCode:"รหัสไปรษณีย์",country:"ประเทศ",eMailAdd:"อีเมล์",addressType:{caption:"ประเภทที่อยู่",postal:"รหัสไปรษณีย์",physical:"ทางกายภาพ",both:"ทั้งสอง"}},cntOnlineRes:{caption:"แหล่งที่มาออนไลน์",linkage:"URL",protocol:"โปรโตคอล",appProfile:"รายละเอียดของการประยุกต์ใช้",orName:"ชื่อ",orDesc:"คำบรรยาย"},cntPhone:{caption:"โทรศัพท์",voiceNum:"เสียง",faxNum:"โทรสาร",tddtty:"ทีดีดี/ทีทีวาย"},codeRef:{caption:"ตัวบ่งชี้",identCode:"รหัส",idCodeSpace:"โค้ตสเปซ",idVersion:"เวอร์ชั่น",identAuth:"ผู้มีอำนาจในการอ้างอิง"},constraints:{caption:"ข้อจำกัด",useLimit:"ข้อจำกัดในการใช้งาน",general:{caption:"ทั่วไป"},legal:{caption:"ตามกฎหมาย",accessConsts:"ข้อจำกัดที่ระบุได้",useConsts:"ข้อกำหนดการใช้",othConsts:"ข้อจำกัดอื่นๆ"},security:{caption:"ระบบปลอดภัย",classSys:"ระบบการจำแนกประเภทข้อมูล",userNote:"หมายเหตุของผู้ใช้งาน",handDesc:"รายละเอียดการจัดการ"}},contInfo:{caption:"ข้อมูลเนื้อหาสาระ",section:{CovDesc:"รายละเอียดข้อมูล",ImgDesc:"รายละเอียดภาพ",FetCatDesc:"แค็ตตาล็อคฟีเจอร์"},attDesc:"คำบรรยายข้อมูล",covDim:{caption:"ช่วงหรือคณะ",seqID:"ตัวบ่งชี้ลำดับ",seqIDType:"ประเภทตัวบ่งชี้ลำดับ",dimDescrp:"ข้อบ่งชี้"},RangeDim:{caption:"ช่วงมิติ"},Band:{caption:"คณะ",minVal:"ค่าต่ำสุด",maxVal:"ค่าสูงสุด",valUnit:"หน่วยของค่าข้อมูล",pkResp:"ตอบสนองระดับสูง",bitsPerVal:"บิทส์ต่อค่า",toneGrad:"การไล่เฉดสีโทน",sclFac:"ระดับปัจจัย",offset:"ค่าชดเชย"},CovDesc:{caption:"รายละเอียดข้อมูล",section:{description:"คำบรรยาย",rangesAndBands:"ช่วงและคณะ"}},ImgDesc:{caption:"คำบรรยายภาพ",section:{description:"คำบรรยาย",rangesAndBands:"ช่วงและคณะ"},illElevAng:"Illumination Elevation Angle",illAziAng:"Illumination Azimuth Angle",cloudCovPer:"เปอร์เซอร์เมฆปกคลุม",cmpGenQuan:"คุณภาพการบีบอัด",trianInd:"มีดัชนีสมการโครงข่ายสามเหลี่ยมหรือไม่",radCalDatAv:"มีข้อมูลการสอบเทียบด้านช่วงคลื่นหรือไม่",camCalInAv:"มีข้อมูลการสอบเทียบค่ากล้องหรือไม่",filmDistInAv:"มีข้อมูลความบิดเบี้ยวของฟิล์มหรือไม่",lensDistInAv:"มีข้อมูลความบิดเบี้ยวของเลนส์หรือไม่",imagQuCode:"รหัสคุณภาพ",prcTypCde:"รหัสระดับกระบวนการ"},FetCatDesc:{caption:"แค็ตตาล็อคฟีเจอร์",section:{description:"คำบรรยาย",featureTypes:"ประเภทฟีเจอร์",citation:"การอ้างอิง"},compCode:"รวบรวมด้วย ISO 19119 หรือไม่",incWithDS:"Included With Dataset?",catCitation:"การอ้างอิงงแค็ตตาล็อคฟีเจอร์",catFetTyps:{caption:"ประเภทฟีเจอร์",genericName:"ชื่อ",codeSpace:"โค้ตสเปซ"}}},contact:{caption:"ติดต่อ",section:{name:"ชื่อผู้ติดต่อ",info:"ข้อมูลสำหรับการติดต่อ",hoursAndInstructions:"ชั่วโมงและคำแนะนำ"},conditionalName:{caption:"ชื่อผู้ติดต่อ",msg:"ต้องระบุหนึ่งในชื่อบุคคลชื่อองค์กรหรือชื่อตำแหน่ง",msg_fgdc:"ต้องระบุหนึ่งในชื่อบุคคลหรือชื่อองค์กร"},rpIndName:"ชื่อบุคคล",rpOrgName:"ชื่อองค์กร",rpPosName:"ชื่อตำแหน่ง",rpCntInfo:"ข้อมูลสำหรับการติดต่อ",cntHours:"ชั่วโมงการให้บริการ",cntInstr:"คำแนะนำในการติดต่อ"},distInfo:{caption:"ข้อมูลการจัดจำหน่าย",section:{format:"รูปแบบ",distributor:"ตัวแทนจำหน่าย",transfer:"ตัวเลือกการถ่ายโอน"},distFormat:{caption:"รูปแบบการจัดจำหน่าย",formatName:"รูปแบบชื่อ",formatVer:"รูปแบบเวอร์ชัน",formatAmdNum:"จำนวนการแก้ไข",formatSpec:"สเปค",fileDecmTech:"เทคนิคการบีบอัด",formatInfo:"เนื้อหาข้อมูล"},distributor:{caption:"ตัวแทนจำหน่าย"},distTranOps:{caption:"ตัวเลือกการโอนย้ายแบบดิจิทัล",section:{unitsAndSize:"หน่วย"},unitsODist:"หน่วยการกระจาย",transSize:"ขนาดการโอนย้าย",offLineMed:{caption:"ออฟไลน์",medDensity:"ความหนาแน่น",medDenUnits:"หน่วยความหนาแน่น",medVol:"ระดับเสียง",medNote:"หมายเหตุ"}},distorOrdPrc:{caption:"กระบวนการสั่งซื้อสินค้า",resFees:"ค่าธรรมเนียม",planAvDtTm:"วันที่ใช้งาน",planAvTmPd:{caption:"ช่วงวันที่ใช้งาน",tmBegin:"วัน/เวลาเริ่มต้น",tmEnd:"วัน/เวลาสิ้นสุด"},ordInstr:"คำแนะนำในการสั่งซื้อสินค้า",ordTurn:"การหมุนกลับ"}},dqInfo:{caption:"คุณภาพของข้อมูล",section:{scope:"ขอบเขต",report:"รายงาน",lineage:"เชื้อสาย"},dqScope:{section:{level:"ระดับ",extent:"ขอบเขต"},scpLvl:"ระดับของขอบเขต",scpLvlDesc:"ระดับรายละเอียด",scpExt:"ขอบเขตงาน"},report:{section:{measure:"การวัด",evaluation:"การประเมินผล",result:"ผลลัพธ์",conformance:"สอดคล้อง"},measDesc:"รายละเอียดการทดสอบ",measName:"ชื่อทดสอบ",measDateTm:"วันที่ทดสอบ",measId:"ตัวบ่งชี้",evalMethDesc:"วิธีการประเมินผล",evalProc:"อ้างอิงขั้นตอน",ConResult:{caption:"ผลสอดคล้อง",conExpl:"คำอธิบาย",conSpec:"สเปค",conPass:{caption:"องศา",_1:"ที่สอดคล้องกับ",_0:"ไม่สอดคล้องกับ"}},QuanResult:{caption:"ผลลัพธ์เชิงปริมาณ",quanVal:"มูลค่า",quanValType:"ประเภทค่า",quanValUnit:"หน่วยค่า",errStat:"ค่าทางสถิติผิดพลาด"}},dataLineage:{section:{statement:"รายงาน",dataSource:"แหล่งข้อมูล",prcStep:"ขั้นตอนประมวลผล"},statement:"รายงาน",dataSource:{caption:"แหล่งข้อมูล",section:{description:"คำบรรยาย",srcRefSys:"ระบบอ้างอิง",srcExt:"ขอบเขต",srcCitatn:"การอ้างอิง"},srcDesc:"รายละเอียดแหล่งข้อมูล",srcScale:{rfDenom:"ขนาดตัวหาร"},srcRefSys:"ระบบอ้างอิงแหล่งที่มา",srcExt:"ขอบเขตแหล่งที่มา",srcCitatn:"การอ้งอิงแหล่งที่มา"},prcStep:{caption:"ขั้นตอนประมวลผล",section:{description:"คำบรรยาย",stepProc:"หน่วยประมวลผล",stepSrc:"แหล่งข้อมูล"},stepDesc:"รายละเอียดการประมวลผล",stepRat:"หลักการและเหตุผล",stepDateTm:"วันที่ขั้นตอนประมวลผล",stepProc:"หน่วยประมวลผล",stepSrc:"แหล่งข้อมูล"}}},eainfo:{caption:"เอกลักษณ์และรายละเอียดข้อมูล",section:{detailed:"รายละเอียด",overview:"ภาพรวม"},detailed:{caption:"เอกลักษณ์และรายละเอียดข้อมูล",section:{enttyp:"เอกลักษณ์",attr:"ข้อมูลเชิงประกอบ"},enttyp:{caption:"ประเภทเอกลักษณ์",enttypl:"ป้ายชื่อ",enttypt:"วัตถุ",enttypc:"นับ",enttypd:"คำจำกัดความ",enttypds:"รายละเอียดแหล่งข้อมูล"},attr:{caption:"เชิงบรรยาย",section:{description:"คำบรรยาย",value:"มูลค่า",domain:"โดเมน"},attrlabl:"ป้ายชื่อ",attalias:"ชื่อย่อ",attrdef:"คำจำกัดความ",attrdefs:"รายละเอียดแหล่งข้อมูล",attrtype:"ประเภท",attwidth:"ความกว้าง",atprecis:"ความแม่นยำ",attscale:"มาตราส่วน",atindex:"ดรรชนี",attrvai:{attrva:"คำอธิบายค่า",attrvae:"ค่าความถูกต้อง"},attrmfrq:"การวัดค่าความถี่",begdatea:"วันแรกของค่า",enddatea:"วันสิ้นสุดของค่า",attrdomv:{caption:"โดเมน",edom:{caption:"แจกแจง",edomv:"มูลค่า",edomvd:"คำจำกัดความ",edomvds:"รายละเอียดแหล่งข้อมูล"},rdom:{caption:"ช่วง",rdommin:"ค่าต่ำสุด",rdommax:"ค่าสูงสุด",rdommean:"ค่าเฉลี่ย",rdomstdv:"แบ่งกลุ่มโดยใช้ค่าเบี่ยงเบนมาตราฐาน",attrunit:"หน่วย",attrmres:"ความละเอียดของการวัด"},codesetd:{caption:"โค้ตเซ็ท",codesetn:"ชื่อ",codesets:"แหล่ง"},udom:{caption:"ไม่สามารถแสดงผลได้"}}}},overview:{caption:"ภาพรวม",eaover:"สรุป",eadetcit:"การอ้างอิง"}},extent:{caption:"ขอบเขต",section:{description:"คำบรรยาย",geographic:"ภูมิศาสตร์",temporal:"ช่วงเวลา",vertical:"ตั้งฉาก"},exDesc:"รายละเอียดขอบเขต",geoEle:{caption:"ขอบเขตภาพ",GeoBndBox:{caption:"ขอบเขตกล่อง",esriExtentType:"ขอบเขตไว้สำหรับค้นหาหรือไม่",exTypeCode:"ขอบเขตประกอบด้วยแหล่งที่มาหรือไม่",westBL:"ขอบเขตด้านตะวันตกลองจิจูด",eastBL:"ขอบเขตด้านตะวันออกลองจิจูด",southBL:"ขอบเขตด้านใต้ละติจูด",northBL:"ขอบเขตด้านเหนือละติจูด"},GeoDesc:{caption:"คำบรรยายภาพ",exTypeCode:"คำบรรยายที่มีแหล่งที่มาหรือไม่",identCode:"รหัส"}},tempEle:{caption:"ขอบเขตชั่วคราว",TM_Period:"ช่วงระยะเวลา",TM_Instant:"เวลาทันที",tmPosition:"วันที่",tmBegin:"วันเริ่มต้น",tmEnd:"วันที่สิ้นสุด"},vertEle:{caption:"ขอบเขตแนวดิ่ง",vertMinVal:"ค่าสูงสุด",vertMaxVal:"ค่าต่ำสุด"}},graphOver:{caption:"เรียกดูกราฟฟิค",bgFileName:"เรียกดู URL กราฟฟิค",bgFileDesc:"เรียกดูคำบรรยายกราฟฟิค",bgFileType:"เรียกดูประเภทไฟล์กราฟฟิค"},keywords:{caption:"คีย์เวิร์ด",section:{topicCategory:"หัวข้อ",searchKeys:"แท็กส์",themeKeys:"หัวข้อ",placeKeys:"สถานที่",tempKeys:"เกี่ยวกับเวลา",discKeys:"กฎเกณฑ์",stratKeys:"ชั้น",productKeys:"สินค้า",subTopicCatKeys:"หัวข้อย่อย",otherKeys:"อื่นๆ"},delimited:"คีย์เวิร์ด",searchKeys:"แท็กส์",themeKeys:"ธีมคีย์เวิร์ด",placeKeys:"ใส่คีย์เวิร์ด",tempKeys:"คีย์เวิร์ดชั่วคราว",discKeys:"คีย์เวิร์ดของกฎเกณฑ์",stratKeys:"คีย์เวิร์ดของชั้น",productKeys:"คีย์เวิร์ดของผลิตภัณฑ์",subTopicCatKeys:"คีย์เวิร์ดของหัวข้อย่อย",otherKeys:"คีย์เวิร์ดอื่นๆ",thesaName:"อรรถาอ้างอิง",thesaLang:"พจนานุกรมภาษา"},locales:{caption:"สถานที่",locale:"สถานที่",resTitle:"ชื่อ",idAbs:"สรุป"},maintenance:{caption:"การบำรุงรักษา",section:{frequency:"ความถี่",scope:"ขอบเขต",note:"ข้อความ"},usrDefFreq:"ความถี่ที่กำหนดเอง",dateNext:"อัพเดทครังต่อไป",maintScp:"อัพเดทขอบเขต",upScpDesc:{caption:"คำบรรยายขอบเขต",attribSet:"ข้อมูลเชิงประกอบ",attribIntSet:"แอตทริบิวต์อินสแตนซ์",featSet:"ความสามารถ",featIntSet:"ฟีเจอร์อินสแตนซ์",datasetSet:"ชุดข้อมูล",other:"อินสแตนซ์อื่นๆ"},maintNote:"หมายเหตุการบำรุงรักษา",maintCont:"ติดต่อฝ่ายบำรุงรักษา"},metadata:{section:{profile:"ข้อมูลส่วนตัว",details:"ขอบเขต"},mdFileID:"ตัวบ่งชี้ไฟล์",mdParentID:"ตัวบ่งชี้เบื้องต้น",datasetURI:"ชุดข้อมูล URI",dataSetFn:"ชุดฟังค์ชัน",mdDateSt:"วันที่ของคำอธิบายข้อมูล",mdLang:"ภาษาของคำอธิบายข้อมูล",mdChar:"ชุดตัวอักษร",mdHrLv:"ลำดับชั้น",mdHrLvName:"ลำดับชั้นชื่อระดับ",mdContact:"คำอธิบายข้อมูล",mdMaint:"การบำรุงรักษาคำอธิบายข้อมูล",mdConst:"ข้อจำกัดคำอธิบายข้อมูล"},porCatInfo:{caption:"ภาพอ้างอิง"},refSysInfo:{caption:"การอ้างอิงเชิงตำแหน่ง"},resource:{section:{citation:"การอ้างอิง",details:"รายละเอียด",description:"คำบรรยาย",keywords:"คีย์เวิร์ด",status:"สถานะ",resolution:"ความละเอียด",representation:"การนำเสนอ",browse:"เรียกดูภาพ",format:"รูปแบบ",usage:"การใช้งาน",aggregateInfo:"รวม",additional:"เพิ่มเติม"},idAbs:"คำอธิบาย (บทคัดย่อ)",idPurp:"สรุป (วัตถุประสงค์)",suppInfo:"ข้อมูลเพิ่มเติม",idCredit:"เครดิต",envirDesc:"การประมวลผลสิ่งแวดล้อม",dataLang:"แหล่งข้อมูลภาษา",dataExt:"ขอบเขตแหล่งข้อมูล",idPoC:"ตัวแทนติดต่อ",resMaint:"การบำรุงรักษาแหล่งที่มา",resConst:"ข้อจำกัดแหล่งที่มา",dsFormat:"รูปแบบแหล่งที่มา",dataScale:{caption:"สเกลข้อมูล",equScale:"สเกลความละเอียด",scaleDist:"สเกลระยะทาง",scaleDist_value:"ระยะทาง"},idSpecUse:{caption:"การใช้แหล่งที่มา",specUsage:"การใช้งานที่เฉพาะเจาะจง",usageDate:"วันที่ใช้งาน",usrDetLim:"ข้อจำกัด",usrCntInfo:"ติดต่อการใช้งาน"}},service:{caption:"เซอร์วิส",svType:"ประเภทการให้บริการ",svType_Name:"ชื่อ",svAccProps:"คุณสมบัติการเข้าถึง",svCouplRes:{caption:"ทรัพยากร",svOpName:"ชื่อการปฏิบัติงาน",svResCitId:"ระบุทรัพยากร"},svCoupleType:"ประเภทการเชื่อมต่อ"},scaleRange:{caption:"ช่วงของสเกล",maxScale:"สเกลสูงสุด",minScale:"สเกลต่ำสุด"},spatRepInfo:{caption:"การนำเสนอเชิงพื้นที่",section:{dimension:"มิติ",parameters:"พารามิเตอร์"},numDims:"จำนวนของมิติ",tranParaAv:"มีพารามิเตอร์ในการเปลี่ยนแปลงค่าหรือไม่",axisDimension:{caption:"มิติ",dimSize:"ขนาด",dimResol:{caption:"ความละเอียด",_value:"ค่าความละเอียด",uom:"หน่วยความละเอียด"}},VectSpatRep:{caption:"เวคเตอร์",geometObjs:"วุตถุทรงเรขาคณิต",geoObjCnt:"จำนวนวัตถุ"},GridSpatRep:{caption:"กริด"},Georect:{caption:"ปรับแก้ค่าพิกัด",section:{centerPoint:"จุดกึ่งกลาง",cornerPts:"จุดมุม"},chkPtAv:"มีจุดตรวจสอบหรือไม่",chkPtDesc:"คำอธิบายจุดตรวจสอบ",ptInPixel:"จุดในพิกเซล",transDimDesc:"การเปลี่ยนแปลงขนาดรายละเอียด",transDimMap:"การทำแผนที่การเปลี่ยนแปลงขนาด",cornerPts:{caption:"จุดมุม",pos:"ตำแหน่ง",gmlDesc:"คำบรรยาย",gmlDescRef:"อ้างอิง",gmlIdent:"ตัวบ่งชี้",codeSpace:"ตัวบ่งชี้โค้ตสเปซ"}},Georef:{caption:"สามารถปรับแก้ความถูกต้องเชิงพื้นที่",ctrlPtAv:"มีจุดควบคุมหรือไม่",orieParaAv:"มีพารามิเตอร์ของการวางตัวของข้อมูลหรือไม่",orieParaDs:"ข้อมูลอธิบายพารามิเตอร์ของการวางตัวของข้อมูล",georefPars:"พารามิเตอร์ที่ใช้ปรับแก้ความถูกต้องเชิงพื้นที่",paraCit:"การอ้างอิงพารามิเตอร์"},Indref:{caption:"ทางอ้อม"}},booleanOptions:{_false:"ไม่",_true:"ใช่"},codelist:{CountryCode:"ประเทศ",LanguageCode:"ภาษา",MonetaryUnits:"หน่วยการเงินระหว่างประเทศ",MonetaryUnits_empty:"ไม่มีสกุลเงินสากล",PresentationForm:"FGDC ฟอร์มการนำเสนอข้อมูลเชิงพื้นที่",CI_PresentationFormCode:"ฟอร์มการนำเสนอข้อมูล",CI_RoleCode:"บทบาท",CI_OnLineFunctionCode:"ฟังก์ชัน",IMS_ContentType:"ประเภทของเนื้องหา",DQ_ElementDimension:"มิติ",DQ_ElementType:"ประเภทรายงาน",DQ_EvaluationMethodTypeCode:"ประเภทการประเมิน",DS_AssociationTypeCode:"ประเภทสมาคม",DS_InitiativeTypeCode:"ประเภทความคิดริเริ่ม",LI_SourceType:"ประเภทแหล่งที่มา",MD_CellGeometryCode:"เรขาคณิตเซล",MD_CharacterSetCode:"ชุดตัวละคร",MD_ClassificationCode:"การจำแนกประเภทข้อมูล",MD_CoverageContentTypeCode:"ประเภทของเนื้อหา",MD_DimensionNameTypeCode:"ประเภทของมิติ",MD_GeometricObjectTypeCode:"ประเภทของวัตถุทางเรขาคณิต",MD_ImagingConditionCode:"เงื่อนไขเกี่ยวกับภาพ",MD_MaintenanceFrequenceCode:"ความถี่ในการปรับปรุง",MD_MediumFormatCode:"รูปแบบรหัส",MD_MediumNameCode:"ชื่อกลาง",MD_PixelOrientationCode:"ตำแหน่งของจุดภาพ",MD_ProgressCode:"สถานะ",MD_RestrictionCode:"ข้อจำกัดของรหัส",MD_ScopeCode:"ขอบเขต",MD_SpatialRepresentationTypeCode:"ประเภทการแสดงข้อมูลเชิงพื้นที่",MD_TopicCategoryCode:"ประเภทของหัวข้อ",MD_TopologyLevelCode:"ระดับความสัมพันธ์ของข้อมูลเชิงพื้นที่",RS_Dimension:"มิติ",SV_CouplingType:"ประเภทการเชื่อมต่อ",UCUM:"หน่วย",UCUM_Length:"หน่วยระยะทาง"}});