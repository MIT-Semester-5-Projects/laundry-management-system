export default {
	title: `No Of Bags Processed (1st Week)`,
	axes: {
		bottom: {
			title: 'Day',
			mapsTo: 'key',
			scaleType: 'labels',
			domain: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
		},
		left: {
			domain: [0, 600],
			mapsTo: 'value',
			title: 'No Of Bags Processed',
			scaleType: 'linear'
		}
	},
	height: '400px'
};
