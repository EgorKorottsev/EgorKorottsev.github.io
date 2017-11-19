var el = $(".marginTopDiv");
var listIsHidden = true;
console.log(listIsHidden);
$( ".navbar-toggler" ).on( "click", function() {
	if(listIsHidden) {
		el.css('margin-top', '250px');
		listIsHidden = false;
	} else {
		el.css('margin-top', '0px');
		listIsHidden = true;
	}
})


 