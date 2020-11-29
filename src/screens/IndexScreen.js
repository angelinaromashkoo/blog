import React, {useCallback, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Show', {id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Icon style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    },
    [state],
  );

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={keyExtractor}
        renderItem={renderItem} />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text>
          <Icon name="plus" size={30} />,
        </Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 9,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
