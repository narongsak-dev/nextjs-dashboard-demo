/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw("(UUID())"));
        table.string('name',255).notNullable();
        table.text('email').notNullable().unique();
        table.text('password').notNullable();
        table.timestamps(true, true);
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
