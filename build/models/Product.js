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
    type: _sequelize.DataTypes.STRING
  },
  category: {
    type: _sequelize.DataTypes.STRING
  },
  price: {
    type: _sequelize.DataTypes.INTEGER
  },
  imgURL: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  timestamps: true
});

exports.Product = Product;