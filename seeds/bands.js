/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('bands').del();
  
    // Inserts seed entries
    await knex('bands').insert([
      {
        id: 1,
        // imgSrc: "/images/simpleBands.svg",
        imgSrc: "http://localhost:8080/images/simpleBands.svg",
        title: "Simple elastic bands",
        description: "High-quality elastic bands suitable for light resistance training and rehabilitation exercises. Comes in vibrant colors.",
        price: 90,
      },
      {
        id: 2,
        // imgSrc: "/images/RTXBands.svg",
        imgSrc: "http://localhost:8080/images/RTXBands.svg",
        title: "RTX elastic bands",
        description: "Durable and versatile elastic bands designed for fitness enthusiasts. Perfect for resistance training and flexibility exercises.",
        price: 100,
      },
      {
        id: 3,
        // imgSrc: "/images/setBands.svg",
        imgSrc: "http://localhost:8080/images/setBands.svg",
        title: "Set of 5 simple elastic bands",
        description: "A set of 5 high-quality elastic bands with varying resistance levels. Ideal for building strength and improving flexibility.",
        price: 400,
      },
    ]);
  };
  