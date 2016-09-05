import _ from 'lodash';

export default class PresentationListComponent {

    unreviewedPresentations = [];
    reviewedPresentations = [];

    unreviewedTitle = "Presentations Needing Your Review";
    reviewedTitle = "Presentations You've Reviewed";

    constructor(DataService) {
        if (!DataService) {
            throw new Error('DataService is undefined or null');
        }

        this.dataService = DataService;
    }

    $routerOnActivate() {
        let data = this.dataService.getPresentations();
        this.unreviewedPresentations = _.sortBy(_.filter(data, {hasBeenReviewed: false}), 'id');
        this.reviewedPresentations = _.sortBy(_.filter(data, {hasBeenReviewed: true}), 'id');
    }

}
PresentationListComponent.$inject = ['DataService'];
