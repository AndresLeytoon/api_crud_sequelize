"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../database/sequelize.js");

var Product = _sequelize2.sequelize.define("product", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  category: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    isAlphanumeric: true
  },
  price: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    isNumeric: true
  },
  imgURL: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    isUrl: true
  }
}, {
  timestamps: true
});

exports.Product = Product;