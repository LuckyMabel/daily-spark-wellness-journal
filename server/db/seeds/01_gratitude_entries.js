/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    await knex('gratitude_entries').del();

    await knex('gratitude_entries').insert([
      {
        content: "I am grateful for the sunshine today.",
        quote_of_the_day: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        timestamp: new Date('2024-01-01'),
      },
      {
        content: "I am grateful for the support of my family.",
        quote_of_the_day: "Family is not an important thing. It's everything.",
        timestamp: new Date('2024-01-02'),
      },
      {
        content: "I am grateful for the delicious meal I had.",
        quote_of_the_day: "One cannot think well, love well, sleep well, if one has not dined well.",
        timestamp: new Date('2024-01-03'),
      },
    ]);
  };
  