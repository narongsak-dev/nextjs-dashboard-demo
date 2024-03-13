/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customers', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw("(UUID())"));
        table.string('name',255).notNullable();
        table.string('email',255).notNullable();
        table.string('image_url',255).notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customers');
};
