(function(C){function A(D){C(D).addClass("numberspinner-f");var E=C.data(D,"numberspinner").options;C(D).spinner(E).numberbox(E)}function B(D,E){var F=C.data(D,"numberspinner").options;var G=parseFloat(C(D).numberbox("getValue")||F.value)||0;if(E==true){G-=F.increment}else{G+=F.increment}C(D).numberbox("setValue",G)}C.fn.numberspinner=function(F,E){if(typeof F=="string"){var D=C.fn.numberspinner.methods[F];if(D){return D(this,E)}else{return this.spinner(F,E)}}F=F||{};return this.each(function(){var G=C.data(this,"numberspinner");if(G){C.extend(G.options,F)}else{C.data(this,"numberspinner",{options:C.extend({},C.fn.numberspinner.defaults,C.fn.numberspinner.parseOptions(this),F)})}A(this)})};C.fn.numberspinner.methods={options:function(D){var E=C.data(D[0],"numberspinner").options;return C.extend(E,{value:D.numberbox("getValue"),originalValue:D.numberbox("options").originalValue})},setValue:function(D,E){return D.each(function(){C(this).numberbox("setValue",E)})},getValue:function(D){return D.numberbox("getValue")},clear:function(D){return D.each(function(){C(this).spinner("clear");C(this).numberbox("clear")})},reset:function(D){return D.each(function(){var E=C(this).numberspinner("options");C(this).numberspinner("setValue",E.originalValue)})}};C.fn.numberspinner.parseOptions=function(D){return C.extend({},C.fn.spinner.parseOptions(D),C.fn.numberbox.parseOptions(D),{})};C.fn.numberspinner.defaults=C.extend({},C.fn.spinner.defaults,C.fn.numberbox.defaults,{spin:function(D){B(this,D)}})})(jQuery);