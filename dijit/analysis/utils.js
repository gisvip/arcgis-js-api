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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/_base/json","dojo/dom-attr","dojo/has","dojo/i18n","dojo/io-query","dojo/i18n!../../nls/jsapi","dojo/json","dojo/string","dojo/query","dojo/date/locale","dojo/dom-style","dojo/dom-class","dojo/dom-construct","dojo/Deferred","dojo/number","dojo/_base/window","dojo/when","dojo/dom","dojo/on","dojo/data/ItemFileWriteStore","dojo/topic","dijit/registry","dijit/Dialog","dijit/form/CheckBox","../../kernel","../../lang","../../units","../../request","./HelpWindow","../../tasks/query","../../dijit/BrowseItems","../../layers/FeatureLayer","./PluginAnalysisLayers","../../tasks/Geoprocessor","../../dijit/SingleFilter","./FeatureRecordSetLayer","./PluginLayers","../../layers/ArcGISImageServiceLayer"],function(e,i,t,s,a,n,r,o,l,d,m,u,c,y,h,p,g,f,b,T,v,w,E,S,I,L,N,A,D,M,_,x,F,R,k,O,C,P,U,j,G,B,H){var Q={},V={UNKNOWN:-1,UNSUPPORTED:0,LENGTH:1,AREA:2};return i.mixin(Q,{_helpDialog:null,i18n:null,UNITSMAP:{Feet:"esriFeet",Yards:"esriYards",Miles:"esriMiles",Meters:"esriMeters",Kilometers:"esriKilometers",NauticalMiles:"esriNauticalMiles"},initHelpLinks:function(e,t,s){if(this._helpDialog||(this._helpDialog=new R),e){var n=N.byNode(e),o=n?n.get("helpFileName"):s&&s.helpFileName?s.helpFileName:null,l=n?n.get("isSingleTenant"):s&&s.isSingleTenant?s.isSingleTenant:!1,d="standard";n&&(n.showGeoAnalyticsParams||n.showBigData)||s&&s.analysisMode&&"bigdata"===s.analysisMode?(o+="_bd",d="bigdata"):s&&s.analysisMode&&"raster"===s.analysisMode&&(o+="_ra",d="raster"),y("[esriHelpTopic]",e).forEach(function(n,m,u){n&&(p.set(n,"display",_.isDefined(t)&&t!==!0?"none":""),_.isDefined(n._helpClickHandler)&&(n._helpClickHandler.remove(),n._helpClickHandler=null),n._helpClickHandler=S(n,"click",i.hitch(this,function(i){a.stop(i),this._helpDialog.show(i,{helpId:r.get(n,"esriHelpTopic"),helpFileName:o,analysisGpServer:s&&s.analysisGpServer?s.analysisGpServer:null,helpParentNode:e,isPortal:l,analysisMode:d})})))},this)}},constructAnalysisFeatColl:function(e){var t,s={};s.featureCollection=e.layerDefinition;for(t in s.featureCollection)s.featureCollection.hasOwnProperty(t)&&"objectIdField"===t&&(s.featureCollection.objectIdFieldName=i.clone(s.featureCollection.objectIdField),delete s.featureCollection.objectIdField);return s.featureCollection.features=e.featureSet.features,s},constructAnalysisInputLyrObj:function(e,t,s){var a,n,r,o,l,m={};if(_.isDefined(s)||(s=!0),e.getMap?o=e.getMap():e._map&&(o=e._map),e.url&&!e._collection){if(m={url:e.url},r=this.isHostedService(e.url),l=e.version>=10.2&&e._useStandardizedQueries,e.getDefinitionExpression&&e.getDefinitionExpression()?m.filter=e.getDefinitionExpression():_.isDefined(e.definitionExpression)&&""!==e.definitionExpression&&(m.filter=e.definitionExpression),e.useMapTime&&e.timeInfo&&o&&o.timeExtent&&(l||r||e.version>=10.2)&&s){var c="";e.timeInfo.startTimeField&&!e.timeInfo.endTimeField?(o.timeExtent.startTime&&(c=e.timeInfo.startTimeField+" > "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.startTime)+"'"),o.timeExtent.endTime&&(o.timeExtent.startTime&&(c+=" AND "),c+=e.timeInfo.startTimeField+" < "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.endTime)+"'")):!e.timeInfo.startTimeField&&e.timeInfo.endTimeField?(o.timeExtent.startTime&&(c=e.timeInfo.endTimeField+" > "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.startTime)+"'"),o.timeExtent.endTime&&(o.timeExtent.startTime&&(c+=" AND "),c+=e.timeInfo.endTimeField+" < "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.endTime)+"'")):e.timeInfo.startTimeField&&e.timeInfo.endTimeField&&(o.timeExtent.startTime&&(c=e.timeInfo.startTimeField+" > "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.startTime)+"'"),o.timeExtent.endTime&&(o.timeExtent.startTime&&(c+=" AND "),c+=e.timeInfo.endTimeField+" < "+(r?"":"timestamp ")+"'"+this.formatDate(o.timeExtent.endTime)+"'")),m.filter?m.filter+=" AND "+c:m.filter=c}e.credential&&(m.serviceToken=e.credential.token),-1!==m.url.indexOf("?")&&(a=m.url.substring(m.url.indexOf("?")+1,m.url.length),n=d.queryToObject(a),i.mixin(m,n),m.url=m.url.substring(0,m.url.indexOf("?")))}else if(!e.url||e._collection)try{m=e.toJson()}catch(y){e._json=u.parse(e._json),m=e.toJson()}return t&&(m=new G(m)),m},formatDate:function(e){return h.format(e,{datePattern:"yyyy-MM-dd",selector:"date"})+" "+h.format(e,{selector:"time",timePattern:"HH:mm:ss"})},isHostedService:function(e){if(!e)return!1;var i=".arcgis.com/",t="//services",s="//tiles",a="//features",n=-1!==e.indexOf(i),r=-1!==e.indexOf(t)||-1!==e.indexOf(s)||-1!==e.indexOf(a);return n&&r},isTimeEnabled:function(e){var i=e.version>=10.2&&e._useStandardizedQueries;return e.useMapTime&&e.timeInfo&&(i||e.version>=10.2)||_.isDefined(e.time)},isTimeInstantLayer:function(e){return _.isDefined(e.timeInfo)&&_.isDefined(e.timeInfo.startTimeField)&&!_.isDefined(e.timeInfo.endTimeField)||_.isDefined(e.time)&&_.isDefined(e.time.timeType)&&"instant"===e.time.timeType},buildReport:function(e,s){var a="";return s||(s={},i.mixin(s,m.analysisMsgCodes)),t.forEach(e,function(e,n){var r,o,l;"string"==typeof e.message?(r=_.isDefined(s[e.messageCode])?s[e.messageCode]:e.message,a+=e.style.substring(0,e.style.indexOf("</"))+(this._isEmptyObject(e.params)?r:c.substitute(r,e.params))+e.style.substring(e.style.indexOf("</"))):i.isArray(e.message)&&(l=[],o=i.clone(e.style),t.forEach(e.message,function(i,t){o=o.replace(/<\//,"${"+t+"}"),r=_.isDefined(s[e.messageCode+"_"+t])?s[e.messageCode+"_"+t]:i,r=this._isEmptyObject(e.params)?r:c.substitute(r,e.params),l.push(r+"</")},this),o=c.substitute(o,l),a+=o)},this),a},getLayerFeatureCount:function(e,i){var t=new k;return t.geometry=i.geometry||"",t.where=i.where||"1=1",t.geometryType=i.geometryType||"esriGeometryEnvelope",e.getDefinitionExpression&&e.getDefinitionExpression()&&!i.where?t.where=e.getDefinitionExpression():_.isDefined(e.definitionExpression)&&""!==e.definitionExpression&&!i.where&&(t.where=e.definitionExpression),e.queryCount(t)},createPolygonFeatureCollection:function(e){var i;return i={layerDefinition:null,featureSet:{features:[],geometryType:"esriGeometryPolygon"}},i.layerDefinition={currentVersion:10.2,copyrightText:"",defaultVisibility:!0,relationships:[],isDataVersioned:!1,supportsRollbackOnFailureParameter:!0,supportsStatistics:!0,supportsAdvancedQueries:!0,geometryType:"esriGeometryPolygon",minScale:0,maxScale:0,objectIdField:"OBJECTID",templates:[],type:"Feature Layer",displayField:"TITLE",visibilityField:"VISIBLE",name:e,hasAttachments:!1,typeIdField:"TYPEID",capabilities:"Query",allowGeometryUpdates:!0,htmlPopupType:"",hasM:!1,hasZ:!1,globalIdField:"",supportedQueryFormats:"JSON",hasStaticData:!1,maxRecordCount:-1,indexes:[],types:[],drawingInfo:{renderer:{type:"simple",symbol:{color:[0,0,0,255],outline:{color:[0,0,0,255],width:3,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSNull"},label:"",description:""},transparency:0,labelingInfo:null,fixedSymbols:!0},fields:[{alias:"OBJECTID",name:"OBJECTID",type:"esriFieldTypeOID",editable:!1},{alias:"Title",name:"TITLE",length:50,type:"esriFieldTypeString",editable:!0},{alias:"Visible",name:"VISIBLE",type:"esriFieldTypeInteger",editable:!0},{alias:"Description",name:"DESCRIPTION",length:1073741822,type:"esriFieldTypeString",editable:!0},{alias:"Type ID",name:"TYPEID",type:"esriFieldTypeInteger",editable:!0}]},i},createPointFeatureCollection:function(e){var i;return i={layerDefinition:null,featureSet:{features:[],geometryType:"esriGeometryPoint"}},i.layerDefinition={objectIdField:"OBJECTID",templates:[],type:"Feature Layer",drawingInfo:{renderer:{field1:"TYPEID",type:"simple",symbol:{height:24,xoffset:0,yoffset:12,width:24,contentType:"image/png",type:"esriPMS",url:"http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"},description:"",value:"0",label:"Stickpin"}},displayField:"TITLE",visibilityField:"VISIBLE",name:e,hasAttachments:!1,typeIdField:"TYPEID",capabilities:"Query",types:[],geometryType:"esriGeometryPoint",fields:[{alias:"OBJECTID",name:"OBJECTID",type:"esriFieldTypeOID",editable:!1},{alias:"Title",name:"TITLE",length:50,type:"esriFieldTypeString",editable:!0},{alias:"Visible",name:"VISIBLE",type:"esriFieldTypeInteger",editable:!0},{alias:"Description",name:"DESCRIPTION",length:1073741822,type:"esriFieldTypeString",editable:!0},{alias:"Type ID",name:"TYPEID",type:"esriFieldTypeInteger",editable:!0}]},i},createFolderStore:function(e,i){var s=new I({data:{identifier:"id",label:"name",items:[]}});return s.newItem({name:i,id:""}),t.forEach(e,function(e){s.newItem({name:e.title,id:e.id})}),s},setupFoldersUI:function(e){e.folderSelect.set("store",e.folderStore),e.folderSelect.set("required",!0),e.folderSelect.set("searchAttr","name"),_.isDefined(e.folderId)?e.folderStore.get(e.folderId).then(i.hitch(this,function(i){_.isDefined(i)?e.folderSelect.set("item",i):e.folderStore.get("").then(function(i){e.folderSelect.set("item",i)},this)})):e.folderName?e.folderStore.fetch({query:{name:e.folderName},onComplete:i.hitch(this,function(i){_.isDefined(i)&&i.length>0?e.folderSelect.set("item",i[0]):e.folderStore.get("").then(function(i){e.folderSelect.set("item",i)},this)})}):e.username?e.folderSelect.set("displayedValue",e.username):e.folderStore.get("").then(function(i){e.folderSelect.set("item",i)},this)},_isEmptyObject:function(e){var i;for(i in e)if(e.hasOwnProperty(i))return!1;return!0},validateServiceName:function(e,i){var t,s,a=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(e),n=!0;return _.isDefined(i)&&i.textInput&&(s=i.textInput),this.initI18n(),0===e.length||0===c.trim(e).length?(t=this.i18n.requiredValue,n=!1):a?(t=this.i18n.invalidServiceName,n=!1):e.length>98?(t=this.i18n.invalidServiceNameLength,n=!1):encodeURIComponent(e).length>170&&(t=this.i18n.invalidEncodedServiceNameLength,n=!1),s&&!n&&s.set("invalidMessage",t),n},getStepNumber:function(e){y(".esriAnalysisNumberLabel",e).forEach(function(e,i){var t=this._getNumberLabel(i);r.set(e,"innerHTML",t)},this)},_getNumberLabel:function(e){var i="";switch(this.initI18n(),e){case 0:i=this.i18n.oneLabel;break;case 1:i=this.i18n.twoLabel;break;case 2:i=this.i18n.threeLabel;break;case 3:i=this.i18n.fourLabel;break;case 4:i=this.i18n.fiveLabel;break;case 5:i=this.i18n.sixLabel;break;case 6:i=this.i18n.sevenLabel;break;case 7:i=this.i18n.eightLabel;break;case 8:i=this.i18n.nineLabel}return i},populateAnalysisLayers:function(e,i,s,a){if(e){var n=[],r=e.get(i);e._titleRow&&p.set(e._titleRow,"display","none"),e._analysisLabelRow&&p.set(e._analysisLabelRow,"display","table-row"),e._selectAnalysisRow&&(p.set(e._selectAnalysisRow,"display","table-row"),g.add(e._analysisSelect.domNode,"esriTrailingMargin3"),p.set(e._analysisSelect.domNode.parentNode,"padding-bottom","1em")),e.domNode&&this.getStepNumber(e.domNode),_.isDefined(a)&&a.chooseLabel&&n.push({value:-1,label:this.i18n.chooseLabel}),_.isDefined(a)&&_.isDefined(a.posIncrement)||(_.isDefined(a)||(a={}),a.posIncrement=0),t.forEach(e.get(s),function(e,i){i+=a.posIncrement;var t={value:_.isDefined(a)&&a.chooseLabel?i+1:i,label:e.name};r&&e.name===r.name&&(t.selected=!0),n.push(t)},this),e._analysisSelect.addOption(n),e._analysisSelect.set("required",!0)}},isValidAnalysisLayer:function(e){var i,s,a,n,r,o,l,d,m,u,y,h,p,g,f="",b=!0,T={isValid:b,validationMessage:f},v=0,w=0,E=0;return _.isDefined(e)&&_.isDefined(e.toolName)?(this.initI18n(),_.isDefined(this.i18n.cblPointMsg)||(this.i18n.cblPointMsg="You need to have at least one point feature layer to run ${toolName}."),i=e.toolName,s=e.featureLayers,a=e.analysisLayer,n=i.charAt(0).toLowerCase()+i.substring(1),l=this.i18n,y=e.showReadyToUseLayers||!1,t.forEach(s,function(e){e instanceof H&&(h=!0),h&&e.bandCount>1&&(p=!0),h&&1===e.bandCount&&(g=!0),"esriGeometryPoint"===e.geometryType&&(o=!0,v++),("esriGeometryPoint"===e.geometryType||"esriGeometryMultipoint"===e.geometryType)&&(d=!0),"esriGeometryPolyline"===e.geometryType&&(m=!0,E++),"esriGeometryPolygon"===e.geometryType&&(r=!0,w++)},this),-1!==t.indexOf(["CreateDriveTimeAreas","PlanRoutes","ConnectOriginsToDestinations"],i)&&(!o||a&&"esriGeometryPoint"!==a.geometryType)?(f=c.substitute(this.i18n.selectPointLayer,{toolName:l[n]}),b=!1):"AggregatePoints"!==i&&"InterpolatePoints"!==i||(!a||"esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType)&&d?"CalculateDensity"===i&&(!d&&!m||a&&"esriGeometryPoint"!==a.geometryType&&"esriGeometryMultipoint"!==a.geometryType&&"esriGeometryPolyline"!==a.geometryType)?(f=c.substitute(this.i18n.areaFeatureInvalidMsg,{toolName:l[n]}),b=!1):"FindHotSpots"===i&&(!d&&!r||a&&"esriGeometryPoint"!==a.geometryType&&"esriGeometryMultipoint"!==a.geometryType&&"esriGeometryPolygon"!==a.geometryType)?(f=c.substitute(this.i18n.hotspotsLineFeatureMsg,{toolName:l[n]}),b=!1):"OverlayLayers"!==i&&"AggregatePoints"!==i&&"SummarizeWithin"!==i&&"SummarizeNearby"!==i&&"FindNearest"!==i&&"MergeLayers"!==i||y||0!==s.length&&(1!==s.length||s[0]!==a&&_.isDefined(a))?"ConnectOriginsToDestinations"===i&&!y&&(0===s.length||2>v)?(f=c.substitute(this.i18n.odPointMsg,{toolName:l[n]}),b=!1):"ChooseBestFacilities"!==i||0!==s.length&&0!==v?"AggregatePoints"===i&&!y&&s.length>1?(r=t.some(s,function(e){return"esriGeometryPolygon"===e.geometryType}),r||(f=c.substitute(this.i18n.aggregatePolyMsg,{toolName:l[n]}),b=!1)):"MergeLayers"===i&&!y&&s.length>1?(u=v>1||E>1||w>1,u||(f=this.i18n.mergeValidationMsg,b=!1)):"SummarizeWithin"!==i&&"DissolveBoundaries"!==i||(!a||"esriGeometryPolygon"===a.geometryType)&&r?"ExtractData"===i?(b=t.some(s,function(e){return-1!==e.capabilities.indexOf("Extract")}),b||(f=c.substitute(this.i18n.extractValidationMsg))):("ConnectOriginsToDestinations"===i||"ChooseBestFacilities"===i)&&s.length>1?(o=t.some(s,function(e){var i=_.isDefined(a)&&a.id===e.id;return"esriGeometryPoint"===e.geometryType&&!i}),o||(f=c.substitute("ChooseBestFacilities"===i?this.i18n.cblPointMsg:this.i18n.odPointMsg,{toolName:l[n]}),b=!1)):"CalculateSlope"===i||"DeriveAspect"===i||"RemapValues"===i?h?g||(b=!1,f=c.substitute(this.i18n.noSingleBandISMsg,{toolName:l[n]})):(b=!1,f=c.substitute(this.i18n.noImageServiceMsg,{toolName:l[n]})):"ExtractRaster"===i?h||(b=!1,f=c.substitute(this.i18n.noImageServiceMsg,{toolName:l[n]})):"MonitorVegetation"===i&&(h?p||(b=!1,f=c.substitute(this.i18n.noMultiBandISMsg,{toolName:l[n]})):(b=!1,f=c.substitute(this.i18n.noImageServiceMsg,{toolName:l[n]}))):(f=c.substitute(this.i18n.selectPolyLayer,{toolName:l[n]}),b=!1):(f=c.substitute(this.i18n.cblPointMsg,{toolName:l[n]}),b=!1):(f=c.substitute(this.i18n.overlayValidationMsg,{toolName:l[n]}),b=!1):(f=c.substitute(this.i18n.selectPointLayer,{toolName:l[n]}),b=!1),T={isValid:b,validationMessage:f}):T},initI18n:function(){this.i18n||(this.i18n={},i.mixin(this.i18n,m.common),i.mixin(this.i18n,m.analysisTools),i.mixin(this.i18n,m.analysisMsgCodes),i.mixin(this.i18n,m.browseLayersDlg),i.mixin(this.i18n,m.driveTimes),i.mixin(this.i18n,m.calculateFields))},addBrowseAnalysisDialog:function(e){if(e&&e.widget){this.i18n||this.initI18n();var t,s,a,n,r,o,l="esri/dijit/analysis/PluginAnalysisLayers",d="<div style='opacity:1;' class='grid-item gallery-view galleryNode'>${item:_formatItemTitle}${item:_formatThumbnail}"+'<div class="linksDiv" style=\'display:none;\'><div class="esriItemLinks"><div class="esriFloatLeading"><a style="text-decoration: none;"><span>Add layer to analysis</span><div class="dijitReset dijitInline esriArrows"></div></a></div></div></div>',m=function(e){var i=e.thumbnailUrl||this._portal.staticImagesUrl+"/desktopapp.png";return"<img class='grid-item galleryThumbnail' width='120px' height='80px' alt='' src='"+i+"'>"},u=function(e){return'<div class="galleryLabelContainer"><span alt=\''+(e.title||e.name||"<No Title>")+"'>"+(e.title.replace(/_/g," ")||e.name.replace(/_/g," ")||"<No Title>")+"</span></div>"},c="<div class='listServiceTitle'><table cellpadding='0' cellspacing='0' width='100%'><tr width='100%'><td nowrap='nowrap'>  <div  style=\"position:absolute;left:80px; top:10px; width:1px; height:1px; background: transparent;\"></div><div style='overflow:hidden;'><a style=\"height:16px;\">${item.title}</a></div></td></tr></table><table cellpadding='0' cellspacing='0' width='100%'><tr width='100%' class='bottomRowTable'><td width='20'>  <span class='esriAlignLeading'>${item:_formatThumbnail}</span></td><td nowrap='nowrap'>  <span class='esriAlignLeading' style='color:#656565;'>${item.owner}</span></td><td style='padding-right:5px;padding-left:3px;'></td></tr></table></div>",y=function(e){var i=e.iconUrl;return"<img class='grid-item-thumb' width='16px' height='16px' alt='' src='"+i+"'/>"},h=function(e){var i=e.iconUrl;return"<img class='grid-item-thumb' width='16px' height='16px' alt='' src='"+i+"'/>"},p=v.doc.createDocumentFragment(),g=f.create("div",{style:"width:100%;height:100%;"},p),b=f.create("div",{style:"width:100%;height:10%;","class":""}),T=f.create("div",{style:"width:100%"},g),w=this._isCustomAnalysisQuery(e.widget);1===e.browseType?(l="esri/dijit/analysis/PluginLayers",o={portalUrl:e.widget.get("portalUrl"),message:"",plugin:l,sortDescending:!0,sort:"title",self:e.widget.get("portalSelf"),itemsPerPage:100,demandList:!0,extent:e.widget.get("map").extent,useExtent:!1,fetchTimeout:600,galleryTemplate:c,showInfoPanel:!0,isAutoClose:!1,checkIsButtonEnabled:!0,formatThumbnail:h,formatInfoPanelImage:y,"class":"esriAnalysisLayersItems"}):o={portalUrl:e.widget.get("portalUrl"),message:"",plugin:l,sortDescending:!0,sort:"title",self:e.widget.get("portalSelf"),pagingLinks:1,rowsPerPage:6,"class":"esriBrowseAnalysisLayers itemsGallery esriFloatLeading",extent:e.widget.get("map").extent,useExtent:!w,fetchTimeout:600,galleryTemplate:d,formatItemTitle:u,showInfoPanel:!1,showTooltip:!0,formatThumbnail:m,style:"width:48em;height:100%;clear:both;"},r=f.toDom('<div class="esriBrowseOptions">'),f.place(r,b);var E,S;S=f.create("div",{"class":"esriBrowseOption"},r),e.browseType&&1===e.browseType||(E=f.create("div",{"class":"esriBrowseOption"},r),s=new D({name:"addlayer",id:e.widget.id+(e.browseType?e.browseType:"")+"_addlayercheck","class":"",value:!1,checked:!1},f.create("input",{},E)),f.create("label",{"for":e.widget.id+"_addlayercheck","class":"esriBrowseOption_label",innerHTML:this.i18n.addLayer},E));var I=!0;return e.browseType&&1===e.browseType?I=!1:w&&(I=!1),n=new D({name:"extentcheck",id:e.widget.id+(e.browseType?e.browseType:"")+"_addextentcheck","class":"",value:I,checked:I},f.create("input",{},S)),f.create("label",{"for":e.widget.id+(e.browseType?e.browseType:"")+"_addextentcheck","class":"esriBrowseOption_label",innerHTML:this.i18n.withinMapArea},S),o.messageRight=b,t=new O(o,T),n.on("change",i.hitch(this,function(e){t.set("useExtent",e)})),a=new A({title:1===e.browseType?this.i18n.browseLayers:w?this.i18n.browseAnalysisLayers:this.i18n.browseAnalysisTitle,content:g,browseItems:t,addlayerCheckBox:s,style:e.browseType&&1===e.browseType?"":"padding:.75em 0;background-color: #fff;width:50em;"}),e.widget.own(e.widget.get("map").on("extent-change",i.hitch(e.widget,function(i){t.set("extent",e.widget.get("map").extent)})),a.on("hide",i.hitch(a,function(e){a.browseItems.reset()}))),a}},addAnalysisReadyLayer:function(e){function s(t){var s,a,r,o;"Feature Service"===n.type&&(o=new C(n.url,{outFields:["*"]}),i.mixin(n,o)),i.mixin(n,t),n.id=n.title+"_"+t.id,e.item.selectedLayer?n.title=n.title+"-"+t.name:n.title=n.title.replace(/_/g," "),n.name=n.title,n.version=n.currentVersion,r=e.layersSelect.getOptions();var l;e.widget.showBrowseLayers&&e.widget.showReadyToUseLayers?l=3:(e.widget.showBrowseLayers||e.widget.showReadyToUseLayers)&&(l=2),s=r.splice(r.length-l,l),e.layersSelect.removeOption(s),a=e.layers.length,e.posIncrement&&(a+=e.posIncrement),s.unshift({value:a,label:n.title,selected:!0}),e.layersSelect.addOption(s),e.layersSelect.set("value",a),o&&(n.lyr=o,o.name=n.name),n.linfo=t,e.layers.push(n);var d;y(".js-add-layer-checkbox",e.browseDialog.browseItems.infoPanel).forEach(function(e){d=e.checked}),(e.browseDialog.addlayerCheckBox&&e.browseDialog.addlayerCheckBox.get("checked")||d)&&(this._addLayerHandle&&this._addLayerHandle.remove(),this._addLayerHandle=e.widget.map.on("layer-add",i.hitch(this,function(i){this._addLayerHandle.remove(),e.widget.emit("add-ready-to-use-layer",{layer:i.layer,layerInfo:t,item:n})})),e.widget.map.addLayer(o)),e.browseDialog.browseItems.clear()}if(_.isDefined(e)&&_.isDefined(e.item)&&_.isDefined(e.layersSelect)&&_.isDefined(e.layers)&&_.isDefined(e.browseDialog)){e.browseDialog.hide();var a,n,r,o,l,d,m;if(a=!e.item.selectedLayer&&e.item.url?e.item.url+"/0":e.item.selectedLayer.url,-1!==window.location.protocol.indexOf("https:")&&(a=a.replace("http:","https:")),n={url:a,itemId:e.item.id,title:e.item.title,type:e.item.type,analysisReady:!0},o=t.some(e.layers,function(i,t){var s=i.analysisReady&&n.analysisReady&&i.itemId===n.itemId;return e.item.selectedLayer&&e.item.selectedLayer.url&&(s=i.itemId===n.itemId&&i.url===n.url),s&&(r=t),s}),l=new b,m="sync",o){e.posIncrement&&(r+=e.posIncrement);var u;y(".js-add-layer-checkbox",e.browseDialog.browseItems.infoPanel).forEach(function(e){u=e.checked}),(e.browseDialog.addlayerCheckBox&&e.browseDialog.addlayerCheckBox.get("checked")||u)&&(e.posIncrement||(e.posIncrement=0),d=e.layers[r-e.posIncrement],e.widget.map.getLayer(d.lyr.id)||(this._addLayerHandle&&this._addLayerHandle.remove(),this._addLayerHandle=e.widget.map.on("layer-add",i.hitch(this,function(i){this._addLayerHandle.remove(),e.widget.emit("add-ready-to-use-layer",{layer:i.layer,layerInfo:d.linfo,item:d})})),e.widget.map.addLayer(d.lyr))),e.layersSelect.set("value",r),e.browseDialog.browseItems.clear(),l.resolve()}else e.item.selectedLayer?(n.url=e.item.selectedLayer.url,l.then(i.hitch(this,s)),setTimeout(l.resolve(e.item.selectedLayer),500)):(m=e.item.itemDataUrl?F({url:e.item.itemDataUrl,content:{f:"json"}}):"sync",w(m,i.hitch(this,function(e){e&&e.layers&&e.layers[0].id&&(n.url=n.url.replace("/0","/"+e.layers[0].id)),l=F({url:n.url,content:{f:"json"}}),l.then(i.hitch(this,s))})));return l.promise}},addReadyToUseLayerOption:function(e,s){e&&(e.showReadyToUseLayers||e.showBrowseLayers)&&(s||(s=[]),e.signInPromise.then(i.hitch(this,function(){t.forEach(s,function(i){if((e.showReadyToUseLayers||e.showBrowseLayers)&&i.addOption({type:"separator",value:""}),e.showReadyToUseLayers){var t=e.i18n.browseAnalysisTitle;this._isCustomAnalysisQuery(e)&&(t=e.i18n.browseAnalysisLayers),i.addOption({value:"browse",label:t})}e.showBrowseLayers&&i.addOption({value:"browselayers",label:e.i18n.browseLayers})},this),e.showReadyToUseLayers&&!_.isDefined(e._browsedlg)&&(e._browsedlg=this.addBrowseAnalysisDialog({widget:e}),e.own(e._browsedlg.browseItems.on("select-change",i.hitch(e,e._handleBrowseItemsSelect)),e._browsedlg.on("hide",i.hitch(e,function(){t.forEach(s,function(e){"browse"===e.get("value")&&e.reset()}),e.layersSelect&&e.layersSelect.reset()})))),e.showBrowseLayers&&!_.isDefined(e._browseLyrsdlg)&&(e._browseLyrsdlg=this.addBrowseAnalysisDialog({widget:e,browseType:1}),e.own(e._browseLyrsdlg.on("browseitems-close",i.hitch(this,function(i){"add-layer"===i.action&&(e._browseLyrsdlg.browseItems.plugIn._grid&&(i.selection.selectedLayer=e._browseLyrsdlg.browseItems.plugIn._selectedLayer,e._handleBrowseItemsSelect({dialog:e._browseLyrsdlg,selection:i.selection})),e._browseLyrsdlg.browseItems.closeInfoPanel())})),e._browseLyrsdlg.on("hide",i.hitch(e,function(){t.forEach(s,function(e){"browselayers"===e.get("value")&&e.reset()})}))))})))},_isCustomAnalysisQuery:function(e){var i='title:"Living Atlas Analysis Layers" AND owner:esri',t=!1;return e&&e.isSingleTenant&&(i='title:"Living Atlas Analysis Layers" AND owner:esri_livingatlas'),e.portalSelf&&e.portalSelf.analysisLayersGroupQuery&&e.portalSelf.analysisLayersGroupQuery!==i?t=!0:e._portal&&e._portal.analysisLayersGroupQuery&&e._portal.analysisLayersGroupQuery!==i&&(t=!0),t},getMaxInputByMode:function(e){var i,t=300,s=300,a=1e3,n=1.60934,r=5280,o=1760;if(e&&e.units&&e.type)return"StraightLine"===e.type?"Miles"===e.units?i=a:"Yards"===e.units?i=a*o:"Kilometers"===e.units?i=T.format(a*n,{places:2}):"Meters"===e.units?i=T.format(a*n*1e3,{places:2}):"Feet"===e.units&&(i=a*r):"DrivingDistance"===e.type||"TruckingDistance"===e.type||"WalkingDistance"===e.type?"Miles"===e.units?i=t:"Yards"===e.units?i=t*o:"Kilometers"===e.units?i=T.format(t*n,{places:2}):"Meters"===e.units?i=T.format(t*n*1e3,{places:2}):"Feet"===e.units&&(i=t*r):("DrivingTime"===e.type||"TruckingTime"===e.type||"WalkingTime"===e.type)&&("Minutes"===e.units?i=s:"Seconds"===e.units?i=60*s:"Hours"===e.units&&(i=s/60)),i},updateModeConstraints:function(e){var i;e&&e.validateWidget&&e.units&&e.type&&(i=e.validateWidget.get("constraints"),i.max=this.getMaxInputByMode(e),e.validateWidget.set(i))},getTravelModes:function(e){var s,a,r,o,l=new b;return _.isDefined(this.travelModes)&&this.travelModes.length>0?l.resolve(this.travelModes):e&&e.widget?e.widget.signInPromise.then(i.hitch(this,function(d){o=e.widget.get("helperServices"),o&&o.routingUtilities?(r=o.routingUtilities.url,s="sync"):s=e.widget._getSelf(e.widget.portalUrl),w(s,i.hitch(this,function(e){var s={};return e&&e.helperServices&&e.helperServices.routingUtilities&&(r=e.helperServices.routingUtilities.url),_.isDefined(r)?(a=new U(r+"/GetTravelModes"),void a.execute(s).then(i.hitch(this,function(e){var i=e[0].value&&e[0].value.features;this.travelModes=t.map(i,function(e){return n.fromJson(e.attributes.TravelMode)}),e[1]&&e[1].paramName&&"defaultTravelMode"===e[1].paramName&&(this.defaultTravelModeId=e[1].value),l.resolve(this.travelModes)}),i.hitch(this,function(e){l.reject(e)}))):void l.reject(new Error("Missing Routing Utility Service to get Travel Modes"))}),function(e){l.reject(e)})})):l.reject(new Error("Missing parameter: params.widget required parameter")),l.promise},populateTravelModes:function(e){if(e&&e.selectWidget&&e.widget){var s=[],a=e.allowmode||"all";this.initI18n(),e.addStraightLine&&s.push({value:"StraightLine",label:'<div class="esriFloatLeading bufferIcon esriStraightLineDistanceIcon"></div><div class="esriLeadingMargin4" style="height:20px;margin-top:10px;">'+this.i18n.straightLineDistance+"</div>"}),this.getTravelModes({widget:e.widget}).then(i.hitch(this,function(i){t.forEach(i,function(i,t){var n,r,o=i.name,l=e.separator||"",d=o.replace(/\s/g,l),m="AUTOMOBILE"===i.type?"Driving":"TRUCK"===i.type?"Trucking":"WALK"===i.type?"Walking":"Other",u=m.toLowerCase(),c=i.units||o.split(/\s/)[1],y=o,h=_.isDefined(e.enableTravelModes)&&!e.enableTravelModes;c=i.impedanceAttributeName===i.timeAttributeName?"Time":i.impedanceAttributeName===i.distanceAttributeName?"Distance":"Other",n='<div class="esriFloatLeading bufferIcon esri'+m+c+'Icon"></div><div class="esriLeadingMargin4" style="height:20px;margin-top:10px;">'+y+"</div>",r={label:n,value:d,travelMode:i,disabled:h,modei18nKey:u,units:c},("all"===a||a===c.toLowerCase())&&("all"!==a&&(r.value=r.value.replace(c,"")),e.selectDefaultMode&&this.defaultTravelModeId&&this.defaultTravelModeId===i.id&&(r.selected=!0),s.push(r))},this),e.selectWidget.removeOption(),e.selectWidget.addOption(s),e.selectWidget.set("value",e.value),e.widget.emit("travelmodes-added",{travelOptions:s})}),i.hitch(this,function(i){s&&s.length>0&&(e.selectWidget.removeOption(),e.selectWidget.addOption(s),e.selectWidget.set("value",e.value),e.widget.emit("travelmodes-added",{travelOptions:s}))}))}},updateDisplay:function(e,i,t){var s=new y.NodeList(e);s.style("display",i?t?t:"block":"none")},isGreaterThanZero:function(){var e=this.get("value");return e>0},getExprFunctions:function(){return this.i18n||this.initI18n(),this.exprFunctions||(this.exprFunctions=[{type:"NumType",label:c.substitute(this.i18n.asMetersFunc,{functionName:"as_meters(<i>number</i>)",num:"<i>number</i>"}),name:"as_meters()"},{type:"NumType",label:c.substitute(this.i18n.asKilometersFunc,{functionName:"as_kilometers(<i>number</i>)",num:"<i>number</i>"}),name:"as_kilometers()"},{type:"NumType",label:c.substitute(this.i18n.asFeetFunc,{functionName:"as_feet(<i>number</i>)",num:"<i>number</i>"}),name:"as_feet()"},{type:"NumType",label:c.substitute(this.i18n.asYardsFunc,{functionName:"as_yards(<i>number</i>)",num:"<i>number</i>"}),name:"as_yards()"},{type:"NumType",label:c.substitute(this.i18n.asMilesFunc,{functionName:"as_miles(<i>number</i>)",num:"<i>number</i>"}),name:"as_miles()"},{type:"NumType",label:c.substitute(this.i18n.asNuaticalMilesFunc,{functionName:"as_nautical_miles(<i>number</i>)",num:"<i>number</i>"}),name:"as_nautical_miles()"},{type:"NumType",label:c.substitute(this.i18n.absFunc,{functionName:"abs(<i>number</i>)",num:"<i>number</i>"}),name:"abs()"},{type:"NumType",label:c.substitute(this.i18n.logFunc,{functionName:"log(<i>number</i>)",num:"<i>number</i>"}),name:"log()"},{type:"NumType",label:c.substitute(this.i18n.sinFunc,{functionName:"sin(<i>number</i>)",num:"<i>number</i>"}),name:"sin()"},{type:"NumType",label:c.substitute(this.i18n.cosFunc,{functionName:"cos(<i>number</i>)",num:"<i>number</i>"}),name:"cos()"},{type:"NumType",label:c.substitute(this.i18n.tanFunc,{functionName:"tan(<i>number</i>)",num:"<i>number</i>"}),name:"tan()"},{type:"NumType",label:c.substitute(this.i18n.squareRootFunc,{functionName:"sqrt(<i>number</i>)",num:"<i>number</i>"}),name:"sqrt()"},{type:"NumType",label:c.substitute(this.i18n.minFunc,{functionName:"min(<i>number</i>)",num:"<i>number</i>"}),name:"min()"},{type:"NumType",label:c.substitute(this.i18n.maxFunc,{functionName:"max(<i>number</i>)",num:"<i>number</i>"}),name:"max()"},{type:"NumType",label:c.substitute(this.i18n.constrainFunc,{functionName:"constrain(<i>number</i>, <i>low</i>, <i>high</i>",num:"<i>number</i>",low:"<i>low</i>",high:"<i>high</i>"}),name:"constrain(,,)"},{type:"NumType",label:c.substitute(this.i18n.iffFunc,{functionName:"iif(<i>condition</i>,<i>value if TRUE</i>,<i>value if FALSE</i>)",num:"<i>number</i>"}),name:"iif(,,)"},{type:"NumType",label:c.substitute(this.i18n.whenFunc,{functionName:"when(<i>number</i>)",num:"<i>number</i>"}),name:"when(,)"},{type:"NumType",label:c.substitute(this.i18n.decodeFunc,{functionName:"decode(<i>expression</i>, <i>case1,return1,..caseN,returnN</i>, <i>default</i>)",num:"<i>number</i>"}),name:"decode(,,,)"}]),this.exprFunctions},addAttributeOptions:function(e){this.initI18n(),_.isDefined(e.allowSelectLabel)||(e.allowSelectLabel=!0);var i,s,a,n=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];i=e.layer,s=e.selectWidget,a=i?i.fields:[],s.removeOption(s.getOptions()),e.allowSelectLabel&&s.addOption({value:"",label:this.i18n.attribute}),e.allowStringType&&n.push("esriFieldTypeString");var r=[];t.forEach(a,function(e){-1!==t.indexOf(n,e.type)&&e.name!==i.objectIdField&&r.push({value:e.name,label:_.isDefined(e.alias)&&""!==e.alias?e.alias:e.name,type:"esriFieldTypeString"===e.type?"string":"number"})},this),s.addOption(r),s.set("value","0"),s.set("disabled",!i||0===i.fields.length)},addStatisticsOptions:function(e){this.initI18n();var i=e.selectWidget,t=[{value:"SUM",label:this.i18n.sum},{value:"MIN",label:this.i18n.minimum},{value:"MAX",label:this.i18n.maximum},{value:"MEAN",label:this.i18n.average},{value:"STDDEV",label:this.i18n.standardDev}];i.removeOption(i.getOptions()),i.addOption([{value:"0",label:this.i18n.statistic}]),e.showGeoAnalyticsParams&&(i.addOption({value:"COUNT",label:this.i18n.count}),t.push({value:"VARIANCE",label:this.i18n.variance}),t.splice(4,0,{value:"RANGE",label:this.i18n.range})),e.type&&"number"!==e.type?e.type&&"string"===e.type&&i.addOption({value:"ANY",label:this.i18n.any}):i.addOption(t),i.set("value","0")},addFillOptions:function(e){var i=e.selectWidget,t=[{value:"ZEROES",label:this.i18n.zeroes},{value:"SPATIAL_NEIGHBORS",label:this.i18n.spatialneighbhors},{value:"SPACE_TIME_NEIGHBORS",label:this.i18n.spacetimeneighbors},{value:"TEMPORAL_TREND",label:this.i18n.temporaltrend}];i.removeOption(i.getOptions()),
i.addOption([{value:"0",label:this.i18n.fill}]),e.type&&"number"!==e.type||i.addOption(t)},perMeter:function(e){var i=1;switch(e){case x.MILLIMETERS:i=1e3;break;case x.CENTIMETERS:i=100;break;case x.DECIMETERS:i=10;break;case x.METERS:i=1;break;case x.KILOMETERS:i=.001;break;case x.INCHES:i=39.370079;break;case x.FEET:i=3.2808399;break;case x.YARDS:i=1.0936133;break;case x.MILES:i=.00062137119;break;case x.NAUTICAL_MILES:i=.0005399568;break;case x.ACRES:i=.00024710538;break;case x.ARES:i=.01;break;case x.HECTARES:i=1e-4;break;case x.SQUARE_INCHES:i=1550.0031;break;case x.SQUARE_FEET:i=10.7639104;break;case x.SQUARE_YARDS:i=1.19599005;break;case x.SQUARE_MILES:i=3.86102159e-7;break;case x.SQUARE_NAUTICAL_MILES:i=2.9155335e-7;break;case x.SQUARE_MILLIMETERS:i=1e6;break;case x.SQUARE_CENTIMETERS:i=1e4;break;case x.SQUARE_DECIMETERS:i=100;break;case x.SQUARE_METERS:i=1;break;case x.SQUARE_KILOMETERS:i=1e-6}return i},getType:function(e){var i=null;switch(e){case x.ACRES:i=V.AREA;break;case x.ARES:i=V.AREA;break;case x.CENTIMETERS:i=V.LENGTH;break;case x.DECIMETERS:i=V.LENGTH;break;case x.FEET:i=V.LENGTH;break;case x.HECTARES:i=V.AREA;break;case x.INCHES:i=V.LENGTH;break;case x.KILOMETERS:i=V.LENGTH;break;case x.METERS:i=V.LENGTH;break;case x.MILES:i=V.LENGTH;break;case x.MILLIMETERS:i=V.LENGTH;break;case x.NAUTICAL_MILES:i=V.LENGTH;break;case x.SQUARE_CENTIMETERS:i=V.AREA;break;case x.SQUARE_DECIMETERS:i=V.AREA;break;case x.SQUARE_FEET:i=V.AREA;break;case x.SQUARE_INCHES:i=V.AREA;break;case x.SQUARE_KILOMETERS:i=V.AREA;break;case x.SQUARE_METERS:i=V.AREA;break;case x.SQUARE_MILES:i=V.AREA;break;case x.SQUARE_MILLIMETERS:i=V.AREA;break;case x.SQUARE_NAUTICAL_MILES:i=V.AREA;break;case x.SQUARE_YARDS:i=V.AREA;break;case x.YARDS:i=V.LENGTH;break;default:i=V.UNSUPPORTED}return i},unitConversion:function(e,i,t){var s=!0;_.isDefined(e)||(this.emitError("The 'From' Value must be a valid numeric value: "+e),s=!1),_.isDefined(i)||(this.emitError("The 'From' Units must be defined: "+i),s=!1),_.isDefined(t)||(this.emitError("The 'To' Units must be defined: "+t),s=!1),e instanceof Array&&(this.emitError("Only single 'From' Value supported: "+e),s=!1),i instanceof Array&&(this.emitError("Only single 'From' Units supported: "+i),s=!1),t instanceof Array&&(this.emitError("Only single 'To' Units supported: "+t),s=!1);var a=this.getType(i),n=this.getType(t);return a===V.UNSUPPORTED&&(this.emitError("Unsupported 'From' Units: "+i),s=!1),n===V.UNSUPPORTED&&(this.emitError("Unsupported 'To' Units: "+t),s=!1),a!==n&&(this.emitError("Incompatible 'From' and 'To' Units: "+i+" and "+t),s=!1),s?i===t?+e:+e/this.perMeter(i)*this.perMeter(t):Number.NaN},emitError:function(e){console.log("error",new Error(e))},isEmpty:function(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return u.stringify(e)===u.stringify({})},getNetworkAnalysisLimits:function(e){var s,a,n,r,o={},l=new b;return e||l.reject(new Error("Missing parameter: widget required parameter")),-1!==t.indexOf(["CreateDriveTimeAreas","EnrichLayer","SummarizeNearby"],e.toolName)?i.mixin(o,{toolName:"GenerateServiceAreas",serviceName:"asyncServiceArea"}):"ChooseBestFacilities"===e.toolName?i.mixin(o,{toolName:"SolveLocationAllocation",serviceName:"asyncLocationAllocation"}):"PlanRoutes"===e.toolName?i.mixin(o,{toolName:"SolveVehicleRoutingProblem",serviceName:"asyncVRP"}):"FindNearest"===e.toolName?i.mixin(o,{toolName:"FindClosestFacilities",serviceName:"asyncClosestFacility"}):"ConnectOriginsToDestinations"===e.toolName&&i.mixin(o,{toolName:"FindRoutes",serviceName:"asyncRoute"}),this.NALimits||(this.NALimits=[]),this.NALimits&&this.NALimits[o.toolName]?l.resolve(this.NALimits[o.toolName]):e.signInPromise.then(i.hitch(this,function(t){r=e.get("helperServices"),r&&r.routingUtilities?(n=r.routingUtilities.url,s="sync"):s=e._getSelf(e.portalUrl),w(s,i.hitch(this,function(e){e&&e.helperServices&&e.helperServices.routingUtilities&&(n=e.helperServices.routingUtilities.url),_.isDefined(n)||l.reject(new Error("Missing Routing Utility Service to get Network Analysis Service Limits.")),a=new U(n+"/GetToolInfo"),a.execute(o).then(i.hitch(this,function(e){console.log(e),e&&e.length>0&&e[0].value&&e[0].value.serviceLimits?(this.NALimits[o.toolName]=e[0].value.serviceLimits,l.resolve(this.NALimits[o.toolName])):l.reject("Routing Utility Service 'GetToolInfo' job did not return service limits.")}),function(e){console.log(e),l.reject(e)})}))}),function(e){l.reject(e)}),l.promise}}),o("extend-esri")&&i.setObject("dijit.analysis.utils",Q,M),Q});