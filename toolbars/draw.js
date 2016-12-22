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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/window","dojo/has","dojo/sniff","dojo/keys","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","../kernel","../sniff","./_toolbar","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","../graphic","../geometry/jsonUtils","../geometry/webMercatorUtils","../geometry/Polyline","../geometry/Polygon","../geometry/Multipoint","../geometry/Rect","dojo/i18n!../nls/jsapi"],function(e,t,o,n,i,s,a,r,c,h,l,_,p,d,g,y,m,u,M,w,f,R,E,T,b,O){var L=e(g,{declaredClass:"esri.toolbars.Draw",_eventMap:{"draw-complete":!0,"draw-end":["geometry"]},constructor:function(e,o){this.markerSymbol=new y(y.STYLE_SOLID,10,new m(m.STYLE_SOLID,new i([255,0,0]),2),new i([0,0,0,.25])),this.lineSymbol=new m(m.STYLE_SOLID,new i([255,0,0]),2),this.fillSymbol=new u(u.STYLE_SOLID,new m(m.STYLE_SOLID,new i([255,0,0]),2),new i([0,0,0,.25])),this._points=[],this._mouse=!a("esri-touch")&&!a("esri-pointer"),this._defaultOptions={showTooltips:!0,drawTime:75,tolerance:8,tooltipOffset:15},this._options=t.mixin(t.mixin({},this._defaultOptions),o||{}),(r("ios")||r("android"))&&(this._options.showTooltips=!1),this._onKeyDownHandler=t.hitch(this,this._onKeyDownHandler),this._onMouseDownHandler=t.hitch(this,this._onMouseDownHandler),this._onMouseUpHandler=t.hitch(this,this._onMouseUpHandler),this._onClickHandler=t.hitch(this,this._onClickHandler),this._onMouseMoveHandler=t.hitch(this,this._onMouseMoveHandler),this._onMouseDragHandler=t.hitch(this,this._onMouseDragHandler),this._onDblClickHandler=t.hitch(this,this._onDblClickHandler),this._updateTooltip=t.hitch(this,this._updateTooltip),this._hideTooltip=t.hitch(this,this._hideTooltip),this._redrawGraphic=t.hitch(this,this._redrawGraphic)},_geometryType:null,respectDrawingVertexOrder:!1,setRespectDrawingVertexOrder:function(e){this.respectDrawingVertexOrder=e},setMarkerSymbol:function(e){this.markerSymbol=e},setLineSymbol:function(e){this.lineSymbol=e},setFillSymbol:function(e){this.fillSymbol=e},activate:function(e,o){this._geometryType&&this.deactivate();var i=this.map,s=n.connect,r=L;switch(this._options=t.mixin(t.mixin({},this._options),o||{}),i.navigationManager.setImmediateClick(!1),e){case r.ARROW:case r.LEFT_ARROW:case r.RIGHT_ARROW:case r.UP_ARROW:case r.DOWN_ARROW:case r.TRIANGLE:case r.CIRCLE:case r.ELLIPSE:case r.RECTANGLE:this._deactivateMapTools(!0,!1,!1,!0),this._onClickHandler_connect=s(i,"onClick",this._onClickHandler),this._mouse?(this._onMouseDownHandler_connect=s(i,"onMouseDown",this._onMouseDownHandler),this._onMouseDragHandler_connect=s(i,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=s(i,"onMouseUp",this._onMouseUpHandler)):(this._onMouseDownHandler2_connect=s(i,"onMouseDragStart",this._onMouseDownHandler),this._onMouseDragHandler2_connect=s(i,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler2_connect=s(i,"onMouseDragEnd",this._onMouseUpHandler)),a("esri-touch")&&!a("esri-pointer")&&(this._onMouseDownHandler2_connect=s(i,"onSwipeStart",this._onMouseDownHandler),this._onMouseDragHandler2_connect=s(i,"onSwipeMove",this._onMouseDragHandler),this._onMouseUpHandler2_connect=s(i,"onSwipeEnd",this._onMouseUpHandler));break;case r.POINT:this._onClickHandler_connect=s(i,"onClick",this._onClickHandler);break;case r.LINE:case r.EXTENT:case r.FREEHAND_POLYLINE:case r.FREEHAND_POLYGON:this._deactivateMapTools(!0,!1,!1,!0),this._mouse?(this._onMouseDownHandler_connect=s(i,"onMouseDown",this._onMouseDownHandler),this._onMouseDragHandler_connect=s(i,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=s(i,"onMouseUp",this._onMouseUpHandler)):(this._onMouseDownHandler_connect=s(i,"onMouseDragStart",this._onMouseDownHandler),this._onMouseDragHandler_connect=s(i,"onMouseDrag",this._onMouseDragHandler),this._onMouseUpHandler_connect=s(i,"onMouseDragEnd",this._onMouseUpHandler)),a("esri-touch")&&!a("esri-pointer")&&(this._onMouseDownHandler2_connect=s(i,"onSwipeStart",this._onMouseDownHandler),this._onMouseDragHandler2_connect=s(i,"onSwipeMove",this._onMouseDragHandler),this._onMouseUpHandler2_connect=s(i,"onSwipeEnd",this._onMouseUpHandler));break;case r.POLYLINE:case r.POLYGON:case r.MULTI_POINT:i.navigationManager.setImmediateClick(!0),this._onClickHandler_connect=s(i,"onClick",this._onClickHandler),this._onDblClickHandler_connect=s(i,"onDblClick",this._onDblClickHandler),this._dblClickZoom=i.isDoubleClickZoom,i.disableDoubleClickZoom();break;default:return void console.error("Unsupported geometry type: "+e)}this._onKeyDown_connect=s(i,"onKeyDown",this._onKeyDownHandler),this._redrawConnect=s(i,"onExtentChange",this._redrawGraphic),this._geometryType=e,this._toggleTooltip(!0),i.snappingManager&&"freehandpolyline"!==this._geometryType&&"freehandpolygon"!==this._geometryType&&(i.snappingManager._startSelectionLayerQuery(),i.snappingManager._setUpSnapping()),this.onActivate(this._geometryType)},deactivate:function(){var e=this.map;this._clear();var t=n.disconnect;switch(t(this._onMouseMoveHandler_connect),t(this._onMouseDownHandler_connect),t(this._onMouseDragHandler_connect),t(this._onMouseUpHandler_connect),t(this._onMouseDownHandler2_connect),t(this._onMouseDragHandler2_connect),t(this._onMouseUpHandler2_connect),t(this._onClickHandler_connect),t(this._onDblClickHandler_connect),t(this._onKeyDown_connect),t(this._redrawConnect),this._onMouseDownHandler_connect=this._onMouseMoveHandler_connect=this._onMouseDragHandler_connect=this._onMouseUpHandler_connect=this._onMouseDownHandler2_connect=this._onMouseDragHandler2_connect=this._onMouseUpHandler2_connect=this._onClickHandler_connect=this._onDblClickHandler_connect=this._onKeyDown_connect=this._redrawConnect=null,e.snappingManager&&(e.snappingManager._stopSelectionLayerQuery(),e.snappingManager._killOffSnapping()),this._geometryType){case L.CIRCLE:case L.ELLIPSE:case L.TRIANGLE:case L.ARROW:case L.LEFT_ARROW:case L.RIGHT_ARROW:case L.UP_ARROW:case L.DOWN_ARROW:case L.RECTANGLE:case L.LINE:case L.EXTENT:case L.FREEHAND_POLYLINE:case L.FREEHAND_POLYGON:this._activateMapTools(!0,!1,!1,!0);break;case L.POLYLINE:case L.POLYGON:case L.MULTI_POINT:this._dblClickZoom&&e.enableDoubleClickZoom()}var o=this._geometryType;this._geometryType=null,e.navigationManager.setImmediateClick(!1),this._toggleTooltip(!1),this.onDeactivate(o)},_clear:function(){this._graphic&&this.map.graphics.remove(this._graphic,!0),this._tGraphic&&this.map.graphics.remove(this._tGraphic,!0),this._graphic=this._tGraphic=null,this.map.snappingManager&&this.map.snappingManager._setGraphic(null),this._points=[]},finishDrawing:function(){var e,t=this._points,i=this.map,s=i.spatialReference,a=L;switch(t=t.slice(0,t.length),this._geometryType){case a.POLYLINE:if(!this._graphic||t.length<2)return;e=new R(s),e.addPath([].concat(t));break;case a.POLYGON:if(!this._graphic||t.length<3)return;e=new E(s);var r=[].concat(t,[t[0].offset(0,0)]);E.prototype.isClockwise(r)||this.respectDrawingVertexOrder||(console.debug(this.declaredClass+" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),r.reverse()),e.addRing(r);break;case a.MULTI_POINT:e=new T(s),o.forEach(t,function(t){e.addPoint(t)})}n.disconnect(this._onMouseMoveHandler_connect),this._clear(),this._setTooltipMessage(0),this._drawEnd(e)},_drawEnd:function(e){if(e){var t,o=this.map.spatialReference;this.onDrawEnd(e),o&&(o.isWebMercator()?t=f.webMercatorToGeographic(e,!0):4326===o.wkid&&(t=w.fromJson(e.toJson()))),this.onDrawComplete({geometry:e,geographicGeometry:t})}},_normalizeRect:function(e,t,o){var n=e.x,i=e.y,s=t.x,a=t.y,r=Math.abs(n-s),c=Math.abs(i-a);return{x:Math.min(n,s),y:Math.max(i,a),width:r,height:c,spatialReference:o}},_onMouseDownHandler:function(e){this._dragged=!1;var t;this.map.snappingManager&&(t=this.map.snappingManager._snappingPoint);var o=t||e.mapPoint,n=L,i=this.map,s=i.spatialReference;switch(this._points.push(o.offset(0,0)),this._geometryType){case n.LINE:this._graphic=i.graphics.add(new M(new R({paths:[[[o.x,o.y],[o.x,o.y]]],spatialReference:s}),this.lineSymbol),!0),i.snappingManager&&i.snappingManager._setGraphic(this._graphic);break;case n.EXTENT:break;case n.FREEHAND_POLYLINE:this._oldPoint=e.screenPoint;var r=new R(s);r.addPath(this._points),this._graphic=i.graphics.add(new M(r,this.lineSymbol),!0),i.snappingManager&&i.snappingManager._setGraphic(this._graphic);break;case n.CIRCLE:case n.ELLIPSE:case n.TRIANGLE:case n.ARROW:case n.LEFT_ARROW:case n.RIGHT_ARROW:case n.UP_ARROW:case n.DOWN_ARROW:case n.RECTANGLE:case n.FREEHAND_POLYGON:this._oldPoint=e.screenPoint;var c=new E(s);c.addRing(this._points),this._graphic=i.graphics.add(new M(c,this.fillSymbol),!0),i.snappingManager&&i.snappingManager._setGraphic(this._graphic)}a("esri-touch")&&e.preventDefault()},_onMouseMoveHandler:function(e){var t;this.map.snappingManager&&(t=this.map.snappingManager._snappingPoint);var o=this._points[this._points.length-1],n=t||e.mapPoint,i=this._tGraphic,s=i.geometry;switch(this._geometryType){case L.POLYLINE:case L.POLYGON:s.setPoint(0,0,{x:o.x,y:o.y}),s.setPoint(0,1,{x:n.x,y:n.y}),i.setGeometry(s)}},_onMouseDragHandler:function(e){if(this._graphic||this._points.length){if(a("esri-touch")&&!this._points.length)return void e.preventDefault();this._dragged=!0;var o;this.map.snappingManager&&(o=this.map.snappingManager._snappingPoint);var n=this._points[0],i=o||e.mapPoint,s=this.map,r=s.spatialReference,c=this._graphic,h=L,l=s.toScreen(n),_=s.toScreen(i),p=[],d=_.x-l.x,g=_.y-l.y,y=60,m=Math.sqrt(d*d+g*g);switch(this._geometryType){case h.CIRCLE:this._hideTooltip(),c.geometry=E.createCircle({center:l,r:m,numberOfPoints:y,map:s}),c.setGeometry(c.geometry);break;case h.ELLIPSE:this._hideTooltip(),c.geometry=E.createEllipse({center:l,longAxis:d,shortAxis:g,numberOfPoints:y,map:s}),c.setGeometry(c.geometry);break;case h.TRIANGLE:this._hideTooltip(),p=[[0,-m],[.8660254037844386*m,.5*m],[-.8660254037844386*m,.5*m],[0,-m]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.ARROW:this._hideTooltip();var u=g/m,w=d/m,f=g/d,R=.25*w*m,T=.25*m/f,O=.25*u*m;p=[[d,g],[d-R*(1+24/T),g+24*w-O],[d-R*(1+12/T),g+12*w-O],[-12*u,12*w],[12*u,-12*w],[d-R*(1-12/T),g-12*w-O],[d-R*(1-24/T),g-24*w-O],[d,g]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.LEFT_ARROW:this._hideTooltip(),p=0>=d?[[d,0],[.75*d,g],[.75*d,.5*g],[0,.5*g],[0,-.5*g],[.75*d,-.5*g],[.75*d,-g],[d,0]]:[[0,0],[.25*d,g],[.25*d,.5*g],[d,.5*g],[d,-.5*g],[.25*d,-.5*g],[.25*d,-g],[0,0]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.RIGHT_ARROW:this._hideTooltip(),p=d>=0?[[d,0],[.75*d,g],[.75*d,.5*g],[0,.5*g],[0,-.5*g],[.75*d,-.5*g],[.75*d,-g],[d,0]]:[[0,0],[.25*d,g],[.25*d,.5*g],[d,.5*g],[d,-.5*g],[.25*d,-.5*g],[.25*d,-g],[0,0]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.UP_ARROW:this._hideTooltip(),p=0>=g?[[0,g],[-d,.75*g],[-.5*d,.75*g],[-.5*d,0],[.5*d,0],[.5*d,.75*g],[d,.75*g],[0,g]]:[[0,0],[-d,.25*g],[-.5*d,.25*g],[-.5*d,g],[.5*d,g],[.5*d,.25*g],[d,.25*g],[0,0]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.DOWN_ARROW:this._hideTooltip(),p=g>=0?[[0,g],[-d,.75*g],[-.5*d,.75*g],[-.5*d,0],[.5*d,0],[.5*d,.75*g],[d,.75*g],[0,g]]:[[0,0],[-d,.25*g],[-.5*d,.25*g],[-.5*d,g],[.5*d,g],[.5*d,.25*g],[d,.25*g],[0,0]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.RECTANGLE:this._hideTooltip(),p=[[0,0],[d,0],[d,g],[0,g],[0,0]],c.geometry=this._toPolygon(p,l.x,l.y),c.setGeometry(c.geometry);break;case h.LINE:c.setGeometry(t.mixin(c.geometry,{paths:[[[n.x,n.y],[i.x,i.y]]]}));break;case h.EXTENT:c&&s.graphics.remove(c,!0);var H=new b(this._normalizeRect(n,i,r));H._originOnly=!0,this._graphic=s.graphics.add(new M(H,this.fillSymbol),!0),s.snappingManager&&s.snappingManager._setGraphic(this._graphic);break;case h.FREEHAND_POLYLINE:if(this._hideTooltip(),this._canDrawFreehandPoint(e)===!1)return void(a("esri-touch")&&e.preventDefault());this._points.push(e.mapPoint.offset(0,0)),c.geometry._insertPoints([i.offset(0,0)],0),c.setGeometry(c.geometry);break;case h.FREEHAND_POLYGON:if(this._hideTooltip(),this._canDrawFreehandPoint(e)===!1)return void(a("esri-touch")&&e.preventDefault());this._points.push(e.mapPoint.offset(0,0)),c.geometry._insertPoints([i.offset(0,0)],0),c.setGeometry(c.geometry)}a("esri-touch")&&e.preventDefault()}},_canDrawFreehandPoint:function(e){if(!this._oldPoint)return!1;var t=this._oldPoint.x-e.screenPoint.x;t=0>t?-1*t:t;var o=this._oldPoint.y-e.screenPoint.y;o=0>o?-1*o:o;var n=this._options.tolerance;if(n>t&&n>o)return!1;var i=new Date,s=i-this._startTime;return s<this._options.drawTime?!1:(this._startTime=i,this._oldPoint=e.screenPoint,!0)},_onMouseUpHandler:function(e){if(!this._dragged||!this._graphic)return void this._clear();0===this._points.length&&this._points.push(e.mapPoint.offset(0,0));var t;this.map.snappingManager&&(t=this.map.snappingManager._snappingPoint);var o,n=this._points[0],i=t||e.mapPoint,s=this.map,r=s.spatialReference,c=L;switch(this._geometryType){case c.CIRCLE:case c.ELLIPSE:case c.TRIANGLE:case c.ARROW:case c.LEFT_ARROW:case c.RIGHT_ARROW:case c.UP_ARROW:case c.DOWN_ARROW:case c.RECTANGLE:o=this._graphic.geometry;break;case c.LINE:o=new R({paths:[[[n.x,n.y],[i.x,i.y]]],spatialReference:r});break;case c.EXTENT:o=new b(this._normalizeRect(n,i,r)).getExtent();break;case c.FREEHAND_POLYLINE:o=new R(r),o.addPath([].concat(this._points,[i.offset(0,0)]));break;case c.FREEHAND_POLYGON:o=new E(r);var h=[].concat(this._points,[i.offset(0,0),this._points[0].offset(0,0)]);E.prototype.isClockwise(h)||this.respectDrawingVertexOrder||(console.debug(this.declaredClass+" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),h.reverse()),o.addRing(h)}a("esri-touch")&&e.preventDefault(),this._clear(),this._drawEnd(o)},_onClickHandler:function(e){var t;this.map.snappingManager&&(t=this.map.snappingManager._snappingPoint);var o,i,s,a=t||e.mapPoint,r=this.map,c=r.toScreen(a),h=L;switch(this._points.push(a.offset(0,0)),this._geometryType){case h.POINT:this._drawEnd(a.offset(0,0)),this._setTooltipMessage(0);break;case h.POLYLINE:if(1===this._points.length){var l=new R(r.spatialReference);l.addPath(this._points),this._graphic=r.graphics.add(new M(l,this.lineSymbol),!0),r.snappingManager&&r.snappingManager._setGraphic(this._graphic),this._onMouseMoveHandler_connect=n.connect(r,"onMouseMove",this._onMouseMoveHandler),this._tGraphic=r.graphics.add(new M(new R({paths:[[[a.x,a.y],[a.x,a.y]]],spatialReference:r.spatialReference}),this.lineSymbol),!0)}else this._graphic.geometry._insertPoints([a.offset(0,0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.lineSymbol),o=this._tGraphic,i=o.geometry,i.setPoint(0,0,a.offset(0,0)),i.setPoint(0,1,a.offset(0,0)),o.setGeometry(i);break;case h.POLYGON:1===this._points.length?(s=new E(r.spatialReference),s.addRing(this._points),this._graphic=r.graphics.add(new M(s,this.fillSymbol),!0),r.snappingManager&&r.snappingManager._setGraphic(this._graphic),this._onMouseMoveHandler_connect=n.connect(r,"onMouseMove",this._onMouseMoveHandler),this._tGraphic=r.graphics.add(new M(new R({paths:[[[a.x,a.y],[a.x,a.y]]],spatialReference:r.spatialReference}),this.fillSymbol),!0)):(this._graphic.geometry._insertPoints([a.offset(0,0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.fillSymbol),o=this._tGraphic,i=o.geometry,i.setPoint(0,0,a.offset(0,0)),i.setPoint(0,1,a.offset(0,0)),o.setGeometry(i));break;case h.MULTI_POINT:var _=this._points;if(1===_.length){var p=new T(r.spatialReference);p.addPoint(_[_.length-1]),this._graphic=r.graphics.add(new M(p,this.markerSymbol),!0),r.snappingManager&&r.snappingManager._setGraphic(this._graphic)}else this._graphic.geometry.addPoint(_[_.length-1]),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.markerSymbol);break;case h.ARROW:this._addShape([[0,0],[-24,24],[-24,12],[-96,12],[-96,-12],[-24,-12],[-24,-24],[0,0]],c.x,c.y);break;case h.LEFT_ARROW:this._addShape([[0,0],[24,24],[24,12],[96,12],[96,-12],[24,-12],[24,-24],[0,0]],c.x,c.y);break;case h.RIGHT_ARROW:this._addShape([[0,0],[-24,24],[-24,12],[-96,12],[-96,-12],[-24,-12],[-24,-24],[0,0]],c.x,c.y);break;case h.UP_ARROW:this._addShape([[0,0],[-24,24],[-12,24],[-12,96],[12,96],[12,24],[24,24],[0,0]],c.x,c.y);break;case h.DOWN_ARROW:this._addShape([[0,0],[-24,-24],[-12,-24],[-12,-96],[12,-96],[12,-24],[24,-24],[0,0]],c.x,c.y);break;case h.TRIANGLE:this._addShape([[0,-48],[41.56921938165306,24],[-41.56921938165306,24],[0,-48]],c.x,c.y);break;case h.RECTANGLE:this._addShape([[0,-96],[96,-96],[96,0],[0,0],[0,-96]],c.x-48,c.y+48);break;case h.CIRCLE:this._clear(),this._drawEnd(E.createCircle({center:c,r:48,numberOfPoints:60,map:r}));break;case h.ELLIPSE:this._clear(),this._drawEnd(E.createEllipse({center:c,longAxis:48,shortAxis:24,numberOfPoints:60,map:r}))}this._setTooltipMessage(this._points.length)},_addShape:function(e,t,o){this._setTooltipMessage(0),this._clear(),this._drawEnd(this._toPolygon(e,t,o))},_toPolygon:function(e,t,n){var i=this.map,s=new E(i.spatialReference);return s.addRing(o.map(e,function(e){return i.toMap({x:e[0]+t,y:e[1]+n})})),s},_onDblClickHandler:function(e){var t,i=this._points,s=this.map,r=s.spatialReference,c=L;a("esri-touch")&&i.push(e.mapPoint);var h=i[i.length-1],l=i[i.length-2];switch(i=h&&l&&h.x===l.x&&h.y===l.y?i.slice(0,i.length-1):i.slice(0,i.length),this._geometryType){case c.POLYLINE:if(!this._graphic||i.length<2)return n.disconnect(this._onMouseMoveHandler_connect),this._clear(),void this._onClickHandler(e);t=new R(r),t.addPath([].concat(i));break;case c.POLYGON:if(!this._graphic||i.length<2)return n.disconnect(this._onMouseMoveHandler_connect),this._clear(),void this._onClickHandler(e);t=new E(r);var _=[].concat(i,[i[0].offset(0,0)]);E.prototype.isClockwise(_)||this.respectDrawingVertexOrder||(console.debug(this.declaredClass+" :  Polygons drawn in anti-clockwise direction will be reversed to be clockwise."),_.reverse()),t.addRing(_);break;case c.MULTI_POINT:t=new T(r),o.forEach(i,function(e){t.addPoint(e)})}n.disconnect(this._onMouseMoveHandler_connect),this._clear(),this._setTooltipMessage(0),this._drawEnd(t)},_onKeyDownHandler:function(e){e.keyCode===c.ESCAPE&&(n.disconnect(this._onMouseMoveHandler_connect),this._clear(),this._setTooltipMessage(0))},_toggleTooltip:function(e){if(this._options.showTooltips)if(e){if(this._tooltip)return;var t=this.map.container;this._tooltip=h.create("div",{"class":"tooltip"},t),_.isBodyLtr()||l.set(this._tooltip,"direction","rtl"),this._tooltip.style.display="none",this._tooltip.style.position="fixed",this._setTooltipMessage(0),this._onTooltipMouseEnterHandler_connect=n.connect(this.map,"onMouseOver",this._updateTooltip),this._onTooltipMouseLeaveHandler_connect=n.connect(this.map,"onMouseOut",this._hideTooltip),this._onTooltipMouseMoveHandler_connect=n.connect(this.map,"onMouseMove",this._updateTooltip)}else this._tooltip&&(n.disconnect(this._onTooltipMouseEnterHandler_connect),n.disconnect(this._onTooltipMouseLeaveHandler_connect),n.disconnect(this._onTooltipMouseMoveHandler_connect),h.destroy(this._tooltip),this._tooltip=null)},_hideTooltip:function(){var e=this._tooltip;e&&(e.style.display="none")},_setTooltipMessage:function(e){var t=this._tooltip;if(t){var o=e,n="";switch(this._geometryType){case L.POINT:n=O.toolbars.draw.addPoint;break;case L.ARROW:case L.LEFT_ARROW:case L.RIGHT_ARROW:case L.UP_ARROW:case L.DOWN_ARROW:case L.TRIANGLE:case L.RECTANGLE:case L.CIRCLE:case L.ELLIPSE:n=O.toolbars.draw.addShape;break;case L.LINE:case L.EXTENT:case L.FREEHAND_POLYLINE:case L.FREEHAND_POLYGON:n=O.toolbars.draw.freehand;break;case L.POLYLINE:case L.POLYGON:n=O.toolbars.draw.start,1===o?n=O.toolbars.draw.resume:o>=2&&(n=O.toolbars.draw.complete);break;case L.MULTI_POINT:n=O.toolbars.draw.addMultipoint,o>=1&&(n=O.toolbars.draw.finish)}t.innerHTML=n}},_updateTooltip:function(e){var t=this._tooltip;if(t){var o,n;e.clientX||e.pageY?(o=e.clientX,n=e.clientY):(o=e.clientX+s.body().scrollLeft-s.body().clientLeft,n=e.clientY+s.body().scrollTop-s.body().clientTop),t.style.display="none",l.set(t,{left:o+this._options.tooltipOffset+"px",top:n+"px"}),t.style.display=""}},_redrawGraphic:function(e,t,o,n){if(o||this.map.wrapAround180){var i=this._graphic;i&&i.setGeometry(i.geometry),i=this._tGraphic,i&&i.setGeometry(i.geometry)}},onActivate:function(){},onDeactivate:function(){},onDrawComplete:function(){},onDrawEnd:function(){}});return t.mixin(L,{POINT:"point",MULTI_POINT:"multipoint",LINE:"line",EXTENT:"extent",POLYLINE:"polyline",POLYGON:"polygon",FREEHAND_POLYLINE:"freehandpolyline",FREEHAND_POLYGON:"freehandpolygon",ARROW:"arrow",LEFT_ARROW:"leftarrow",RIGHT_ARROW:"rightarrow",UP_ARROW:"uparrow",DOWN_ARROW:"downarrow",TRIANGLE:"triangle",CIRCLE:"circle",ELLIPSE:"ellipse",RECTANGLE:"rectangle"}),a("extend-esri")&&t.setObject("toolbars.Draw",L,p),L});