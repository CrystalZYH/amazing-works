(function(R){function D(U,e){var d=R.data(U,"combo");var Z=d.options;var W=d.combo;var a=d.panel;if(e){Z.width=e}if(isNaN(Z.width)){var b=R(U).clone();b.css("visibility","hidden");b.appendTo("body");Z.width=b.outerWidth();b.remove()}W.appendTo("body");var V=W.find("input.combo-text");var X=W.find(".combo-arrow");var Y=Z.hasDownArrow?X._outerWidth():0;W._outerWidth(Z.width)._outerHeight(Z.height);V._outerWidth(W.width()-Y);V.css({height:W.height()+"px",lineHeight:W.height()+"px"});X._outerHeight(W.height());a.panel("resize",{width:(Z.panelWidth?Z.panelWidth:W.outerWidth()),height:Z.panelHeight});W.insertAfter(U)}function B(V){R(V).addClass("combo-f").hide();var W=R('<span class="combo"><input type="text" class="combo-text" autocomplete="off"><span><span class="combo-arrow"></span></span><input type="hidden" class="combo-value"></span>').insertAfter(V);var X=R('<div class="combo-panel"></div>').appendTo("body");X.panel({doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){R(this).panel("resize")},onClose:function(){var Y=R.data(V,"combo");if(Y){Y.options.onHidePanel.call(V)}}});var U=R(V).attr("name");if(U){W.find("input.combo-value").attr("name",U);R(V).removeAttr("name").attr("comboName",U)}return{combo:W,panel:X}}function L(V){var U=R.data(V,"combo");var X=U.options;var W=U.combo;if(X.hasDownArrow){W.find(".combo-arrow").show()}else{W.find(".combo-arrow").hide()}K(V,X.disabled);J(V,X.readonly)}function P(W){var V=R.data(W,"combo");var U=V.combo.find("input.combo-text");U.validatebox("destroy");V.panel.panel("destroy");V.combo.remove();R(W).remove()}function T(U){R(U).find(".combo-f").each(function(){var V=R(this).combo("panel");if(V.is(":visible")){V.panel("close")}})}function Q(U){var Z=R.data(U,"combo");var Y=Z.options;var b=Z.panel;var a=Z.combo;var W=a.find(".combo-text");var V=a.find(".combo-arrow");R(document).unbind(".combo").bind("mousedown.combo",function(c){var d=R(c.target).closest("span.combo,div.combo-p");if(d.length){T(d);return}R("body>div.combo-p>div.combo-panel:visible").panel("close")});W.unbind(".combo");V.unbind(".combo");if(!Y.disabled&&!Y.readonly){W.bind("click.combo",function(c){if(!Y.editable){X.call(this)}else{var d=R(this).closest("div.combo-panel");R("div.combo-panel:visible").not(b).not(d).panel("close")}}).bind("keydown.combo",function(c){switch(c.keyCode){case 38:Y.keyHandler.up.call(U,c);break;case 40:Y.keyHandler.down.call(U,c);break;case 37:Y.keyHandler.left.call(U,c);break;case 39:Y.keyHandler.right.call(U,c);break;case 13:c.preventDefault();Y.keyHandler.enter.call(U,c);return false;case 9:case 27:O(U);break;default:if(Y.editable){if(Z.timer){clearTimeout(Z.timer)}Z.timer=setTimeout(function(){var d=W.val();if(Z.previousValue!=d){Z.previousValue=d;R(U).combo("showPanel");Y.keyHandler.query.call(U,W.val(),c);R(U).combo("validate")}},Y.delay)}}});V.bind("click.combo",function(){X.call(this)}).bind("mouseenter.combo",function(){R(this).addClass("combo-arrow-hover")}).bind("mouseleave.combo",function(){R(this).removeClass("combo-arrow-hover")})}function X(){if(b.is(":visible")){T(b);O(U)}else{var c=R(this).closest("div.combo-panel");R("div.combo-panel:visible").not(b).not(c).panel("close");R(U).combo("showPanel")}W.focus()}}function H(U){var X=R.data(U,"combo").options;var W=R.data(U,"combo").combo;var V=R.data(U,"combo").panel;if(R.fn.window){V.panel("panel").css("z-index",R.fn.window.defaults.zIndex++)}V.panel("move",{left:W.offset().left,top:Z()});if(V.panel("options").closed){V.panel("open");X.onShowPanel.call(U)}(function(){if(V.is(":visible")){V.panel("move",{left:Y(),top:Z()});setTimeout(arguments.callee,200)}})();function Y(){var a=W.offset().left;if(a+V._outerWidth()>R(window)._outerWidth()+R(document).scrollLeft()){a=R(window)._outerWidth()+R(document).scrollLeft()-V._outerWidth()}if(a<0){a=0}return a}function Z(){var a=W.offset().top+W._outerHeight();if(a+V._outerHeight()>R(window)._outerHeight()+R(document).scrollTop()){a=W.offset().top-V._outerHeight()}if(a<R(document).scrollTop()){a=W.offset().top+W._outerHeight()}return a}}function O(V){var U=R.data(V,"combo").panel;U.panel("close")}function F(W){var V=R.data(W,"combo").options;var U=R(W).combo("textbox");U.validatebox(R.extend({},V,{deltaX:(V.hasDownArrow?V.deltaX:(V.deltaX>0?1:-1))}))}function K(X,W){var U=R.data(X,"combo");var V=U.options;var Y=U.combo;if(W){V.disabled=true;R(X).attr("disabled",true);Y.find(".combo-value").attr("disabled",true);Y.find(".combo-text").attr("disabled",true)}else{V.disabled=false;R(X).removeAttr("disabled");Y.find(".combo-value").removeAttr("disabled");Y.find(".combo-text").removeAttr("disabled")}}function J(X,W){var U=R.data(X,"combo");var Y=U.options;Y.readonly=W==undefined?true:W;var V=Y.readonly?true:(!Y.editable);U.combo.find(".combo-text").attr("readonly",V).css("cursor",V?"pointer":"")}function I(X){var V=R.data(X,"combo");var U=V.options;var W=V.combo;if(U.multiple){W.find("input.combo-value").remove()}else{W.find("input.combo-value").val("")}W.find("input.combo-text").val("")}function G(V){var U=R.data(V,"combo").combo;return U.find("input.combo-text").val()}function M(V,U){var X=R.data(V,"combo");var W=X.combo.find("input.combo-text");if(W.val()!=U){W.val(U);R(V).combo("validate");X.previousValue=U}}function N(V){var W=[];var U=R.data(V,"combo").combo;U.find("input.combo-value").each(function(){W.push(R(this).val())});return W}function S(c,b){var W=R.data(c,"combo").options;var V=N(c);var Y=R.data(c,"combo").combo;Y.find("input.combo-value").remove();var X=R(c).attr("comboName");for(var d=0;d<b.length;d++){var e=R('<input type="hidden" class="combo-value">').appendTo(Y);if(X){e.attr("name",X)}e.val(b[d])}var a=[];for(var d=0;d<V.length;d++){a[d]=V[d]}var U=[];for(var d=0;d<b.length;d++){for(var Z=0;Z<a.length;Z++){if(b[d]==a[Z]){U.push(b[d]);a.splice(Z,1);break}}}if(U.length!=b.length||b.length!=V.length){if(W.multiple){W.onChange.call(c,b,V)}else{W.onChange.call(c,b[0],V[0])}}}function A(V){var U=N(V);return U[0]}function E(V,U){S(V,[U])}function C(V){var U=R.data(V,"combo").options;var W=U.onChange;U.onChange=function(){};if(U.multiple){if(U.value){if(typeof U.value=="object"){S(V,U.value)}else{E(V,U.value)}}else{S(V,[])}U.originalValue=N(V)}else{E(V,U.value);U.originalValue=U.value}U.onChange=W}R.fn.combo=function(W,V){if(typeof W=="string"){var U=R.fn.combo.methods[W];if(U){return U(this,V)}else{return this.each(function(){var X=R(this).combo("textbox");X.validatebox(W,V)})}}W=W||{};return this.each(function(){var Y=R.data(this,"combo");if(Y){R.extend(Y.options,W)}else{var X=B(this);Y=R.data(this,"combo",{options:R.extend({},R.fn.combo.defaults,R.fn.combo.parseOptions(this),W),combo:X.combo,panel:X.panel,previousValue:null});R(this).removeAttr("disabled")}L(this);D(this);Q(this);F(this);C(this)})};R.fn.combo.methods={options:function(U){return R.data(U[0],"combo").options},panel:function(U){return R.data(U[0],"combo").panel},textbox:function(U){return R.data(U[0],"combo").combo.find("input.combo-text")},destroy:function(U){return U.each(function(){P(this)})},resize:function(U,V){return U.each(function(){D(this,V)})},showPanel:function(U){return U.each(function(){H(this)})},hidePanel:function(U){return U.each(function(){O(this)})},disable:function(U){return U.each(function(){K(this,true);Q(this)})},enable:function(U){return U.each(function(){K(this,false);Q(this)})},readonly:function(U,V){return U.each(function(){J(this,V);Q(this)})},isValid:function(V){var U=R.data(V[0],"combo").combo.find("input.combo-text");return U.validatebox("isValid")},clear:function(U){return U.each(function(){I(this)})},reset:function(U){return U.each(function(){var V=R.data(this,"combo").options;if(V.multiple){R(this).combo("setValues",V.originalValue)}else{R(this).combo("setValue",V.originalValue)}})},getText:function(U){return G(U[0])},setText:function(U,V){return U.each(function(){M(this,V)})},getValues:function(U){return N(U[0])},setValues:function(U,V){return U.each(function(){S(this,V)})},getValue:function(U){return A(U[0])},setValue:function(U,V){return U.each(function(){E(this,V)})}};R.fn.combo.parseOptions=function(U){var V=R(U);return R.extend({},R.fn.validatebox.parseOptions(U),R.parser.parseOptions(U,["width","height","separator",{panelWidth:"number",editable:"boolean",hasDownArrow:"boolean",delay:"number",selectOnNavigation:"boolean"}]),{panelHeight:(V.attr("panelHeight")=="auto"?"auto":parseInt(V.attr("panelHeight"))||undefined),multiple:(V.attr("multiple")?true:undefined),disabled:(V.attr("disabled")?true:undefined),readonly:(V.attr("readonly")?true:undefined),value:(V.val()||undefined)})};R.fn.combo.defaults=R.extend({},R.fn.validatebox.defaults,{width:"auto",height:22,panelWidth:null,panelHeight:200,multiple:false,selectOnNavigation:true,separator:",",editable:true,disabled:false,readonly:false,hasDownArrow:true,value:"",delay:200,deltaX:19,keyHandler:{up:function(U){},down:function(U){},left:function(U){},right:function(U){},enter:function(U){},query:function(V,U){}},onShowPanel:function(){},onHidePanel:function(){},onChange:function(V,U){}})})(jQuery);