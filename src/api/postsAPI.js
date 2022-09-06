import axiosClient from "./axiosClient"

const postsApi = {
    getAll: (params) => {
        //console.log(process.env.REACT_APP_API_URL)
        const url = process.env.REACT_APP_API_URL + 'posts';
        return axiosClient.get(url, { params })
    }
}
export default postsApi;