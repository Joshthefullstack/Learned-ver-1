const Lesson = require("../models/lessons");

async function createLesson(lesson){
  try{
    const newLesson = await Lesson.create(lesson);
    return newLesson;
  }
  catch(error){
    throw error;
  }
}

async function getAllLessons(){
  try{
    const lessons = await Lesson.getAll();
    return lessons;
  }
  catch(error){
    throw error;
  }
}

async function getLesson(id){
  try{
    const lesson = await Lesson.getById(id);
    return lesson;
  }
  catch(error){
    throw error;
  }
}

async function updateLesson(id, lesson){
  try{
    const updatedLesson = await Lesson.update(id, lesson);
    return updatedLesson;
  }
  catch(error){
    throw error;
  }
}

async function deleteLesson(id){
  try{
    const deletedLesson = await Lesson.delete(id);
    return deletedLesson;
  }
  catch(error){
    throw error;
  }
}

module.exports = {
  createLesson,
  getAllLessons,
  getLesson,
  updateLesson,
  deleteLesson
}