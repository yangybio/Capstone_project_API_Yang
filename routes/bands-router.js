import express from "express";
import {
  findAll,
  findOne
} from "../controllers/bands-controller.js";

const bandsRouter = express.Router();

// 产品相关路由
bandsRouter.get("/", findAll); // 获取所有产品
// bandsRouter.get("/:id", findOne); // 获取单个产品详情

export default bandsRouter;

