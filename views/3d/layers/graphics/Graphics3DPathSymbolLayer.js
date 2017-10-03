// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DSymbolLayer","./Graphics3DGraphicLayer","./Graphics3DSymbolCommonCode","../../../../geometry/Point","../../support/projectionUtils","../../../../views/3d/lib/glMatrix","../../webgl-engine/Stage","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/materials/Material","../../webgl-engine/lib/Util","./graphicUtils"],function(e,t,r,i,a,n,o,s,l,p,h,c,d,g,y,u){function v(e,t,r,i){for(var a=e.getGeometryRecords(),o=a.length,s="absolute-height"!==t.mode,l=0,p=0;o>p;p++){var h=a[p].geometry,c=[a[p].transformation[12],a[p].transformation[13],a[p].transformation[14]],d=h.getData().getVertexAttr(),g=d[b.POSITION].data,y=d.zOffset.data,u=d.mapPos.data,v=u.length/3;_(g.length/3===v*A+2,"unexpected tube geometry");var m=0,f=0;D.spatialReference=r.spatialReference;for(var x=0,P=0;v>P;P++){D.x=u[3*P],D.y=u[3*P+1],D.z=u[3*P+2];var C=n.computeElevation(r,D,t,i,s?E:null);s&&(x+=E.terrainElevation);var G=A;(0===P||P===v-1)&&G++;for(var w=0;G>w;w++)S[0]=g[m]+c[0],S[1]=g[m+1]+c[1],S[2]=g[m+2]+c[2],i.setAltitude(C+y[f],S,0),g[m]=S[0]-c[0],g[m+1]=S[1]-c[1],g[m+2]=S[2]-c[2],m+=3,f+=1;h.invalidateBoundingInfo()}e.geometryVertexAttrsUpdated(p),l+=x/v}return l/o}var m=l.vec3d,f=l.mat4d,_=y.assert,x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var e=u.validateSymbolLayerSize(this._getSymbolSize());if(e)return this._logWarning(e),void this.reject()}var t=this._getStageIdHint(),r=this._getMaterialOpacityAndColor(),i=m.create(r),a=r[3],n={diffuse:i,ambient:i,opacity:a,transparent:1>a||this._isPropertyDriven("opacity"),vertexColors:this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};this._material=new g(n,t+"_3dlinemat"),this._context.stage.add(p.ModelContentType.MATERIAL,this._material),this.resolve()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.isFulfilled()||this.reject(),this._material&&(this._context.stage.remove(p.ModelContentType.MATERIAL,this._material.getId()),this._material=null)},t.prototype.createGraphics3DGraphic=function(e,t){var r=this._validateGeometry(e.geometry);if("polyline"!==r.type)return this._logWarning("unsupported geometry type for path symbol: "+r.type),null;var i="graphic"+e.uid,a=this.getGraphicElevationInfo(e);return this._createAs3DShape(e,t,a,i,e.uid)},t.prototype.layerPropertyChanged=function(e,t,r){if("opacity"===e){var i=this._getMaterialOpacity(),a=1>i||this._isPropertyDriven("opacity");return this._material.setParameterValues({opacity:i,transparent:a}),!0}if("elevationInfo"===e){this._updateElevationInfo();for(var o in t){var s=t[o],l=r(s);if(l){var p=s.graphic,h=this.getGraphicElevationInfo(p);l.needsElevationUpdates=n.needsElevationUpdates3D(h.mode),l.elevationInfo.set(h)}}return!0}return!1},t.prototype._getPathSize=function(e){var t;return t=e.size&&this._isPropertyDriven("size")?n.getSingleSizeDriver(e.size):this._getSymbolSize(),t/=this._context.renderCoordsHelper.unitInMeters},t.prototype._getSymbolSize=function(){return this.symbol.size||1},t.prototype._createAs3DShape=function(e,t,r,i,o){var l=e.geometry,p=l.hasZ,g=l.paths,y=[],u=[],_=[],x=m.create(),b=this._context.renderSpatialReference,S=b===s.SphericalRenderSpatialReference,D=new Array(6),E=this._getPathSize(t),P=n.getGeometryVertexData3D(g,p,l.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,r);if(this._logGeometryCreationWarnings(P,g,"paths","PathSymbol3DLayer"),g.length>0){for(var C=P.geometryData.outlines,G=P.eleVertexData,w=P.vertexData,z=0;z<C.length;++z){var I=C[z],R=I.index,T=I.count;if(!this._context.clippingExtent||(n.computeBoundingBox(G,R,T,D),!n.boundingBoxClipped(D,this._context.clippingExtent))){n.chooseOrigin(w,R,T,x),n.subtractCoordinates(w,R,T,x);var U=new Float64Array(G.buffer,3*R*G.BYTES_PER_ELEMENT,3*T),M=n.flatArrayToArrayOfArrays(w,R,T),O=d.createTubeGeometry(M,.5*E,A,S,x);if(O.getVertexAttr().mapPos={size:3,data:U},this._material.getParams().vertexColors){var V=this._getVertexOpacityAndColor(t);O=d.addVertexColors(O,V,!0)}var L=new c(O,i+"path"+z);L.singleUse=!0,y.push(L),u.push([this._material]);var B=f.identity();f.translate(B,x,B),_.push(B)}}if(y.length>0){var H=new h({geometries:y,materials:u,transformations:_,castShadow:!0,metadata:{layerUid:this._context.layer.uid,graphicId:o},idHint:i}),j=v,W=new a(this,H,y,null,null,j,r);return W.alignedTerrainElevation=P.terrainElevation,W.needsElevationUpdates=n.needsElevationUpdates3D(r.mode),W}}return null},t}(i),b=y.VertexAttrConstants,S=m.create(),D=new o,E={verticalDistanceToGround:0,terrainElevation:0},A=10;return x});