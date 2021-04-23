'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Characters",
      [
        {
          name: "Character 1",
          age: 12, 
          gender: "Male", 
          background: "A long time ago someone wrote a good background, but this is not it",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Character 2",
          age: 34, 
          gender: "Non-binary", 
          background: "A long time ago someone wrote a bad background, and this is it",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Characters", null, {});
  }
};
