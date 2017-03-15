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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/string","../lib/lights","../lib/ModelContentType","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util","../lib/gl-matrix"],function(t,e,i,n,o,r,a,l,s){var g=l.assert,d=l.verify,h=s.vec3d,c=s.mat4d,u=l.logWithBase,p=1e4,y=10,f=function(){function t(){this.dirtySet=new r(this),this.ambientLight=new n.AmbientLight([1,1,1],.3),this.directionalLight=new n.DirectionalLight([1,1,1],.7,h.normalize([1,1,1])),this._uniqueIdx=0,this._id2origin={},this.content={};for(var t in o)this.content[o[t]]={}}return t.prototype.getAll=function(t){var e=this.content[t];return g(void 0!==e),e},t.prototype.get=function(t,e){return this.getAll(t)[e]},t.prototype.add=function(t,e){var i=this.content[t];g(void 0!==i);var n=e.getId();g(null==i[n],"Model/Stage already contains object to be added"),i[n]=e,t===o.LAYER&&this.notifyDirty(t,e,"layerAdded")},t.prototype.remove=function(t,e){var i=this.content[t];g(void 0!==i);var n=i[e];return g(void 0!==n,"Model/Stage doesn't contain object to be removed"),delete i[e],t===o.TEXTURE&&n.unload(),t===o.LAYER&&this.notifyDirty(t,n,"layerRemoved"),n},t.prototype.getDirtySet=function(){return this.dirtySet},t.prototype.notifyDirty=function(t,e,i,n){this.dirtySet.handleUpdate(e,i,n)},t.prototype.getAmbientLight=function(){return this.ambientLight},t.prototype.setAmbientLight=function(t){this.ambientLight.set(t)},t.prototype.getDirectionalLight=function(){return this.directionalLight},t.prototype.setDirectionalLight=function(t){this.directionalLight.set(t)},t.prototype.getSelection=function(){return this.selection},t.prototype.setSelection=function(t,e){this.selection=t,this.selectionFaceRange=e},t.prototype.getSelectionFaceRange=function(){return this.selectionFaceRange},t.prototype.getOrigin=function(t,e,i){void 0===i&&(i=y);var n=0,o=e*i/p;o>1&&(n=Math.ceil(u(o,2)));var r=Math.pow(2,n)*p,a=Math.round(t[0]/r),l=Math.round(t[1]/r),s=Math.round(t[2]/r),g=n+"_"+a+"_"+l+"_"+s,d=this._id2origin[g];return null==d&&(d={vec3:h.createFrom(a*r,l*r,s*r),id:g},this._id2origin[g]=d),d},t.prototype.getGeometryRenderGeometries=function(t,e,i){var n=t.getId(),o=e.geometry,r=o.getData(),l=!!o.singleUse,s=e.materials,g=e.instanceParameters,d=t.getCombinedStaticTransformation(e),h=c.maxScale(d),u=e.origin,p=0,y=o.getBoundingInfo(p),f=e.getId()+"#"+p,v=this._uniqueIdx++,m=new a(r,y,s[p],d,h,t.getCastShadow(),l,n,f,v);m.origin=u||this.getOrigin(m.center,m.bsRadius),m.instanceParameters=g,i.push(m)},t.prototype.updateRenderGeometryTransformation=function(t,e,i){t.getCombinedStaticTransformation(e,i.transformation),i.updateTransformation(i.transformation)},t.prototype.formatDebugInfo=function(t){var e=[];if(t){e[0]="<table>";for(var n in o){var r=o[n];e[0]+="<tr><td>"+r+'</td><td style="text-align: right">'+Object.keys(this.getAll(r)).length+"</td></tr>"}e[0]+="</table>",e[1]=this.dirtySet.formatDebugInfo(!0)}else{e[0]="";for(var n in o){var r=o[n];e[0]+=i.pad(String(Object.keys(this.getAll(r)).length),6," ")+" "+r+", "}e[1]=this.dirtySet.formatDebugInfo(!1)}return e},t.prototype.validateContent=function(){var t=this.getAll(o.OBJECT);for(var e in t)this.validateObject(t[e]);var i=this.getAll(o.LAYER);for(var n in i)this.validateLayer(i[n]);var r=this.getAll(o.MATERIAL);for(var a in r)this.validateMaterial(r[a])},t.prototype.validateObject=function(t){for(var e=t.geometryRecords,i=0;i<e.length;++i){var n=e[i];g(null!=this.get(o.GEOMETRY,n.geometry.id));var r=n.geometry.numGroups;g(r<=n.materials.length,"object materials do not match geometry groups"),d(r===n.materials.length,"object materials do not match geometry groups");for(var a=0;r>a;++a)g(null!=this.get(o.MATERIAL,n.materials[a].getId()))}},t.prototype.validateLayer=function(t){for(var e=t.getObjects(),i=0;i<e.length;++i){var n=this.get(o.OBJECT,e[i].getId());g(null!=n)}},t.prototype.validateMaterial=function(t){for(var e=t.getAllTextureIds(),i=0;i<e.length;++i){var n=this.get(o.TEXTURE,e[i]);g(null!=n)}},t}();return f.ContentType=o,f});