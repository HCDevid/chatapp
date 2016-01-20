// Is a copy of server methods since no "secret" info, so stub should  match server for reactivity purposes

Meteor.methods({
	newMessage: function (message) {
		message.timestamp = Date.now();
		message.user = Meteor.userId();
		Messages.insert(message);
	}
})