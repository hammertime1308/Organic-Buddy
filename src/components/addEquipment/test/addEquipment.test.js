import React from 'react';
import renderer from 'react-test-renderer';
import { AddEquipmentModal } from '../addEquipment';

describe('Add Equipment', () => {
  it('Should not render Modal', () => {
    const tree = renderer
      .create(
        <AddEquipmentModal
          visible={false}
          user={{ userId: '0' }}
          closeModal={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render modal', () => {
    const tree = renderer
      .create(
        <AddEquipmentModal
          visible={true}
          user={{ userId: '0' }}
          closeModal={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
