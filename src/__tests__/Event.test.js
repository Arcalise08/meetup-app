import React from "react";
import { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react'
import Event from "../Event";
import { mockEvents }  from "../mock-events";

describe('<Event/> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockEvents.events[0]}/>);
    });

    test('render event item', () => {
        expect(EventWrapper.find('.eventItem')).toHaveLength(1);
    });
    test('render event title', () => {
        expect(EventWrapper.find('.eventTitle')).toHaveLength(1);
    });
    test('render event number of attending', () => {
        expect(EventWrapper.find('.attending')).toHaveLength(1);
    });
    test('render show details button', () => {
        expect(EventWrapper.find('.details')).toHaveLength(1);
    });
    test('render empty container for hidden details', () => {
        expect(EventWrapper.find('.collapseElement')).toHaveLength(1);
    });
    test('details are collapsed by default', () => {
        expect(EventWrapper.find('.collapseElement').prop('in')).toBe(false);
    })
})

describe('<Event/> component',() => {
    test('show details when event ID matches', () => {
        let EventWrapper = shallow(<Event itemToShow={5} event={{id: 5, group: {name: "1"}}}/>);
        expect(EventWrapper.find('.collapseElement').prop('in')).toBe(true);
    })
    test('dont show details if event ID does not match', () => {
        let EventWrapper = shallow(<Event itemToShow={6} event={{id: 5, group: {name: "1"}}}/>);
        expect(EventWrapper.find('.collapseElement').prop('in')).toBe(false);
    })
    test('replace event descriptions html tags', () => {
        let EventWrapper = shallow(<Event itemToShow={6} event={{id: 5, group: {name: "1"}} }/>);
        var str = EventWrapper.instance().stripTags("<p>this is a robbery</p>");
        expect(str).toBe("this is a robbery");
    })
})

