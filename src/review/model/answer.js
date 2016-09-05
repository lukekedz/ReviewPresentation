export default class Answer {

    constructor(questionId, grade) {
        if (!questionId || !Number.isInteger(questionId)) {
            throw new Error('questionId is undefined, null, or is not an integer');
        }
        if (!grade || !Number.isInteger(grade)) {
            throw new Error('grade is undefined, null, or is not an integer');
        }
        if (grade < 0 || grade > 10) {
            throw new Error('grade is less than zero or greater than ten');
        }

        this.questionId = questionId;
        this.grade = grade;
    }
}
