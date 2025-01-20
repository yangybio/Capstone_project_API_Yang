import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

/**
 * 获取所有 bands 产品
 */
const findAll = async (req, res) => {
  try {
    const bands = await knex("bands").select("id", "imgSrc", "title", "description", "price");
    res.status(200).json(bands);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving bands", error: error.message });
  }
};

/**
 * 获取单个 bands 产品详情
 */
const findOne = async (req, res) => {
  try {
    const band = await knex("bands").where({ id: +req.params.id }).first();

    if (!band) {
      return res.status(404).json({ message: `Band with ID ${req.params.id} not found` });
    }

    res.status(200).json(band);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving band", error: error.message });
  }
};

export { findAll, findOne };
