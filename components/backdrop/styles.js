import { StyleSheet } from 'react-native';
import { width, height } from '../../data';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height,
        right: 0,
    },
    image: {
        width,
        height: height * 0.65,
        position: 'absolute',
        right: 0,
    },
});