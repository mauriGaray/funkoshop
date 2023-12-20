const { conn } = require("../config/conn");
const mysql = require("mysql2");

const getAllProducts = async () => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id"
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
       ASC LIMIT 6`
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
      `SELECT DISTINCT
       product.*,
       category.category_name,
       licence.licence_name
       FROM product
       LEFT JOIN category ON product.category_id = category.category_id
       LEFT JOIN licence ON product.licence_id = licence.licence_id
       WHERE
       licence.licence_name = ?
       LIMIT 4;`,
      [license]
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};
const createProduct = async (product) => {
  try {
    const dateNow = Date.now();
    const [rows] = await conn.query(
      `INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues,create_time, image_front, image_back, licence_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        product.product_name,
        product.product_description,
        product.price,
        product.stock,
        product.discount,
        product.sku,
        product.dues,
        product.image_front,
        product.image_back,
        dateNow,
        product.licence_id,
        product.category_id,
      ]
    );
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
  createProduct,
};
