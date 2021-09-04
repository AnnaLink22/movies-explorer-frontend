export const filterShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
};

