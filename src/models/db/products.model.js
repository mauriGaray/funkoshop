const { conn } = require("../config/conn");
const mysql = require("mysql2");

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
function paginate(products, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return [products.slice(startIndex, endIndex), startIndex, endIndex];
}

const getProductById = async (id) => {
  try {
    const [rows] = await conn.query(
      `SELECT
    product.*,
    category.category_name,
    licence.licence_name
    FROM
    product
    LEFT JOIN
    category ON product.category_id = category.category_id
    LEFT JOIN
    licence ON product.licence_id = licence.licence_id
    WHERE
    product.product_id = ?;`,
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
      `SELECT
       product.*,
       category.category_name,
       licence.licence_name
       FROM product
       LEFT JOIN category ON product.category_id = category.category_id
       LEFT JOIN licence ON product.licence_id = licence.licence_id
       ORDER BY create_time
       ASC LIMIT 3`
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
const getTotalQuantity = async () => {
  try {
    const [cant] = await conn.query(
      "SELECT COUNT(product_id) AS product_quantity FROM product;"
    );
    return cant[0].product_quantity;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
const getShopProducts = async (page, itemsPerPage) => {
  try {
    const offset = (page - 1) * itemsPerPage;

    const query = `SELECT * FROM product LIMIT ${mysql.escape(
      offset
    )}, ${mysql.escape(itemsPerPage)};`;

    const [rows] = await conn.query(query);

    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
const relatedProducts = async (license) => {
  try {
    const [rows] = await conn.query(
      `SELECT
       product.*,
       category.category_name,
       licence.licence_name
       FROM product
       LEFT JOIN category ON product.category_id = category.category_id
       LEFT JOIN licence ON product.licence_id = licence.licence_id
       WHERE
       product.licence_id = ?
       LIMIT 3;`,
      [license]
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
  getShopProducts,
  relatedProducts,
  paginate,
  getTotalQuantity,
};
