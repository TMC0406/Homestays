"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SelectOption = function (_a) {
    var arrOption = _a.arrOption;
    return (react_1["default"].createElement("div", { className: "" },
        react_1["default"].createElement("select", null, 
        // eslint-disable-next-line array-callback-return
        arrOption === null || 
        // eslint-disable-next-line array-callback-return
        arrOption === void 0 ? void 0 : 
        // eslint-disable-next-line array-callback-return
        arrOption.map(function (item) {
            return (react_1["default"].createElement("option", { value: item === null || item === void 0 ? void 0 : item.value }, item === null || item === void 0 ? void 0 :
                item.value,
                " "));
        }))));
};
exports["default"] = SelectOption;
