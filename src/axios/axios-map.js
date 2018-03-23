import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://imap-1m4p.firebaseio.com/'
});

export default instance;