import constants from '../../constants';

export default class RootComponent {

	constructor() {
		this.items = [{
			title: constants.CODECAMPNAME,
			link: ['Home']
		}, {
			title: 'Home',
			link: ['Home']
		}, {
			title: 'Review',
			link: ['Review', 'PresentationList']
		}];

		// since PresentationList is the default Component
		// I didn't have to pass it as part of the array.
		// Here for clarirty.
	}

}
