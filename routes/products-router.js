import express from "express";
import * as productsController from "../controllers/products-controller.js";

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(productsController.getAllProducts);
// productsRouter
//   .route("/:id")
//   .get(productsController.getProductById);

export default productsRouter;
