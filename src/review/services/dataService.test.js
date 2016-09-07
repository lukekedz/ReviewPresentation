import _ from 'lodash';
import DataService from './DataService';
import reviewConstants from '../reviewConstants';

describe('DataService', () => {

	const TEN = 10;

	describe('constructor', () => {

		it('should invoke __createDatabase and populate __presentations and __questions properties', () => {
			let sut = new DataService();

			expect(sut).to.have.property('__presentations');
			expect(Array.isArray(sut.__presentations)).to.equal(true);
			expect(sut.__presentations.length).to.equal(3);

			expect(sut).to.have.property('__questions');
			expect(Array.isArray(sut.__questions)).to.equal(true);
			expect(sut.__questions.length).to.equal(6);
		});
	});

	describe('getPresentations', () => {

		it('should return presentations', () => {
			let sut = new DataService();
			let presentations = sut.getPresentations();
			expect(Array.isArray(presentations)).to.equal(true);
			expect(presentations.length).to.equal(3);
		});
	});

	describe('getPresentation', () => {

		it('should throw if id is undefined or null', () => {
			let caught = false;

			try {
				let sut = new DataService();
				sut.getPresentation();
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if id is not an integer', () => {
			let caught = false;

			try {
				let sut = new DataService();
				sut.getPresentation('abc');
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('id is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should return deep copy of presentation', () => {
			let sut = new DataService();
			let sourcePresentation = sut.__presentations[0];

			let targetPresentation = sut.getPresentation(sourcePresentation.id);

			expect(sourcePresentation.id).to.equal(targetPresentation.id);
			expect(sourcePresentation).to.not.equal(targetPresentation);
		});
	});

	describe('reviewPresentation', () => {

		it('should throw if presentation is undefined or null', () => {
			let caught = false;

			try {
				let sut = new DataService();
				sut.reviewPresentation();
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('presentation is undefined, null or not a Presentation');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if presentation is not a Presentation', () => {
			let caught = false;

			try {
				let sut = new DataService();
				sut.reviewPresentation({});
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('presentation is undefined, null or not a Presentation');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if answeredQuestions is undefined or null', () => {
			let caught = false;

			try {
				let sut = new DataService();
				let presentation = sut.__presentations[0];
				sut.reviewPresentation(presentation);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('answeredQuestions is undefined, null, has no array items, or is not an array');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if answeredQuestions is not an array', () => {
			let caught = false;

			try {
				let sut = new DataService();
				let presentation = sut.__presentations[0];
				sut.reviewPresentation(presentation, 'abc');
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('answeredQuestions is undefined, null, has no array items, or is not an array');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if answeredQuestions is an empty array', () => {
			let caught = false;

			try {
				let sut = new DataService();
				let presentation = sut.__presentations[0];
				sut.reviewPresentation(presentation, []);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('answeredQuestions is undefined, null, has no array items, or is not an array');
			}

			expect(caught).to.equal(true);
		});

		it('should remove and replace the presentation', () => {
			let sut = new DataService();
			let originalPresentation = sut.__presentations[0];
			let sourcePresentation = sut.getPresentation(originalPresentation.id);
			sut.__questions[0].score = TEN;

			sut.reviewPresentation(sourcePresentation, sut.__questions);

			let targetPresentation = _.find(sut.__presentations, { id: sourcePresentation.id });

			expect(originalPresentation).to.not.equal(targetPresentation);
			expect(sourcePresentation).to.equal(targetPresentation);
		});

		it('should calculate the totalScore', () => {
			let sut = new DataService();
			let sourcePresentation = sut.getPresentation(sut.__presentations[0].id);
			sut.__questions[0].score = TEN;

			sut.reviewPresentation(sourcePresentation, sut.__questions);

			expect(sourcePresentation.totalScore).to.equal(TEN);
		});

		it('should calculate the maximumScore', () => {
			let sut = new DataService();
			let sourcePresentation = sut.getPresentation(sut.__presentations[0].id);
			sut.__questions[0].score = TEN;

			sut.reviewPresentation(sourcePresentation, sut.__questions);

			expect(sourcePresentation.maximumScore).to.equal(reviewConstants.MAXSCORE * sut.__questions.length);
		});

		it('should set hasBeenReviewed', () => {
			let sut = new DataService();
			let sourcePresentation = sut.getPresentation(sut.__presentations[0].id);
			sut.__questions[0].score = TEN;

			sut.reviewPresentation(sourcePresentation, sut.__questions);

			expect(sourcePresentation.hasBeenReviewed).to.equal(true);
		});
	});

	describe('getQuestions', () => {

		it('should return a deep copy of the dataService quesitons', () => {
			let sut = new DataService();
			let sourceQuestion = sut.__questions[0];

			let targetQuestions = sut.getQuestions();

			expect(sourceQuestion.id).to.equal(targetQuestions[0].id);
			expect(sourceQuestion).to.not.equal(targetQuestions[0]);
		});
	});

	describe('__createDatabase', () => {

		it('should populate the __presentations and __questions arrays', () => {
			let sut = new DataService();

			expect(Array.isArray(sut.__presentations)).to.equal(true);
			expect(sut.__presentations.length).to.equal(3);
			expect(sut.__presentations[2].id).to.equal(3);

			expect(Array.isArray(sut.__questions)).to.equal(true);
			expect(sut.__questions.length).to.equal(6);
			expect(sut.__questions[5].id).to.equal(6);
		});
	});

});
