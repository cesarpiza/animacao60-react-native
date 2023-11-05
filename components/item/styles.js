import { StyleSheet } from 'react-native';
import { IMAGE_WIDTH, IMAGE_HEIGHT, SPACING } from '../../data';

export const styles = StyleSheet.create({
    container: {
        width: IMAGE_WIDTH,
        marginHorizontal: IMAGE_WIDTH * 0.05,
        rowGap: SPACING * 0.5,
    },
    imageContainer: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        borderRadius: IMAGE_WIDTH * 0.06,
        backgroundColor: '#FFFFFF',
        padding: IMAGE_WIDTH * 0.07,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: IMAGE_WIDTH * 0.06,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: SPACING,
    },
    ratingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    genresContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        rowGap: (SPACING * 0.35) * 2,
    },
    genres: {
        padding: SPACING * 0.8,
        marginHorizontal: SPACING * 0.35,
        justifyContent: 'center',
        borderRadius: SPACING * 1.5,
        borderWidth: 1,
        borderColor: '#555',
    },
    genresText: {
        textAlign: 'center',
        fontSize: 10,
        color: '#555',
    },
    description: {

    }
});