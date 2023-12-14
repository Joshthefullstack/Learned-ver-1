import axios from 'axios';
import { endpoint_url } from '../courses/course';

class LessonModel {
  constructor({axios}){
    this.axios = axios;
  }

  async getLessons(){
    const { data } = await axios.get(`${endpoint_url}lessons`);
    return data
  }
}

const Lesson = new LessonModel({axios});
export default Lesson;