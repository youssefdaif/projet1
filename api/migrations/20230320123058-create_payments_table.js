'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rental_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rentals',
          key: 'rental_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      payment_method: {
        allowNull: false,
        type: Sequelize.ENUM('CREDIT_CARD', 'DEBIT_CARD', 'CASH')
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};