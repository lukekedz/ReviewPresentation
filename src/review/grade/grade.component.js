import reviewContants from '../reviewConstants';
import _ from 'lodash';

export default class GradeComponent {

	icons;
    score;

	$onInit() {
		this.initializeIcons();
	}

	$onChanges() {
		this.initializeIcons();
	}

	initializeIcons() {
		this.icons = _.map(new Array(reviewContants.MAXSCORE), (dummy, index) => {
			return index < this.score ? "fa-circle" : "fa-circle-o"
		});
	}
}
