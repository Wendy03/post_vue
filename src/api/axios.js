import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export const getPostsApi = (paramsObj) => {
  let searchParams = new URLSearchParams(paramsObj);
  searchParams.toString();
  const url = `${api}/posts/?${searchParams}`;
  return axios.get(url);
};

export const createPostApi = (postForm) => {
  const url = `${api}/posts`;
  return axios.post(url, postForm);
};
