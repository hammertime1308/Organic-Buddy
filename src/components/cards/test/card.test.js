import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../card';

describe('Card', () => {
  it('Should render card without image', () => {
    const tree = renderer
      .create(
        <Card
          id="1"
          productName="Sample name for test"
          productDescription="sample description of the card"
          productPrice={10200}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render card with image', () => {
    const tree = renderer
      .create(
        <Card
          id="1"
          productName="Sample name for test"
          productDescription="sample description of the card"
          productPrice={10200}
          productImages={[
            'https://cdn.pixabay.com/photo/2017/07/19/09/51/hallstatt-2518544_960_720.jpg',
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
