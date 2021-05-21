import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Gallery from 'react-native-image-gallery';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header, Comment } from '../../components';

import Context from '../../context';
import { deletePost, commentOnPost } from '../../api';

import { NavigationService } from '../../utilities';

export const DetailedForum = props => {
  const {
    postId,
    userId,
    title,
    description,
    image,
    timestamp,
    comments,
    setCount,
  } = props.navigation.state.params;

  const [context, setContext] = useContext(Context);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState('');

  const handleDelete = async id => {
    setDeleteLoading(true);
    let response = await deletePost(id);
    if (response.status === 200) {
      alert('Deleted successfully');
      NavigationService.back();
    } else if (response.status === 404) {
      alert('The post is already deleted');
      NavigationService.back();
    } else {
      alert(response.data);
    }
    setCount(prevState => prevState + 1);
    setDeleteLoading(false);
  };

  const clearData = () => {
    setData('');
  };

  const closeModal = () => {
    clearData();
    setModalVisible(false);
  };

  const apiCall = async () => {
    let user = context.get('user');
    if (data === '') {
      alert('Add comment message');
      return;
    }
    setCommentLoading(true);
    let response = await commentOnPost(
      postId,
      data,
      user.firstName,
      user.lastName,
    );
    setCommentLoading(false);
    clearData();
    closeModal();
    if (response.status === 200) {
      setCount(prevState => prevState + 1);
    } else if (response.status === 404) {
      alert('The post is deleted by the owner.');
      setCount(prevState => prevState + 1);
    } else {
      alert(response.data);
    }
    NavigationService.back();
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Header>{title}</Header>
      <Header />

      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          clearData();
          closeModal();
        }}
        animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 200,
              position: 'absolute',
              top: 200,
              borderRadius: 5,
              alignItems: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'green',
              position: 'absolute',
              top: 220,
            }}>
            Comment
          </Text>
          {commentLoading ? (
            <ActivityIndicator
              style={{ position: 'absolute', top: 285 }}
              size={50}
              color="green"
            />
          ) : (
            <View
              style={{
                position: 'absolute',
                top: 270,
                width: '90%',
                height: 125,
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Add Comment"
                value={data}
                onChangeText={setData}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.5,
                  width: '80%',
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  width: '80%',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    paddingTop: 10,
                    paddingRight: 15,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    backgroundColor: 'green',
                  }}
                  activeOpacity={0.8}
                  onPress={() => apiCall()}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </Modal>

      {image.length !== 0 ? (
        <View style={{ width: '100%', height: '30%' }}>
          <Gallery
            pageMargin={10}
            style={{ margin: 10 }}
            images={image.map(item => ({
              source: { uri: item },
            }))}
          />
        </View>
      ) : null}

      <ScrollView style={{ flex: 1, margin: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Description
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'gray',
              }}>
              Posted on
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: 'gray',
              }}>
              {Moment.utc(timestamp).local().format('YYYY-MM-DD hh:mm:ss')}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{description}</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Comments
        </Text>

        {comments.length === 1 ? (
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              paddingTop: 30,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            No Comments posted yet !
          </Text>
        ) : (
          comments.map((item, index) => {
            if (typeof item === 'object') {
              return (
                <Comment
                  comment={item.comment}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  timestamp={Moment.utc(item.timestamp)
                    .local()
                    .format('YYYY-MM-DD hh:mm:ss')}
                  key={index}
                />
              );
            }
          })
        )}
      </ScrollView>

      {context.get('user').userId === userId ? (
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 5,
            right: 0,
            margin: 15,
            borderRadius: 50,
            elevation: 5,
          }}
          activeOpacity={0.8}
          onPress={() => handleDelete(postId)}>
          {deleteLoading ? (
            <ActivityIndicator
              color="white"
              size={30}
              style={{ padding: 10 }}
            />
          ) : (
            <Icon
              style={{ padding: 10 }}
              name="delete"
              size={30}
              color="white"
            />
          )}
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 70,
          right: 0,
          backgroundColor: 'green',
          margin: 15,
          borderRadius: 50,
          elevation: 5,
        }}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}>
        <Icon
          style={{ padding: 15 }}
          name="comment-plus"
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};
