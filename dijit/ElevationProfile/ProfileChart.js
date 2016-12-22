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

define(["../_EventedWidget","dojo/on","dojo/mouse","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/number","dijit/registry","dojo/dom-geometry","dojo/_base/Color","dojox/charting/Chart","dojox/charting/axis2d/Default","dojox/charting/plot2d/Grid","dojox/charting/plot2d/Areas","dojox/charting/action2d/MouseIndicator","dojox/charting/action2d/TouchIndicator","dojox/charting/themes/ThreeD","../../config","../../sniff","../../request","../../graphic","../../layers/GraphicsLayer","../../units","./UnitsConversion","dojo/i18n!./nls/strings"],function(t,i,e,o,s,a,n,r,l,h,c,_,d,p,u,f,g,y,m,v,R,C,S,x,E,A){return s([t],{declaredClass:"esri.dijit.ElevationProfile.ProfileChart",baseClass:"esriProfileChart",SERIES_NAME_WATER:"Water",SERIES_NAME_ELEVATION:"Elevations",SERIES_NAME_DISTANCE:"Distances",_defaultDataRangeStats:{useCustom:!1,yMin:-10,yMax:100,yRange:110},_samplingPointCount:199,_elevationUnits:x.METERS,_distanceUnits:x.KILOMETERS,_sourceDataUnits:x.METERS,_chartRenderingOptions:null,_dataRangeStats:null,_profileResults:null,_map:null,_unitConversion:null,_chart:null,_elevationIndicator:null,_elevationDiffIndicator:null,_distanceIndicator:null,_chartLocationGraphic:null,_posIndicator:null,_negIndicator:null,_chartLocationGraphicsLayer:null,_defaultMapSymbol:{type:"esriSMS",style:"esriSMSX",color:[0,255,0,255],size:13,angle:0,xoffset:0,yoffset:0,outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,255,0,255],width:3}},constructor:function(t,i){this._unitConversion=new E,this._dataRangeStats=a.mixin({},this._defaultDataRangeStats),t.hasOwnProperty("map")&&(this._map=t.map),t.hasOwnProperty("elevationUnits")&&(this._elevationUnits=t.elevationUnits),t.hasOwnProperty("distanceUnits")&&(this._distanceUnits=t.distanceUnits),this._chartRenderingOptions=a.mixin({chartTitleFontSize:13,axisTitleFontSize:11,axisLabelFontSize:9,indicatorFontColor:"#eee",indicatorFillColor:"#666",titleFontColor:"#6A6A6A",axisFontColor:"#6A6A6A",axisMajorTickColor:"#333",skyTopColor:"#B0E0E6",skyBottomColor:"#4682B4",waterLineColor:"#eee",waterTopColor:"#ADD8E6",waterBottomColor:"#0000FF",elevationLineColor:"#D2B48C",elevationTopColor:"#8B4513",elevationBottomColor:"#CD853F",elevationMarkerStrokeColor:"#FF0000",elevationMarkerSymbol:"m -6 -6, l 12 12, m 0 -12, l -12 12",mapIndicatorSymbol:this._defaultMapSymbol},t.chartOptions||{}),this._getDisplayValue=a.hitch(this,this._getDisplayValue)},startup:function(){this.inherited(arguments),this._resetProfileResults(),this._initializeChart()},postCreate:function(){this.inherited(arguments),this.own(o.after(l.getEnclosingWidget(this.domNode),"resize",a.hitch(this,this.resize),!0))},_setElevationRangeAttr:function(t,i){this._dataRangeStats={useCustom:!0,yMin:t,yMax:i,yRange:t-i}},_setDisplayUnitsAttr:function(t){this._elevationUnits=t.elevationUnits||this._elevationUnits,this._distanceUnits=t.distanceUnits||this._distanceUnits},_resetProfileResults:function(){this._profileResults={geometry:null},this._profileResults.samplingDistance=this._map?this._map.extent.getWidth()/this._samplingPointCount:100,this._profileResults.samplingDisplayDistance=this._convertDistancesArray([this._profileResults.samplingDistance])[0],this._profileResults.elevations=this._getFilledArray(this._samplingPointCount,this._profileResults.samplingDisplayDistance,!0),this._profileResults.distances=this._getFilledArray(this._samplingPointCount,this._profileResults.samplingDisplayDistance,!0),this._profileResults.waterData=this._resetArray(this._profileResults.elevations,0),this._dataRangeStats=a.mixin({},this._defaultDataRangeStats),this._sourceProfileResults=a.clone(this._profileResults)},_updateProfileResults:function(t){if(this._sourceProfileResults=a.clone(t),this._profileResults={geometry:t.geometry},this._profileResults.samplingDistance=this._convertDistancesArray([t.samplingDistance])[0],this._profileResults.samplingDisplayDistance=this._convertDistancesArray([this._profileResults.samplingDistance])[0],this._profileResults.elevations=this._convertElevationsInfoArray(t.elevations),this._profileResults.distances=this._convertDistancesArray(t.distances),this._profileResults.waterData=this._resetArray(t.elevations,0),!this._dataRangeStats.useCustom){var i=this._getArrayMin(this._profileResults.elevations),e=this._getArrayMax(this._profileResults.elevations);this._dataRangeStats.yRange=e-i,this._dataRangeStats.yMin=i-.05*this._dataRangeStats.yRange,this._dataRangeStats.yMax=e+.05*this._dataRangeStats.yRange}},clear:function(){this._displayChartLocation(-1),this._resetProfileResults(),this._clearIndicators(),this._updateChart(),this.emit("chart-clear")},refresh:function(){this.update(this._sourceProfileResults||this._profileResults),this.emit("chart-refresh")},update:function(t){t?(this._updateProfileResults(t),this._updateChart(),this._updateIndicators(),null!==t.geometry&&this._getAggregationValues(),this.emit("chart-update",t)):this.emit(new Error(A.errors.InvalidProfileResults))},_setTitleAttr:function(t){this._chart.title=t,this._chart.dirty=!0,this._chart.render()},_initializeChart:function(){var t=h.position(this.domNode,!0);if(t.h<1)this.emit(new Error(A.errors.InvalidConfiguration));else{var i=new _(this.domNode,{title:this._chartRenderingOptions.title||A.chart.title,titlePos:"top",titleGap:10,titleFont:a.replace("normal normal bold {chartTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor});i.setTheme(y),i.fill="transparent",i.theme.axis.stroke.width=2,i.theme.axis.majorTick.color=c.named.white.concat(.5),i.theme.axis.majorTick.width=1,i.theme.plotarea.fill={type:"linear",space:"plot",x1:50,y1:100,x2:50,y2:0,colors:[{offset:0,color:this._chartRenderingOptions.skyBottomColor},{offset:1,color:this._chartRenderingOptions.skyTopColor}]},i.addAxis("y",{min:this._defaultDataRangeStats.yMin,max:this._defaultDataRangeStats.yMax,fontColor:this._chartRenderingOptions.axisFontColor,font:a.replace("normal normal bold {axisLabelFontSize}pt verdana",this._chartRenderingOptions),vertical:!0,natural:!0,fixed:!0,includeZero:!1,majorLabels:!0,minorLabels:!0,majorTicks:!0,minorTicks:!0,majorTick:{color:this._chartRenderingOptions.axisMajorTickColor,length:6},title:a.replace(A.chart.elevationTitleTemplate,[this._unitConversion.getFullLabel(this._elevationUnits)]),titleGap:30,titleFont:a.replace("normal normal bold {axisTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor,titleOrientation:"axis"}),i.addAxis("x",{fontColor:this._chartRenderingOptions.axisFontColor,font:a.replace("normal normal bold {axisLabelFontSize}pt verdana",this._chartRenderingOptions),natural:!0,fixed:!0,includeZero:!1,majorLabels:!0,minorLabels:!0,majorTicks:!0,minorTicks:!0,majorTick:{color:this._chartRenderingOptions.axisMajorTickColor,length:6},title:a.replace(A.chart.distanceTitleTemplate,[this._unitConversion.getFullLabel(this._distanceUnits)]),titleGap:5,titleFont:a.replace("normal normal bold {axisTitleFontSize}pt verdana",this._chartRenderingOptions),titleFontColor:this._chartRenderingOptions.titleFontColor,titleOrientation:"away"}),i.addPlot("grid",{type:p,hMajorLines:!0,hMinorLines:!1,vMajorLines:!1,vMinorLines:!1}),i.addPlot("default",{type:u,tension:"X"}),i.addPlot("WaterPlot",{type:u}),i.addSeries(this.SERIES_NAME_WATER,this._profileResults.waterData,{plot:"WaterPlot",stroke:{width:2,color:this._chartRenderingOptions.waterLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,colors:[{offset:0,color:this._chartRenderingOptions.waterTopColor},{offset:1,color:this._chartRenderingOptions.waterBottomColor}]}}),i.addSeries(this.SERIES_NAME_ELEVATION,this._profileResults.elevations,{plot:"default",stroke:{width:1.5,color:this._chartRenderingOptions.elevationLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,colors:[{offset:0,color:this._chartRenderingOptions.elevationTopColor},{offset:1,color:this._chartRenderingOptions.elevationBottomColor}]}}),i.addSeries(this.SERIES_NAME_DISTANCE,this._profileResults.elevations,{plot:"default",stroke:{width:1.5,color:this._chartRenderingOptions.elevationLineColor},fill:{type:"linear",space:"plot",x1:50,y1:0,x2:50,y2:100,colors:[{offset:0,color:this._chartRenderingOptions.elevationTopColor},{offset:1,color:this._chartRenderingOptions.elevationBottomColor}]}}),i.render(),this._chart=i}},_updateChart:function(){this._chart.getAxis("y").opt.min=this._dataRangeStats.yMin,this._chart.getAxis("y").opt.max=this._dataRangeStats.yMax,this._chart.getAxis("y").opt.title=a.replace(A.chart.elevationTitleTemplate,[this._unitConversion.getFullLabel(this._elevationUnits)]),this._chart.getAxis("x").opt.title=a.replace(A.chart.distanceTitleTemplate,[this._unitConversion.getFullLabel(this._distanceUnits)]),this._chart.dirty=!0,this._chart.updateSeries(this.SERIES_NAME_WATER,this._profileResults.waterData),this._chart.updateSeries(this.SERIES_NAME_ELEVATION,this._profileResults.elevations),this._chart.updateSeries(this.SERIES_NAME_DISTANCE,this._profileResults.elevations),this._chart.render()},_clearIndicators:function(){this._elevationIndicator&&(this._elevationIndicator.destroy(),this._elevationIndicator=null),this._elevationDiffIndicator&&(this._elevationDiffIndicator.destroy(),this._elevationDiffIndicator=null),this._distanceIndicator&&(this._distanceIndicator.destroy(),this._distanceIndicator=null)},_updateIndicators:function(){if(this._chart){this._clearIndicators();var t={places:1},o={series:this.SERIES_NAME_ELEVATION,mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,offset:{y:25,x:30},markerFill:"none",markerStroke:{color:this._chartRenderingOptions.elevationMarkerStrokeColor,width:3},markerSymbol:this._chartRenderingOptions.elevationMarkerSymbol,labelFunc:a.hitch(this,function(i){this._displayChartLocation(i.x);var e=this._unitConversion.getAbbrLabel(this._elevationUnits),o=r.format(i.y,t);return a.replace("{0} {1}",[o,e])})},s={series:this.SERIES_NAME_WATER,mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,fillFunc:a.hitch(this,function(t){var i=this._profileResults.distances.indexOf(t.x);if(-1!==i){var e=this._profileResults.elevations[i].y,o=this._profileResults.elevations[0].y;return e>=o?"green":"red"}return"red"}),offset:{y:45,x:30},labelFunc:a.hitch(this,function(i){var e=this._profileResults.distances.indexOf(i.x);if(-1!==e){var o=this._profileResults.elevations[e].y,s=this._profileResults.elevations[0].y,n=r.format(o-s,t),l=o-s>0?"+":"";return a.replace("{0}{1}",[l,n])}return"0.0"})};this._posIndicator=a.clone(s),s.offset={y:45,x:-30},this._negIndicator=a.clone(s);var l={series:this.SERIES_NAME_DISTANCE,mouseOver:!0,font:"normal normal bold 8pt Tahoma",fontColor:this._chartRenderingOptions.indicatorFontColor,fill:this._chartRenderingOptions.indicatorFillColor,offset:{y:0,x:0},labelFunc:a.hitch(this,function(i){var e=this._unitConversion.getAbbrLabel(this._distanceUnits);return a.replace("{0} {1}",[r.format(i.x,t),e])})};v("has-touch")?(this._elevationDiffIndicator=new g(this._chart,"default",s),this._elevationIndicator=new g(this._chart,"default",o),this._distanceIndicator=new g(this._chart,"default",l),i(this.domNode,e.enter,a.hitch(this,this._displayChartLocation,null)),i(this.domNode,e.leave,a.hitch(this,this._displayChartLocation,null))):(this._elevationDiffIndicator=new f(this._chart,"default",s),this._elevationIndicator=new f(this._chart,"default",o),this._distanceIndicator=new f(this._chart,"default",l)),this._chart.fullRender(),i(this._chart.node,"mouseover",a.hitch(this,function(t){var i=h.position(this._chart.node,!1);i.w-t.clientX<100?n.forEach([this._elevationDiffIndicator,this._elevationIndicator],function(t){t&&t.opt.offset.x>0&&(t.opt.offset={y:t.opt.offset.y,x:-t.opt.offset.x})},this):n.forEach([this._elevationDiffIndicator,this._elevationIndicator],function(t){t&&t.opt.offset.x<0&&(t.opt.offset={y:t.opt.offset.y,x:Math.abs(t.opt.offset.x)})},this)}))}},_displayChartLocation:function(t){if(this._map&&this._profileResults.elevations&&this._profileResults.geometry){if(!this._chartLocationGraphic){var i=this._chartRenderingOptions.mapIndicatorSymbol,e=i.hasOwnProperty("type")?i:i.toJson();"esriSMS"!==e.type&&"esriPMS"!==e.type&&(e=this._defaultMapSymbol),this._chartLocationGraphic=new C({geometry:null,symbol:e}),this._chartLocationGraphicsLayer||(this._chartLocationGraphicsLayer=new S,this._map.addLayer(this._chartLocationGraphicsLayer)),this._chartLocationGraphicsLayer.add(this._chartLocationGraphic)}var o=this._profileResults.distances?n.indexOf(this._profileResults.distances,t):-1;if(o>=0){var s=this._profileResults.elevations[o];this._chartLocationGraphic.setGeometry(this._profileResults.geometry.getPoint(s.pathIdx,s.pointIdx))}else this._chartLocationGraphicsLayer.clear(),this._chartLocationGraphic=null}},_convertElevationsInfoArray:function(t){return n.map(t,a.hitch(this,function(t){return a.mixin(t,{x:this._getDisplayValue(t.x,this._distanceUnits),y:this._getDisplayValue(t.y,this._elevationUnits)})}))},_convertDistancesArray:function(t){return n.map(t,a.hitch(this,function(t){return this._getDisplayValue(t,this._distanceUnits)}))},_getDisplayValue:function(t,i){return i===this._sourceDataUnits?t:this._unitConversion.convert(t,this._sourceDataUnits,i)},_getAggregationValues:function(){for(var t=0,i=0,e=0,o=0,s=this._profileResults.elevations,a=s.length,n=0;a>n;n++){var r=0;void 0!==s[n+1]&&(r=s[n].y-s[n+1].y,r>0?i+=r:t+=Math.abs(r)),void 0!==s[a-2-n]&&(r=s[a-1-n].y-s[a-2-n].y,r>0?o+=r:e+=Math.abs(r))}var l={aggregateElevationGainForward:t,aggregateElevationLossForward:i,aggregateElevationGainReverse:e,aggregateElevationLossReverse:o};return this.emit("aggregate-elevation-values",l),l},_getFilledArray:function(t,i,e){for(var o=new Array(t),s=0;t>s;++s)o[s]={x:e?s*i:s,y:e?0:i||0};return o},_resetArray:function(t,i){return n.map(t,function(t){return{x:t.x,y:i}})},_getArrayMax:function(t){var i=n.map(t,function(t){return t.y});return Math.max.apply(Math,i)},_getArrayMin:function(t){var i=n.map(t,function(t){return t.y});return Math.min.apply(Math,i)},resize:function(){this._chart&&this._chart.resize()},destroy:function(){this._chart&&this._chart.destroy(),this.inherited(arguments)}})});