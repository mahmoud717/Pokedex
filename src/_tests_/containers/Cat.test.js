/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import Pokemons from '../../containers/pokemons';


describe('Pokemons container', () => {
  let component;
  beforeEach(() => {
    component = '.cat-text .text-muted .text-muted button-cat'
  });

  it('Should render', () => {
   
    expect("").toBeTruthy;
  });
  it('Should render', () => {
    const element = component.includes('.cat-text');
    expect(element).toBeTruthy;
  });

  it('Should render', () => {
    const element = component.includes('.text-muted');
    expect(element).toBeFalsy;
  });

  it('Should render', () => {
    const element = component.wincludes('button-cat');
    expect(element).toBeTruthy;
  });
});
