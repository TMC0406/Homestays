"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_tsx_1 = require("../../../Button/Button.tsx");
var constant_js_1 = require("../../../../ultils/constant.js");
var react_redux_1 = require("react-redux");
var logoPage_jpg_1 = require("../../../../assets/imgs/logo/logoPage.jpg");
var main1Slice_js_1 = require("../../../../redux/slides/main1Slice.js");
var HeaderTop = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_redux_1.useSelector(function (state) { return state.auth; }), isLoggedIn = _a.isLoggedIn, username = _a.username, money = _a.money, avatar = _a.avatar;
    var dispatch = react_redux_1.useDispatch();
    var goLogin = react_1.useCallback(function (flag) {
        navigate(constant_js_1.path.LOGIN, { state: { flag: flag } });
    }, []);
    var handleHeaderActive = function (id, id2) {
        dispatch(main1Slice_js_1.setActiveItemNav(id));
        dispatch(main1Slice_js_1.setActiveItem(id2));
    };
    function formatCurrency(amount) {
        var amountStr = amount.toString();
        return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    var gotohome = function () {
        navigate("/");
        dispatch(main1Slice_js_1.setActiveItem(1));
    };
    return (react_1["default"].createElement("div", { className: 'HeaderTop bg-white' },
        react_1["default"].createElement("div", { className: "w-[70%] m-auto" },
            react_1["default"].createElement("div", { className: 'header-container flex justify-between h-[70px] items-center' },
                react_1["default"].createElement("div", { className: 'header-logo' },
                    react_1["default"].createElement("div", { onClick: gotohome, className: "flex flex items-center justify-around " },
                        react_1["default"].createElement("img", { className: 'logo-img w-[50px]', src: logoPage_jpg_1["default"], alt: "Logo " }),
                        react_1["default"].createElement("h1", { className: "text-[1.2rem] font-[900] text-[#4f5091]" }, "HOMESTAY HEALING"))),
                !isLoggedIn && react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Button_tsx_1["default"], { text: "Đăng nhập", textColor: 'text-[#ffffff]', bgColor: 'bg-[#3961FB]', onClick: function () { return goLogin(false); }, className: undefined }),
                    react_1["default"].createElement(Button_tsx_1["default"], { text: "Đăng ký", textColor: 'text-[#ffffff]', bgColor: 'bg-[#3961FB]', onClick: function () { return goLogin(true); }, className: undefined })),
                isLoggedIn &&
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/Information", onClick: function () { return handleHeaderActive(2, 0); } },
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("div", { className: "flex items-center justify-center" },
                                react_1["default"].createElement("img", { className: "w-[50px] h-[50px] shadow-[1px_1px_1px_1px_#a7acaf]  rounded-[10rem]", src: avatar, alt: "avatar" })),
                            react_1["default"].createElement("div", { className: " mx-[10px]  " },
                                react_1["default"].createElement("span", { className: "" },
                                    "T\u00EAn t\u00E0i kho\u1EA3n : ",
                                    react_1["default"].createElement("span", { className: "font-[600]" },
                                        " ",
                                        username)),
                                " ",
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("small", { className: "" },
                                    "TK ch\u00EDnh :",
                                    react_1["default"].createElement("span", { className: "font-[600]" },
                                        formatCurrency(money),
                                        "  VND")))))))));
};
exports["default"] = HeaderTop;
