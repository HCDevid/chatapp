Meteor.startup(function () {
	Factory.define('message', Messages, {
		text: function () {
			return Fake.sentence();
		},
		timestamp: function() {
			return Date.now();
		}
	});

	// Removes all messages before seeding
	Messages.remove({});

	if(Messages.find().count() == 0) {
		_(10).times(function(n) {
			Factory.create("message");
		});
	}	
});