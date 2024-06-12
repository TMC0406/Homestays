"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routers = _interopRequireDefault(require("./src/routers"));

var _connectDatabase = _interopRequireDefault(require("./src/config/connectDatabase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: process.env.CLIENT_URL,
  methods: ['POST', 'GET', 'PUT', 'DELETE']
})); //Đọc API từ Client gửi lên

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //Giúp đọc data dạng form data từ Client gửi lên

(0, _routers["default"])(app);
(0, _connectDatabase["default"])();
var port = process.env.PORT || 8888; //Nếu cổng 5000 bị lỗi thì tự động chuyển sang cổng 8888

var listener = app.listen(port, function () {
  console.log("Server is running on the port ".concat(listener.address().port));
});