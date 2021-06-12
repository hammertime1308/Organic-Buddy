import React from 'react';
import renderer from 'react-test-renderer';
import { CartIcon, CartModal } from '../cart';

describe('Cart', () => {
  it('Should render cart icon', () => {
    const tree = renderer.create(<CartIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not render cart modal', () => {
    const tree = renderer
      .create(
        <CartModal
          visible={false}
          cart={[{ id: '1', name: 'sample name', price: 100, count: 1 }]}
          closeModal={() => {}}
          userId={0}
          clearCart={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render cart modal', () => {
    const tree = renderer
      .create(
        <CartModal
          visible={true}
          cart={[{ id: '1', name: 'sample name', price: 100, count: 1 }]}
          closeModal={() => {}}
          userId={0}
          clearCart={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
