Meteor.publish('messages', function() {
	return Messages.find({channel: channel});
	// return Messages.find({});
});

Meteor.publish('allUsernames', function() {
	return Meteor.users.find({}, {fields: {
		"username": 1,
		"services.github.username": 1
	}});
});

Meteor.publish('channels', function() {
	return Channels.find();
})