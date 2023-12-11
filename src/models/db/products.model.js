const { conn } = require("../config/conn");

const getAllProducts = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM product");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const getProductById = async (id) => {
  try {
    const [rows] = await conn.query("SELECT * FROM product WHERE id = ?", [id]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
