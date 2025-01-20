/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema.createTable("bands", (table) => {
      table.increments("id").primary();
      table.string("imgSrc").notNullable(); // 图片路径
      table.string("title").notNullable(); // 产品名称
      table.text("description").notNullable(); // 产品描述
      table.decimal("price", 10, 2).notNullable(); // 产品价格
      table.timestamps(true, true); // created_at 和 updated_at
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTableIfExists("bands");
  };
