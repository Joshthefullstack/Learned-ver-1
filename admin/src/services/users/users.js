import axios from 'axios';
import { endpoint_url } from '../courses/course';
class Users {
  constructor ({axios}) {
    this.axios = axios
  }

  async getUsers () {
    const { data } = await axios.get(`${endpoint_url}users`)
    return data
  }

  async getUser (id) {
    const { data } = await axios.get(`${endpoint_url}users/${id}`);
    return data;
  }
}

const User = new Users({axios});
export default User;