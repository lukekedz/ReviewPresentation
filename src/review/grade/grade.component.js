import reviewContants from '../reviewConstants';
import _ from 'lodash';

export default class GradeComponent {

		icons;
    score;

		// angularjs 1.5 lifecycle hook for initializing controller
	$onInit() {
		this.initializeIcons();
	}

// angularjs 1.5 lifecycle hook, called whenever one-way bindings are updated.
	$onChanges() {
		this.initializeIcons();
	}

	initializeIcons() {
		this.icons = _.map(new Array(reviewContants.MAXSCORE), (dummy, index) => {
			return index < this.score ? "fa-circle" : "fa-circle-o"
		});
	}
}
