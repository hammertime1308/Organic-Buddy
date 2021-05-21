import React from 'react';
import { Text, Image } from 'react-native';
import Moment from 'moment';

import { NavigationService } from '../../utilities';

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
  setCount,
}) => {
  let date = Moment.utc(timestamp).local().format('YYYY-MM-DD hh:mm:ss');
  return (
    <StyledPost
      activeOpacity={0.9}
      onPress={() =>
        NavigationService.navigate('DetailedForum', {
          postId: postId,
          userId: userId,
          title: title,
          description: description,
          image: image,
          timestamp: timestamp,
          comments: comments,
          setCount: setCount,
        })
      }>
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
          <Text style={{ height: 120 }} />
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
