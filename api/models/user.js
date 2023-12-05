const pool = require("../config/dbConfig.js");
const { USERS } = require("../utils/constants.js").TABLES;
const {generateUniqueId} = require("../utils/utils.js");
const bcrypt = require("bcrypt")

class UserModel{
  constructor({pool}){
    this.pool = pool;
  }

    /**
   * Create a new user
   * @param {UserObj} user
   * @returns {Promise<UserObjDto>}
   * @throws {Error}
   */

  async create(user) {
    let { username, email, password, role } = user;
    const id = generateUniqueId();
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    // const client = await this.pool.connect();
    try {
      const result = await this.pool.query(
        `INSERT INTO ${USERS} ( id, username, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [id, username, email, password, role]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
    }

  async findByEmail(email){
    // const client = await this.pool.connect();
    try{
      const result = await this.pool.query(`SELECT * FROM ${USERS} WHERE email = $1`, [email]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }


      /**
       * Gets all users
      * @param {email} email
      * @returns {Promise<UserObjDto>}
      * @throws {Error}
      */
      async getAll() {
        // const client = await this.pool.connect();
        try {
          const result = await this.pool.query(`SELECT * FROM ${USERS}`);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }

     /**
       * Login user
      * @param {email, password} 
      * @returns {Promise<UserObjDto>}
      * @throws {Error}
      */
        async login(email, password) {
          // const client = await this.pool.connect();
          try {
            // const result = await this.pool.query(`SELECT * FROM ${USERS} WHERE email = $1`, [email]);
            const user = await this.findByEmail(email);
            // const user = result.rows[0];
            if(user){
              const isMatch = await bcrypt.compare(password, user.password);
              if(isMatch){
                return user;
              }
              else{
                throw new Error("Invalid password");
              }
            }
            else{
              throw new Error("User does not exist");
            }
          } catch (error) {
            throw error;
          }
        }


}

const User = new UserModel({pool});
module.exports = User;