/** init db seed file
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // deletes ALL existing entries
  await knex("article").del();
  await knex("user").del();
  // creates new entries
  await knex("article").insert([
    {
      id: 1,
      title: "Sample Post Title",
      body: "example body content",
      created_at: "2022-08-20T18:51:48Z",
      updated_at: "2022-08-20T19:51:48Z",
    },
  ]);
  await knex("user").insert([
    {
      email: "fred@flintstones.com",
      first_name: "Fred",
      last_name: "Flintstone",
    },
  ]);
};
