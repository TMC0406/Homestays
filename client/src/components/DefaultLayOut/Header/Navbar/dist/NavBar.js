"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var fa_1 = require("react-icons/fa");
var react_redux_1 = require("react-redux");
var main1Slice_js_1 = require("../../../../redux/slides/main1Slice.js");
var Navbar = function (_a) {
    var setNav = _a.setNav;
    var dispatch = react_redux_1.useDispatch();
    var activeItem = react_redux_1.useSelector(function (state) { return state.main1.activeItem; });
    react_1.useEffect(function () {
        // Lưu active item vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItem', activeItem.toString());
    }, [activeItem]);
    var handleHeaderActive = function (id) {
        dispatch(main1Slice_js_1.setActiveItem(id));
    };
    return (react_1["default"].createElement("div", { className: "header-navbar w-[100%]  " + setNav + "  " },
        react_1["default"].createElement("ul", { className: "header-list-nav flex justify-around w-[1120px]  m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] " },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                react_1["default"].createElement("li", { className: "flex items-center px-[35px] h-[40px] hover:bg-[#f73859] " + (activeItem === 1 ? "bg-[#f73859]" : "") + " ", onClick: function () { return handleHeaderActive(1); } },
                    react_1["default"].createElement("span", null, "Trang ch\u1EE7"))),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/RentingRoom" },
                react_1["default"].createElement("li", { className: "flex items-center px-[35px] h-[40px] hover:bg-[#f73859] " + (activeItem === 2 ? "bg-[#f73859]" : "") + " ", onClick: function () { return handleHeaderActive(2); } }, "Cho thu\u00EA ph\u00F2ng tr\u1ECD")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/rentalhouse" },
                react_1["default"].createElement("li", { className: "flex items-center px-[35px] h-[40px] hover:bg-[#f73859] " + (activeItem === 3 ? "bg-[#f73859]" : "") + " ", onClick: function () { return handleHeaderActive(3); } }, "Nh\u00E0 cho thu\u00EA")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/apartmentRental" },
                react_1["default"].createElement("li", { className: (activeItem === 4 ? "bg-[#f73859]" : "") + " flex items-center px-[35px] h-[40px] hover:bg-[#f73859]", onClick: function () { return handleHeaderActive(4); } }, "Cho thu\u00EA c\u0103n h\u1ED9")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/favourite" },
                react_1["default"].createElement("li", { className: "flex items-center px-[35px] h-[40px] hover:bg-[#f73859] " + (activeItem === 5 ? "bg-[#f73859]" : ""), onClick: function () { return handleHeaderActive(5); } },
                    react_1["default"].createElement(fa_1.FaRegHeart, { className: 'mr-[5px] text-[15px]' }),
                    " Y\u00EAu th\u00EDch")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/newsPage" },
                react_1["default"].createElement("li", { className: (activeItem === 6 ? "bg-[#f73859]" : "") + " flex items-center px-[35px] h-[40px] hover:bg-[#f73859]", onClick: function () { return handleHeaderActive(6); } }, "Tin t\u1EE9c")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal" },
                react_1["default"].createElement("li", { className: (activeItem === 7 ? "bg-[#f73859]" : "") + " flex items-center px-[35px] h-[40px] hover:bg-[#f73859]", onClick: function () { return handleHeaderActive(0); } }, "B\u1EA3ng gi\u00E1 d\u1ECBch v\u1EE5")))));
};
exports["default"] = Navbar;
