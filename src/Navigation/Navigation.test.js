import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import AppBar from '@material-ui/core/AppBar';

configure({adapter: new Adapter()})

describe('<Navigation />', () => {
    it('should always have an <AppBar />', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(AppBar)).toHaveLength(1);
    });
});