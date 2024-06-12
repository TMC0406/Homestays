"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("../actions/actionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  isLoggedIn: false,
  token: null,
  msg: '',
  username: "",
  phone: "",
  id: "",
  money: 0,
  rules: "",
  avatar: "",
  zalo: "",
  update: false
};

var authSlides = function authSlides() {
  var _objectSpread2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.actionTypes.REGISTER_SUCCESS:
    case _actionTypes.actionTypes.LOGIN_SUCCESS:
      console.log(action);
      return _objectSpread({}, state, {
        isLoggedIn: true,
        token: action.data.token,
        username: action.data.username,
        phone: action.data.phone,
        id: action.data.id,
        money: action.data.money,
        rules: action.data.rules,
        zalo: action.data.zalo,
        avatar: action.data.avatar,
        msg: ''
      });

    case _actionTypes.actionTypes.REGISTER_FAIL:
    case _actionTypes.actionTypes.LOGIN_FAIL:
      return _objectSpread({}, state, (_objectSpread2 = {
        isLoggedIn: false,
        msg: action.data,
        token: null
      }, _defineProperty(_objectSpread2, "msg", ''), _defineProperty(_objectSpread2, "update", !state.update), _objectSpread2));

    case _actionTypes.actionTypes.LOGOUT:
      return _objectSpread({}, state, {
        isLoggedIn: false,
        token: null,
        msg: ''
      });

    case _actionTypes.actionTypes.CHANGE_INFO:
      console.log(action.data);
      return _objectSpread({}, state, {
        username: action.data.name,
        phone: action.data.phone,
        zalo: action.data.zalo,
        avatar: action.data.avatar
      });

    default:
      return state;
  }
};

var _default = authSlides;
exports["default"] = _default;