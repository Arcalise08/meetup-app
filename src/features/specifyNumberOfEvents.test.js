import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from 'enzyme';
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrap;
    test('By default, When the user loads the app the user is shown 30 events.', ({ given, when, then }) => {
        given('the app isnt loaded', () => {

        });

        when('when the user opens the app', () => {
            AppWrap = mount(<App/>);
        });

        then('they should see a list of 30 events', () => {
            AppWrap.update();
            expect(AppWrap.find('.Event')).toHaveLength(20); //only 20 events available from mock data.
            expect(AppWrap.state('eventsNumber')).toBe(30);
            AppWrap.unmount();
        });
    });

    test('When user specifies number of events to show. they are shown the specified number of events', ({ given, when, then }) => {
        given('the main page is open', () => {
            AppWrap = mount(<App/>);
        });

        when('the user specifies the number of events to show', () => {
            AppWrap.update();
            AppWrap.find('.eventNumberInput').simulate('change', { target: { value: 5 } } )
        });

        then('they are then shown that number of events', () => {
            AppWrap.update();
            expect(AppWrap.find('.Event')).toHaveLength(5);
        });
    });
})