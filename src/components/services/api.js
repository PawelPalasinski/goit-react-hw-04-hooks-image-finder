import axios from 'axios';
import { BASE_URL} from './../utils/utils'

const fetchHits = ({ name = '', page = 1 }) => {
  const url = `${BASE_URL}${name}&page=${page}`;
  return axios.get(url).then(({ data }) => data.hits);
};

export default fetchHits;