import _ from 'lodash';
import "jquery";
jQuery(document).ready(function(){
	jQuery( ".specialDiv" ).on( "click", function() {
		var data = ""
		typeof (data = jQuery(this).find('.specialChildren[data-specialvalue]').attr("data-specialvalue")) == "undefined" ?  false : console.log(data);
		jQuery(this).find('.active').removeClass("active").addClass("specialChildren");
	});
});	