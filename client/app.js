Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.messages.helpers({
	messages: Messages.find({})
	// Can't use semi-colon here because it messages with messages being identified as a function
})

Template.footer.events({
	'keypress input': function(e) {
		var inputVal = $('.input-box_text').val();
		if(!!inputVal) {
			var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
			if (charCode == 13) {
				e.stopPropagation();
				Messages.insert({text: $('.input-box_text').val()});
				$('.input-box_text').val("");
				return false;
			}
		}
	}
});

