const lessonService = require("../service/lessonService");

async function createLesson(req, res, next) {
  try {
    const lesson = await lessonService.createLesson(req.body);
    return res.status(201).json({
      status: "success",
      data: lesson,
    });
  } catch (error) {
    // next(error);
    // console.log(error);
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function getLessons(req, res, next) {
  try{
    const lessons = await lessonService.getAllLessons();
    return res.status(200).json({
      status: "success",
      data: lessons,
    });
  } catch(error){
    console.log(error);
  }
}

async function getLesson(req, res, next){
  try{
    const { id } = req.params;
    const lesson = await lessonService.getLesson(id);
    return res.status(200).json({
      status: "success",
      data: lesson,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function updateLesson(req, res, next){
  try{
    const { id } = req.params;
    const lesson = await lessonService.updateLesson(id, req.body);
    return res.status(200).json({
      status: "success",
      data: lesson,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function deleteLesson(req, res, next){
  try{
    const { id } = req.params;
    const lesson = await lessonService.deleteLesson(id);
    return res.status(200).json({
      status: "success",
      data: lesson,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

module.exports = {
  createLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson
}