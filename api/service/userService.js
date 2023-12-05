const User = require("../models/user");

async function createUser(user){
  const existingUser = User.findByEmail(user.email);
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


module.exports = {
  createUser
}
