/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("Article", function (table) {
      table.increments("id").primary();
      table.integer("user_id").unique();
      table.text("title");
      table.text("body");
      table.timestamps();
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.all([knex.schema.dropTable("Article")]);
};