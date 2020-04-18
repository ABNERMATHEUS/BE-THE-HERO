
exports.up = function(knex) {

    return knex.schema.createTable('casos', function(table){
         table.increments(); // ID - CHAVE PRIMARIA AUTOINCREMENTO ISSO FAZ

         table.string('title').notNullable();
         table.string('description').notNullable();
         table.decimal('value').notNullable(); //DECIMAL QUER DIZER FLOAT

         table.string('ong_id').notNullable();

         table.foreign('ong_id').references('id').inTable('ongs'); 
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos');
  
};
