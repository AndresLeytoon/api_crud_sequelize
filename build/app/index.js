"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../../package.json"));

var _products = _interopRequireDefault(require("../routes/products.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set("pkg", _package["default"]);
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    author: app.get("pkg").author,
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    date: "08/06/2022"
  });
});
app.use("/products", _products["default"]);
var _default = app;
exports["default"] = _default;