/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('invoices', function(table) {
        table.uuid('id').primary().defaultTo(knex.raw("(UUID())"));
        table.uuid('customer_id').notNullable();
        table.integer('amount').notNullable();
        table.string('status',255).notNullable();
        table.date('date_at').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('invoices');
};
