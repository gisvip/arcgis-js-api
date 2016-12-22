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

define(["require","dojo/on","dojo/Evented","dojo/has","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/text!./GeocodeReview/templates/Review.html","dojo/i18n!../nls/jsapi","dojo/store/Memory","dojo/string","dojo/dom","dojo/dom-style","dijit/_WidgetBase","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dgrid/OnDemandGrid","dgrid/Selection","dgrid/Keyboard","dgrid/editor","dgrid/extensions/DijitRegistry","dgrid/extensions/ColumnHider","../graphic","../geometry/Extent","../geometry/Point","../geometry/webMercatorUtils","../symbols/PictureMarkerSymbol","../tasks/query","../layers/FeatureLayer","../layers/GraphicsLayer","../request","../arcgis/utils","../kernel","dijit/layout/StackController","dijit/layout/StackContainer","dijit/layout/ContentPane","dijit/layout/BorderContainer"],function(e,t,i,r,s,a,d,o,n,h,c,l,u,f,_,g,w,y,p,m,v,L,b,C,R,S,M,T,k,G,j,F,I,A,U){var x=s([_,g,w,y,i],{baseClass:"esriReviewContainer",loaded:!1,templateString:n,widgetsInTemplate:!0,i18n:h,_featureLayerCount:null,_tableLayerCount:null,constructor:function(t,i){s.safeMixin(this,t),this.StandardGrid=s([b,p,m,v,L,C]),this._defineGridStores(),this._defineColumns(),this.stackContainerID=i+"_StackContainerNode",this.headerID=i+"_HeaderNode",this.unmatchedUC=h.widgets.geocodeReview.unmatchedUC,this.matchedUC=h.widgets.geocodeReview.matchedUC,this.reviewedUC=h.widgets.geocodeReview.reviewedUC,this.suggestionGraphic||(this.suggestionGraphic=new k(e.toUrl("./GeocodeReview/images/EsriBluePinCircle26.png"),26,26),this.suggestionGraphic.setOffset(0,12)),this.matchGraphic||(this.matchGraphic=new k(e.toUrl("./GeocodeReview/images/EsriGreenPinCircle26.png"),26,26),this.matchGraphic.setOffset(0,12)),this.highlightGraphic||(this.highlightGraphic=new k(e.toUrl("./GeocodeReview/images/EsriYellowPinCircle26.png"),26,26),this.highlightGraphic.setOffset(0,12)),this._keywordMap={},this._keywordArray=[],this._arcgisUrl=a.getObject("esri.arcgis.utils.arcgisUrl"),this._singleLineInput=!0},postCreate:function(){this.inherited(arguments),this._generateGrids(),this.graphicsLayer=new F,this.map.addLayer(this.graphicsLayer),this._listenerHandles=[this.StackControllerNode.on("selectChild",a.hitch(this,function(){this.clearGridSelection(),this.StackContainerNode.selectedChildWidget&&(this.currentTab=this.StackContainerNode.selectedChildWidget,this.currentTabId=this.StackContainerNode.selectedChildWidget.id),this.resize(),this.graphicsLayer.clear(),this.emit("tab-change",{}),this.geocodeMatch&&this.geocodeMatch.reset()})),t(this.map,"resize",a.hitch(this,function(){this.resize()})),t(window,"resize",a.hitch(this,function(){this.resize()})),t(this._gridUnmatchedRef,"dgrid-select",a.hitch(this,function(e){e.rows[0].data.oid?(this.currentSelectedRow=this._unmatchedStore.get(e.rows[0].data.oid),this._selectGridRowEvent(e.rows[0].data.oid,this.currentSelectedRow)):(this.currentSelectedRow=this._unmatchedStore.get(e.rows[0].data[this._tableLayer.objectIdField]),this._selectGridRowEvent(e.rows[0].data[this._tableLayer.objectIdField],this._unmatchedStore.get(e.rows[0].data[this._tableLayer.objectIdField])))})),t(this._gridMatchedRef,"dgrid-select",a.hitch(this,function(e){this.currentSelectedRow=this._matchedStore.get(e.rows[0].data[this._featureLayer.objectIdField]),this._selectGridRowEvent(e.rows[0].data[this._featureLayer.objectIdField],this._matchedStore.get(e.rows[0].data[this._featureLayer.objectIdField]))})),t(this._gridReviewedRef,"dgrid-select",a.hitch(this,function(e){this.currentSelectedRow=this._reviewedStore.get(e.rows[0].data.id),this._drawReviewedRow(e.rows[0].data)})),t(this._gridMatchedRef,"dgrid-datachange",a.hitch(this,function(e){var t,i=null,r=e.cell.row.data;this._matchedStore.get(e.cell.row.id).updated=!0,this._matchedStore.get(e.cell.row.id)[e.cell.column.field]=e.value,this._matchedStore.get(e.cell.row.id).location&&(i=this._matchedStore.get(e.cell.row.id).location),t=this._singleLineInput?{id:r[this._featureLayer.objectIdField],address:r[this._keywordMap.Address],location:i,featureType:r.featureType,reviewed:r.reviewed,updated:!0,sourceCountry:this._sourceCountry}:{id:r[this._featureLayer.objectIdField],address:this._formatLocatorOptions(r),location:i,featureType:r.featureType,reviewed:r.reviewed,updated:!0,sourceCountry:this._sourceCountry},this.emit("row-datachange",{newAddress:e.value,oldAddress:e.oldValue,location:i,rowData:r,returnData:t}),this.geocodeMatch&&this.geocodeMatch.geocodeAddress(t),this._applyAddressEdits(this._matchedStore.get(e.cell.row.id))})),t(this._gridUnmatchedRef,"dgrid-datachange",a.hitch(this,function(e){var t,i=null,r=e.cell.row.data;this._unmatchedStore.get(e.cell.row.id).updated=!0,this._unmatchedStore.get(e.cell.row.id)[e.cell.column.field]=e.value,this._unmatchedStore.get(e.cell.row.id).location&&(i=this._unmatchedStore.get(e.cell.row.id).location),t=this._singleLineInput?{id:r[this._tableLayer.objectIdField],address:r[this._keywordMap.Address],location:i,featureType:r.featureType,reviewed:r.reviewed,updated:!0,sourceCountry:this._sourceCountry}:{id:r[this._tableLayer.objectIdField],address:this._formatLocatorOptions(r),location:i,featureType:r.featureType,reviewed:r.reviewed,updated:!0,sourceCountry:this._sourceCountry},this.emit("row-datachange",{newAddress:e.value,oldAddress:e.oldValue,location:i,rowData:r,returnData:t}),this.geocodeMatch&&this.geocodeMatch.geocodeAddress(t),this._applyAddressEdits(this._unmatchedStore.get(e.cell.row.id))}))],this.geocodeMatch&&this._listenerHandles.push(this._geocodeMatchHandler())},startup:function(){this.inherited(arguments),this.domNode&&this.map&&(this.map.loaded?this._init():t(this.map,"load",a.hitch(this,function(){this._init()})))},matchFeature:function(e){var t,i=this.currentSelectedRow;i.updated=!0,i.reviewed=!0,i.oid=i[this._unmatchedStore.idProperty],i.location=e.newLocation,this._applyEdits(i),this._reviewedStore.query({featureID:e.featureID,featureType:e.featureType}).total>0?(t=this._reviewedStore.query({featureID:e.featureID,featureType:e.featureType})[0],t.newLocation=e.newLocation):this._reviewedArray.push({id:this._reviewedArray.length,featureID:e.featureID,address:e.address,oldLocation:e.oldLocation,newLocation:e.newLocation,featureType:e.featureType}),this._reviewedStore=new c({data:this._reviewedArray,idProperty:"id"}),this._gridReviewedRef.set("store",this._reviewedStore),this._updateTabText(),this.refreshGrids(),this.emit("match",{id:this._reviewedArray.length,featureID:e.featureID,address:e.address,oldLocation:e.oldLocation,newLocation:e.newLocation,featureType:e.featureType})},clearGridSelection:function(){this._gridUnmatchedRef.clearSelection(),this._gridMatchedRef.clearSelection(),this._gridReviewedRef.clearSelection()},refreshGrids:function(){this._gridUnmatchedRef.refresh(),this._gridMatchedRef.refresh(),this._gridReviewedRef.refresh()},resizeGrids:function(){this._gridUnmatchedRef.resize(),this._gridMatchedRef.resize(),this._gridReviewedRef.resize()},destroy:function(){o.forEach(this._listenerHandles,function(e){e.remove()}),this.map&&(this.map.infoWindow.clearFeatures(),this.map.infoWindow.hide(),this.map.removeLayer(this.graphicsLayer)),this.graphicsLayer=null,this.map=null,this.inherited(arguments)},_init:function(){this.loaded=!0,this.emit("load",{}),this.resize(),A.arcgisUrl=this._arcgisUrl,A.getItem(this.itemId).then(a.hitch(this,function(e){var t=e.item.url||e.item.item;e.item.typeKeywords[6]&&this._getPublishParams().then(a.hitch(this,function(){this._getDataFromFeatureService(t)}))}),function(e){})},_applyEdits:function(e){var t=new R;t.attributes=e,"unmatched"===e.featureType&&this._featureLayer&&this._tableLayer?(this._tableLayer.applyEdits(null,null,[t]).then(function(e,t,i){}),t.geometry=e.location,this._featureLayer.applyEdits([t],null,null).then(function(e,t,i){})):"matched"===e.featureType&&this._featureLayer&&(t.geometry=e.location,this._featureLayer.applyEdits(null,[t],null).then(function(e,t,i){}))},resize:function(){var e=f.get(this.domNode,"height"),t=f.get(u.byId(this.headerID),"height");f.set(this.StackContainerNode.domNode,"height",e-t+"px"),this.StackContainerNode.resize(),this.resizeGrids(),this._tab1Node.resize(),this._tab2Node.resize(),this._tab3Node.resize()},_applyAddressEdits:function(e){var t=new R;t.attributes=e,"unmatched"===e.featureType?this._tableLayer.applyEdits(null,[t],null).then(function(e,t,i){}):this._featureLayer.applyEdits(null,[t],null).then(function(e,t,i){})},_selectGridRowEvent:function(e,t){var i;i=this._singleLineInput?{id:e,address:t[this._keywordMap.Address],location:t.location,featureType:t.featureType,reviewed:t.reviewed,updated:t.updated,sourceCountry:this._sourceCountry}:{id:e,address:this._formatLocatorOptions(t),location:t.location,featureType:t.featureType,reviewed:t.reviewed,updated:t.updated,sourceCountry:this._sourceCountry},this.emit("row-select",i),this.geocodeMatch&&this.geocodeMatch.geocodeAddress(i)},_calcGraphicsExtent:function(e){var t,i,r=e[0].geometry,s=r.getExtent(),a=e.length;for(null===s&&(s=new S(r.x,r.y,r.x,r.y,r.spatialReference)),i=1;a>i;i++)r=e[i].geometry,t=r.getExtent(),null===t&&(t=new S(r.x,r.y,r.x,r.y,r.spatialReference)),s=s.union(t);return s},_drawReviewedRow:function(e){this.graphicsLayer.clear();var t,i,r,s,d=e.newLocation,o=new R(d,this.matchGraphic);e.oldLocation?(t=e.oldLocation,i=new R(t,this.highlightGraphic),r=[i,o],s=this._calcGraphicsExtent(r),this.map.setExtent(s,!0).then(a.hitch(this,function(){var e;for(e=0;e<r.length;e++)this.graphicsLayer.add(r[e])}))):this.map.centerAt(d).then(a.hitch(this,function(){this.graphicsLayer.add(o)}))},_getPublishParams:function(){var e=new d,t=this._arcgisUrl+"/"+this.itemId+"/info/publishParameters.json";return I({url:t,content:{f:"json"},handleAs:"json",callbackParamName:"callback",load:a.hitch(this,function(t){this._pubParams=t;var i,r,s,a=(t.addressFields,t.layerInfo.publishFieldMap||!1);if(Object.keys||(s=t.addressFields,Object.keys=function(e){var t,i=[];for(t in e)e.hasOwnProperty(t)&&i.push(t);return i}),1===Object.keys(t.addressFields).length){for(i in t.addressFields)t.addressFields.hasOwnProperty(i)&&(a&&a.hasOwnProperty(t.addressFields[i])?(this._keywordMap.Address=a[t.addressFields[i]],this._keywordArray.push(a[t.addressFields[i]])):(this._keywordMap.Address=t.addressFields[i],this._keywordArray.push(t.addressFields[i])));this._singleLineInput=!0}else{this._singleLineInput=!1;for(r in t.addressFields)t.addressFields.hasOwnProperty(r)&&(a&&a.hasOwnProperty(t.addressFields[r])?(this._keywordMap[r]=a[t.addressFields[r]],this._keywordArray.push(a[t.addressFields[r]])):(this._keywordMap[r]=t.addressFields[r],this._keywordArray.push(t.addressFields[r])))}t.sourceCountry&&!this._keywordMap.CountryCode&&"world"!==t.sourceCountry.toLowerCase()&&"wo"!==t.sourceCountry.toLowerCase()&&(this._sourceCountry=t.sourceCountry),t.geocodeServiceUrl?(this._locatorURL=t.geocodeServiceUrl,this.geocodeMatch&&this.geocodeMatch.updateLocatorURL(this._locatorURL)):this.geocoder&&this.geocodeMatch&&this.geocodeMatch.updateLocatorURL(this.geocoder),e.resolve(!0)})}),e.promise},_formatLocatorOptions:function(e){var t,i=[],r={};for(t in this._keywordMap)this._keywordMap.hasOwnProperty(t)&&("undefined"!==e[this._keywordMap[t]]?(r[t]=e[this._keywordMap[t]],i[t]=e[this._keywordMap[t]]):(r[t]=e[this._keywordMap[t].toLowerCase()],i[t]=e[this._keywordMap[t].toLowerCase()]));return i},_getDataFromFeatureService:function(e){var t=e+"/0",i=e+"/1";I({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback",load:a.hitch(this,function(e){this._fsData=e,0!==e.layers.length?(this._featureLayer=new j(t,{mode:j.MODE_SELECTION,outFields:["*"]}),this._featureLayer.userIsAdmin=!0,this._listenerHandles.push(this._layerLoad())):this._featureLayer=!1,0!==e.tables.length?(this._tableLayer=new j(i,{mode:j.MODE_SELECTION,outFields:["*"]}),this._tableLayer.userIsAdmin=!0,this._listenerHandles.push(this._tableLoad())):(this._tableLayer=!1,this.StackContainerNode.removeChild(this.StackContainerNode.getChildren()[0]))})}),this.resize()},_geocodeMatchHandler:function(){var e=this.geocodeMatch.on("match",a.hitch(this,function(e){this.matchFeature(e)}));return e},_layerLoad:function(){var e=t(this._featureLayer,"load",a.hitch(this,function(){this._queryFeatureLayer()}));return e},_tableLoad:function(){var e=t(this._tableLayer,"load",a.hitch(this,function(){this._queryTableLayer()}));return e},_queryFeatureLayer:function(){var e,t,i,r=[],s=new G;s.where="1 = 1",this._featureLayer.queryFeatures(s).then(a.hitch(this,function(s){for(e=0;e<s.features.length;e++)s.features[e].attributes.updated=!1,s.features[e].attributes.reviewed=!1,s.features[e].attributes.featureType="matched",i=s.features[e].attributes,t=new M(s.features[e].geometry.getLongitude(),s.features[e].geometry.getLatitude()),i.location=t,r.push(i);s.exceededTransferLimit&&this._getFeatureCount(this._featureLayer).then(a.hitch(this,function(e){this.set("_featureLayerCount",e),this._updateTabText()})),this._test_idKeyword=this._featureLayer.objectIdField,this._gridMatchedRef.set("columns",this._updateColumns(s)),this._matchedStore=new c({data:r,idProperty:this._featureLayer.objectIdField}),this._gridMatchedRef.set("store",this._matchedStore),this._updateTabText()}))},_queryTableLayer:function(){var e,t,i=[],r=new G;r.where="1 = 1",this._tableLayer.queryFeatures(r).then(a.hitch(this,function(r){if(0!==r.features.length){for(e=0;e<r.features.length;e++)r.features[e].attributes.updated=!1,r.features[e].attributes.reviewed=!1,r.features[e].attributes.featureType="unmatched",t=r.features[e].attributes,i.push(t);r.exceededTransferLimit&&this._getFeatureCount(this._tableLayer).then(a.hitch(this,function(e){this.set("_tableLayerCount",e),this._updateTabText()})),this._gridUnmatchedRef.set("columns",this._updateColumns(r)),this._unmatchedStore=new c({data:i,idProperty:this._tableLayer.objectIdField}),this._gridUnmatchedRef.set("store",this._unmatchedStore),this._updateTabText()}else this._tableLayer=!1,delete this._fsData.tables[0],this.StackContainerNode.removeChild(this.StackContainerNode.getChildren()[0])}))},_getFeatureCount:function(e){var t=new G;t.returnGeometry=!1,t.returnIdsOnly=!1,t.where="1=1";var i=esriConfig.defaults.io.timeout;return esriConfig.defaults.io.timeout=1e4,e.queryCount(t).then(function(e){return esriConfig.defaults.io.timeout=i,e},function(){return esriConfig.defaults.io.timeout=i,null})},_updateTabText:function(){var e=null!==this._tableLayerCount?this._tableLayerCount:this._unmatchedStore.data.length,t=null!==this._featureLayerCount?this._featureLayerCount:this._matchedStore.data.length;this._unmatchedStore.query({reviewed:!1}).total===e?this._tab1Node.set("title",l.substitute(h.widgets.geocodeReview.unmatchedTotal,{count:e})):this._tab1Node.set("title",l.substitute(h.widgets.geocodeReview.unmatchedRemaining,{count1:this._unmatchedStore.query({reviewed:!1}).total,count2:e})),this._tab2Node.set("title",l.substitute(h.widgets.geocodeReview.matchedTotal,{count:t})),this._tab3Node.set("title",l.substitute(h.widgets.geocodeReview.reviewedTotal,{count:this._reviewedStore.data.length}))},_generateGrids:function(){this._generateUnmatchedGrid(),this._generateMatchedGrid(),this._generateReviewedGrid()},_generateUnmatchedGrid:function(){this._gridUnmatchedRef=new this.StandardGrid({store:this._unmatchedStore,columns:this._unmatchedColumns,noDataMessage:h.widgets.geocodeReview.review.noDataMsg1,selectionMode:"extended",allowSelectAll:!1,cellNavigation:!1},this._grid1Node),this._gridUnmatchedRef.startup(),this._gridUnmatchedRef.resize()},_generateMatchedGrid:function(){this._gridMatchedRef=new this.StandardGrid({store:this._matchedStore,columns:this._matchedColumns,noDataMessage:h.widgets.geocodeReview.review.noDataMsg2,selectionMode:"extended",allowSelectAll:!1,cellNavigation:!1},this._grid2Node),this._gridMatchedRef.startup(),this._gridMatchedRef.resize()},_generateReviewedGrid:function(){this._gridReviewedRef=new this.StandardGrid({store:this._reviewedStore,columns:this._reviewedColumns,noDataMessage:h.widgets.geocodeReview.review.noDataMsg3,selectionMode:"extended",allowSelectAll:!1,cellNavigation:!1},this._grid3Node),this._gridReviewedRef.startup(),this._gridReviewedRef.resize()},_defineColumns:function(){this._unmatchedColumns=[],this._matchedColumns=[],this._reviewedColumns=[{label:h.widgets.geocodeReview.idProperty,field:"id",hidden:!0},{label:h.widgets.geocodeReview.review.columnSelectedAddress,field:"address",formatter:a.hitch(this,function(t){return"<img src='"+e.toUrl("./GeocodeReview/images/EsriGreenPinCircle26.png")+"' />"+t}),get:a.hitch(this,function(e){var t,i="",r="";if("object"==typeof e.address){for(t in e.address)e.address.hasOwnProperty(t)&&null!==e.address[t]&&"Loc_name"!==t&&(r+=e.address[t]+" ");i=r}else i=e.address;return i})},{label:h.widgets.geocodeReview.review.columnOriginalLocation,field:"oldLocation",formatter:function(e){return e},get:a.hitch(this,function(e){var t;return e.oldLocation&&(t=T.webMercatorToGeographic(e.oldLocation)),e.oldLocation?"X: "+t.x+"<br />Y: "+t.y:"None"})},{label:h.widgets.geocodeReview.review.columnSelectedLocation,field:"newLocation",formatter:function(e){return e},get:a.hitch(this,function(e){var t=T.webMercatorToGeographic(e.newLocation);return"X: "+t.x+"<br />Y: "+t.y})},{label:"Type",field:"featureType",hidden:!0}]},_updateColumns:function(t){var i,r,s=[];if(t&&t.fields){for(i=0;i<t.fields.length;i++)r=this._keywordMap.Address&&t.fields[i].name===this._keywordMap.Address||this._keywordMap.Address&&t.fields[i].name===this._keywordMap.Address.toLowerCase()||-1!==o.indexOf(this._keywordArray,t.fields[i].name)?new L({label:t.fields[i].alias||t.fields[i].name,field:t.fields[i].name,editor:"text",editOn:"dblclick",autoSave:!0}):{label:t.fields[i].alias||t.fields[i].name,field:t.fields[i].name,hidden:!0},t.fields[i].name===this._featureLayer.objectIdField?s.splice(0,0,{label:t.fields[i].name,field:t.fields[i].alias,hidden:!0}):s.push(r);s.push({label:h.widgets.geocodeReview.reviewedUC,field:"reviewed",formatter:function(e){return e},get:a.hitch(this,function(t){return t.reviewed?"<img src='"+e.toUrl("./GeocodeReview/images/save.png")+"' />":""})})}return s},_defineGridStores:function(){this._unmatchedStore=new c({data:"",idProperty:this._idProperty}),this._matchedStore=new c({data:"",idProperty:this._idProperty}),this._reviewedArray=[],this._reviewedStore=new c({data:this._reviewedArray,idProperty:this._idProperty})}});return r("extend-esri")&&a.setObject("dijit.GeocodeReview",x,U),x});