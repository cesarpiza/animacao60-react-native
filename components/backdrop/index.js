import React from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    View
} from 'react-native';
import { styles } from './styles';
import { width, IMAGE_WIDTH, SPACING } from '../../data';

export default function Backdrop(props) {

    const {
        index,
        poster,
        scrollX,
    } = props;

    const inputRange = [
        (IMAGE_WIDTH + SPACING * 2) * index,
        (IMAGE_WIDTH + SPACING * 2) * (index + 1),
    ]

    const animatedWidth = scrollX.interpolate({
        inputRange,
        outputRange: [width, 0]
    })

    return (
        <Animated.View style={[styles.container, {
            width: animatedWidth,
            overflow: 'hidden',
        }]}>
            <Image
                style={styles.image}
                source={{ uri: poster }}
            />
        </Animated.View>
    );
}