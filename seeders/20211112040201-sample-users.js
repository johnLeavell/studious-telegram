"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("Users", [
      {
        firstName: "john",
        lastName: "leavell",
        email: "john@mail.com",
        username: "jlove",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "george",
        lastName: "leavell",
        email: "george@mail.com",
        username: "glove",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "miles",
        lastName: "leavell",
        email: "miles@mail.com",
        username: "mlove",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
