/** @type {import('sequelize-cli').Migration} */
const data = require("../questionArr");

module.exports = {
  async up(queryInterface) {
    const arrQuestions = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", arrQuestions, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
