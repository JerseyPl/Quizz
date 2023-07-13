/** @type {import('sequelize-cli').Migration} */
const data = require('../themeArr');

module.exports = {
  async up(queryInterface) {
    const arrThemes = data.map((el) => (
      {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Themes', arrThemes, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};