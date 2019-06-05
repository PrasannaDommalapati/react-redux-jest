import React from 'react'
import Enzyme, { findByAttr,checkProps } from '../setupTests'
import App from '../App'

describe('App Test Suite', () => {
    let props = {
        email: 'dummy'
    }
    it('renders correctly', () => {
        let wrapper = Enzyme.shallow(<App {...props}/>);
        let propsErr = checkProps(App, props);
        expect(propsErr).toBeUndefined();     
        expect(findByAttr(wrapper, "data-heading")).toHaveText("Hello world")
    });
})