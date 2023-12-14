import axios from 'axios';
export const endpoint_url = 'http://localhost:5000/api/'

class Course {
  constructor({axios}){
    this.axios = axios;
  }

  async getCourses(){
    const { data } = await axios.get(`${endpoint_url}courses`);
    return data;
  }

  async getCourse(id){
    const { data } = await axios.get(`${endpoint_url}courses/${id}`);
    return data;
  }

  async createCourse(course){
    const { data } = await axios.post(`${endpoint_url}courses`, course);
    return data;
  }

  async updateCourse(course){
    const { data } = await axios.put(`${endpoint_url}courses/${course.id}`, course);
    return data;
  }

  async deleteCourse(id){
    const { data } = await axios.delete(`${endpoint_url}courses/${id}`);
    return data;
  }
}

const CoursesModel = new Course({axios});
export default CoursesModel;