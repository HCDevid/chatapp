Template.messages.helpers({
	messages: Messages.find({})
	// Can't use semi-colon here because it messages with messages being identified as a function
})

Template.footer.events({
	'keypress input': function(event) {
		if (event.charcode == 13) {
			event.stopPropagation();
			$('.message-history').append('<div class = "message"><a href="" class = "message_profile_pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
			$('.input-box_text').val("");
			return false;
		}
	}
})