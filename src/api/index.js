import Axios from 'axios';

const url = process.env.VUE_APP_API_URL;

function posts(){
    return Axios.get(`${url}/hand_pad/list`)
}

export {
    posts
}