import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <Text>
          <Icon name="heart" size={30} />,
        </Text>
      </TouchableOpacity>
    ),
  };
};
