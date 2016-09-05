import PresentationDetailComponent from './presentation-Detail.Component';
import Question from '../model/question';
import Presentation from '../model/presentation';

describe('PresentationDetailComponent', () => {

	let dataService = {};
	const ID = 1;
	const ZERO = 0;
	const TEXT = 'text';
	const TEN = 10;

	describe('constructor', () => {

		it('should throw if DataService is undefined or null', () => {
			let caught = false;

			try {
				let sut = new PresentationDetailComponent(undefined);
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('DataService is undefined or null');
			}

			expect(caught).to.equal(true);
		});
	});

	describe('save', () => {

		it('should throw if disableForm is true', () => {
			let sut = new PresentationDetailComponent(dataService);
			let stub = sinon.stub(sut, 'checkIsFormValid').returns();

			let caught = false;

			try {
				sut.save();
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('form is invalid');
			}

			expect(caught).to.equal(true);
			stub.restore();
		});

		it('should invoke checkIsFormValid once', () => {
			let sut = new PresentationDetailComponent(dataService);
			let mock = sinon.mock(sut);
			mock.expects('checkIsFormValid')
				.once()
				.returns();

			try {
				sut.save();
			} catch(e) {}

			mock.verify();
			mock.restore();
		});

		it('should invoke dataService.reviewPresentation once', () => {
			dataService = {
				reviewPresentation: () => {}
			}
			let presentation = {};
			let questions = [];

			let sut = new PresentationDetailComponent(dataService);
			sut.disableForm = false;
			sut.$router = {
				navigate: () => {}
			};
			sut.presentation = presentation;
			sut.questions = questions;

			let stubCheckIsFormValid = sinon.stub(sut, 'checkIsFormValid').returns();
			let stubNavigate = sinon.stub(sut.$router, 'navigate').returns();

			let mock = sinon.mock(sut.dataService);
			mock.expects('reviewPresentation')
				.once()
				.withExactArgs(presentation, questions)
				.returns();

			sut.save();

			mock.verify();
			mock.restore();
			stubCheckIsFormValid.restore();
			stubNavigate.restore();
		});

		it('should invoke $router.navigate once', () => {
			dataService = {
				reviewPresentation: () => {}
			}

			let sut = new PresentationDetailComponent(dataService);
			sut.disableForm = false;
			sut.$router = {
				navigate: () => {}
			};

			let stubCheckIsFormValid = sinon.stub(sut, 'checkIsFormValid').returns();
			let stubReviewPresentation = sinon.stub(sut.dataService, 'reviewPresentation').returns();

			let mock = sinon.mock(sut.$router);
			mock.expects('navigate')
				.once()
				.withExactArgs(['PresentationList'])
				.returns();

			sut.save();

			mock.verify();
			mock.restore();
			stubCheckIsFormValid.restore();
			stubReviewPresentation.restore();
		});
	});

	describe('scoreSelected', () => {

		it('should throw if question is undefined or null', () => {
			let caught = false;

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected();
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('question is undefined, null, or not a question');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if questions is not a Questions', () => {
			let caught = false;

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected({});
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('question is undefined, null, or not a question');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if score is undefined or null', () => {
			let caught = false;
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected(question)
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('score is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});
		it('should throw if score is not an integer', () => {
			let caught = false;
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected(question, 'abc')
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('score is undefined, null, or is not an integer');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if score is less than zero', () => {
			let caught = false;
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected(question, -1)
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('score out of range 0-10');
			}

			expect(caught).to.equal(true);
		});

		it('should throw if score is greater than ten', () => {
			let caught = false;
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);

			try {
				let sut = new PresentationDetailComponent(dataService);
				sut.scoreSelected(question, 11)
			} catch(e) {
				caught = true;
				expect(e.message).to.equal('score out of range 0-10');
			}

			expect(caught).to.equal(true);
		});

		it('should set the question score property to score', () => {
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);
			let sut = new PresentationDetailComponent(dataService);

			let stubCheckIsFormValid = sinon.stub(sut, 'checkIsFormValid').returns();

			sut.scoreSelected(question, TEN)

			expect(question.score).to.equal(TEN);
			stubCheckIsFormValid.restore();
		});

		it('should invoke checkIsFormValid once', () => {
			let question = new Question(ID, TEXT, TEXT, TEXT, TEXT);
			let sut = new PresentationDetailComponent(dataService);

			let mock = sinon.mock(sut);
			mock.expects('checkIsFormValid')
				.once()
				.returns();

			sut.scoreSelected(question, TEN)
			mock.verify();
			mock.restore();
		});
	});

	describe('checkIsFormValid', () => {

		it('should set disableForm to true when any questions have a score of zero', () => {
			let sut = new PresentationDetailComponent(dataService);
			sut.questions = [new Question(ID, TEXT, TEXT, TEXT, TEXT)];
			sut.checkIsFormValid();
			expect(sut.disableForm).to.equal(true);
		});

		it('should set disableForm to false when any questions have a score greater than zero', () => {
			let sut = new PresentationDetailComponent(dataService);
			sut.questions = [new Question(ID, TEXT, TEXT, TEXT, TEXT)];
			sut.questions[0].score = TEN;
			sut.checkIsFormValid();
			expect(sut.disableForm).to.equal(false);
		});
	});

	describe('$routerOnActivate', () => {

		it('should set errorText if action is undefined or null', () => {
			let sut = new PresentationDetailComponent(dataService);
			sut.$routerOnActivate();
			expect(sut.errorText).to.equal('Invalid parameter 1');
		});

		it('should set errorText if action.params is undefined or null', () => {
			let sut = new PresentationDetailComponent(dataService);
			sut.$routerOnActivate({});
			expect(sut.errorText).to.equal('Invalid parameter 2');
		});

		it('should set errorText if action.params.id is undefined or null', () => {
			let sut = new PresentationDetailComponent(dataService);
			let action = {
				params: {}
			}
			sut.$routerOnActivate(action);
			expect(sut.errorText).to.equal('Invalid parameter 3');
		});

		it('should set errorText if action.params.id is NaN', () => {
			let sut = new PresentationDetailComponent(dataService);
			let action = {
				params: {
					id: '9daasd'
				}
			}
			let stub = sinon.stub(sut, 'filterInteger').returns(NaN);
			sut.$routerOnActivate(action);
			expect(sut.errorText).to.equal('Invalid parameter 4');

			stub.restore();
		});

		it('should set errorText if action.params.id is greater than Number.MAX_SAFE_INTEGER', () => {
			let sut = new PresentationDetailComponent(dataService);
			let action = {
				params: {
					id: Number.MAX_SAFE_INTEGER + 100
				}
			}

			let stub = sinon.stub(sut, 'filterInteger').returns(Number.MAX_SAFE_INTEGER + 100);
			sut.$routerOnActivate(action);
			expect(sut.errorText).to.equal('Invalid parameter 5');

			stub.restore();
		});

		it('should set errorText if the presentation was not found', () => {
			dataService = {
				getPresentation: () => {}
			}
			let sut = new PresentationDetailComponent(dataService);
			let action = {
				params: {
					id: 1
				}
			}

			let stubFilterInteger = sinon.stub(sut, 'filterInteger').returns(ID);
			let stubGetPresentation = sinon.stub(dataService, 'getPresentation').returns(undefined);
			sut.$routerOnActivate(action);
			expect(sut.errorText).to.equal('Presentation not found');

			stubFilterInteger.restore();
			stubGetPresentation.restore();
		});

		it('should set presentation, title, questions if action is valid', () => {
			dataService = {
				getPresentation: () => {},
				getQuestions: () => {}
			}
			let sut = new PresentationDetailComponent(dataService);
			let action = {
				params: {
					id: 1
				}
			}
			let presentation = new Presentation(ID, TEXT);
			let questions = [new Question(ID, TEXT, TEXT, TEXT, TEXT)];
			let stubFilterInteger = sinon.stub(sut, 'filterInteger').returns(ID);
			let stubGetPresentation = sinon.stub(dataService, 'getPresentation').withArgs(ID).returns(presentation);
			let stubGetQuestions = sinon.stub(dataService, 'getQuestions').returns(questions);
			sut.$routerOnActivate(action);

			expect(sut.presentation).to.equal(presentation);
			expect(sut.title).to.equal(presentation.title);
			expect(sut.questions).to.deep.equal(questions);

			stubFilterInteger.restore();

            // unable to run restore?? test passes.
			//stubGetPresentation.restore();
			stubGetQuestions.restore();
		});
	});

    describe('filterInteger', () => {

        it('should return NaN if value is aa', () => {
            let sut = new PresentationDetailComponent(dataService);
            expect(sut.filterInteger('aa')).to.be.NaN;
        });

        it('should return NaN if value is undefined', () => {
            let sut = new PresentationDetailComponent(dataService);
            expect(sut.filterInteger()).to.be.NaN;
        });

        it('should return NaN if value is 999c', () => {
            let sut = new PresentationDetailComponent(dataService);
            expect(sut.filterInteger('999c')).to.be.NaN;
        });

        it('should return 50 if value is 50', () => {
            let sut = new PresentationDetailComponent(dataService);
            expect(sut.filterInteger(50)).to.equal(50);
        });
    });

});
