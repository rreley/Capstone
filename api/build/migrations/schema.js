exports.up = function (knex) {
  return knex.schema
    .createTable("department", function (table) {
      table.increments("department_id").primary().notNullable();
      table.string("department_name", 50).notNullable();
      table.string("college_name", 70).notNullable();
      table.string("department_desc", 1000).notNullable(); // was set to be unique. changed becuse mock data. can be made unique again later.
      table.timestamps(true, true);
    })
    .createTable("registered_user", function (table) {
      table.increments("user_id").primary().notNullable();
      table.string("user_name", 64).notNullable();
      table.string("pass_phrase", 64).notNullable();
      table.string("email_address", 64).notNullable().unique();
      table.string("access_level", 64).notNullable();
      table.boolean("pending_request").notNullable();
      table.timestamps(true, true);
    })
    .createTable("program", function (table) {
      table.increments("program_id").primary().notNullable();
      table
        .integer("department_id")
        .references("department_id")
        .inTable("department")
        .notNullable()
        .onDelete("cascade");
      table.string("program_name", 50).notNullable();
      table.timestamps(true, true);
    })
    .createTable("campaign", function (table) {
      table.increments("campaign_id").primary().notNullable();
      table.string("name", 50).notNullable();
      table.date("start_date").notNullable();
      table.date("end_date").notNullable();
      table.timestamps(true, true);
    })
    .createTable("prospect", function (table) {
      table.string("t_number", 50).primary().notNullable();
      table.string("activated", 50).notNullable();
      table.string("first_name", 50).notNullable();
      table.string("middle_name", 50);
      table.string("last_name", 50).notNullable();
      table.string("term", 6).notNullable();
      table.string("level", 9).notNullable();
      table
        .integer("primary_program_id")
        .references("program_id")
        .inTable("program")
        .notNullable()
        .onDelete("cascade");
      table
        .integer("secondary_program_id")
        .references("program_id")
        .inTable("program")
        .notNullable()
        .onDelete("cascade");
      table.string("decision", 24).notNullable();
      table.date("admit_date").notNullable();
      table.string("street_address_1", 50).notNullable();
      table.string("street_address_2", 50).notNullable();
      table.string("street_address_3", 50).notNullable();
      table.string("city", 50).notNullable();
      table.string("state", 50).notNullable();
      table.string("zip_code", 50).notNullable();
      table.string("phone_number", 50).notNullable();
      table.string("email_address", 50).notNullable();
      table.string("ualr_email", 50).notNullable();
      table.string("ethnicity", 50).notNullable();
      table.string("admission_type", 50).notNullable();
      table.string("sex", 50).notNullable();
      table.string("student_type", 26).notNullable();
      table.timestamps(true, true);
    })
    .createTable("call_tracking", function (table) {
      table.increments("unique_id").primary().notNullable();
      table
        .string("prospect_tnum", 50)
        .references("t_number")
        .inTable("prospect")
        .notNullable()
        .onDelete("cascade");
      table
        .integer("caller")
        .references("user_id")
        .inTable("registered_user")
        .notNullable()
        .onDelete("cascade");
      table
        .integer("campaign_id")
        .references("campaign_id")
        .inTable("campaign")
        .notNullable()
        .onDelete("cascade");
      table.integer("number_times_called").notNullable();
      table.string("call_disposition", 50);
      table.string("call_notes", 50);
      table.boolean("was_emailed").notNullable();
      table.date("date_emailed");
      table.string("email_text", 50);
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("call_tracking")
    .dropTable("prospect")
    .dropTable("campaign")
    .dropTable("program")
    .dropTable("registered_user")
    .dropTable("department");
};
