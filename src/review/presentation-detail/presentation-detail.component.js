import _ from 'lodash';
import Question from '../model/question';
export default class PresentationDetailComponent {

	questions;
	presentation;
	title;
	errorText;
	disableForm = true;

	constructor(DataService) {
		if(!DataService) {
			throw new Error('DataService is undefined or null');
		}

		this.dataService = DataService;
	}

	save() {
		this.checkIsFormValid();
		if (this.disableForm) {
			throw new Error('form is invalid');
		}
		this.dataService.reviewPresentation(this.presentation, this.questions);
		this.$router.navigate(['PresentationList']);
	}

	scoreSelected(question, score) {
		if(!question || !(question instanceof Question)) {
			throw new Error('question is undefined, null, or not a question');
		}
		if(!score || !Number.isInteger(score)) {
			throw new Error('score is undefined, null, or is not an integer');
		}
		if(score < 0 || score > 10) {
			throw new Error('score out of range 0-10');
		}

		question.score = score;
		this.checkIsFormValid();
	}

	checkIsFormValid() {
		let check = _.find(this.questions, { 'score': 0 });
		this.disableForm = check !== undefined;
	}

	$routerOnActivate(action) {
		const INVALIDPARAMETER = 'Invalid parameter';

		if(!action) {
			this.errorText = INVALIDPARAMETER + ' 1';
			return;
		}
		if(!action.params) {
			this.errorText = INVALIDPARAMETER + ' 2';
			return;
		}
		if(!action.params.id) {
			this.errorText = INVALIDPARAMETER + ' 3';
			return;
		}

		let id = this.filterInteger(action.params.id);
		if(isNaN(id)) {
			this.errorText = INVALIDPARAMETER + ' 4';
			return;
		}

		id = parseInt(id);
		if (id > Number.MAX_SAFE_INTEGER) {
			this.errorText = INVALIDPARAMETER + ' 5';
			return;
		}

		let presentation = this.dataService.getPresentation(id);
		if(!presentation) {
			this.errorText = 'Presentation not found';
			return;
		} else {
			this.presentation = presentation;
			this.title = presentation.title;
		}

		this.questions = this.dataService.getQuestions();
	}

	filterInteger(value) {
		if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
			return Number(value);
		return NaN;
	}

}
PresentationDetailComponent.$inject = ['DataService'];
