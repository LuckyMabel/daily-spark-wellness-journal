/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('gratitude_entries', function(table) {
      table.increments('id').primary();
      table.text('content').notNullable();
      table.timestamp('timestamp').defaultTo(knex.fn.now());
      table.text('quote_of_the_day');
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

  exports.down = function(knex) {
    return knex.schema.dropTable('gratitude_entries');
  };