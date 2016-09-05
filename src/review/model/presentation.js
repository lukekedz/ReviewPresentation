import _ from 'underscore';
import reviewContants  from '../reviewConstants';

export default class Presentation {

	totalScore;
	maximumScore;
	replies;

	constructor(id, title) {
		if(!id || !Number.isInteger(id)) {
			throw new Error('id is undefined, null, or is not an integer');
		}
		if(!title) {
			throw new Error('title is undefined, null, or is an empty string');
		}
		this.id = id;
		this.title = title;
		this.hasBeenReviewed = false;
	}

	grade(answers) {
        if (!answers || answers.length === 0 || !Array.isArray(answers)) {
            throw new Error('answers is undefined, null, has no array items, or is not an array');
        }

		let runningTotal;
		this.totalScore = _.reduce(answers, (runningTotal, answer) => {
			return runningTotal + answer.grade;
		}, 0);

        this.maximumScore = replies.length * reviewContants.MAXSCORE;

	}
}
