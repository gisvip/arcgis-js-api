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

define(["../kernel","../numberUtils","../renderers/utils","../dijit/RendererSlider","../dijit/RendererSlider/sliderUtils","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojo/Evented","dojo/has","dojox/gfx","dojo/text!./ClassedColorSlider/templates/ClassedColorSlider.html"],function(s,t,i,e,a,h,o,r,l,n,u,d,m,c,f,_){var g=l([o,h,m],{declaredClass:"esri.dijit.ClassedColorSlider",baseClass:"esriClassedColorSlider",templateString:_,breakInfos:null,histogram:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,constructor:function(s,t){t&&(this.breakInfos=n.clone(s.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateTimeout=u(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new e({type:"ClassedColorSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=d.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",n.hitch(this,function(s){this._updateBreakInfos(s.values),this._updateBreakInfoLabels(),this._fillRamp()})),this._slider.on("change",n.hitch(this,function(s){this.set("values",s.values),this._updateBreakInfos(s.values),this._updateBreakInfoLabels(),this._fillRamp(),this.emit("change",n.clone(this.breakInfos))})),this._slider.on("handle-value-change",n.hitch(this,function(s){this._updateBreakInfos(s.values),this._updateBreakInfoLabels(),this._fillRamp(),this.emit("handle-value-change",n.clone(this.breakInfos))})),this._slider.on("data-value-change",n.hitch(this,function(s){this.set("minValue",s.min),this.breakInfos[0].minValue=s.min,this.set("maxValue",s.max),this.breakInfos[this.breakInfos.length-1].maxValue=s.max,this._updateBreakInfoLabels(),this._updateRendererSlider(),this.emit("data-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:n.clone(this.breakInfos)})})),this._slider.on("stop",n.hitch(this,function(s){this.emit("handle-value-change",n.clone(this.breakInfos))})),this.histogram&&this.showHistogram&&this._generateHistogram(),this.statistics&&this.showStatistics&&this._generateStatistics(),this.watch("breakInfos",this._updateTimeout),this.watch("handles",this._updateTimeout),this.watch("statistics",this._updateTimeout),this.watch("showHandles",this._updateTimeout),this.watch("showLabels",this._updateTimeout),this.watch("showTicks",this._updateTimeout),this.watch("histogram",this._showHistogram),this.watch("showHistogram",this._toggleHistogram)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy(),this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy(),this.countTooltips&&r.forEach(this.countTooltips,function(s){s.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}),this._slider.set({minimum:this.minValue,maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),handles:this.handles}),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces(),this.histogram&&this.showHistogram&&this._generateHistogram(),this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(s){var t,i=[];for(t=0;t<s.length-1;t++)i.push(s[t].maxValue);return i},_updateBreakInfos:function(s){var t,e=this.breakInfos;for(i.updateClassBreak({classBreaks:e,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,change:s}),t=0;t<s.length;t++)e[t].maxValue=s[t],e[t+1]&&(e[t+1].minValue=s[t])},_updateBreakInfoLabels:function(){var s=this.breakInfos,t=this.classificationMethod,e=this.normalizationType;i.setLabelsForClassBreaks({classBreaks:s,normalizationType:e,classificationMethod:t,round:!0})},_setupDataDefaults:function(){null!==this.breakInfos&&this.breakInfos.length>1?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}):null!==this.breakInfos&&1===this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateBreakInfoLabels())},_createSVGSurfaces:function(){this._colorRampSurface=f.createSurface(this._rampNode,this.rampWidth,this._sliderHeight),d.set(this._colorRampSurface.rawNode,"border","1px solid #888"),this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth+2,height:this._sliderHeight+2}),this._histogramSurface=a.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth),this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy(),this._histogramSurface.destroy()},_fillRamp:function(){var s,t=this.breakInfos,i=this.maxValue,e=this.minValue,a=[];for(s=0;s<t.length;s++){var h,o;i===e?h=o=0:(h=(i-t[s].minValue)/(i-e),o=(i-t[s].maxValue)/(i-e)),a.push({offset:h,color:t[s].symbol?t[s].symbol.color:"#5daddd"}),a.push({offset:o,color:t[s].symbol?t[s].symbol.color:"#5daddd"})}a.reverse(),this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:a})},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(d.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):d.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=a.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight()),this.countTooltips=a.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(this.statistics.count<2||isNaN(this.statistics.avg))){var s,i,e,h,o=this.statistics,r=this._slider,l=a.getPrecision(this.maxValue);o.min===o.max&&o.min===o.avg?(i=0,e=2*o.avg):(i=o.min,e=o.max),(i!==r.minimum||e!==r.maximum)&&(i=r.minimum,e=r.maximum),h=this._sliderHeight*(e-o.avg)/(e-i),s=t.round([o.avg,e,i])[0],this._avgHandleObjs=a.generateAvgLine(this._histogramSurface,s,h,l,this.isLeftToRight())}}});return c("extend-esri")&&n.setObject("dijit.ClassedColorSlider",g,s),g});