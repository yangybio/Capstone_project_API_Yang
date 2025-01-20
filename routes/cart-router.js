import express from "express";
import cartController from "../controllers/cart-controller.js";

const cartRouter = express.Router();

cartRouter
  .route("/")
  .get(cartController.getCart)        // 获取购物车内容
  .post(cartController.addToCart);   // 添加商品到购物车

cartRouter
.route("/:id")
.put(cartController.updateCart)    // 更新购物车商品数量
.delete(cartController.deleteCart);// 删除购物车商品

export default cartRouter;
