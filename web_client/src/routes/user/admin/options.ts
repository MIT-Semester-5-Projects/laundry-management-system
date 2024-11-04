export default {
	title: `No Of Bags Processed (${'05/11/2024'})`,
	axes: {
		bottom: {
			title: 'Time(HH:00)',
			mapsTo: 'key',
			scaleType: 'labels',
			domain: ['12:00', '02:00', '17:00', '19:00']
		},
		left: {
			domain: [0, 400],
			mapsTo: 'value',
			title: 'No Of Bags Processed',
			scaleType: 'linear'
		}
	},
	height: '400px'
};
