const { conn } = require("../config/conn");
const mysql = require("mysql2");

const createUser = async (user) => {
  try {
    const [rows] = await conn.query(
      `INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)`,
      [user.user_name, user.user_email, user.user_password]
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
