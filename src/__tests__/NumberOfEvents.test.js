import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";


describe('<NumberOfEvents/> component', () => {
    let ENumWrapper;

    beforeAll(() => {
        ENumWrapper = shallow(<NumberOfEvents eventsNum={jest.fn()}/>);
    });

    test('render event item', () => {
        expect(ENumWrapper.find('.eventNumber')).toHaveLength(1);
    });

    test('render event item input', () => {
        expect(ENumWrapper.find('.eventNumberInput')).toHaveLength(1);
    });

    test('list number changes on input correctly', () => {
        const listNum = 15
        ENumWrapper.find('.eventNumberInput').simulate("change", { target: { value: listNum } })
        expect(ENumWrapper.state("numberToShow")).toBe(listNum);
    });
})
