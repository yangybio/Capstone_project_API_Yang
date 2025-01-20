import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// 获取购物车内容
const getCart = async (req, res) => {
    try {
      const cartItems = await knex("cart")
        .join("bands", "cart.band_id", "bands.id")
        .select(
          "cart.id as cart_id",
          "bands.id as band_id",
          "bands.title",
          "bands.imgSrc as image",
          "cart.quantity",
        //   "bands.price"
        knex.raw("CAST(bands.price AS DECIMAL(10, 2)) as price") // 确保 price 是数字类型
        );
  
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve cart items" });
    }
  };
  
  // 添加商品到购物车
const addToCart = async (req, res) => {
    const { band_id, quantity } = req.body;
    try {
      const existingItem = await knex("cart").where("band_id", band_id).first();
  
      if (existingItem) {
        await knex("cart")
          .where("band_id", band_id)
          .update({ quantity: existingItem.quantity + quantity });
      } else {
        await knex("cart").insert({ band_id, quantity });
      }
  
      res.status(200).json({ message: "Item added to cart" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add item to cart" });
    }
  };
  
  // 更新购物车商品数量
 const updateCart = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
      await knex("cart").where("id", id).update({ quantity });
      res.status(200).json({ message: "Cart item updated" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update cart item" });
    }
  };
  
  // 删除购物车商品
  const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
      await knex("cart").where("id", id).del();
      res.status(200).json({ message: "Cart item deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete cart item" });
    }
  };
export default { getCart, addToCart, updateCart, deleteCart };
