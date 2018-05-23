import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('component/Header', () => {
  const testProps = 'ClassName';

  describe('props', () => {
    describe('.classes', () => {
      it('should have class', () => {
        const wrapper = shallow(<Header className={testProps} />);

        expect(wrapper).toHaveClassName('ClassName');
      });
    });
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
