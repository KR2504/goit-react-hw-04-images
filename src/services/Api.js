import axios from 'axios';

const API_KEY = '28612433-fc9d4cd8e95c76d6a15066874';

export default function fetchImage({ value, page }) {

    return axios.get(`https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data).catch(error => new Error(error))
};