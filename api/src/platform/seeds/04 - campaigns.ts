import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("campaign").del();

  // Inserts seed entries
  await knex("campaign").insert([
    {
      name: "Fall 2021",
      start_date: "2020-01-01 00:00:00+00",
      end_date: "2021-09-01 00:00:00+00",
    },
  ]);
}
