import React from 'react'
import Enzyme,{findByAttr} from '../setupTests'
import App from '../App';

describe('App Test Suite', () => {
  
    it('renders correctly', () => {
        let wrapper = Enzyme.shallow(<App/>);
        
        expect(findByAttr(wrapper,'data-layout')).toHaveLength(1);
    });
})