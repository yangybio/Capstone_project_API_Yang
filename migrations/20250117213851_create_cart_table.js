/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema.createTable("cart", (table) => {
      table.increments("id").primary();
      table.integer("band_id").unsigned().notNullable(); // 产品 ID
      table.integer("quantity").unsigned().notNullable().defaultTo(1);
      table.timestamps(true, true);
  
      // 外键约束
      table.foreign("band_id").references("bands.id").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema.dropTableIfExists("cart");
  };
