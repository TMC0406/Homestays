"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLogin = exports.apiRegister = void 0;

var _axiosConfig = _interopRequireDefault(require("../axiosConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRegister = function apiRegister(payload) {
  return new Promise(function _callee(resolve, reject) {
    var response;
    // eslint-disable-next-line no-undef
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        // eslint-disable-next-line default-case
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            // eslint-disable-next-line no-undef
            return regeneratorRuntime.awrap((0, _axiosConfig["default"])({
              method: 'post',
              url: '/api/v1/auth/register',
              data: payload
            }));

          case 3:
            response = _context.sent;
            resolve(response);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

exports.apiRegister = apiRegister;

var apiLogin = function apiLogin(payload) {
  return new Promise(function _callee2(resolve, reject) {
    var response;
    // eslint-disable-next-line no-undef
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        // eslint-disable-next-line default-case
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            // eslint-disable-next-line no-undef
            return regeneratorRuntime.awrap((0, _axiosConfig["default"])({
              method: 'post',
              url: '/api/v1/auth/login',
              data: payload
            }));

          case 3:
            response = _context2.sent;
            console.log(response);
            resolve(response);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

exports.apiLogin = apiLogin;