import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../../../react-client/src/app';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without crashing', () => {

});

const app = shallow(<App />);

test('Component renders', () => {
    expect(app.exists()).toBeTruthy();
});


