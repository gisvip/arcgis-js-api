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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/mouse","dojo/keys","dijit/focus","./kernel","./MouseEvents","./TouchEvents","./PointerEvents","./config","./sniff","./lang","./fx","./graphic","./tileUtils","./geometry/ScreenPoint","./geometry/Extent","./geometry/Rect","./geometry/mathUtils","./symbols/SimpleFillSymbol"],function(t,e,i,n,s,o,a,h,l,_,r,d,c,m,p,u,g,E,v,H,b,y,f){var P=n.connect,x=n.disconnect,w=m("chrome"),k=m("safari"),D=1,z=-1,M=100,S=10,A=[a.NUMPAD_PLUS,61,187,a.NUMPAD_MINUS,173,189,a.UP_ARROW,a.NUMPAD_8,a.RIGHT_ARROW,a.NUMPAD_6,a.DOWN_ARROW,a.NUMPAD_2,a.LEFT_ARROW,a.NUMPAD_4,a.PAGE_UP,a.NUMPAD_9,a.PAGE_DOWN,a.NUMPAD_3,a.END,a.NUMPAD_1,a.HOME,a.NUMPAD_7],O=t(null,{declaredClass:"esri.MapNavigationManager",eventModel:"",constructor:function(t,i){this.map=t,e.mixin(this,i);var n=t.__container;m("esri-pointer")?(this.pointerEvents=new d(n,{map:t}),this.eventModel="pointer"):m("esri-touch")?(m("ios")||(this.mouseEvents=new _(n,{map:t})),this.touchEvents=new r(n,{map:t,mouseEvents:this.mouseEvents}),this.eventModel="touch"):(this.mouseEvents=new _(n,{map:t}),this.eventModel="mouse"),this._zoomRect=new g(null,new f(c.defaults.map.zoomSymbol)),this._keyDx=this._keyDy=0,this._adjustPinch=e.hitch(this,this._adjustPinch),this._adjustPinchEnd=e.hitch(this,this._adjustPinchEnd)},_panInit:function(t){var i=this.mouseEvents;o.isLeft(t)&&this.map.isPan&&!t.shiftKey&&(this._dragOrigin=new v(0,0),e.mixin(this._dragOrigin,t.screenPoint),x(this._panStartHandle),x(this._panHandle),x(this._panEndHandle),this._panStartHandle=P(i,"onMouseDragStart",this,this._panStart),this._panHandle=P(i,"onMouseDrag",this,this._pan),this._panEndHandle=P(i,"onMouseUp",this,this._panEnd),(w||k)&&(t.preventDefault(),h.curNode&&h.curNode.blur()))},_panStart:function(t){this.map.setCursor("move"),this.map.__panStart(t.screenPoint.x,t.screenPoint.y)},_pan:function(t){this.map.__pan(t.screenPoint.x-this._dragOrigin.x,t.screenPoint.y-this._dragOrigin.y)},_panEnd:function(t){x(this._panStartHandle),x(this._panHandle),x(this._panEndHandle),this._panStartHandle=this._panHandle=this._panEndHandle=null;var e=this.map;e.__panning&&(e.__panEnd(t.screenPoint.x-this._dragOrigin.x,t.screenPoint.y-this._dragOrigin.y),e.resetMapCursor())},_zoomInit:function(t){var i=this.map,n=this.pointerEvents||this.mouseEvents;(o.isLeft(t)||t.pointerType)&&i.isRubberBandZoom&&t.shiftKey&&(i.setCursor("crosshair"),this._dragOrigin=e.mixin({},t.screenPoint),this._zoomDir=t.ctrlKey||t.metaKey?z:D,this.pointerEvents?(this._zoomHandle=P(n,"onSwipeMove",this,this._zoom),this._zoomEndHandle=P(n,"onSwipeEnd",this,this._zoomEnd)):(this._zoomHandle=P(n,"onMouseDrag",this,this._zoom),this._zoomEndHandle=P(n,"onMouseUp",this,this._zoomEnd)),w&&t.preventDefault())},_zoom:function(t){var e=this.map,i=this._normalizeRect(t).offset(e.__visibleRect.x,e.__visibleRect.y),n=e.graphics,s=this._zoomRect;s.geometry||e.setCursor("crosshair"),s.geometry&&n.remove(s,!0);var o=e.toMap(new v(i.x,i.y)),a=e.toMap(new v(i.x+i.width,i.y+i.height));i=new b(o.x,o.y,a.x-o.x,o.y-a.y,e.spatialReference),i._originOnly=!0,s.setGeometry(i),n.add(s,!0)},_zoomEnd:function(t){var e=this._zoomRect,i=this.map,n=i.extent,s=i.spatialReference;if(x(this._zoomHandle),x(this._zoomEndHandle),this._zoomHandle=this._zoomEndHandle=null,i._canZoom(this._zoomDir)&&e.getDojoShape()){i.graphics.remove(e),e.geometry=null;var o=this._normalizeRect(t);o.x+=i.__visibleRect.x,o.y+=i.__visibleRect.y;var a;if(this._zoomDir===z){var h=n.getWidth(),l=h*i.width/o.width,_=(l-h)/2;a=new H(n.xmin-_,n.ymin-_,n.xmax+_,n.ymax+_,s)}else{var r=i.toMap({x:o.x,y:o.y+o.height}),d=i.toMap({x:o.x+o.width,y:o.y});a=new H(r.x,r.y,d.x,d.y,s)}i._extentUtil(null,null,a)}e.getDojoShape()&&i.graphics.remove(e,!0),this._zoomDir=0,i.resetMapCursor()},_wheelZoom:function(t,e){var i=this.map;if(!e){if(i.smartNavigation&&!t.shiftKey&&!i._isPanningOrZooming())return i.disableScrollWheelZoom(),this._setScrollWheelPan(!0),void this._wheelPan(t);var n=t.timeStamp;(!p.isDefined(n)||0>=n)&&(n=(new Date).getTime());var s=this._mwts?n-this._mwts:n;if(M>s)return;this._mwts=n}i._canZoom(t.value)&&i._extentUtil({numLevels:t.value,mapAnchor:t.mapPoint,screenAnchor:t.screenPoint})},_wheelPan:function(t){var e=this.map;if(t.shiftKey&&!e._isPanningOrZooming())return this._setScrollWheelPan(!1),e.enableScrollWheelZoom(),void this._wheelZoom(t);var i=0,n=0;m("ff")?t.axis===t.HORIZONTAL_AXIS?i=-t.detail:n=-t.detail:(i=t.wheelDeltaX,n=t.wheelDeltaY),e.translate(i,n)},_setScrollWheelPan:function(t){var e=this.map;e.isScrollWheelPan=t,this.mouseEvents.enableMouseWheel(t),x(this._mwMacHandle),this._mwMacHandle=null,t&&(this._mwMacHandle=P(this.mouseEvents,"onMouseWheel",this,this._wheelPan))},_recenter:function(t){t.shiftKey&&!this.map._isPanningOrZooming()&&this.map.centerAt(t.mapPoint)},_recenterZoom:function(t){t.shiftKey&&!this.map._isPanningOrZooming()&&(t.value=t.ctrlKey||t.metaKey?z:D,this._wheelZoom(t,!0))},_dblClickZoom:function(t){this.map._isPanningOrZooming()||(t.value=1,this._wheelZoom(t,!0))},_twoFingerTap:function(t){this.map._isPanningOrZooming()||(t.value=-1,this._wheelZoom(t,!0))},_keyDown:function(t){var e=t.keyCode,n=this.map;if(-1!==i.indexOf(A,e)){if(e===a.NUMPAD_PLUS||61===e||187===e)n._extentUtil({numLevels:1});else if(e===a.NUMPAD_MINUS||173===e||189===e)n._extentUtil({numLevels:-1});else{switch(n.__panning||n.__panStart(0,0),e){case a.UP_ARROW:case a.NUMPAD_8:this._keyDy+=S;break;case a.RIGHT_ARROW:case a.NUMPAD_6:this._keyDx-=S;break;case a.DOWN_ARROW:case a.NUMPAD_2:this._keyDy-=S;break;case a.LEFT_ARROW:case a.NUMPAD_4:this._keyDx+=S;break;case a.PAGE_UP:case a.NUMPAD_9:this._keyDx-=S,this._keyDy+=S;break;case a.PAGE_DOWN:case a.NUMPAD_3:this._keyDx-=S,this._keyDy-=S;break;case a.END:case a.NUMPAD_1:this._keyDx+=S,this._keyDy-=S;break;case a.HOME:case a.NUMPAD_7:this._keyDx+=S,this._keyDy+=S;break;default:return}n.__pan(this._keyDx,this._keyDy)}s.stop(t)}},_keyEnd:function(t){var e=this.map;e.__panning&&t.keyCode!==a.SHIFT&&(e.__panEnd(this._keyDx,this._keyDy),this._keyDx=this._keyDy=0)},_swipeInit:function(t){var i=this.map,n=i._zoomAnim||i._panAnim;return t.shiftKey?!1:(n&&n._active&&(n.stop(),n._fire("onEnd",[n.node])),this._dragOrigin=new v(0,0),e.mixin(this._dragOrigin,t.screenPoint),x(this._swipeHandle),x(this._swipeEndHandle),this._swipeHandle=P(this.touchEvents||this.pointerEvents,"onSwipeMove",this,this._swipe),void(this._swipeEndHandle=P(this.touchEvents||this.pointerEvents,"onSwipeEnd",this,this._swipeEnd)))},_swipe:function(t){var e=this.map;e.__panning?(this._panX=t.screenPoint.x,this._panY=t.screenPoint.y,e.__pan(t.screenPoint.x-this._dragOrigin.x,t.screenPoint.y-this._dragOrigin.y)):(e.setCursor("move"),e.__panStart(t.screenPoint.x,t.screenPoint.y))},_swipeEnd:function(t){x(this._swipeHandle),x(this._swipeEndHandle),this._swipeHandle=this._swipeEndHandle=null;var e=this.map;e.__panning&&(e.resetMapCursor(),e.__panEnd(t.screenPoint.x-this._dragOrigin.x,t.screenPoint.y-this._dragOrigin.y))},_pinchInit:function(t){var e=this.map,i=e._zoomAnim||e._panAnim;i&&i._active?(i.stop(),i._fire("onEnd",[i.node])):e.__panning&&(t.screenPoint=new v(this._panX,this._panY),t.mapPoint=e.toMap(t.screenPoint),this._swipeEnd(t)),x(this._pinchHandle),x(this._pinchEndHandle),this._pinchHandle=P(this.touchEvents||this.pointerEvents,"onPinchMove",this,this._pinch),this._pinchEndHandle=P(this.touchEvents||this.pointerEvents,"onPinchEnd",this,this._pinchEnd)},_pinch:function(t){var e=this.map;if(t.screenPoints){this.currLength=y.getLength(t.screenPoints[0],t.screenPoints[1]);var i;e.__zooming?(i=this.currLength/this._length,this._zoomStartExtent=this.__scaleExtent(e.extent,i,this._dragOrigin),e.__zoom(this._zoomStartExtent,i,this._dragOrigin)):(this._dragOrigin=new v((t.screenPoints[0].x+t.screenPoints[1].x)/2,(t.screenPoints[0].y+t.screenPoints[1].y)/2),this._length=this.currLength,e.__zoomStart(e.extent,this._dragOrigin)),this._pinchScale=i,e._fireOnScale(this.currLength/this._length,this._dragOrigin,!0)}},_pinchEnd:function(t){var e=this.map;if(x(this._pinchHandle),x(this._pinchEndHandle),this._pinchHandle=this._pinchEndHandle=null,this._pinchScale=0,e.__zooming&&null===e._zoomAnim){var i=this.currLength/this._length,n=e.extent.getWidth();if(this._zoomAnimAnchor=e.toMap(this._dragOrigin),this._zoomStartExtent=this.__scaleExtent(e.extent,1/i,this._zoomAnimAnchor),e.__tileInfo){var s=E.getCandidateTileInfo(e,e.__tileInfo,this._zoomStartExtent),o=e.__getExtentForLevel(s.lod.level,this._zoomAnimAnchor),a=e.getMinZoom(),h=e.getMaxZoom(),l=o.extent,_=o.lod,r=n/l.getWidth(),d=s.lod.level;1>i?r>i&&d--:i>r&&d++,a>d?d=a:d>h&&(d=h),d!==s.lod.level&&(o=e.__getExtentForLevel(d,this._zoomAnimAnchor),l=o.extent,_=o.lod),this._zoomEndExtent=l,this._zoomEndLod=_,e._zoomAnim=u.animateRange({range:{start:n/this._zoomStartExtent.getWidth(),end:r},duration:c.defaults.map.zoomDuration,rate:c.defaults.map.zoomRate,onAnimate:this._adjustPinch,onEnd:this._adjustPinchEnd}),e._zoomAnim.play(),e._fireOnScale(e.extent.getWidth()/this._zoomEndExtent.getWidth(),this._dragOrigin)}else this._zoomEndExtent=this._zoomStartExtent,e._fireOnScale(e.extent.getWidth()/this._zoomEndExtent.getWidth(),this._dragOrigin),this._adjustPinchEnd()}},_adjustPinch:function(t){var e=this.__scaleExtent(this.map.extent,t,this._zoomAnimAnchor);this.map.__zoom(e,t,this._dragOrigin)},_adjustPinchEnd:function(){var t=this.map,e=t.extent.getWidth()/this._zoomEndExtent.getWidth(),i=this.__scaleExtent(t.extent,1/e,this._zoomAnimAnchor),n=this._dragOrigin,s=this._zoomEndLod;this._zoomStartExtent=this._zoomEndExtent=this._zoomEndLod=this._dragOrigin=t._zoomAnim=this._zoomAnimAnchor=null,t.__zoomEnd(i,e,n,s,!0)},__scaleExtent:function(t,e,i){var n=i||t.getCenter(),s=t.expand(e),o=t.xmin-(s.getWidth()-t.getWidth())*(n.x-t.xmin)/t.getWidth(),a=t.ymax-(s.getHeight()-t.getHeight())*(n.y-t.ymax)/t.getHeight();return new H(o,a-s.getHeight(),o+s.getWidth(),a,t.spatialReference)},_normalizeRect:function(t){var e=t.screenPoint,i=this._dragOrigin.x,n=this._dragOrigin.y,s=new b((e.x<i?e.x:i)-this.map.__visibleRect.x,(e.y<n?e.y:n)-this.map.__visibleRect.y,Math.abs(e.x-i),Math.abs(e.y-n));return delete s.spatialReference,0===s.width&&(s.width=1),0===s.height&&(s.height=1),s},setImmediateClick:function(t){switch(this.eventModel){case"mouse":this.mouseEvents.setImmediateClick(t);break;case"touch":this.touchEvents.setImmediateTap(t),this.mouseEvents&&this.mouseEvents.setImmediateClick(t);break;case"pointer":this.pointerEvents.setImmediateTap(t)}},enablePan:function(){switch(this.disablePan(),this.eventModel){case"mouse":this._panInitHandle=P(this.mouseEvents,"onMouseDown",this,this._panInit);break;case"touch":this._panInitHandle=P(this.mouseEvents,"onMouseDown",this,this._panInit),this._swipeInitHandle=P(this.touchEvents,"onSwipeStart",this,this._swipeInit);break;case"pointer":this._swipeInitHandle=P(this.pointerEvents,"onSwipeStart",this,this._swipeInit)}},disablePan:function(){x(this._panInitHandle),this._panInitHandle=null,x(this._swipeInitHandle),this._swipeInitHandle=null},enableRubberBandZoom:function(){this.disableRubberBandZoom(),this._zoomInitHandle=this.pointerEvents?P(this.pointerEvents,"onSwipeStart",this,this._zoomInit):P(this.mouseEvents,"onMouseDown",this,this._zoomInit)},disableRubberBandZoom:function(){x(this._zoomInitHandle),this._zoomInitHandle=null},enablePinchZoom:function(){this.disablePinchZoom(),("touch"===this.eventModel||"pointer"===this.eventModel)&&(this._pinchInitHandle=P(this.touchEvents||this.pointerEvents,"onPinchStart",this,this._pinchInit))},disablePinchZoom:function(){x(this._pinchInitHandle),this._pinchInitHandle=null},enableScrollWheelZoom:function(){this.disableScrollWheelZoom(),this._wheelHandle=P(this.mouseEvents||this.pointerEvents,"onMouseWheel",this,this._wheelZoom)},disableScrollWheelZoom:function(){x(this._wheelHandle),this._wheelHandle=null},enableDoubleClickZoom:function(){switch(this.disableDoubleClickZoom(),this.eventModel){case"mouse":this._dblClickHandle=P(this.mouseEvents,"onDblClick",this,this._dblClickZoom);break;case"touch":this._dblClickHandle=P(this.mouseEvents,"onDblClick",this,this._dblClickZoom),this._dblTapHandle=P(this.touchEvents,"onDoubleTap",this,this._dblClickZoom),this._zoomOutHandle=P(this.touchEvents,"onTwoFingerTap",this,this._twoFingerTap);break;case"pointer":this._dblTapHandle=P(this.pointerEvents,"onDoubleTap",this,this._dblClickZoom),this._zoomOutHandle=P(this.pointerEvents,"onTwoFingerTap",this,this._twoFingerTap)}},disableDoubleClickZoom:function(){x(this._dblClickHandle),x(this._zoomOutHandle),this._dblTapHandle&&x(this._dblTapHandle),this._dblClickHandle=this._zoomOutHandle=this._dblTapHandle=null},enableShiftDoubleClickZoom:function(){this.disableShiftDoubleClickZoom(),this._sDblClickHandle=P(this.pointerEvents||this.mouseEvents,"onDblClick",this,this._recenterZoom)},disableShiftDoubleClickZoom:function(){x(this._sDblClickHandle),this._sDblClickHandle=null},enableClickRecenter:function(){this.disableClickRecenter(),this._recenterHandle=P(this.pointerEvents||this.mouseEvents,"onClick",this,this._recenter)},disableClickRecenter:function(){x(this._recenterHandle),this._recenterHandle=null},enableKeyboardNavigation:function(){this.disableKeyboardNavigation(),this._keyHandle=P(this.pointerEvents||this.mouseEvents,"onKeyDown",this,this._keyDown),this._keyEndHandle=P(this.pointerEvents||this.mouseEvents,"onKeyUp",this,this._keyEnd)},disableKeyboardNavigation:function(){x(this._keyHandle),x(this._keyEndHandle),this._keyHandle=this._keyEndHandle=null},enableNavigation:function(){var t=this.map;t&&t.loaded&&(t.enableDoubleClickZoom(),t.enableClickRecenter(),t.enablePan(),t.enableRubberBandZoom(),this.enablePinchZoom(),t.enableKeyboardNavigation(),t.smartNavigation?this._setScrollWheelPan(!0):t.enableScrollWheelZoom())},disableNavigation:function(){var t=this.map;t&&t.loaded&&(t.disableDoubleClickZoom(),t.disableClickRecenter(),t.disablePan(),t.disableRubberBandZoom(),this.disablePinchZoom(),t.disableKeyboardNavigation(),t.disableScrollWheelZoom(),t.smartNavigation&&this._setScrollWheelPan(!1))},destroy:function(){this.touchEvents&&this.touchEvents.destroy(),this.mouseEvents&&this.mouseEvents.destroy(),this.pointerEvents&&this.pointerEvents.destroy();var t,e=[this._panInitHandle,this._panStartHandle,this._panHandle,this._panEndHandle,this._zoomInitHandle,this._zoomHandle,this._zoomEndHandle,this._wheelHandle,this._mwMacHandle,this._dblClickHandle,this._zoomOutHandle,this._recenterHandle,this._sDblClickHandle,this._dblTapHandle,this._keyHandle,this._keyEndHandle,this._swipeInitHandle,this._swipeHandle,this._swipeEndHandle,this._pinchInitHandle,this._pinchHandle,this._pinchEndHandle];for(t=0;t<e.length;t++)x(e[t]);this.map=this.touchEvents=this.mouseEvents=this.eventModel=this.pointerEvents=this._zoomRect=this._dragOrigin=this._panInitHandle=this._panStartHandle=this._panHandle=this._panEndHandle=this._zoomInitHandle=this._zoomHandle=this._zoomEndHandle=this._wheelHandle=this._mwMacHandle=this._dblClickHandle=this._zoomOutHandle=this._recenterHandle=this._sDblClickHandle=this._dblTapHandle=this._keyHandle=this._keyEndHandle=this._swipeInitHandle=this._swipeHandle=this._swipeEndHandle=this._pinchInitHandle=this._pinchHandle=this._pinchEndHandle=null}});return m("extend-esri")&&(l.MapNavigationManager=O),O});