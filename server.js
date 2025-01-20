import express from "express";
import cors from "cors";
import "dotenv/config";
import productsRouter from "./routes/products-router.js";
import bandsRouter from "./routes/bands-router.js";
import cartRouter from "./routes/cart-router.js";

const app = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// 静态文件服务
  app.use(express.static("public", {
    setHeaders: (res, path) => {
      console.log("Setting headers for:", path); // 打印被处理的文件路径
      if (path.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      }
    },
}));

// 路由
app.use("/bands", bandsRouter); // 列出弹力带产品
app.use("/cart", cartRouter); // 管理购物车
app.use("/", productsRouter); // 首页：列出所有产品

app.listen(PORT, () => {
  console.log(`The server is running at ${process.env.BACKEND_URL}${PORT}`);
});