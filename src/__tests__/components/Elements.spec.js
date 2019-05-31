import React from 'react';
import Enzyme from '../../../setupTests';

import Elements from '../../components/Elements';

it('Returns no elements when store is empty', () => {
  const wrapper = Enzyme.shallow(<Elements elements={[]} />);
  expect(wrapper.find('.element').length).toBe(0);
});
