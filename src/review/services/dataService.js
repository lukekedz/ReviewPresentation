import _ from 'underscore';
import Presentation from '../model/presentation';
import Question from '../model/question';

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
        if (!id || !Number.isInteger(id)) {
            throw new Error('id is undefined, null, or is not an integer');
        }
        return _.findWhere(this.__presentations, {id: id});
    }

    updatePresentation(presentation) {
        if (!presentation) {
            throw new Error('presentation is undefined or null');
        }
        if (typeof presentation !== 'Presentation') {
            throw new Error('invalid object type');
        }

        this.__presentations = _.reject(this.__presentations, (removeMe) => {
            return removeMe.id = presentation.id;
        });

        this.__presentations.push(presentation);
    }

    getQuestions() {
        return this.__questions;
    }

    __createDatabase() {
        this.__presentations.push(new Presentation(1, 'Using AngularJS Components'));
        this.__presentations.push(new Presentation(2, 'SASS is CSS on Steriods'));
        this.__presentations.push(new Presentation(3, 'Introduction to the Raspberry PI'));

        this.__questions.push(new Question(1, 'Speaker', 'Presentation organization?', 'none', 'good', 'perfect'));
        this.__questions.push(new Question(2, 'Speaker', 'Presentation meet the goals of the abstract?', 'no', 'good', 'perfect'));
        this.__questions.push(new Question(3, 'Speaker', 'Speaker answered questions properly? (repeated question, polite, authoritative)', 'no', 'good', 'perfect'));

        this.__questions.push(new Question(4, 'Code Camp', 'Presentation started on time?', 'no', 'within 2 minutes', 'perfect'));
        this.__questions.push(new Question(5, 'Code Camp', 'Room WIFI?', 'no', 'acceptable', 'perfect'));
    }

}
