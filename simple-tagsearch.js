jQuery(document).ready(function ($) {

	$( ".searchitem" ).hide(); //this hides all items in list on page load
	$( ".searchitem span" ).hide(); //hides all the search tags in your <span> tag

	$("#searchthis").on("keyup", function(e) { //activates if user types in the input box

		var value = $( "#searchthis" ).val(); //fetches what the user is typing in the input box
		var length = $( "#searchthis" ).val().length; //counts characters currently in input box

		if (length > 1) { //if input box has more than 1 character
    		$( ".searchitem:contains('" + value + "')").show(); //show results, activates the class that relates to what the user searches for
    	}

    	if(e.keyCode == 8) {
    		$( ".searchitem" ).hide(); //hides results if backspace is pressed
    	}

    	if(e.keyCode == 16) { //ignores shift key
    		return;
    	}
	});	

}); 
