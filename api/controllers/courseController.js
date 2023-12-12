const courseService = require("../service/courseService");

async function createCourse(req, res, next) {
  try {
    const course = await courseService.createCourse(req.body);
    return res.status(201).json({
      status: "success",
      data: course,
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

async function getCourses(req, res, next) {
  try{
    const courses = await courseService.getAllCourses();
    return res.status(200).json({
      status: "success",
      data: courses,
    });
  } catch(error){
    console.log(error);
  }
}

async function getCourse(req, res, next){
  try{
    const { id } = req.params;
    const course = await courseService.getCourse(id);
    return res.status(200).json({
      status: "success",
      data: course,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function updateCourse(req, res, next){
  try{
    const { id } = req.params;
    const course = await courseService.updateCourse(id, req.body);
    return res.status(200).json({
      status: "success",
      data: course,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function deleteCourse(req, res, next){
  try{
    const { id } = req.params;
    const course = await courseService.deleteCourse(id);
    return res.status(200).json({
      status: "success",
      data: course,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse
};