import React from 'react';
import renderer from 'react-test-renderer';
import { Comment } from '../Comment';

describe('Comment', () => {
  it('Should render comment', () => {
    const tree = renderer
      .create(
        <Comment
          comment={'Sample comment for testing purpose'}
          firstName={'Mandar'}
          lastName={'Kulkarni'}
          timestamp={'2021-06-12T10:17:52Z'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
