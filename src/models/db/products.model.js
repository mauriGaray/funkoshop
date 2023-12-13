const { conn } = require("../config/conn");

const getAllProducts = async () => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id"
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const getProductById = async (id) => {
  try {
    const [rows] = await conn.query(
      "SELECT * FROM product WHERE product_id = ?",
      [id]
    );
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
const getLastProducts = async () => {
  try {
    const [rows] = await conn.query(
      "SELECT * FROM product ORDER BY create_time ASC LIMIT 3"
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getLastProducts,
};
