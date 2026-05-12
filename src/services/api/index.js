import axios from "axios";


const api= axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:'28fc232cc001c31e8a031f419d0a14ca',
        language:'pt-br'
    }
});


export default api;