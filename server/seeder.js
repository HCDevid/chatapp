Meteor.startup(function () {
	Channels.remove({});
	Channels.insert({
		name: 'general'
	});
	Channels.insert({
		name: 'random'
	});

	if (Meteor.users.find().count() == 0) {
		Meteor.users.insert({
			name: 'Khan'
		});
	}



	Factory.define('message', Messages, {
		text: function () {
			return Fake.sentence();
		},
		timestamp: function() {
			return Date.now();
		},
		user: Meteor.users.findOne()._id,
		channel: 'general'
	});

	// Removes all messages before seeding
	Messages.remove({});

	if(Messages.find().count() == 0) {
		_(10).times(function(n) {
			Factory.create("message");
		});
	}	
});