import axios from 'axios';

const api = axios.create({ // criando nosso serviço 
    baseURL: 'http://localhost:3333', // base url que vai ser para todos

})

export default api;