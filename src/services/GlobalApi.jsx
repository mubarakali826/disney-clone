import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3";
const movieByGenreBaseURL="https://api.themoviedb.org/3/discover/movie?api_key=6923273cffa0c03bb3b05ae0ce6559a3";

// https://api.themoviedb.org/3/discover/movie?api_key=6923273cffa0c03bb3b05ae0ce6559a3
const api_key="6923273cffa0c03bb3b05ae0ce6559a3";
const getTrendingVideos=axios.get(movieBaseUrl+"/movie/popular?api_key="+api_key);
const getMovieByGenreId=(id)=>(
axios.get(movieByGenreBaseURL+"&with_genres="+id)
);
export default {
    getTrendingVideos,
    getMovieByGenreId
} 