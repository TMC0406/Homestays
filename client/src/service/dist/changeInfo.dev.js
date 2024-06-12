"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeInfo = void 0;

var _axiosConfig = _interopRequireDefault(require("../axiosConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var changeInfo = function changeInfo(payload) {
  return new Promise(function _callee(resolve, reject) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _axiosConfig["default"])({
              method: 'post',
              url: '/api/v1/auth/changeInfo',
              data: payload
            }));

          case 3:
            response = _context.sent;
            console.log(response);
            resolve(response);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

exports.changeInfo = changeInfo;