import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../header';

describe('Header', () => {
  it('Should render empty header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render header with text', () => {
    const tree = renderer.create(<Header>Sample heading</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
