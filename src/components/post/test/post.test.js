import React from 'react';
import renderer from 'react-test-renderer';
import { Post } from '../post';

describe('Post', () => {
  it('Should render post without image', () => {
    const tree = renderer
      .create(
        <Post
          postId={'1'}
          userId={'111'}
          title={'Sample title for post'}
          description={'sample description for post'}
          image={[]}
          timestamp={'2021-06-12T10:17:52Z'}
          comments={['comment']}
          setCount={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render post with image', () => {
    const tree = renderer
      .create(
        <Post
          postId={'1'}
          userId={'111'}
          title={'Sample title for post'}
          description={'sample description for post'}
          image={[
            'https://cdn.pixabay.com/photo/2017/07/19/09/51/hallstatt-2518544_960_720.jpg',
          ]}
          timestamp={'2021-06-12T10:17:52Z'}
          comments={['comment']}
          setCount={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render post with multiple comments', () => {
    const tree = renderer
      .create(
        <Post
          postId={'1'}
          userId={'111'}
          title={'Sample title for post'}
          description={'sample description for post'}
          image={[]}
          timestamp={'2021-06-12T10:17:52Z'}
          comments={['comment', 'sample comment 1', 'sample comment 2']}
          setCount={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
