import axios from 'axios'

const postAPI = {
  GET: () => axios.get(`${process.env.REACT_APP_API}/posts`),
  POST: (post) => axios.post(`${process.env.REACT_APP_API}/post`, post),
  PUT: (slug, update) => axios.put(`${process.env.REACT_APP_API}/post/${slug}`, update),
  DELETE: (slug) => axios.delete(`${process.env.REACT_APP_API}/post/${slug}`)

};

export default postAPI;