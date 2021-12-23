import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("call_tracking").del();

  // Inserts seed entries
  await knex("call_tracking").insert([
    {
      prospect_id: 1,
      caller: 1,
      campaign_id: 1,
      number_times_called: 0,
      call_disposition: null,
      call_notes: null,
      was_emailed: false,
      date_emailed: null,
      email_text: null,
    },
    {
      prospect_id: 3,
      caller: 1,
      campaign_id: 1,
      number_times_called: 0,
      call_disposition: null,
      call_notes: null,
      was_emailed: false,
      date_emailed: null,
      email_text: null,
    },
    {
      prospect_id: 2,
      caller: 1,
      campaign_id: 1,
      number_times_called: 0,
      call_disposition: null,
      call_notes: null,
      was_emailed: false,
      date_emailed: null,
      email_text: null,
    },
  ]);
}
