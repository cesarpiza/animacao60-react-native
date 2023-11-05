import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');
export const IMAGE_WIDTH = width * 0.65;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 1.3;
export const SPACING = IMAGE_WIDTH * 0.05;

export const MOVIES = [
    {
        key: "01",
        title: "Blue Beetle",
        poster: "https://m.media-amazon.com/images/M/MV5BNjliMTY1OWUtOWZjZi00MjQ3LWJmODktY2RkMzNiOWU2M2UxXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UY4096_.jpg",
        rating: 7.6,
        description: "Recent college grand Jaime Reyes retums home full of aspirations for his future, only to finf that home is not quite as",
        genres: ["Action", "Science Fiction", "Adventure"],
    },
    {
        key: "02",
        title: "Meg 2: The Trench",
        poster: "https://m.media-amazon.com/images/M/MV5BNjAxZTU2ODEtMWNhYy00YjE4LTg2NmUtOTYyNjdiYzQ5Y2U4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UY4096_.jpg",
        rating: 6.3,
        description: "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevole",
        genres: ["Action", "Science Fiction", "Horror"],
    },
    {
        key: "03",
        title: "Gran Turismo",
        poster: "https://m.media-amazon.com/images/M/MV5BNGE4YjYwODUtYzUyZC00ODMzLWFjZjUtOTAwZGEwYmI2OTAwXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1080_.jpg",
        rating: 9.2,
        description: "The ultimate wish-fulfilment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissa",
        genres: ["Adventure", "Action", "Drama"],
    },
    {
        key: "04",
        title: "Mission Impossible",
        poster: "https://m.media-amazon.com/images/I/71-sziO1OsL._AC_SY741_.jpg",
        rating: 7.9,
        description: "Ethan Hurt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon",
        genres: ["Action", "Thriller"],
    },
    {
        key: "05",
        title: "PAW Patrol: The Mighty Movie",
        poster: "https://m.media-amazon.com/images/I/81P+fLKiIjL._AC_UL960_FMwebp_QL65_.jpg",
        rating: 5.8,
        description: "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The",
        genres: ["Animation", "Family", "Science Fiction",],
    },
];