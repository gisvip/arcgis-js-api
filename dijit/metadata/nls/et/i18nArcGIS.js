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

define({documentTypes:{arcgis:{caption:"ArcGIS-i metaandmed",editorCaption:"Metaandmed",description:""}},emptyOption:"Tühi",conditionals:{ISO19139A1_ROW4:"Kui metaandmete hierarhiatase on andmestik, on nõutav geograafiline piiraja-ala või geograafiline kirjeldus.",ISO19139A1_ROW6:"Andmestiku identifikaator või andmestiku nimi on nõutav.",ISO19139A1_ROW7:"Muude piirangute valimisel on muud piirangud nõutavad.",ISO19139A1_ROW9:"Kui käsitusala pole andmestik või sari, on nõutav taseme kirjeldus.",ISO19139A1_ROW10_11_12:"Kui käsitusala on andmestik või sari, on nõutav avaldus, toimingu etapp või andmeallikas.",ISO19139A1_ROW15:"Kui valitud on kontrollpunkti saadavus, on nõutav kontrollpunkti kirjeldus.",ISO19139A1_ROW18:"Kui jagamine dokumenteeritakse, on nõutav vorming või edasimüüja/vorming.",INSPIRE_AccessLimitation:" Nõutav on vähemalt üks juriidiline juurdepääsupiirangu kood või turvaklassi kood. (INSPIRE)",INSPIRE_UseLimitation:" Nõutav on vähemalt üks kasutuspiirang. (INSPIRE)",INSPIRE_ConformanceResult:"Domeeni ühtsuse aruande jaoks on nõutav vastavuse tulemus. (INSPIRE)",INSPIRE_DomainConsistency:"Nõutav on domeeni ühtsuse aruanne. (INSPIRE)",INSPIRE_LineageStatement:"Kui käsitusala on andmestik või sari, on nõutav päritolu avaldus. (INSPIRE).",FGDC_DescIfTemporal:"Ajalise ulatuse jaoks on nõutav kirjeldus. (FGDC)",FGDC_Keywords:"Nõutav on teema, silt või teema märksõna. (FGDC)",FGDC_Reports:"Nõutavad on täielikkuse väljajätu ja kontseptuaalse ühtsuse aruanded. (FGDC)",FGDC_Temporal:"Nõutav on vähemalt üks ajaline ulatus. (FGDC)",NAP_Contact:"Nõutav on aadress/kohaletoimetamise koht, telefoninumber või veebiressurss/URL. (NAP)",GEN_BoundingBox:"Nõutav on vähemalt üks geograafiline piiraja-ala.",GEN_ReportResult:"Nõutav on vastavuse või kvantitatiivne tulemus.",minLessThanMax:"Miinimumväärtus peab olema väiksem kui maksimumväärtus."},hints:{integerGreaterThanZero:"(sisestage täisarv > 0)",integerGreaterThanOne:"(sisestage täisarv > 1)",integer0To100:"(sisestage täisarv 0..100)",maxScale:"(sisestage täisarv > 0, nt 50 000)",minScale:"(sisestage täisarv > 0, nt 150000000)",number0To100:"(sisestage number 0..100)",number0To360:"(sisestage number 0..360)",number90To90:"(sisestage number -90..90)",listOfDoubles:"(sisestage tühikuga eraldatud numbrite loend)"},htmlEditor:{button:"Muuda..."},sections:{overview:"Ülevaade",esri:"Esri",resource:"Ressurss",reference:"Viide",content:"Sisu",distribution:"Jaotus",quality:"Kvaliteet",eainfo:"Väljad",representation:"Esitus",metadata:"Metaandmed"},metadataStyle:{caption:"ArcGIS-i metaandmete stiil",changeButton:"Muuda...",dialogTitle:"Valige metaandmete laad",updating:"Dokumendi uuendamine...","Item Description":"Üksuse kirjeldus","FGDC CSDGM Metadata":"FGDC CSDGM-i metaandmed","ISO 19139 Metadata Implementation Specification":"ISO 19139 metaandmete implementeerimise spetsifikatsioon","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 metaandmete implementeerimise spetsifikatsioon GML3.2","INSPIRE Metadata Directive":"INSPIRE metaandmete direktiiv","North American Profile of ISO19115 2003":"ISO19115 2003 Põhja-Ameerika profiil"},aggrInfo:{caption:"Agregeeri teave",datasetHint:"Andmestiku identifikaator või andmestiku nimi on nõutav.",aggrDSIdent:"Andmestiku identifikaator",aggrDSName:"Andmestiku nimi"},appSchInfo:{caption:"Rakenduse skeem",asName:"Skeemi nimi",asSchLang:"Skeemi keel",asCstLang:"Piirangu keel",asAscii:"ASCII",asGraFile:"Graafikafail",asGraFile_src:"Graafikafaili allikas",asSwDevFile:"Tarkvaraarendusfail",asSwDevFile_src:"Tarkvaraarendusfaili allikas",asSwDevFiFt:"Tarkvaraarendusfaili vorming"},citation:{caption:"Tsitaat",section:{titlesAndDates:"Pealkirjad ja kuupäevad",links:"URL-id",identifiers:"Identifikaatorid",presentation:"Vorm",other:"Muu",edition:"Versioon",series:"Sarjad"},conditionalDate:{caption:"Tsitaadi kuupäev",msg:"Nõutav on loomise, avaldamise või läbivaatuse kuupäev.",msg_nap:"Nõutav on tsitaadi kuupäev."},resTitle:"Pealkiri",resAltTitle:"Alternatiivne pealkiri",collTitle:"Ühine pealkiri",date:{createDate:"Loomise kuupäev",pubDate:"Avaldamise kuupäev",reviseDate:"Läbivaatuse kuupäev",notavailDate:"Mittesaadavuse kuupäev",inforceDate:"Jõustumise kuupäev",adoptDate:"Vastuvõtmise kuupäev",deprecDate:"Eemaldamise kuupäev",supersDate:"Väljavahetamise kuupäev"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikaator",identCode:"Kood",identAuth:"Volituse tsitaat"},resEd:"Versioon",resEdDate:"Versiooni kuupäev",datasetSeries:{seriesName:"Nimi",issId:"Väljaanne",artPage:"Lehekülg"},otherCitDet:"Muud üksikasjad",contactCaption:"Tsitaadi kontakt"},cntAddress:{caption:"Aadress",delPoint:"Kohaletoimetamise koht",city:"Suur linn",adminArea:"Haldusüksus",postCode:"Postiindeks",country:"Riik",eMailAdd:"E-mail",addressType:{caption:"Aadressi tüüp",postal:"Postiaadress",physical:"Füüsiline",both:"Mõlemad"}},cntOnlineRes:{caption:"Veebiressurss",linkage:"URL",protocol:"Protokoll",appProfile:"Rakenduse profiil",orName:"Nimi",orDesc:"Kirjeldus"},cntPhone:{caption:"Telefon",voiceNum:"Häälkõne",faxNum:"Faks",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifikaator",identCode:"Kood",idCodeSpace:"Koodiruum",idVersion:"Versioon",identAuth:"Volituse tsitaat"},constraints:{caption:"Piirangud",useLimit:"Kasutuspiirang",general:{caption:"Üldine"},legal:{caption:"Litsents",accessConsts:"Juurdepääsupiirang",useConsts:"Kasuta piiranguid",othConsts:"Muud piirangud"},security:{caption:"Turvalisus",classSys:"Klassifikatsiooni süsteem",userNote:"Kasutaja märkus",handDesc:"Käsitlemise kirjeldus"}},contInfo:{caption:"Sisu teave",section:{CovDesc:"Katvuse kirjeldus",ImgDesc:"Pildi kirjeldus",FetCatDesc:"Objektikataloog"},attDesc:"Atribuudi kirjeldus",covDim:{caption:"Vahemik või laineala",seqID:"Jada identifikaator",seqIDType:"Jada identifikaatori tüüp",dimDescrp:"Deskriptor"},RangeDim:{caption:"Vahemiku mõõtmed"},Band:{caption:"Laineala",minVal:"Miinimumväärtus",maxVal:"Maksimumväärtus",valUnit:"Väärtusühikud",pkResp:"Parim tulemus",bitsPerVal:"Bitti väärtuse kohta",toneGrad:"Tooni astmed",sclFac:"Mõõtkavategur",offset:"Nihe"},CovDesc:{caption:"Katvuse kirjeldus",section:{description:"Kirjeldus",rangesAndBands:"Vahemikud ja lainealad"}},ImgDesc:{caption:"Pildi kirjeldus",section:{description:"Kirjeldus",rangesAndBands:"Vahemikud ja lainealad"},illElevAng:"Valgustuse kõrgusnurk",illAziAng:"Valgustuse asimuudi nurk",cloudCovPer:"Pilvekatte protsent",cmpGenQuan:"Tihenduse kvaliteet",trianInd:"Triangulatsiooni identifikaator?",radCalDatAv:"Radiomeetriliste kalibreerimisandmete kättesaadavus?",camCalInAv:"Kaamera kalibreerimisteabe kättesaadavus?",filmDistInAv:"Filmi muundusandmete kättesaadavus?",lensDistInAv:"Objektiivi muundusandmete kättesaadavus?",imagQuCode:"Kvaliteedikood",prcTypCde:"Töötlustaseme kood"},FetCatDesc:{caption:"Objektikataloog",section:{description:"Kirjeldus",featureTypes:"Objektitüübid",citation:"Tsitaat"},compCode:"Vastab standardile ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Objektikataloogi tsitaat",catFetTyps:{caption:"Objekti tüüp",genericName:"Nimi",codeSpace:"Koodiruum"}}},contact:{caption:"Kontakt",section:{name:"Kontakti nimi",info:"Kontaktinfo",hoursAndInstructions:"Tunnid ja juhised"},conditionalName:{caption:"Kontakti nimi",msg:"Nõutav on isiku, ettevõtte või asukoha nimi.",msg_fgdc:"Nõutav on isiku või ettevõtte nimi."},rpIndName:"Isiku nimi",rpOrgName:"Organisatsiooni nimi",rpPosName:"Asukoha nimi",rpCntInfo:"Kontaktinfo",cntHours:"Teenindusaeg",cntInstr:"Kontakteerumise juhised"},distInfo:{caption:"Jaotusjuhised",section:{format:"Formaat",distributor:"Edasimüüja",transfer:"Ülekande valikud"},distFormat:{caption:"Jaotuse vorming",formatName:"Vormingu nimi",formatVer:"Vormingu versioon",formatAmdNum:"Muudatuse number",formatSpec:"Spetsifikatsioon",fileDecmTech:"Ekstraktimisviis",formatInfo:"Teabe sisu"},distributor:{caption:"Edasimüüja"},distTranOps:{caption:"Digitaalse ülekande valikud",section:{unitsAndSize:"Ühikud"},unitsODist:"Jaotusühikud",transSize:"Ülekande suurus",offLineMed:{caption:"Ühenduseta kandja",medDensity:"Tihedus",medDenUnits:"Tihedusühikud",medVol:"Mahud",medNote:"Kandja märkus"}},distorOrdPrc:{caption:"Tellimine",resFees:"Tasud",planAvDtTm:"Saadavuse kuupäev",planAvTmPd:{caption:"Saadavuse kuupäevade periood",tmBegin:"Alguskuupäev/kellaaeg",tmEnd:"Lõppkuupäev/kellaaeg"},ordInstr:"Tellimise juhised",ordTurn:"Töötsükkel"}},dqInfo:{caption:"Andmekvaliteet",section:{scope:"Skoop",report:"Aruanne",lineage:"Päritolu"},dqScope:{section:{level:"Tase",extent:"Kuvaulatus"},scpLvl:"Skoobi tase",scpLvlDesc:"Taseme kirjeldus",scpExt:"Skoobi ulatus"},report:{section:{measure:"Mõõda",evaluation:"Hinnang",result:"Tulemus",conformance:"Vastavus"},measDesc:"Mõõtmise kirjeldus",measName:"Mõõtmise nimi",measDateTm:"Mõõtmise kuupäev",measId:"Mõõtmise identifikaator",evalMethDesc:"Hindamismeetod",evalProc:"Toimingu tsitaat",ConResult:{caption:"Vastavuse tulemus",conExpl:"Selgitus",conSpec:"Spetsifikatsioon",conPass:{caption:"Kraad",_1:"Vastavuses",_0:"Pole vastavuses"}},QuanResult:{caption:"Kvantitatiivne tulemus",quanVal:"Väärtus",quanValType:"Väärtuse tüüp",quanValUnit:"Väärtusühikud",errStat:"Vigade statistika"}},dataLineage:{section:{statement:"Avaldus",dataSource:"Andmeallikas",prcStep:"Toimingu etapp"},statement:"Päritolu avaldus",dataSource:{caption:"Andmeallikas",section:{description:"Kirjeldus",srcRefSys:"Referentssüsteem",srcExt:"Kuvaulatus",srcCitatn:"Tsitaat"},srcDesc:"Allika kirjeldus",srcScale:{rfDenom:"Mõõtkava nimetaja"},srcRefSys:"Allika referentssüsteem",srcExt:"Allika ulatus",srcCitatn:"Allika tsitaat"},prcStep:{caption:"Toimingu etapp",section:{description:"Kirjeldus",stepProc:"Töötleja",stepSrc:"Andmeallikas"},stepDesc:"Toimingu kirjeldus",stepRat:"Põhjendus",stepDateTm:"Toimingu etapi kuupäev",stepProc:"Töötleja",stepSrc:"Andmeallikas"}}},eainfo:{caption:"Olemi ja atribuudi teave",section:{detailed:"Detailid",overview:"Ülevaade"},detailed:{caption:"Olemi ja atribuuti üksikasjad",section:{enttyp:"Olem",attr:"Atribuudid"},enttyp:{caption:"Olemi tüüp",enttypl:"Silt",enttypt:"Objekt",enttypc:"Loend",enttypd:"Definitsioon",enttypds:"Definitsiooni allikas"},attr:{caption:"Muu info",section:{description:"Kirjeldus",value:"Väärtus",domain:"Domeen"},attrlabl:"Silt",attalias:"Alias",attrdef:"Definitsioon",attrdefs:"Definitsiooni allikas",attrtype:"Tüüp",attwidth:"Laius",atprecis:"Täpsus",attscale:"Mõõtkava",atindex:"Indekseeritud",attrvai:{attrva:"Väärtuse selgitus",attrvae:"Väärtuse täpsus"},attrmfrq:"Väärtuse mõõtmise sagedus",begdatea:"Väärtuste alguskuupäev",enddatea:"Väärtuste lõppkuupäev",attrdomv:{caption:"Domeen",edom:{caption:"Loendatud",edomv:"Väärtus",edomvd:"Definitsioon",edomvds:"Definitsiooni allikas"},rdom:{caption:"Ulatus",rdommin:"Miinimumväärtus",rdommax:"Maksimumväärtus",rdommean:"Keskmine",rdomstdv:"Standardhälve",attrunit:"Ühikud",attrmres:"Mõõtmiste resolutsioon"},codesetd:{caption:"Koodikogum",codesetn:"Nimi",codesets:"Allikas"},udom:{caption:"Esitamatu"}}}},overview:{caption:"Ülevaade",eaover:"Kokkuvõte",eadetcit:"Tsitaat"}},extent:{caption:"Kuvaulatus",section:{description:"Kirjeldus",geographic:"Geograafiline",temporal:"Ajaline",vertical:"Vertikaalne"},exDesc:"Ulatuse kirjeldus",geoEle:{caption:"Geograafiline ulatus",GeoBndBox:{caption:"Piiraja-ala",esriExtentType:"Kas ulatus on otsinguks?",exTypeCode:"Kas ulatus sisaldab ressurssi?",westBL:"Läänepikkus",eastBL:"Idapikkus",southBL:"Lõunalaius",northBL:"Põhjalaius"},GeoDesc:{caption:"Geograafiline kirjeldus",exTypeCode:"Kas kirjeldus sisaldab ressurssi?",identCode:"Kood"}},tempEle:{caption:"Ajaline ulatus",TM_Period:"Ajaperiood",TM_Instant:"Ajahetk",tmPosition:"Kuupäev",tmBegin:"Alguskuupäev",tmEnd:"Lõppkuupäev"},vertEle:{caption:"Vertikaalne ulatus",vertMinVal:"Miinimumväärtus",vertMaxVal:"Maksimumväärtus"}},graphOver:{caption:"Lehitsemisgraafika",bgFileName:"Lehitsemisgraafika URL",bgFileDesc:"Lehitsemisgraafika kirjeldus",bgFileType:"Lehitsemisgraafika failitüüp"},keywords:{caption:"Märksõnad",section:{topicCategory:"Teema",searchKeys:"Märksõnad",themeKeys:"Teema",placeKeys:"Koht",tempKeys:"Ajaline",discKeys:"Valdkond",stratKeys:"Kiht",productKeys:"Toode",subTopicCatKeys:"Alamteema",otherKeys:"Muu"},delimited:"Märksõnad",searchKeys:"Märksõnad",themeKeys:"Teema märksõna",placeKeys:"Koha märksõna",tempKeys:"Ajalised märksõnad",discKeys:"Valdkonna märksõna",stratKeys:"Kihtide märksõnad",productKeys:"Toote märksõnad",subTopicCatKeys:"Alamteema märksõnad",otherKeys:"Muud märksõnad",thesaName:"Tesauruse märksõna",thesaLang:"Tesauruse keel"},locales:{caption:"Asukohad",locale:"Lokaat",resTitle:"Pealkiri",idAbs:"Kokkuvõte"},maintenance:{caption:"Hooldus",section:{frequency:"Sagedus",scope:"Skoop",note:"Märkus"},usrDefFreq:"Valikuline sagedus",dateNext:"Järgmine uuendus",maintScp:"Uuenda skoopi",upScpDesc:{caption:"Skoobi kirjeldus",attribSet:"Atribuudid",attribIntSet:"Atribuudi esinemisjuhud",featSet:"Objektid",featIntSet:"Objekti esinemisjuhud",datasetSet:"Andmestik",other:"Muud esinemisjuhud"},maintNote:"Hoolduse märkus",maintCont:"Hoolduse kontaktandmed"},metadata:{section:{profile:"Profiil",details:"Skoop"},mdFileID:"Faili identifikaator",mdParentID:"Algidentifikaator",datasetURI:"Andmestiku URI",dataSetFn:"Andmestiku funktsioon",mdDateSt:"Metaandmete kuupäev",mdLang:"Metaandmete keel",mdChar:"Märgistik",mdHrLv:"Hierarhiatase",mdHrLvName:"Hierarhiataseme nimi",mdContact:"Metaandmete kontakt",mdMaint:"Metaandmete hooldus",mdConst:"Metaandmete piirangud"},porCatInfo:{caption:"Kujutamise tsitaat"},refSysInfo:{caption:"Koordinaatsüsteem"},resource:{section:{citation:"Tsitaat",details:"Detailid",description:"Kirjeldus",keywords:"Märksõnad",status:"Staatus",resolution:"Resolutsioon",representation:"Representatsioon",browse:"Lehitsemisgraafika",format:"Formaat",usage:"Kasutus",aggregateInfo:"Agregeerimine",additional:"Täiendav"},idAbs:"Kirjeldus (ülevaade)",idPurp:"Kokkuvõte (eesmärk)",suppInfo:"Lisateave",idCredit:"Krediidid",envirDesc:"Töötlemiskeskkond",dataLang:"Ressursi keel",dataExt:"Ressursi ulatus",idPoC:"Kontakti loomise punkt",resMaint:"Ressursihaldus",resConst:"Ressursipiirangud",dsFormat:"Ressursi vorming",dataScale:{caption:"Andmete mõõtkava",equScale:"Mõõtkava resolutsioon",scaleDist:"Vahemaa resolutsioon",scaleDist_value:"Vahemaa"},idSpecUse:{caption:"Ressursside kasutus",specUsage:"Konkreetne kasutus",usageDate:"Kasutuse kuupäev",usrDetLim:"Piirangud",usrCntInfo:"Kasutuse kontakt"}},service:{caption:"Teenus",svType:"Teenuse tüüp",svType_Name:"Nimi",svAccProps:"Juurdepääsu omadused",svCouplRes:{caption:"Ühendatud ressurss",svOpName:"Toimingu nimi",svResCitId:"Ressursi identifikaator"},svCoupleType:"Ühenduse tüüp"},scaleRange:{caption:"Mõõtkavavahemik",maxScale:"Maksimaalne mõõtkava",minScale:"Minimaalne mõõtkava"},spatRepInfo:{caption:"Ruumiline esitus",section:{dimension:"Mõõtmed",parameters:"Parameetrid"},numDims:"Mõõtmete arv",tranParaAv:"Transformatsiooniparameetri saadavus?",axisDimension:{caption:"Mõõtmed",dimSize:"Suurus",dimResol:{caption:"Resolutsioon",_value:"Resolutsiooni väärtus",uom:"Resolutsiooni ühikud"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geomeetrilised objektid",geoObjCnt:"Objektide arv"},GridSpatRep:{caption:"Ruudustik"},Georect:{caption:"Georektifitseeritud",section:{centerPoint:"Keskpunkt",cornerPts:"Nurgapunktid"},chkPtAv:"Kontrollpunkti saadavus?",chkPtDesc:"Kontrollpunkti kirjeldus",ptInPixel:"Punkt pikslites",transDimDesc:"Transformatsiooni mõõtmete kirjeldus",transDimMap:"Transformatsiooni mõõtmete kaardistamine",cornerPts:{caption:"Nurgapunkt",pos:"Paigutus",gmlDesc:"Kirjeldus",gmlDescRef:"Viide",gmlIdent:"Identifikaator",codeSpace:"Identifikaatori koodiruum"}},Georef:{caption:"Georeferentseeritav",ctrlPtAv:"Kontrollpunkti saadavus?",orieParaAv:"Suunaparameetri saadavus?",orieParaDs:"Suunaparameetri kirjeldus",georefPars:"Georeferentseeritud parameetrid",paraCit:"Parameetri tsitaat"},Indref:{caption:"Kaudne"}},booleanOptions:{_false:"Ei",_true:"Jah"},codelist:{CountryCode:"Riik",LanguageCode:"Keel",MonetaryUnits:"Rahaühikud",MonetaryUnits_empty:"Universaalvaluutat pole",PresentationForm:"FGDC georuumiliste andmete esitamise vorm",CI_PresentationFormCode:"Esitamise vorm",CI_RoleCode:"Roll",CI_OnLineFunctionCode:"Funktsioon",IMS_ContentType:"Sisu tüüp",DQ_ElementDimension:"Mõõtmed",DQ_ElementType:"Aruande tüüp",DQ_EvaluationMethodTypeCode:"Hinnangutüüp",DS_AssociationTypeCode:"Seose tüüp",DS_InitiativeTypeCode:"Algatuse tüüp",LI_SourceType:"Allika tüüp",MD_CellGeometryCode:"Tselli geomeetria",MD_CharacterSetCode:"Märgistik",MD_ClassificationCode:"Rühmitamine",MD_CoverageContentTypeCode:"Sisu tüüp",MD_DimensionNameTypeCode:"Mõõtmete tüüp",MD_GeometricObjectTypeCode:"Geomeetrilise objekti tüüp",MD_ImagingConditionCode:"Pildi tingimus",MD_MaintenanceFrequenceCode:"Uuendamise sagedus",MD_MediumFormatCode:"Vormingukood",MD_MediumNameCode:"Kandja nimi",MD_PixelOrientationCode:"Pikslite suund",MD_ProgressCode:"Staatus",MD_RestrictionCode:"Piirangu kood",MD_ScopeCode:"Skoop",MD_SpatialRepresentationTypeCode:"Ruumilise esituse tüüp",MD_TopicCategoryCode:"Teemakategooria",MD_TopologyLevelCode:"Topoloogiatase",RS_Dimension:"Mõõtmed",SV_CouplingType:"Ühenduse tüüp",UCUM:"Ühikud",UCUM_Length:"Vahemaa ühikud"}});