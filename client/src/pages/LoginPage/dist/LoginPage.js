"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Input_tsx_1 = require("../../components/Input/Input.tsx");
var Button_tsx_1 = require("../../components/Button/Button.tsx");
var react_router_dom_1 = require("react-router-dom");
var auth_js_1 = require("../../service/auth.js");
var actionTypes_js_1 = require("../../redux/actions/actionTypes.js");
var react_redux_1 = require("react-redux");
var main1Slice_js_1 = require("../../redux/slides/main1Slice.js");
var LoginPage = function () {
    var _a, _b;
    var location = react_router_dom_1.useLocation();
    var dispatch = react_redux_1.useDispatch();
    var navigate = react_router_dom_1.useNavigate();
    var isLoggedIn = react_redux_1.useSelector(function (state) { return state.auth; }).isLoggedIn;
    var _c = react_1.useState((_a = location.state) === null || _a === void 0 ? void 0 : _a.flag), isRegister = _c[0], setIsRegister = _c[1];
    var _d = react_1.useState({ name: '', phone: '', password: '' }), payload = _d[0], setPayload = _d[1];
    var _e = react_1.useState([{ name: "", message: "" }]), invalidFields = _e[0], setInvalidFields = _e[1];
    react_1.useEffect(function () {
        var _a;
        setIsRegister((_a = location.state) === null || _a === void 0 ? void 0 : _a.flag);
    }, [(_b = location.state) === null || _b === void 0 ? void 0 : _b.flag]);
    react_1.useEffect(function () {
        isLoggedIn && navigate('/');
    }, [isLoggedIn]);
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isRegister) return [3 /*break*/, 7];
                    if (!(payload.name && payload.password && payload.phone)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, auth_js_1.apiRegister(payload)];
                case 2:
                    response = _a.sent();
                    if (response.data.err === 0) {
                        dispatch({ type: actionTypes_js_1.actionTypes.REGISTER_SUCCESS, data: response.data });
                        navigate('/login');
                        dispatch(main1Slice_js_1.setActiveItem(1));
                        alert("Đăng ký thành công!");
                    }
                    else {
                        alert(response.data.msg);
                    }
                    ;
                    ;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    dispatch({ type: actionTypes_js_1.actionTypes.REGISTER_FAIL, data: error_1.msg });
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    alert("bạn điền thiếu thông tin");
                    _a.label = 6;
                case 6: return [3 /*break*/, 13];
                case 7:
                    if (!(payload.password && payload.phone)) return [3 /*break*/, 12];
                    _a.label = 8;
                case 8:
                    _a.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, auth_js_1.apiLogin(payload)];
                case 9:
                    response = _a.sent();
                    if (response.data.err === 0) {
                        dispatch({ type: actionTypes_js_1.actionTypes.LOGIN_SUCCESS, data: response.data });
                        navigate('/');
                        dispatch(main1Slice_js_1.setActiveItem(1));
                        alert("Đăng nhập thành công!");
                    }
                    else {
                        alert(response.data.msg);
                    }
                    ;
                    return [3 /*break*/, 11];
                case 10:
                    error_2 = _a.sent();
                    dispatch({ type: actionTypes_js_1.actionTypes.LOGIN_FAIL, data: error_2.msg });
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (payload.password && !payload.phone) {
                        alert("bạn điền thiếu thông tin");
                    }
                    _a.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    }); };
    // let finalPayload = isRegister ? payload : {
    //   phone: payload.phone,
    //   password : payload.password
    // }
    //   let invalids = validate(payload)
    //   if (invalids === 0) {
    //   }
    // }
    // let fields = Object.entries(payload)
    // // console.log(fields)
    // fields.forEach(item => {
    //   if (item[1] === "") {
    //       setInvalidFields(
    //         (pre) => [...pre , {
    //           name : item[0],
    //           message  : " Không được để trống"
    //         }]
    //       )
    //     invalids++
    //   }
    //   })
    //   // console.log(invalidFields);
    //     fields.forEach(item => {
    //       switch (item[0]) {
    //           case 'password':
    //               if (item[0].length < 6) {
    //                   setInvalidFields(prev => [...prev, {
    //                       name: item[0],
    //                       message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
    //                   }])
    //                   invalids++
    //               }
    //               break;
    //           case 'phone':
    //               if (!+item[0]) {
    //                   setInvalidFields(prev => [...prev, {
    //                       name: item[0],
    //                       message: 'Số điện thoại không hợp lệ.'
    //                   }])
    //                   invalids++
    //               }
    //               break
    //           default:
    //               break;
    //       }
    //   })
    //   return invalids
    return (react_1["default"].createElement("section", { className: 'mw-600 m-auto my-[10px]' },
        react_1["default"].createElement("div", { className: 'bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]' },
            react_1["default"].createElement("h1", { className: 'text-[28px] font-bold flex justify-center' }, isRegister ? 'ĐĂNG KÍ TÀI KHOẢN' : 'ĐĂNG NHẬP'),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                isRegister && react_1["default"].createElement(Input_tsx_1["default"], { setInvalidFields: setInvalidFields, invalidFields: invalidFields, label: 'HỌ TÊN', value: payload.name, setValue: setPayload, keyPayload: 'name', type: 'name' }),
                react_1["default"].createElement(Input_tsx_1["default"], { setInvalidFields: setInvalidFields, invalidFields: invalidFields, label: 'SỐ ĐIỆN THOẠI', value: payload.phone, setValue: setPayload, keyPayload: 'phone', type: 'phone' }),
                react_1["default"].createElement(Input_tsx_1["default"], { setInvalidFields: setInvalidFields, invalidFields: invalidFields, label: 'MẬT KHÂU', value: payload.password, setValue: setPayload, keyPayload: 'password', type: 'password' })),
            react_1["default"].createElement("div", { className: 'mb-[20px]' },
                react_1["default"].createElement(Button_tsx_1["default"], { text: isRegister ? 'Đăng kí' : 'Đăng nhập', textColor: 'text-[#ffffff]', bgColor: 'bg-[#3961fb]', className: 'w-full h-[45px] font-bold', onClick: handleSubmit })),
            react_1["default"].createElement("div", { className: 'flex justify-between' }, isRegister
                ?
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("small", { className: '' },
                            "B\u1EA1n \u0111\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?",
                            react_1["default"].createElement("span", { onClick: function () {
                                    setIsRegister(false);
                                    setPayload({
                                        name: '',
                                        phone: '',
                                        password: ''
                                    });
                                }, className: 'text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]' }, " \u0110\u0103ng nh\u1EADp ngay")))
                :
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("small", { className: 'text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]' }, "B\u1EA1n qu\u00EAn m\u1EADt kh\u1EA9u"),
                        react_1["default"].createElement("small", { onClick: function () {
                                setIsRegister(true);
                                setPayload({
                                    name: '',
                                    phone: '',
                                    password: ''
                                });
                            }, className: 'text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]' }, "T\u1EA1o m\u1EADt kh\u1EA9u m\u1EDBi"))))));
};
exports["default"] = LoginPage;
