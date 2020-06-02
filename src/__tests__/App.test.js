import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockEvents } from "../mock-events";

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App/>)
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })
  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })

  test('default list number should be 30', () => {
    expect(AppWrapper.state("eventsNumber")).toBe(30);
  });

  test('update event number correctly', () => {
    var findEvent = AppWrapper.find(NumberOfEvents);
    findEvent.props().eventsNum(5);
    expect(AppWrapper.state("eventsNumber")).toBe(5);
  })

  test('update event number to component', () => {
    AppWrapper.instance().updateEventsNumber(5);
    AppWrapper.update();
    var findEvent = AppWrapper.find(NumberOfEvents);
    expect(findEvent.props().currentNum).toEqual(5);
  })
})
describe('<App /> integration', () => {
  test('get list of events by city', async () => {
    const AppWrapper = mount(<App/>);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleOnClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1,1.2);
  })
  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App/>);
    AppWrapper.instance().updateEvents(1.1,1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ eventsToShow: [{ id: 1, group: { name: "1"} }, { id: 2, group: { name: "2"} }, { id: 3, group: { name: "3"} },{ id: 4, group: { name: "4"} }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
  })
})
