import React from 'react';
import renderer from 'react-test-renderer';
import { EquipmentCard } from '../equipmentCard';

describe('Equipment card', () => {
  it('Should render card with image', () => {
    const tree = renderer
      .create(
        <EquipmentCard
          id="1"
          equipmentName="Sample title for testing"
          equipmentDescription="sample description for testing"
          equipmentPrice={1000}
          equipmentImages={[
            'https://cdn.pixabay.com/photo/2017/07/19/09/51/hallstatt-2518544_960_720.jpg',
          ]}
          equipmentType="Hire"
          sellerId="111"
          sellerContact="0123456789"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render card without image', () => {
    const tree = renderer
      .create(
        <EquipmentCard
          id="1"
          equipmentName="Sample title for testing"
          equipmentDescription="sample description for testing"
          equipmentPrice={1000}
          equipmentImages={[]}
          equipmentType="Hire"
          sellerId="111"
          sellerContact="0123456789"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render card for sell', () => {
    const tree = renderer
      .create(
        <EquipmentCard
          id="1"
          equipmentName="Sample title for testing"
          equipmentDescription="sample description for testing"
          equipmentPrice={1000}
          equipmentImages={[]}
          equipmentType="Sell"
          sellerId="111"
          sellerContact="0123456789"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
