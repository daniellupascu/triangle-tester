import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Result from './Result';

configure({adapter: new Adapter()})

describe('<Result />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Result />);
    });

    it('should always have a <p/>', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should contain a #triangle when passing side lengths', () => {
        wrapper.setProps({sides: {
                                side1: 123,
                                side2: 123,
                                side3: ' 123 '
                            }})
        expect(wrapper.find('#triangle')).toHaveLength(1);
    })
    
});