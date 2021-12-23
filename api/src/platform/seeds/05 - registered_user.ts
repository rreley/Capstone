import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("registered_user").del();

  // Inserts seed entries
  await knex("registered_user").insert([
    {
      user_name: "bob_saget",
      pass_phrase: "some_hash",
      email_address: "bob@saget.com",
      access_level: "super mega",
      pending_request: false,
    },
  ]);
}
