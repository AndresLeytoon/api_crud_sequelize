"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]("crud_db", "postgres", "Leyton@1208", {
  host: "localhost",
  dialect: "postgres"
});
exports.sequelize = sequelize;