import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '../../components/about';

const setup = () => shallow(<AboutUs />);

describe('AboutUs component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.author-heading');
    expect(element.length).toEqual(0);
  });

  test('renders the A heading', () => {
    const heading = component.find('.author-heading');
    expect(heading).toMatchSnapshot();
  });
});
