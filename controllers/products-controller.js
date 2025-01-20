import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllProducts = async (req, res) => {
  try {
    const products = await knex("products").select("*"); // 查询所有产品
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await knex("products").where({ id: req.params.id }).first();

    if (!product) {
      return res.status(404).json({
        message: `Product with ID ${req.params.id} not found`,
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({
      message: "Error retrieving product",
      error: error.message,
    });
  }
};


export {
  getAllProducts,
  getProductById
};
