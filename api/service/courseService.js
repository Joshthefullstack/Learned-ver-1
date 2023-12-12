const Course = require("../models/courses");

async function createCourse(course){
  try{
    const newCourse = await Course.create(course);
    return newCourse;
  }
  catch(error){
    throw error;
  }
}

async function getAllCourses(){
  try{
    const courses = await Course.getAll();
    return courses;
  }
  catch(error){
    throw error;
  }
}

async function getCourse(id){
  try{
    const course = await Course.getById(id);
    return course;
  }
  catch(error){
    throw error;
  }
}

async function updateCourse(id, course){
  try{
    const updatedCourse = await Course.update(id, course);
    return updatedCourse;
  }
  catch(error){
    throw error;
  }
}

async function deleteCourse(id){
  try{
    const deletedCourse = await Course.delete(id);
    return deletedCourse;
  }
  catch(error){
    throw error;
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse
}