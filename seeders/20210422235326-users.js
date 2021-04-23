'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "User1",
          password: "password1",
          email: "user1@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "User2",
          password: "password2",
          email: "user2@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
