import { assert } from 'chai';
import PresentationListComponent from './presentation-list.component';
import Presentation from '../model/presentation';

// this file uses the assert syntax to allow you to compare the BDD and TDD style of expectations and asserts.

describe('PresentationListComponent', () => {
	let vm = undefined;

	describe('Constructor', () => {

		it('should throw if DataService is undefined or null', () => {
			let caught = false;

			try {
				let sut = new PresentationListComponent(undefined);
			} catch(e) {
				caught = true;
				assert.equal(e.message, 'DataService is undefined or null');
			}

			assert.isTrue(caught);
		});

		it('should have property dataService', () => {
			let sut = new PresentationListComponent({});
			assert.property(sut, 'dataService');
		});

		it('should have property unreviewedPresentations', () => {
			let sut = new PresentationListComponent({});
			assert.property(sut, 'unreviewedPresentations');
		});

		it('should have property reviewedPresentations', () => {
			let sut = new PresentationListComponent({});
			assert.property(sut, 'reviewedPresentations');
		});

		it('should have property unreviewedTitle', () => {
			let sut = new PresentationListComponent({});
			assert.property(sut, 'unreviewedTitle');
		});

		it('should have property reviewedTitle', () => {
			let sut = new PresentationListComponent({});
			assert.property(sut, 'reviewedTitle');
		});

		it('should have function $routerOnActivate', () => {
			let sut = new PresentationListComponent({});
			assert.isFunction(sut.$routerOnActivate);
		});

		it('should have property unreviewedTitle equal to "Presentations Needing Your Review"', () => {
			let sut = new PresentationListComponent({});
			assert.equal(sut.unreviewedTitle, 'Presentations Needing Your Review');
		});

		it('should have property reviewedTitle equal to "Presentations You\'ve Reviewed"', () => {
			let sut = new PresentationListComponent({});
			assert.equal(sut.reviewedTitle, 'Presentations You\'ve Reviewed');
		});

	});

	describe('$routerOnActivate', () => {

		const ZERO = 0;
		const ONE = 1;

		it('should populate unreviewedPresentations when dataService returns unreviewed presentations', () => {
			let ds = {
				getPresentations: () => {
					return [new Presentation(1, 'Using AngularJS Components')];
				}
			}
			let sut = new PresentationListComponent(ds);
			sut.$routerOnActivate();

			assert.equal(sut.unreviewedPresentations.length, ONE);
		});

		it('should not populate unreviewedPresentations when dataService returns no unreviewed presentations', () => {
			let ds = {
				getPresentations: () => {
					let reviewed = new Presentation(1, 'Using AngularJS Components');
					reviewed.hasBeenReviewed = true;
					return [reviewed];
				}
			}
			let sut = new PresentationListComponent(ds);
			sut.$routerOnActivate();

			assert.equal(sut.unreviewedPresentations.length, ZERO);
		});

		it('should populate reviewedPresentations when dataService returns reviewed presentations', () => {
			let ds = {
				getPresentations: () => {
					let reviewed = new Presentation(1, 'Using AngularJS Components');
					reviewed.hasBeenReviewed = true;
					return [reviewed];
				}
			}
			let sut = new PresentationListComponent(ds);
			sut.$routerOnActivate();

			assert.equal(sut.reviewedPresentations.length, ONE);
		});

		it('should not populate reviewedPresentations when dataService returns no reviewed presentations', () => {
			let ds = {
				getPresentations: () => {
					return [new Presentation(1, 'Using AngularJS Components')];
				}
			}
			let sut = new PresentationListComponent(ds);
			sut.$routerOnActivate();

			assert.equal(sut.reviewedPresentations.length, ZERO);
		});
	});

});
