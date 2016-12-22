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

define(["dojo/_base/lang","dojo/has","dojo/dom-construct","dojo/dom-style","dojo/io-query","../geometry/Extent","../geometry/screenUtils","../geometry/scaleUtils","../SpatialReference","../config","../lang","../domUtils","../urlUtils","../kernel","./layer","./TileInfo","./unitBezier","./vectorTiles/request","./vectorTiles/core/promiseUtils","./vectorTiles/core/urlUtils","./vectorTiles/layers/support/vectorTileLayerLoader","./vectorTiles/views/vectorTiles/style/StyleRepository","./vectorTiles/views/vectorTiles/VectorTileContainer","./vectorTiles/views/vectorTiles/TileHandler","./vectorTiles/views/2d/engine/StageGL","./vectorTiles/views/2d/FrameBudget","./vectorTiles/views/2d/layers/support/TileInfoView","./vectorTiles/views/2d/layers/support/TileStrategy","./vectorTiles/views/2d/layers/support/TileKey","./vectorTiles/views/webgl/webgl-utils"],function(e,t,i,n,s,a,r,h,l,o,c,d,_,u,p,g,m,f,v,y,w,S,x,T,R,b,H,C,P,U){var I=m.ease,V=p.createSubclass({declaredClass:"esri.layers.VectorTileLayer",_mapsWithAttribution:["World_Basemap"],_eventMap:{"style-change":["style"]},constructor:function(e,t){this._frame=this._frame.bind(this),this._params=t||{},t&&t.tileServers&&t.tileServers.length&&(this.tileServers=t.tileServers=t.tileServers.map(function(e){return _.getAbsoluteUrl(e)},this)),this._viewState={scale:0,width:0,height:0,size:[0,0],rotation:0,resolution:1,center:[0,0],toScreen:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,n=this.center[1]+this.resolution*this.height*.5;return e[0]=(t[0]-i)/this.resolution,e[1]=(n-t[1])/this.resolution,e},toMap:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,n=this.center[1]+this.resolution*this.height*.5;return e[0]=i+t[0]*this.resolution,e[1]=n-t[1]*this.resolution,e}},this._budget=new b(6),this._renderParameters={budget:this._budget,state:this._viewState,devicePixelRatio:window.devicePixelRatio,stationary:!0},this._updateParameters={budget:this._budget,state:this._viewState,devicePixelRatio:window.devicePixelRatio,stationary:!0},this.setStyle(e),this.registerConnectEvents()},setStyle:function(e){return this.loadStyle(e)},getStyle:function(){return this.currentStyleInfo&&this.currentStyleInfo.style||null},opacity:1,setOpacity:function(e){this.opacity!=e&&this.onOpacityChange(this.opacity=e)},onOpacityChange:function(){},_pinching:!1,_refreshTS:null,_reCheckTS:/[\?\&]_ts=/gi,_reReplaceTS:/([\?\&]_ts=)[0-9]+/gi,addTimestampToURL:function(e){var t=this._refreshTS;return t&&(this._reCheckTS.test(e)?e=e.replace(this._reReplaceTS,"$$$1"+t):e+=(-1===e.indexOf("?")?"?":"&")+"_ts="+t),e},getTileUrl:function(e,t,i){var n=this._getToken(),a=this._url&&this._url.query,r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{level\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{row\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()).replace(/\{col\}/gi,i.toString()),a&&(r+="?"+s.objectToQuery(a)),!n||a&&a.token||(r+=(-1===r.indexOf("?")?"?":"&")+"token="+n),r=this.addTimestampToURL(r),_.addProxy(r)},loadStyle:function(e){if(this._loadingPromise&&"string"==typeof e&&this.url===e)return this._loadingPromise;this._stopDisplay();var t=this._loadingPromise;return this._loadingPromise=w.loadMetadata(e).then(function(e){this.url=e.url,this._url=e.parsedUrl,this.currentStyleInfo={serviceUrl:e.serviceUrl,styleUrl:e.styleUrl,style:e.style,layerDefinition:e.layerDefinition},this.styleRepository=new S(e.style,e),this._read(e.layerDefinition),this.onStyleChange(this.getStyle())}.bind(this)).then(function(){this.loaded||(this.loaded=!0,this.onLoad(this)),this.suspended||this._tileHandler||this._startDisplay()}.bind(this)).otherwise(function(e){throw this._errorHandler(e),e}.bind(this)),t&&!t.isFulfilled()&&t.cancel(),this._loadingPromise},refresh:function(){this.suspended||(this._refreshTS=Date.now(),this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD))},takeScreenshot:function(e){return this._stageGL?this._stageGL.takeScreenshot(e):v.reject("No valid GL context!")},_setMap:function(t,s,a){this.inherited(arguments),this._map=t;var r=this._div=i.create("div",null,s),h={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible",opacity:this.opacity};if(n.set(r,h),this._onResizeHandle=t.on("resize",e.hitch(this,this._onResizeHandler)),this._onOpacityHandle=this.on("opacity-change",e.hitch(this,this._opacityChangeHandler)),this._onScaleVisHandle=this.on("scale-visibility-change",e.hitch(this,function(){})),this._onVisibilityHandle=this.on("visibility-change",e.hitch(this,function(){})),this._stageGL=new R,this._stageGL.setElement(this._stageGL.createElement()),this._div.appendChild(this._stageGL.element),this._stageGL.parent={requestChildRender:this._scheduleRender.bind(this)},this._stageGL.attach(this._renderParameters),this._startDisplay(),this.evaluateSuspension(),this.suspended&&!t.loaded)var l=t.on("load",e.hitch(this,function(){l.remove(),this.evaluateSuspension()}));return r},_unsetMap:function(e,t){this._map=null,this.suspended||this._stopDisplay(),this._stageGL.detach(this._renderParameters),this._stageGL=null,i.destroy(this._div),this._div=null,this._handles&&this._handles.forEach(function(e){e.remove()}),this._handles=null,this._onResizeHandle=this._onResizeHandle&&this._onResizeHandle.remove()&&null,this._onOpacityHandle=this._onOpacityHandle&&this._onOpacityHandle.remove()&&null,this._onScaleVisHandle=this._onScaleVisHandle&&this._onScaleVisHandle.remove()&&null,this._onVisibilityHandle=this._onVisibilityHandle&&this._onVisibilityHandle.remove()&&null,this.inherited(arguments)},_read:function(e){this.version=e.currentVersion||e.version,this.fullExtent=new a(e.fullExtent),this.initialExtent=new a(e.initialExtent),this.spatialReference=this.fullExtent.spatialReference,this.tileInfo=new g(e.tileInfo),this.tileInfo.size=[this.tileInfo.cols,this.tileInfo.height],this.tileInfo.spatialReference.isWrappable=this.tileInfo.spatialReference._isWrappable(),this.tileInfo.scales=this.tileInfo.lods.map(function(e){return e.scale}),this.tileInfo.scaleToZoom=function(e){for(var t=this.scales,i=t.length-1,n=0;i>n;n++){var s=t[n],a=t[n+1];if(e>=s)return n;if(a===e)return n+1;if(s>e&&e>a)return n+1-(e-a)/(s-a)}return n},this._hasMin||this.setMinScale(e.minScale),this._hasMax||this.setMaxScale(e.maxScale),e.tileMap&&(this.tileIndexUrl=y.join(this.currentStyleInfo.serviceUrl,e.tileMap)),this._params.tileServers||(this.currentStyleInfo.serviceUrl?this.tileServers=e.tiles.map(function(e,t,i){return y.join(this.currentStyleInfo.serviceUrl,e)},this):this.tileServers=e.tiles);var t=null;if(this.currentStyleInfo.serviceUrl){var i=y.urlToObject(this.currentStyleInfo.serviceUrl);t=this._getDefaultAttribution(i.path)}t?(this.attributionDataUrl=t,this.hasAttributionData=!0):(this.attributionDataUrl=null,this.hasAttributionData=!1)},_getDefaultAttribution:function(e){var t=e.match(/^https?:\/\/(basemaps|basemapsbeta)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var i=t[3];if(i){var n,s=t[2]||"";i=i.toLowerCase();for(var a=0,r=this._mapsWithAttribution.length;r>a;a++)if(n=this._mapsWithAttribution[a],n.toLowerCase().indexOf(i)>-1){var h=window.location.protocol;return("http:"===h||"https:"===h?h:"https:")+"//static.arcgis.com/attribution/Vector"+s+"/"+n}}}},_startDisplay:function(){var e={styleRepository:this.styleRepository,tileIndexUrl:this.tileIndexUrl,tileInfo:this.tileInfo,fullExtent:{width:this.fullExtent.getWidth()},getTileUrl:this.getTileUrl.bind(this)};this._renderParameters.devicePixelRatio=this._updateParameters.devicePixelRatio=window.devicePixelRatio,this._vectorTileContainer=new x,this._stageGL.addChild(this._vectorTileContainer),this._tileHandler=new T(e,this._scheduleUpdate.bind(this)),this._tileInfoView=new H(this.tileInfo,this.fullExtent),this._tileHandler.updateTile.bind(this._tileHandler),this._tileHandler.start().then(function(){this._tileStrategy=new C(this._vectorTileContainer,this._tileInfoView,this._scheduleUpdate.bind(this),function(e,t){return this._tileHandler.getVectorTile(P.fromId(e),t)}.bind(this)),this._vectorTileContainer.initialize(this._tileHandler.spriteMosaic,this._tileHandler.glyphMosaic,this.tileInfo,this._tileInfoView),this._scheduleUpdate()}.bind(this))},_stopDisplay:function(){this._tileStrategy&&(this._renderRequested=!1,this._updateRequested=!1,this._frameRequested=!1,this._animation&&(this._animation.stop(),this._animation=null),this._vectorTileContainer.removeAllChildren(),this._stageGL.removeChild(this._vectorTileContainer),this._vectorTileContainer=null,this._tileHandler.stop(),this._tileHandler.destroy(),this._tileStrategy.destroy(),this._tileInfoView=this._tileHandler=this._tileStrategy=null)},_scheduleRender:function(){this._renderRequested=!0,this._map&&this._tileStrategy&&this._scheduleFrame()},_scheduleUpdate:function(){this._updateRequested=!0,this._map&&this._tileStrategy&&this._scheduleFrame()},_scheduleFrame:function(){this._map&&(this._frameRequested||(this._frameRequested=!0,G(this._frame)))},_frame:function(){if(this._frameRequested){this._frameRequested=!1,this._renderParameters.devicePixelRatio!==window.devicePixelRatio&&(this._renderParameters.devicePixelRatio=this._updateParameters.devicePixelRatio=window.devicePixelRatio,this._stopDisplay(),this._startDisplay()),this._animation&&(this._animation.step(),this._animation.running||(this._animation=null));var e=!this._animation&&!this._pinching&&!this._panning;if(this._updateParameters.stationary=this._renderParameters.stationary=e,this._budget.reset(),this._viewState.resolution=this._viewState.scale/(39.37*h.getUnitValueForSR(this.spatialReference)*96),this._renderRequested&&(this._renderRequested=!1,this._stageGL.render(this._renderParameters)),this._updateRequested){this._updateRequested=!1;var t=this._tileHandler.updateTile.bind(this._tileHandler);this._tileStrategy.updateTiles(t,this._updateParameters),this._tileStrategy.update(this._updateParameters)}this._animation&&(this._scheduleRender(),this._scheduleUpdate())}},_setViewState:function(t){t=e.mixin(this._viewState,t),t.center.type&&(t.center=[t.center.x,t.center.y]),this._scheduleRender(),this._scheduleUpdate()},_animateViewState:function(e,t){var i=t.immediate||0===o.defaults.map.zoomDuration;if(this._animation=null,i)return void this._setViewState(e);var n=this._viewState,s=o.defaults.map.zoomDuration,a=D()+16,r=n.center[0],h=n.center[1],l=n.scale,c=Array.isArray(e.center)?e.center[0]:e.center.x,d=Array.isArray(e.center)?e.center[1]:e.center.y,_=e.scale||n.scale,u=this;this._animation={running:!0,stop:function(){this.running=!1},step:function(){if(this.running){var e=D()+16,t=(e-a)/s;t>=1&&(t=1,this.running=!1);var i=I(t),n=l+(_-l)*i,o=r+(c-r)*i,p=h+(d-h)*i;u._setViewState({center:[o,p],scale:n})}}},this._scheduleRender(),this._scheduleUpdate()},onStyleChange:function(e){},_opacityChangeHandler:function(e){this._div&&(this._div.style.opacity=e.opacity)},_onResizeHandler:function(e){var t=this._div&&this._div.style;if(t){t.width=e.width+"px",t.height=e.height+"px";this._map;this._setViewState({center:e.extent.getCenter(),width:e.width,height:e.height,size:[e.width,e.height]})}},onResume:function(){var t=this._map;this.inherited(arguments),d.show(this._div),this._setViewState({center:t.extent.getCenter(),scale:t.getScale(),width:t.width,height:t.height,size:[t.width,t.height]}),this._handles=[t.on("pan-end",e.hitch(this,this._onPanEndHandler)),t.on("pan",e.hitch(this,this._onPanExtentChangeHandler)),t.on("extent-change",e.hitch(this,this._onExtentChangeHandler)),t.on("scale",e.hitch(this,this._onScaleHandler))]},onSuspend:function(){this.inherited(arguments),d.hide(this._div),this._handles.forEach(function(e){e.remove()}),this._handles=null},_onPanEndHandler:function(e){this._panning=!1,this._setViewState({center:e.extent.getCenter(),scale:this._map.getScale()})},_onPanExtentChangeHandler:function(e){this._panning=!0,this._animation&&(this._animation.stop(),this._animation=null),this._setViewState({center:e.extent.getCenter(),scale:this._map.getScale()})},_onExtentChangeHandler:function(e){var t=this._pinching||e.immediate;this._animateViewState({center:e.extent.getCenter(),scale:e.lod.scale},{immediate:t}),this._pinching=!1},_onScaleHandler:function(e){this._animation&&(this._animation.stop(),this._animation=null);var t=this._map;if(t._zoomAnimDiv.extent)return this._panning=!1,this._pinching=!1,void this._animateViewState({center:t._zoomAnimDiv.extent.getCenter(),scale:t._zoomAnimDiv.newLod.scale},{immediate:e.immediate});var i,n,s,a,r,h=t.navigationManager,l=h._dragOrigin,o=t.extent.getCenter(),c=l.x-.5*t.width,d=l.y-.5*t.height,_=t.extent.getWidth()/t.width;h._pinchScale?(this._pinching=!0,i=h._pinchScale,n=_/i,s=c*(n-_),a=d*(n-_),o.x-=s,o.y+=a,r=t.__LOD.scale/i,this._setViewState({center:o,scale:r})):h._zoomEndExtent&&(this._pinching=!1,i=t.getScale()/t.navigationManager._zoomEndLod.scale,n=_/i,s=c*(n-_),a=d*(n-_),o.x-=s,o.y+=a,r=t.navigationManager._zoomEndLod.scale,this._animateViewState({center:o,scale:r},{immediate:!1}))}});V.ACCESS_TOKEN=null,V.supported=function(){return U.detectWebGL()[0]};var L,D=function(){var e,t=window.performance||{},i=t.now||t.webkitNow||t.msNow||t.oNow||t.mozNow;return void 0!==i?function(){return i.call(t)}:(e=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime(),function(){return(new Date).getTime()-e})}(),E=t("ff"),z=t("ie"),q=t("webkit"),A=t("opera"),M=(new Date).getTime(),G=window.requestAnimationFrame;return G||(L=q&&"webkit"||E&&"moz"||A&&"o"||z&&"ms",G=window[L+"RequestAnimationFrame"],G||(G=function(e){var t=D(),i=Math.max(0,16-(t-M)),n=window.setTimeout(function(){e(D())},i);return M=t+i,n})),V});