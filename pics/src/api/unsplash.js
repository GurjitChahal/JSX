
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 29caec0155b465df4d77f354370fe68b9f36a36260be4fb8c7dfbe657fd1e67a'
    }
});