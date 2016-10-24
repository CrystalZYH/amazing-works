$.extend($.fn.datagrid.defaults,{onBeforeFetch:function(A){},onFetch:function(B,A){}});var scrollview=$.extend({},$.fn.datagrid.defaults.view,{render:function(M,L,C){var I=$.data(M,"datagrid");var J=I.options;var A=this.rows||[];if(!A.length){return}var O=$(M).datagrid("getColumnFields",C);if(C){if(!(J.rownumbers||(J.frozenColumns&&J.frozenColumns.length))){return}}var N=this.index;var P=['<table class="datagrid-btable" cellspacing="0" cellpadding="0" border="0"><tbody>'];for(var K=0;K<A.length;K++){var E=J.rowStyler?J.rowStyler.call(M,N,A[K]):"";var D="";var G="";if(typeof E=="string"){G=E}else{if(E){D=E["class"]||"";G=E["style"]||""}}var F='class="datagrid-row '+(N%2&&J.striped?"datagrid-row-alt ":" ")+D+'"';var H=G?'style="'+G+'"':"";var B=I.rowIdPrefix+"-"+(C?1:2)+"-"+N;P.push('<tr id="'+B+'" datagrid-row-index="'+N+'" '+F+" "+H+">");P.push(this.renderRow.call(this,M,O,C,N,A[K]));P.push("</tr>");if(J.detailFormatter){P.push('<tr style="display:none;">');if(C){P.push("<td colspan="+(O.length+2)+' style="border-right:0">')}else{P.push("<td colspan="+(O.length)+">")}P.push('<div class="datagrid-row-detail">');if(C){P.push("&nbsp;")}else{P.push(J.detailFormatter.call(M,K,A[K]))}P.push("</div>");P.push("</td>");P.push("</tr>")}N++}P.push("</tbody></table>");$(L).html(P.join(""))},renderRow:function(N,K,I,E,B){var L=$.data(N,"datagrid").options;var H=[];if(I&&L.rownumbers){var A=E+1;if(L.pagination){A+=(L.pageNumber-1)*L.pageSize}H.push('<td class="datagrid-td-rownumber"><div class="datagrid-cell-rownumber">'+A+"</div></td>")}for(var G=0;G<K.length;G++){var C=K[G];var P=$(N).datagrid("getColumnOption",C);if(P){var O=B[C];var M=P.styler?(P.styler(O,B,E)||""):"";var J="";var D="";if(typeof M=="string"){D=M}else{if(H){J=M["class"]||"";D=M["style"]||""}}var F=J?'class="'+J+'"':"";var Q=P.hidden?'style="display:none;'+D+'"':(D?'style="'+D+'"':"");H.push('<td field="'+C+'" '+F+" "+Q+">");if(P.checkbox){Q=""}else{if(P.expander){Q="text-align:center;height:16px;"}else{Q=D;if(P.align){Q+=";text-align:"+P.align+";"}if(!L.nowrap){Q+=";white-space:normal;height:auto;"}else{if(L.autoRowHeight){Q+=";height:auto;"}}}}H.push('<div style="'+Q+'" ');if(P.checkbox){H.push('class="datagrid-cell-check ')}else{H.push('class="datagrid-cell '+P.cellClass)}H.push('">');if(P.checkbox){H.push('<input type="checkbox" name="'+C+'" value="'+(O!=undefined?O:"")+'">')}else{if(P.expander){H.push('<span class="datagrid-row-expander datagrid-row-expand" style="display:inline-block;width:16px;height:16px;cursor:pointer;" />')}else{if(P.formatter){H.push(P.formatter(O,B,E))}else{H.push(O)}}}H.push("</div>");H.push("</td>")}}return H.join("")},bindEvents:function(E){var F=$.data(E,"datagrid");var D=F.dc;var A=F.options;var B=D.body1.add(D.body2);var C=($.data(B[0],"events")||$._data(B[0],"events")).click[0].handler;B.unbind("click").bind("click",function(H){var J=$(H.target);var I=J.closest("tr.datagrid-row");if(!I.length){return}if(J.hasClass("datagrid-row-expander")){var G=parseInt(I.attr("datagrid-row-index"));if(J.hasClass("datagrid-row-expand")){$(E).datagrid("expandRow",G)}else{$(E).datagrid("collapseRow",G)}$(E).datagrid("fixRowHeight")}else{C(H)}H.stopPropagation()})},onBeforeRender:function(F){var D=$.data(F,"datagrid");var E=D.options;var B=D.dc;var A=this;D.data.firstRows=D.data.rows;E.finder=$.extend({},$.fn.datagrid.defaults.finder,{getRow:function(L,I){var M=(typeof I=="object")?I.attr("datagrid-row-index"):I;var J=$.data(L,"datagrid").data.rows[M];if(!J){var K=$(L).datagrid("options").view;J=K.rows[M-K.index]}return J}});B.body1.add(B.body2).empty();this.rows=undefined;this.r1=this.r2=[];C();H();function C(){D.onLoadSuccess=E.onLoadSuccess;E.onLoadSuccess=function(){};setTimeout(function(){B.body2.unbind(".datagrid").bind("scroll.datagrid",function(I){if(D.onLoadSuccess){E.onLoadSuccess=D.onLoadSuccess;D.onLoadSuccess=undefined}if(A.scrollTimer){clearTimeout(A.scrollTimer)}A.scrollTimer=setTimeout(function(){G.call(A)},50)});B.body2.triggerHandler("scroll.datagrid")},0)}function G(){if(B.body2.is(":empty")){I.call(this)}else{var L=E.finder.getTr(F,this.index,"body",2);var M=E.finder.getTr(F,0,"last",2);var N=B.view2.children("div.datagrid-header").outerHeight();var K=L.position().top-N;var O=M.position().top+M.outerHeight()-N;if(K>B.body2.height()||O<0){I.call(this)}else{if(K>0){var J=Math.floor(this.index/E.pageSize);this.getRows.call(this,F,J,function(P){this.r2=this.r1;this.r1=P;this.index=(J-1)*E.pageSize;this.rows=this.r1.concat(this.r2);this.populate.call(this,F)})}else{if(O<B.body2.height()){var J=Math.floor(this.index/E.pageSize)+2;if(this.r2.length){J++}this.getRows.call(this,F,J,function(P){if(!this.r2.length){this.r2=P}else{this.r1=this.r2;this.r2=P;this.index+=E.pageSize}this.rows=this.r1.concat(this.r2);this.populate.call(this,F)})}}}}function I(){var P=$(B.body2).scrollTop();var Q=Math.floor(P/25);var R=Math.floor(Q/E.pageSize)+1;this.getRows.call(this,F,R,function(S){this.index=(R-1)*E.pageSize;this.rows=S;this.r1=S;this.r2=[];this.populate.call(this,F);B.body2.triggerHandler("scroll.datagrid")})}}function H(){if(!E.detailFormatter){return}var L=$(F);var M=false;var N=L.datagrid("getColumnFields",true).concat(L.datagrid("getColumnFields"));for(var I=0;I<N.length;I++){var J=L.datagrid("getColumnOption",N[I]);if(J.expander){M=true;break}}if(!M){if(E.frozenColumns&&E.frozenColumns.length){E.frozenColumns[0].splice(0,0,{field:"_expander",expander:true,width:24,resizable:false,fixed:true})}else{E.frozenColumns=[[{field:"_expander",expander:true,width:24,resizable:false,fixed:true}]]}var L=B.view1.children("div.datagrid-header").find("table");var K=$('<td rowspan="'+E.frozenColumns.length+'"><div class="datagrid-header-expander" style="width:24px;"></div></td>');if($("tr",L).length==0){K.wrap("<tr></tr>").parent().appendTo($("tbody",L))}else{if(E.rownumbers){K.insertAfter(L.find("td:has(div.datagrid-header-rownumber)"))}else{K.prependTo(L.find("tr:first"))}}}setTimeout(function(){A.bindEvents(F)},0)}},onAfterRender:function(C){$.fn.datagrid.defaults.view.onAfterRender.call(this,C);var B=$.data(C,"datagrid").dc;var A=B.footer1.add(B.footer2);A.find("span.datagrid-row-expander").css("visibility","hidden")},getRows:function(I,E,C){var G=$.data(I,"datagrid");var H=G.options;var D=(E-1)*H.pageSize;if(H.onBeforeFetch.call(I,E)==false){return}var A=G.data.firstRows.slice(D,D+H.pageSize);if(A.length){H.onFetch.call(I,E,A);C.call(this,A)}else{var F=$.extend({},H.queryParams,{page:E,rows:H.pageSize});if(H.sortName){$.extend(F,{sort:H.sortName,order:H.sortOrder})}if(H.onBeforeLoad.call(I,F)==false){return}$(I).datagrid("loading");var B=H.loader.call(I,F,function(J){$(I).datagrid("loaded");var J=H.loadFilter.call(I,J);H.onFetch.call(I,E,J.rows);if(J.rows&&J.rows.length){C.call(H.view,J.rows)}else{H.onLoadSuccess.call(I,J)}},function(){$(I).datagrid("loaded");H.onLoadError.apply(I,arguments)});if(B==false){$(I).datagrid("loaded");if(!G.data.firstRows.length){H.onFetch.call(I,E,G.data.firstRows);H.onLoadSuccess.call(I,G.data)}}}},populate:function(F){var G=$.data(F,"datagrid");var B=G.options;var E=G.dc;var D=25;if(this.rows.length){B.view.render.call(B.view,F,E.body2,false);B.view.render.call(B.view,F,E.body1,true);E.body1.add(E.body2).children("table.datagrid-btable").css({marginTop:this.index*D,marginBottom:G.data.total*D-this.rows.length*D-this.index*D});var A=[];for(var C=0;C<this.index;C++){A.push({})}G.data.rows=A.concat(this.rows);B.onLoadSuccess.call(F,{total:G.data.total,rows:this.rows})}}});$.extend($.fn.datagrid.methods,{fixDetailRowHeight:function(A,B){return A.each(function(){var D=$.data(this,"datagrid").options;var F=$.data(this,"datagrid").dc;var G=D.finder.getTr(this,B,"body",1).next();var E=D.finder.getTr(this,B,"body",2).next();if(E.is(":visible")){G.css("height","");E.css("height","");var C=Math.max(G.height(),E.height());G.css("height",C);E.css("height",C)}F.body2.triggerHandler("scroll")})},getExpander:function(A,C){var B=$.data(A[0],"datagrid").options;return B.finder.getTr(A[0],C).find("span.datagrid-row-expander")},getRowDetail:function(A,D){var B=$.data(A[0],"datagrid").options;var C=B.finder.getTr(A[0],D,"body",2);return C.next().find("div.datagrid-row-detail")},expandRow:function(A,B){return A.each(function(){var C=$(this).datagrid("options");var F=$.data(this,"datagrid").dc;var H=$(this).datagrid("getExpander",B);if(H.hasClass("datagrid-row-expand")){H.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");var G=C.finder.getTr(this,B,"body",1).next();var E=C.finder.getTr(this,B,"body",2).next();G.show();E.show();$(this).datagrid("fixDetailRowHeight",B);if(C.onExpandRow){var D=$(this).datagrid("getRows")[B];C.onExpandRow.call(this,B,D)}}})},collapseRow:function(A,B){return A.each(function(){var C=$(this).datagrid("options");var F=$.data(this,"datagrid").dc;var H=$(this).datagrid("getExpander",B);if(H.hasClass("datagrid-row-collapse")){H.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");var G=C.finder.getTr(this,B,"body",1).next();var E=C.finder.getTr(this,B,"body",2).next();G.hide();E.hide();F.body2.triggerHandler("scroll");if(C.onCollapseRow){var D=$(this).datagrid("getRows")[B];C.onCollapseRow.call(this,B,D)}}})}});