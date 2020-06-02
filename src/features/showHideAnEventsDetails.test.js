import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from 'enzyme';
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrap;
    test('By default, When the user loads the app. No event details are visible', ({ given, when, then }) => {
        given('the app isnt loaded', () => {

        });

        when('when the user opens the app', () => {
            AppWrap = mount(<App/>);
        });

        then('they should see a list of events with details not showing', () => {
            AppWrap.update();
            expect(AppWrap.find('.collapseElement').at(0).prop('in')).toBe(false);
        });
    });

    test('When user clicks show details, the details are then displayed', ({ given, when, then }) => {
        given('the details for event are hidden', () => {
            expect(AppWrap.find('.collapseElement').at(0).prop('in')).toBe(false);
        });

        when('the user clicks show details', () => {
            AppWrap.find('.details').at(0).simulate("click");
        });

        then('the user is shown details for current event', () => {
            AppWrap.update();
            expect(AppWrap.find('.collapseElement').at(0).prop('in')).toBe(true);
        });
    });

    test('when user clicks hide details, the details are then hidden', ({ given, when, then }) => {
        given('the details for current event are hidden', () => {
            expect(AppWrap.find('.collapseElement').at(0).prop('in')).toBe(true);
        });

        when('the user clicks hide details', () => {
            AppWrap.find('.details').at(0).simulate("click");
        });

        then('the event details are then hidden', () => {
            expect(AppWrap.find('.collapseElement').at(0).prop('in')).toBe(false);
        });
    });
});