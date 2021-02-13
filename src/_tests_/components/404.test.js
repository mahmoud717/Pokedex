import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '../../components/404';

const setup = () => shallow(<NotFound />);

describe('404 component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.not-found');
    expect(element.length).toEqual(1);
  });
});
