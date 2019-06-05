import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types'
import 'jest-enzyme'

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;

//finding an element with data attribute
export const findByAttr = (component, dataAttr) =>{
    return component.find(`[${dataAttr}]`);
} 
//checking the types of props of a component
export const checkProps = (component, expectedProps)=> {

    return checkPropTypes(component.propTypes, expectedProps,'props',component.name);
} 