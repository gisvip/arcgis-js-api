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

define(["dojo/_base/declare","./BaseWidget","dojo/_base/lang","dojo/_base/array","dojo/on","require","dojo/dom-construct","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/i18n!../../nls/jsapi","dojox/html/entities","./dom"],function(e,t,a,i,n,r,s,l,o,d,c,_,u){function h(e,t){return"TOP"+(e+1).toString()+t}function p(e){return"Tapestry_LifeMode"+e.match(/\d+/)[0]}function f(e){return"http://downloads.esri.com/esri_content_doc/dbl/us/tapestry/segment"+e+".pdf"}c=c.geoenrichment.dijit.Tapestry;var T="data-index",b=e(t,{baseClass:"Infographics_Tapestry",_mainTable:null,_detailsTable:null,updateUIExpanded:function(){this.inherited(arguments),this._updateUI()},updateUICollapsed:function(){this.inherited(arguments),this._updateUI()},createUIExpanded:function(e){this.inherited(arguments),this._createUI(e)},createUICollapsed:function(e){this.inherited(arguments),this._createUI(e)},_createUI:function(e){var t=this._mainTable=e.addContent("table",{"class":"Tapestry_Main_Table"});n(t,".Tapestry_Main_Button:click",a.hitch(this,this._toDetailView)),this.expanded?u.createCols(t,[.25,.4,.35]):u.createCols(t,[.55,.45])},_updateUI:function(){function e(){d=l.insertRow(-1)}function t(){_=d.insertCell(-1)}function a(e){o.add(_,e)}function i(e){var t=u._getValue(r,"CODE"),a=t.length<3?"0"+t:t;o.add(e,"Tapestry_Main_Button Tapestry_Details_Image code_"+a+" LifeModeBorder "+p(t));var i=s.create("div",null,e);s.create("span",{"class":"Tapestry_thumbnail_Code LifeModeBorder "+p(t),innerHTML:t},i)}this._toMainView();var n,r;for(r=0;3>r&&this._getValue(r,"NAME");r++)n=r+1;var l,d,_,u=this;l=this._mainTable;var h,f,b=2;for(r=l.rows.length;n>r;r++)e(),o.add(d,"Tapestry_LifeMode"),this.expanded&&t(),t(),a("Tapestry_Main_Name Tapestry_Main_Button LifeModeColor"),t(),a("Tapestry_Main_Pct Tapestry_Main_Button LifeModeColor"),this.expanded&&(t(),a("Tapestry_Main_Arrow Tapestry_Main_Button"),s.create("div",null,_));for(;l.rows.length>n*b;)l.deleteRow(-1);for(h=this.expanded?1:0,f=this.expanded?2:1,r=0;n>r;r++){var m=l.rows,y=m[r].cells;this.expanded&&(y[0].removeAttribute("class"),s.empty(y[0]),i(y[0])),y[h].innerHTML=this._getValue(r,"NAME")+"<br><span class='Tapestry_Main_Value'>"+this._formatValue(r,"VALUE")+" "+c.hhLabel+"</span>",y[f].innerHTML=this._formatValue(r,"PRC")+"<br><span class='Tapestry_Main_PctLabel'>"+c.prtHhLabel+"</span>",m[r].setAttribute(T,r.toString())}},_getValue:function(e,t){return this.getValueByName(0,h(e,t))},_formatValue:function(e,t){return this.formatByName(0,h(e,t))},_toDetailView:function(e){function t(){var e=r.rows;i.forEach(e,function(e){o.remove(e,"clicked")})}for(var a,n=e.target,r=this._mainTable;n&&n!==r;){if(a=n.getAttribute(T)){a=+a;break}n=n.parentNode}if(this.expanded){if(this._detailsTableRow){if(this._detailsTableRow.previousSibling===n)return o.remove(n,"clicked"),void this._toMainView();this._toMainView(),t(),o.add(n,"clicked"),this.createDetailsTable(n)}else o.add(n,"clicked"),this.createDetailsTable(n);this._createDetailedViewExpanded(a)}else window.open(f(this._getValue(a,"NUM")),"_blank")},createDetailsTable:function(e){this._detailsTableRow=s.create("tr",null,e,"after");var t=s.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=s.create("table",{"class":"Tapestry_Details_Table"},t),u.createCols(this._detailsTable,[.35,.35,.3])},_createDetailedViewExpanded:function(e){function t(){d=h.insertRow(-1)}function a(e){u=d.insertCell(-1),e&&o.add(u,e)}function i(e,t,a){var i={};return e&&(i["class"]=e),t&&(i.innerHTML=_.encode(t)),s.create("div",i,a||u)}function n(t){return T._getValue(e,t)}function r(t){return T._formatValue(e,t)}function l(e,t){a("Tapestry_Details_FieldCell");var n=i("LifeModeBorder");i("Tapestry_Details_Label",e,n),i(null,r(t),n)}var d,u,h=this._detailsTable,T=this,b=n("CODE");o.add(h,p(b)),b.length<3&&(b="0"+b),t(),l(c.hhTypeLabel,"TYPE"),l(c.medianAgeLabel,"AGE"),a("Tapestry_Details_Image household code_"+b),u.rowSpan=2,i(),i(null,n("TYPE")),t(),l(c.employmentLabel,"JOB"),l(c.educationLabel,"EDUCATION"),t(),l(c.incomeLabel,"INCOME"),l(c.raceEthnicityLabel,"RACE"),a("Tapestry_Details_Image housing code_"+b),u.rowSpan=2,i(),i(null,n("HOUSE")),t(),a(),u.colSpan=2;var m=s.create("a",{href:f(n("NUM")),target:"_blank"},u);i("Tapestry_Details_Name","View full segment profile",m)},_toMainView:function(){this._detailsTableRow&&(s.destroy(this._detailsTableRow),this._detailsTable=null,this._detailsTableRow=null)}});return b});