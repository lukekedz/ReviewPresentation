import constants from '../../constants';

export default class RootComponent {

    constructor() {
        this.items = [{
            title: constants.CODECAMPENAME,
            link: ['Home']
        }, {
            title: 'Home',
            link: ['Home']
        }, {
            title: 'Review',
            link: ['Review', 'PresentationList']
        }];
    }

}
