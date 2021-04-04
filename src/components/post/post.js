import React from 'react';
import { Text, Image } from 'react-native';
import Moment from 'moment';

import {
  StyledPost,
  RowContainer,
  ColumnContainer,
  Title,
  Description,
  MetaDataContainer,
  MetaDataText,
} from './styles';

export const Post = ({
  postId = '',
  userId = '',
  title = '',
  description = '',
  image = [],
  timestamp = '',
  comments = ['comment'],
}) => {
  Moment.locale('en');
  let date = Moment(timestamp).format('MMM Do YY');
  return (
    <StyledPost activeOpacity={0.9} onPress={() => alert('Post pressed')}>
      <RowContainer>
        {image.length !== 0 ? (
          <Image
            style={{
              flex: 1,
              height: 120,
              width: '100%',
              resizeMode: 'stretch',
              marginRight: 10,
            }}
            source={{ uri: image[0] }}
          />
        ) : (
          <Text />
        )}
        <ColumnContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <MetaDataContainer>
            <MetaDataText>{date}</MetaDataText>
            <MetaDataText>Replies: {comments.length - 1}</MetaDataText>
          </MetaDataContainer>
        </ColumnContainer>
      </RowContainer>
    </StyledPost>
  );
};
