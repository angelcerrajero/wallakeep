import axios from 'axios';


const API = "https://api.themoviedb.org/3";
const API_KEY = "949a6317e9f27c200ecf0e11bdff7cd3";

//https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&query=jok&api_key=949a6317e9f27c200ecf0e11bdff7cd3

//https://api.themoviedb.org/3/movie/475557?api_key=949a6317e9f27c200ecf0e11bdff7cd3&language=en-US

export const api = () => {
  return {

    getMovie: () => {
      const endPoint = `${API}/discover/movie?language=en-US&include_adult=false&include_video=false&api_key=${API_KEY}`;
      return axios.get(endPoint)
      .then(response => response.data.results)
    },

    findMovie: (query) => {
      const endPoint = `${API}/search/movie?language=en-US&page=1&include_adult=false&query=${query}&api_key=${API_KEY}`;
      return axios.get(endPoint)
      .then(response => response.data.results)
    },

    findMovieByID: (id) => {
      const endPoint = `${API}/movie/${id}?api_key=${API_KEY}&language=en-US`;
      return axios.get(endPoint)
      .then(response => response.data)
    },

    getAds: () => {
        console.log('getads funcionando')
        const endPoint = `http://localhost:3001/apiv1/anuncios`
        return axios.get(endPoint)
        .then(response => response.data.results)

    },

    findAds: (query) => {
        console.log('findAds funcionando')
        const endPoint = `http://localhost:3001/apiv1/anuncios?name=${query}`;
        
        return axios.get(endPoint)
        .then(response => response.data.results)
    },

    findAdByID: (id) => {
        const endPoint = `http://localhost:3001/apiv1/anuncios/${id}`;
        return axios.get(endPoint)
        .then(response => response.data.result)
      },
      
      getTags: () => {
        const endPoint = `http://127.0.0.1:3001/apiv1/tags`
        
        return axios.get(endPoint)
        .then(response => response.data.results)
        

    },


  }

}

export default api;
