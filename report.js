const newman = require('newman')

newman.run(
	{
		collection: require('./Collection/Users_API_Collection.json'),
		environment: require('./Collection/Users_API_Environment.json'),
		iterationCount: 1,
		reporters: 'htmlextra',
		reporter: {
			htmlextra: {
				export: './Reports/report.html',
			},
		},
	},
	function (err) {
		if (err) {
			throw err
		}
		console.log('Collection run successfully completed!')
	}
)
