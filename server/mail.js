Meteor.startup(function () {
	smtp = {
		username: 'postmaster@sandbox8ed4d31fa81c42faa7e1f8564869094c.mailgun.org',
		password: 'e79525eb5ba020dd7bc5dd87813d53fe',
		server: 'smtp.mailgun.org',
		port: 587 //default mail submission port
	};

	process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});