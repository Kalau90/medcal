import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    await knex.schema.alterTable('event_changes', function(table) {
        table.text('old').alter();
        table.text('new').alter();
    });
}


export async function down(knex: Knex): Promise<any> {
}

