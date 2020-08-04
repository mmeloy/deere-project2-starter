'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "Dad's Iowa Chops",
          description: "thick cut bone-n Iowa Chops",
          category: "MainDish",
          owner: "Mark",
          ingredients: "meat",
          instructions: "grill",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
              ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
