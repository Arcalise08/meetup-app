import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from 'enzyme';
import { mockEvents } from '../mock-events';
import App from "../App";
import CitySearch from "../CitySearch";

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', ({ given, when, then }) => {
        let AppWrap;
        given('user hasn’t searched for any city', () => {

        });

        when('the user opens the app', () => {
        AppWrap = mount(<App/>);

        });

        then('the user should see the list of upcoming events from their location', () => {
        AppWrap.update();
        expect(AppWrap.find('.Event')).toHaveLength(mockEvents.events.length);
        });
    });

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let CityWrap;
        given('the main page is open', () => {
            CityWrap = shallow(<CitySearch/>)
        });

        when('user starts typing in the city textbox', () => {
            CityWrap.find('.city').simulate('change', { target: { value: 'Munich' } });
        });

        then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
            expect(CityWrap.find('.suggestions li')).toHaveLength(2);
        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        let AppWrap;
        given('user was typing “Munich” in the city textbox', () => {
            AppWrap = mount(<App/>);
            AppWrap.find('.city').simulate('change', { target: { value: "Munich" } });
        });

        and('the list of suggested cities is showing', () => {
            AppWrap.update();
            expect(AppWrap.find('.suggestions li')).toHaveLength(2);
        });

        when('the user selects a city (e.g., “Munich, Germany”) from the list', () => {
            AppWrap.find('.suggestions li').at(0).simulate('click')
        });

        then('their city should be changed to that city (i.e., “Munich, Germany”)', () => {
            const CityWrapper = AppWrap.find(CitySearch);
            expect(CityWrapper.state('query')).toBe('Munich, Germany');
        });

        and('the user should receive a list of upcoming events in that city', () => {
            expect(AppWrap.find('.Event')).toHaveLength(mockEvents.events.length);
        });
    });
});
