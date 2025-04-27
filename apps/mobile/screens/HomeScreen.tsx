import React from 'react';
import { FlatList, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const { height, width } = Dimensions.get('window');
const videos = [
  { id: '1', uri: 'https://livepeer.studio/api/.../index.m3u8' },
  { id: '2', uri: 'https://livepeer.studio/api/.../index.m3u8' }
];

export default function HomeScreen() {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Video
          source={{ uri: item.uri }}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping
          useNativeControls={false}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    width,
    height
  }
});
