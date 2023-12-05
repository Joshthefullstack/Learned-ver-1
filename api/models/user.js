const pool = require("../config/dbConfig.js");
const { USERS } = require("../utils/constants.js").TABLES;

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
    const { username, email, password, role } = user;
    // const client = await this.pool.connect();
    try {
      const result = await this.pool.query(
        `INSERT INTO ${USERS} ( username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *`,
        [username, email, password, role]
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


}

const User = new UserModel({pool});
module.exports = User;