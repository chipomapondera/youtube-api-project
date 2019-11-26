import axios from 'axios'
const KEY = 'AIzaSyDOyYYTHCMWcDFWRoFLIghupqd8aWsoRV0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})
