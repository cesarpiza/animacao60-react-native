import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
    View,
    Image,
    Text,
    Animated,
} from 'react-native';
import { styles } from './styles';
import { IMAGE_HEIGHT, IMAGE_WIDTH, SPACING, width } from '../../data';

export default function Item(props) {

    const {
        index,
        title,
        poster,
        rating,
        description,
        genres,
        scrollX,
    } = props;

    const filledStars = Math.floor(rating / 2)
    const maxStars = Array(5 - filledStars).fill('staro');
    const r = [...Array(filledStars).fill('star'), ...maxStars];

    const inputRange = [
        (IMAGE_WIDTH + SPACING * 2) * (index - 1),
        (IMAGE_WIDTH + SPACING * 2) * index,
        (IMAGE_WIDTH + SPACING * 2) * (index + 1),
    ]

    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -IMAGE_HEIGHT / 6, 0]
    })

    return (
        <Animated.View style={[styles.container, {
            transform: [
                {
                    translateY,
                }
            ]
        }]}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: poster }}
                />
            </View>
            <Text numberOfLines={1} style={styles.title}>
                {title}
            </Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                    {rating}
                </Text>
                {r.map((item, index) => {
                    return <AntDesign key={index} name={item} size={18} color="darkorange" />
                })}
            </View>
            <View style={styles.genresContainer}>
                {genres.map((item, index) => {
                    return (
                        <View key={index} style={styles.genres}>
                            <Text style={styles.genresText}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <Text numberOfLines={3} style={styles.description}>
                {description}
            </Text>
        </Animated.View>
    );
}