const userService = require("../service/userService");

async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    // next(error);
    console.log(error);
  }
}

async function getUsers(req, res, next) {
  try{
    const users = await userService.getAllUsers();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch(error){
    console.log(error);
  }
}

async function getUser(req, res, next){
  try{
    const { email, password } = req.body;
    const user = await userService.getUser(email, password);
    return res.status(200).json({
      status: "success",
      data: user,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser
};