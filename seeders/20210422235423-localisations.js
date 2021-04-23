'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Localizations",
      [
        {
          name: "King's Crest",
          description: "The old capital of the Goldcrest Empire",
          type: "City",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Valkyrie",
          description: "One of the oldest tavern in the city of King's Crest",
          type: "Commerce",
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Localizations", null, {});
  }
};
