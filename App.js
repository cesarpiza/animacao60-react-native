import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Animated,
} from 'react-native';
import { IMAGE_HEIGHT, MOVIES } from './data';
import Item from './components/item/index';
import Backdrop from './components/backdrop/index';
import { IMAGE_WIDTH, width, SPACING, height } from './data';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [movies, setMovies] = useState(MOVIES);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={{ height: height * 0.65, width, position: 'absolute' }}>
        <FlatList
          removeClippedSubviews={false}
          contentContainerStyle={{
            width,
            height: height * 0.65,
          }}
          style={{
            position: 'absolute',
          }}
          CellRendererComponent={({ children, index, style, ...props }) => {
            const newStyle = [
              style,
              { zIndex: movies.length - index }
            ]
            return (
              <View index={index} style={newStyle} {...props}>
                {children}
              </View>
            )
          }}
          data={movies}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Backdrop {...item} index={index} scrollX={scrollX} />
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'white']}
          style={{
            height: height * 0.65,
            width,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        overScrollMode={'never'}
        showsHorizontalScrollIndicator={false}
        snapToInterval={IMAGE_WIDTH + SPACING * 2}
        decelerationRate={'fast'}
        contentContainerStyle={{
          paddingHorizontal: (width - (IMAGE_WIDTH + SPACING * 2)) / 2,
          height,
          alignItems: 'flex-end',
          paddingBottom: IMAGE_HEIGHT * 0.1,
        }}
        style={{
          flexGrow: 0,
        }}
        data={movies}
        horizontal
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <Item {...item} index={index} scrollX={scrollX} />
          );
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});