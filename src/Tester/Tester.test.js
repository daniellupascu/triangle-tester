import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tester from './Tester';
import Input from '@material-ui/core/Input';
import Result from '../Result/Result';

configure({adapter: new Adapter()})

describe('<Tester />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tester />);
    });

    it('should always have 3 <Input />', () => {
        expect(wrapper.find(Input)).toHaveLength(3);
    });

    it('should containt one <Result /> component', () => {
        expect(wrapper.find(Result)).toHaveLength(1);
    })
});