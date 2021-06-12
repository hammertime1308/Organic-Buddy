import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '../footer';

describe('Footer', () => {
  it('Should render Footer without selection', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Footer with dashboard selected', () => {
    const tree = renderer.create(<Footer selected="dashboard" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Footer with shop selected', () => {
    const tree = renderer.create(<Footer selected="shop" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Footer with get help selected', () => {
    const tree = renderer.create(<Footer selected="getHelp" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render Footer with learn selected', () => {
    const tree = renderer.create(<Footer selected="learn" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
