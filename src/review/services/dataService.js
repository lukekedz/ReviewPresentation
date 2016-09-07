import _ from 'lodash';
import Presentation from '../model/presentation';
import Question from '../model/question';
import reviewConstants from '../reviewConstants';

export class Hello {
	title;
}

export default class DataService {

	__presentations = [];
	__questions = [];

	constructor() {
		this.__createDatabase();
	}

	getPresentations() {
		return this.__presentations;
	}

	getPresentation(id) {
		if(!id || !Number.isInteger(id)) {
			throw new Error('id is undefined, null, or is not an integer');
		}
		return _.cloneDeep(_.find(this.__presentations, { id: id }));
	}

	reviewPresentation(presentation, answeredQuestions) {
		if(!presentation || !(presentation instanceof Presentation)) {
			throw new Error('presentation is undefined, null or not a Presentation');
		}
		if(!answeredQuestions || answeredQuestions.length === 0 || !Array.isArray(answeredQuestions)) {
			throw new Error('answeredQuestions is undefined, null, has no array items, or is not an array');
		}

		_.remove(this.__presentations, item => { return item.id === presentation.id });

		presentation.totalScore = _.sumBy(answeredQuestions, 'score');
		presentation.maximumScore = reviewConstants.MAXSCORE * answeredQuestions.length;
		presentation.hasBeenReviewed = true;
		this.__presentations.push(presentation);
	}

	getQuestions() {
		return _.cloneDeep(this.__questions);
	}

	__createDatabase() {
		this.__presentations.push(new Presentation(1, 'Using AngularJS Components'));
		this.__presentations.push(new Presentation(2, 'SASS is CSS on Steriods'));
		this.__presentations.push(new Presentation(3, 'Introduction to the Raspberry PI'));

		this.__questions.push(new Question(1, 'Presentation organization?', 'none', 'good', 'perfect'));
		this.__questions.push(new Question(2, 'Presentation met the goals of the abstract?', 'no', 'good', 'perfect'));
		this.__questions.push(new Question(3, 'Speaker answered questions professionally? (repeated question, polite, authoritative)', 'no', 'good', 'perfect'));
		this.__questions.push(new Question(4, 'Presentation started on time?', 'no', 'within 2 minutes', 'on time'));
		this.__questions.push(new Question(5, 'Presentation ended on time?', 'no', 'within 2 minutes', 'on time'));
		this.__questions.push(new Question(6, 'Room WIFI?', 'none', 'usable', 'perfect'));
	}

}
