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

define(["dojo/_base/declare","dojo/string","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/on","dojo/when","dojo/i18n!../../../nls/jsapi","dojo/text!./templates/DataCategoriesPage.html","../Pagination","./VariableUtil","./CountrySelect","./SearchTextBox"],function(t,e,n,i,r,o,a,s,u,h,c,g){return s=s.geoenrichment.dijit.DataCategoriesPage,t(null,{templateString:u,nls:s,baseClass:"DataCategoriesPage",manager:null,countryBox:!0,allowHierarchies:!1,postCreate:function(){this.inherited(arguments),this.pagination.autoCenter=!0,this.pagination.scrollAnimation="fade2",this.pagination.createItemContainer=function(){return c.createCategoryNode()},this.pagination.updateItemContainer=function(t,e){c.updateCategoryNode(t,e),t.data=e},this.countryBox&&this.manager.variables.countries&&this.divCountrySelect&&(this.countrySelect=this.countryBox===!0?new g:"object"==typeof this.countryBox&&this.countryBox.domNode?this.countryBox:null,this.countrySelect&&(this.countrySelect.placeAt(this.divCountrySelect),this.countrySelect.startup(),this.countryBox===!0?this.own(this.countrySelect):this.countryBox=!0)),this.countrySelect||(this.countryBox=!1,this.divCountrySelect&&(this.divCountrySelect.style.display="none"))},startup:function(){this._started||(this.inherited(arguments),this.countryBox?a(this.showProgress(this._getCountries()),n.hitch(this,this._onCountriesResponse)):this._getCategories(!0))},_setPageIsActiveAttr:function(t){this._started&&(this.txbSearch.set("value",""),t&&this.changeCountry(this.manager.variableQuery.countryID))},changeCountry:function(t){if(!this._started)return!1;var e=this;return this._changeCountryPromise=a(!this._changeCountryPromise||this._changeCountryPromise.isFulfilled()||this._changeCountryPromise).always(function(){return e._updateFavorites(),e.countryBox?a(e._getCountries(),n.hitch(e,e._setCountry,t)):e._changeCountry(e._toCountryBoxID(t))}),this._changeCountryPromise},_changeCountryPromise:null,_getCountries:function(){return!this._getCountriesQuery&&this.countryBox&&(this._getCountriesQuery=this.manager.variables.countries.query({allowHierarchies:this.allowHierarchies})),this._getCountriesQuery},_getCountriesQuery:null,_onCountriesResponse:function(t){this.countrySelect.setCountries(t),this._setCountry(this.manager.variableQuery.countryID),o(this.countrySelect,"change",n.hitch(this,function(){this._changeCountry(this.countrySelect.get("value"))}))},_setCountry:function(t){return t=this._toCountryBoxID(t),t!=this.countrySelect.get("value")?(this._innerChange=!0,this.countrySelect.set("value",t),this._innerChange=!1,this._changeCountry(t)):void 0},_innerChange:!1,_changeCountry:function(t){if(!this._innerChange){var e=this._toCountryID(t);this.onCountryChange(e);var n=this.pagination.countryID===t;return n||(this.pagination.countryID=t,this.manager.set("variableQuery",{countryID:e})),this._getCategories(n)}},_toCountryBoxID:function(t){return t||this.manager.variables.globalCountryID||null},_toCountryID:function(t){return t==this.manager.variables.globalCountryID?null:t},_getCategories:function(t){var e=0;t?e=this.pagination.currentPage:this.manager.set("selection",[]);var n=this;return a(this.showProgress(this.manager.getCategories()),function(i){return n.set("items",i),n.pagination.countryID=n._toCountryBoxID(n.manager.variableQuery.countryID),t&&n.pagination.set("currentPage",e,!0),a(n.manager.variables.synchronize(),function(){n._updateFavorites()})})},_updateFavorites:function(){this.spnShowFavorites&&(this.spnShowFavorites.innerHTML=this.manager.variables.favorites&&this.manager.variables.favorites.getItemsCount()?this.nls.showFavorites:"")},_setItemsAttr:function(t){this.pagination.set("items",t),this._started&&this.resize()},resize:function(){this.inherited(arguments),this.pagination.resize()},_onItemClick:function(t){var e=t.icon.cloneNode(!0);i.remove(e,"DataCategoryItemIcon"),this.manager.flyAnim.fly(t.icon,"Breadcrumb_SelectCategory",null,e),this.manager.variableQuery.categoryID=t.data.id,this.onSelect()},onSelect:function(){},_showFavorites:function(){this.manager.variableQuery.favorites=!0,this.onSearch()},_search:function(){var t=n.trim(this.txbSearch.get("value"));if(!t)return void this.txbSearch.set("value","");this.manager.variableQuery.searchString=t;var i=this;a(this.showProgress(this.manager.queryVariables()),function(n){n.length?i._onSearch(n):(delete i.manager.variableQuery.searchString,i.txbSearch.showTooltip(e.substitute(i.nls.noResults,{seachKey:t})))})},_onSearch:function(t){this.onSearch(t)},onSearch:function(t){},onCountryChange:function(t){}})});