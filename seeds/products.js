/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  // 前端访问 /images/Bands.svg 时，服务器会返回 public/images/Bands.svg 中的文件
  await knex('products').insert([
    {
      id: 1,
      // imgSrc: "/images/Bands.svg",
      imgSrc: "http://localhost:8080/images/Bands.svg",
      title: "Elastic Bands",
      linkText: "Learn More",
    },
    {
      id: 2,
      // imgSrc: "/images/Rings.svg",
      imgSrc: "http://localhost:8080/images/Rings.svg",
      title: "Gymnastic Rings",
      linkText: "Learn More",
    },
    {
      id: 3,
      // imgSrc: "/images/Bar.svg",
      imgSrc: "http://localhost:8080/images/Bar.svg",
      title: "Pull-up Bar",
      linkText: "Learn More",
    }
  ]);
};
