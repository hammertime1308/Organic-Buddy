import React from 'react';
import renderer from 'react-test-renderer';
import { AddNewPost } from '../addNewPost';

describe('Add new post', () => {
  it('Should not render Modal', () => {
    const tree = renderer
      .create(
        <AddNewPost
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
        <AddNewPost
          visible={true}
          user={{ userId: '0' }}
          closeModal={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
