const API_key="033f577d4ad0cf88437e8feb2a84ef0d"

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US` ,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
    fectchTopRated:`movie/top_rated?api_key=${API_key}&language-=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fectchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrormovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
    fetchBanner:`https://api.themoviedb.org/3/trending/all/week?api_key=<${API_key}`
}
export default requests
