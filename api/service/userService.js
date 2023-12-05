const User = require("../models/user");

async function createUser(user){
  const existingUser = await User.findByEmail(user.email);
  if(existingUser){
    throw new Error("User already exists");
  }
  try{
    const newUser = await User.create(user);
    return newUser;
  }
  catch(error){
    throw error;
  }
}

async function getAllUsers(){
  try{
    const users = await User.getAll();
    return users;
  }
  catch(error){
    throw error;
  }
}

async function getUser(email, password){
  try{
    const user = await User.login(email, password);
    return user;
  } catch(err){
    console.log(err)
  }
}


module.exports = {
  createUser,
  getAllUsers,
  getUser
}
