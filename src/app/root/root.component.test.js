import { assert } from 'chai';
import RootComponent from './root.component';

describe('RootComponent', () => {
    var vm = undefined;

    beforeEach(() => {
        vm = new RootComponent();
    });

    it('title should equal "Review Presentations"', () => {
       assert.equal(vm.title, 'Review Presentations');
    });
});


// import { chai, assert, expect } from 'chai';
//
// import AppComponent from './app.component';
// //import 'babel-polyfill';
//
// describe('AppComponent', () => {
//     var vm = undefined;
//
//     beforeEach(() => {
//         vm = new AppComponent();
//     });
//
//     it('title should equal "Review Presentations"', () => {
//        assert.equal(vm.title, 'Review Presentations');
//     });
// });
