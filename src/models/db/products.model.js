const { conn } = require("../config/conn");
const mysql = require("mysql2");

const getAllProducts = async () => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id"
    );
    return rows;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
function paginate(products, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return [products.slice(startIndex, endIndex), startIndex, endIndex];
}

const getProductById = async (params) => {
  try {
    const [rows] = await conn.query(
      `SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;`, params
    );
    /*console.log(rows)*/
    return rows;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
const getLastProducts = async () => {
  try {
    const [rows] = await conn.query(
      `SELECT
       product.*,
       category.category_name,
       licence.licence_name
       FROM (product
       LEFT JOIN category ON product.category_id = category.category_id)
       LEFT JOIN licence ON product.licence_id = licence.licence_id
       ORDER BY create_time
       ASC LIMIT 5`
    );
    return rows;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
const getTotalQuantity = async () => {
  try {
    const [cant] = await conn.query(
      "SELECT COUNT(product_id) AS product_quantity FROM product;"
    );
    return cant[0].product_quantity;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
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
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
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
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
const createProduct = async (params)=>{
  try{
    const [product] = await conn.query("INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, category_id, licence_id) VALUES ?;", [params]);
    return product;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
const deleteProduct = async (params)=>{
  try{
    const [product] = await conn.query("DELETE FROM product WHERE ?", params);
    return product;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
};
const editProduct = async (params, id)=>{
  try{
    /*console.log(params);
    console.log(id);*/
    const [product] = await conn.query("UPDATE product SET ? WHERE ? ", [params, id]);
    /*console.log(product);*/
    return product;
  }catch(error){
    return{
      error: true,
      message: "Hemos encontrado un error: " + error
    }
  }finally{
    conn.releaseConnection()
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  getLastProducts,
  getShopProducts,
  relatedProducts,
  paginate,
  getTotalQuantity,
  createProduct,
  deleteProduct,
  editProduct
};
