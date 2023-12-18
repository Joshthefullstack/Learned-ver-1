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

  async getLesson(id){
    const { data } = await axios.get(`${endpoint_url}lessons/${id}`);
    return data
  }

  async addLesson(formData){
    const { data } = await axios.post(`${endpoint_url}lessons`, formData);
    return data
  }

  async updateLesson(id, formData){
    const { data } = await axios.put(`${endpoint_url}lessons/${id}`, formData);
    return data
  }

  async deleteLesson(id){
    const { data } = await axios.delete(`${endpoint_url}lessons/${id}`);
    return data
  }

}

const Lesson = new LessonModel({axios});
export default Lesson;