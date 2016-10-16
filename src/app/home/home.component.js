import constants from '../../constants';

export default class HomeComponent {

	constructor() {
		// when using property syntax eslnt displayed error so I
		// put the code in this constructor.
		this.constants = constants;
	}
}
