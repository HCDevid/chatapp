Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Meteor.subscribe("messages");
Meteor.subscribe("allUsernames");

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user == 'undefined') {
		return 'Anonymous';
	}
	if (typeof user.services.github !== 'undefined') {
		return user.services.github.username;
	}
	return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.messages.helpers({
	messages: Messages.find({})
	// Can't use semi-colon here because it messages with messages being identified as a function
})


