(function(E){function G(J,V){V=V||{};var S={};if(V.onSubmit){if(V.onSubmit.call(J,S)==false){return}}var Q=E(J);if(V.url){Q.attr("action",V.url)}var N="easyui_frame_"+(new Date().getTime());var R=E("<iframe id="+N+" name="+N+"></iframe>").attr("src",window.ActiveXObject?"javascript:false":"about:blank").css({position:"absolute",top:-1000,left:-1000});var L=Q.attr("target"),T=Q.attr("action");Q.attr("target",N);var M=E();try{R.appendTo("body");R.bind("load",K);for(var P in S){var U=E('<input type="hidden" name="'+P+'">').val(S[P]).appendTo(Q);M=M.add(U)}O();Q[0].submit()}finally{Q.attr("action",T);L?Q.attr("target",L):Q.removeAttr("target");M.remove()}function O(){var Y=E("#"+N);if(!Y.length){return}try{var W=Y.contents()[0].readyState;if(W&&W.toLowerCase()=="uninitialized"){setTimeout(O,100)}}catch(X){K()}}var I=10;function K(){var X=E("#"+N);if(!X.length){return}X.unbind();var Y="";try{var Z=X.contents().find("body");Y=Z.html();if(Y==""){if(--I){setTimeout(K,100);return}}var a=Z.find(">textarea");if(a.length){Y=a.val()}else{var b=Z.find(">pre");if(b.length){Y=b.html()}}}catch(W){}if(V.success){V.success(Y)}setTimeout(function(){X.unbind();X.remove()},100)}}function C(M,L){if(!E.data(M,"form")){E.data(M,"form",{options:E.extend({},E.fn.form.defaults)})}var O=E.data(M,"form").options;if(typeof L=="string"){var N={};if(O.onBeforeLoad.call(M,N)==false){return}E.ajax({url:L,data:N,dataType:"json",success:function(Q){K(Q)},error:function(){O.onLoadError.apply(M,arguments)}})}else{K(L)}function K(Q){var V=E(M);for(var U in Q){var T=Q[U];var R=P(U,T);if(!R.length){var S=J(U,T);if(!S){E('input[name="'+U+'"]',V).val(T);E('textarea[name="'+U+'"]',V).val(T);E('select[name="'+U+'"]',V).val(T)}}I(U,T)}O.onLoadSuccess.call(M,Q);H(M)}function P(Q,R){var S=E(M).find('input[name="'+Q+'"][type=radio], input[name="'+Q+'"][type=checkbox]');S._propAttr("checked",false);S.each(function(){var T=E(this);if(T.val()==String(R)||E.inArray(T.val(),E.isArray(R)?R:[R])>=0){T._propAttr("checked",true)}});return S}function J(T,V){var S=0;var U=["numberbox","slider"];for(var Q=0;Q<U.length;Q++){var R=U[Q];var W=E(M).find("input["+R+'Name="'+T+'"]');if(W.length){W[R]("setValue",V);S+=W.length}}return S}function I(U,W){var T=E(M);var R=["combobox","combotree","combogrid","datetimebox","datebox","combo"];var V=T.find('[comboName="'+U+'"]');if(V.length){for(var Q=0;Q<R.length;Q++){var S=R[Q];if(V.hasClass(S+"-f")){if(V[S]("options").multiple){V[S]("setValues",W)}else{V[S]("setValue",W)}return}}}}}function F(I){E("input,select,textarea",I).each(function(){var P=this.type,O=this.tagName.toLowerCase();if(P=="text"||P=="hidden"||P=="password"||O=="textarea"){this.value=""}else{if(P=="file"){var Q=E(this);Q.after(Q.clone().val(""));Q.remove()}else{if(P=="checkbox"||P=="radio"){this.checked=false}else{if(O=="select"){this.selectedIndex=-1}}}}});var M=E(I);var K=["combo","combobox","combotree","combogrid","slider"];for(var J=0;J<K.length;J++){var N=K[J];var L=M.find("."+N+"-f");if(L.length&&L[N]){L[N]("clear")}}H(I)}function A(I){I.reset();var N=E(I);var L=["combo","combobox","combotree","combogrid","datebox","datetimebox","spinner","timespinner","numberbox","numberspinner","slider"];for(var J=0;J<L.length;J++){var K=L[J];var M=N.find("."+K+"-f");if(M.length&&M[K]){M[K]("reset")}}H(I)}function B(K){var I=E.data(K,"form").options;var J=E(K);J.unbind(".form").bind("submit.form",function(){setTimeout(function(){G(K,I)},0);return false})}function H(I){if(E.fn.validatebox){var J=E(I);J.find(".validatebox-text:not(:disabled)").validatebox("validate");var K=J.find(".validatebox-invalid");K.filter(":not(:disabled):first").focus();return K.length==0}return true}function D(J,I){E(J).find(".validatebox-text:not(:disabled)").validatebox(I?"disableValidation":"enableValidation")}E.fn.form=function(J,I){if(typeof J=="string"){return E.fn.form.methods[J](this,I)}J=J||{};return this.each(function(){if(!E.data(this,"form")){E.data(this,"form",{options:E.extend({},E.fn.form.defaults,J)})}B(this)})};E.fn.form.methods={submit:function(I,J){return I.each(function(){G(this,E.extend({},E.fn.form.defaults,J||{}))})},load:function(I,J){return I.each(function(){C(this,J)})},clear:function(I){return I.each(function(){F(this)})},reset:function(I){return I.each(function(){A(this)})},validate:function(I){return H(I[0])},disableValidation:function(I){return I.each(function(){D(this,true)})},enableValidation:function(I){return I.each(function(){D(this,false)})}};E.fn.form.defaults={url:null,onSubmit:function(I){return E(this).form("validate")},success:function(I){},onBeforeLoad:function(I){},onLoadSuccess:function(I){},onLoadError:function(){}}})(jQuery);