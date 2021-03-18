import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID gR1zrjw4yuW2WXNhj_DdYZM0D8l8sH2nq8V9IFn-lhA',
  },
});
