/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments('id').primary();  // 自动增加的 id，作为主键
      table.string('title');  // 产品标题
      table.string('imgSrc');  // 存储图片路径
      table.string('linkText');  // 存储链接文本
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('products');  // 如果迁移回滚，删除表格
  };

