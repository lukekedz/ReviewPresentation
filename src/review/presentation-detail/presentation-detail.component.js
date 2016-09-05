import _ from 'underscore';

export default class PresentationDetailComponent {

	questions;
	presentation;
	title;
	errorText;

	constructor(DataService) {
		if(!DataService) {
			throw new Error('DataService is undefined or null');
		}

		this.dataService = DataService;
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
        if (isNaN(id)) {
            this.errorText = INVALIDPARAMETER + ' 4';
			return;
        }

		id = parseInt(id);
		if(!Number.isInteger(id)) {
			this.errorText = INVALIDPARAMETER + ' 5';
			return;
		}

		let presentation = this.dataService.getPresentation(id);
		if(!presentation) {
			this.errorText = 'Presentation not found';
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
