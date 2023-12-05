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
    const user = await userService.getUser()
  } catch(error){
    console.log(error)
  }
}

module.exports = {
  createUser,
  getUsers,
};