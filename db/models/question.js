"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: "themeId" });
    }
  }
  Question.init(
    {
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Themes", key: "Id" },
        onDelete: "CASCADE",
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
