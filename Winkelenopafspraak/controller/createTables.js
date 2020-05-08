let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'Winkelenopafspraak'
    }
});
knex.schema
    .createTable('brands', table => {
        table.increments('id');
        table.string('brand_name');
    })

    .createTable('location_brands', table => {
        table.increments('id');
        table.string('location_brand');
        table
            .integer('location_id')
            .unsigned()
            .references('brands.id');
    })
    .createTable('date_brands', table => {
        table.increments('id');
        table.dateTime('dates_brand');
        table
            .integer('location_id')
            .unsigned()
            .references('location_brands.id');
    })
    .createTable('time_brands', table => {
        table.increments('id');
        table.time('time_brands');
        table
            .integer('date_id')
            .unsigned()
            .references('date_brands.id');
    })
    .catch(e => {
        console.error(e);
    });