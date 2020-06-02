import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import EventList from "../EventList";
import Event from "../Event";
import { mockEvents } from "../mock-events";

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
        expect(EventListWrapper.find(Event)).toHaveLength(4);
    });
    test('correctly render details when click show details button', () => {
        const event = mockEvents.events
        const EventListWrapper = mount(<EventList events={mockEvents.events}/>);
        const EventWrapper = EventListWrapper.find(Event);
        for (var i=0; i<event.length; i++) {
            EventWrapper.find('.details').at(i).simulate('click');
            expect(EventListWrapper.state('shownEvent')).toBe(event[i].id)
        }
    });
    test('correctly hide details when click hide details button', () => {
        const event = mockEvents.events
        const EventListWrapper = mount(<EventList events={event}/>);
        const EventWrapper = EventListWrapper.find(Event);
        for (var i=0; i<event.length; i++) {
            EventListWrapper.setState({shownEvent: event[i].id})
            EventWrapper.find('.details').at(i).simulate('click');
            expect(EventListWrapper.state('shownEvent')).toBe(-1)
        }
    });
})
