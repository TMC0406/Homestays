"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ManagePostings = function () {
    var status = false;
    return (react_1["default"].createElement("div", { className: 'w-[100%] h-[100vh] overflow-auto ' },
        react_1["default"].createElement("div", { className: "flex justify-between px-[30px] items-center" },
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("h1", { className: 'text-[30px] font-[600]' }, "Qu\u1EA3n l\u00FD tin \u0111\u0103ng")),
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("label", { htmlFor: "VIP" }, "Ch\u1ECDn lo\u1EA1i VIP"),
                react_1["default"].createElement("select", { className: 'px-[10px] py-[5px] border-[2px] mx-[5px]', name: "VIP", id: "VIP" },
                    react_1["default"].createElement("option", { value: "HOT" }, "Tin Hot"),
                    react_1["default"].createElement("option", { value: "THUONG" }, "Tin th\u01B0\u1EDDng"),
                    react_1["default"].createElement("option", { value: "VIP10" }, "Tin VIP 10"),
                    react_1["default"].createElement("option", { value: "VIP20" }, "Tin VIP 20"),
                    react_1["default"].createElement("option", { value: "VIP30" }, "Tin VIP 30")),
                react_1["default"].createElement("label", { htmlFor: "NEWS" }, "Ch\u1ECDn lo\u1EA1i tin"),
                react_1["default"].createElement("select", { className: 'px-[10px] py-[5px] border-[2px] mx-[5px]', name: "NEWS", id: "NEWS" },
                    react_1["default"].createElement("option", { value: "NewsShowing" }, "Tin \u0111ang hi\u1EC3n th\u1ECB"),
                    react_1["default"].createElement("option", { value: "ExpiredNews" }, "Tin h\u1EBFt h\u1EA1n"),
                    react_1["default"].createElement("option", { value: "ExpiredNews" }, "Tin \u0111ang \u1EA9n")),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/DepositMoney/posting" },
                    react_1["default"].createElement("button", { className: 'px-[10px] py-[5px] text-white font-[500] bg-[#dc3545]' }, "\u0110\u0103ng tin m\u1EDBi")))),
        react_1["default"].createElement("table", { className: 'w-[100%]  m-[5px] p-[5px]' },
            react_1["default"].createElement("thead", { className: ' border-[2px]' },
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "M\u00E3 tin"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "\u1EA2nh \u0111\u1EA1i di\u1EC7n"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "Ti\u00EAu \u0111\u1EC1"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "Gi\u00E1"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "Ng\u00E0y b\u1EAFt \u0111\u1EA7u"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "Ng\u00E0y h\u1EBFt h\u1EA1n"),
                    react_1["default"].createElement("th", { className: ' border-r-[2px]' }, "Tr\u1EA1ng th\u00E1i"))),
            react_1["default"].createElement("tbody", { className: ' border-[2px]  p-[5px]' }, status ?
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", null))
                :
                    react_1["default"].createElement("tr", null,
                        " B\u1EA1n ch\u01B0a c\u00F3 tin \u0111\u0103ng n\u00E0o. B\u1EA5m ",
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/DepositMoney/posting", className: 'text-blue-400' }, " v\u00E0o \u0111\u00E2y"),
                        " \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u \u0111\u0103ng tin")))));
};
exports["default"] = ManagePostings;
