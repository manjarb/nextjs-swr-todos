import axios from 'axios'

export const apiUrl = 'https://fswdi-api-todos.herokuapp.com'

// const fetcher = (url) => {
//   return axios.get(url).then((res) => res.data)
// }
export const fetcher = (url) => axios.get(url).then((res) => res.data)
