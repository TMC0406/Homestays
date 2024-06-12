"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var ItemDetail_tsx_1 = require("../../pages/HomePage/components/ItemDetail.tsx");
var Button_tsx_1 = require("../Button/Button.tsx");
var react_redux_1 = require("react-redux");
var Pagination = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b;
    var activeItem = react_redux_1.useSelector(function (state) { return state.main1.activeItem; });
    var _c = react_1.useState([]), newData = _c[0], setNewData = _c[1];
    react_1.useEffect(function () {
        switch (activeItem) {
            case 1:
                setNewData(data);
                break;
            case 2:
                // eslint-disable-next-line array-callback-return
                // const dataCTPT = data.filter((item:any)=>{
                //   if(item.categoryCode === "ChoThuePhongtro"){
                //     console.log(item);
                //     return item
                //   }
                // })
                setNewData(data);
                break;
            case 3:
                setNewData(data);
                break;
            case 4:
                setNewData(data);
                break;
            default:
                setNewData([]);
                break;
        }
    }, [activeItem]);
    // eslint-disable-next-line array-callback-return
    // const newData = data.filter((item:any)=>{
    //     if (item?.address.includes("Hồ Chí Minh") ){
    //             return item 
    //     }
    // })
    // console.log(activeItem);
    // console.log(newData);
    var _d = react_1.useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = react_1.useState(10), perPage = _e[0], setPerPage = _e[1];
    var _f = react_1.useState(0), start = _f[0], setStart = _f[1];
    var _g = react_1.useState(perPage), end = _g[0], setEnd = _g[1];
    var headerPostingLish = react_1.useRef();
    // Ensure data is defined before calling slice
    var record = newData.slice(start, end);
    var total = Math.ceil(newData.length / perPage);
    var number = __spreadArrays(Array(total + 1).keys()).slice(1);
    react_1.useEffect(function () {
        setStart((currentPage - 1) * perPage);
        setEnd(currentPage * perPage);
    }, [currentPage, perPage]);
    var showPage = (newData === null || newData === void 0 ? void 0 : newData.length) > 0 && newData.map(function (item, index) {
        var _a;
        if (index >= start && index < end) {
            return (react_1["default"].createElement("div", { key: index },
                react_1["default"].createElement(ItemDetail_tsx_1["default"], { key: item === null || item === void 0 ? void 0 : item.id, images: JSON.parse((_a = item === null || item === void 0 ? void 0 : item.images) === null || _a === void 0 ? void 0 : _a.image), address: item === null || item === void 0 ? void 0 : item.address, attributes: item === null || item === void 0 ? void 0 : item.attributes, description: JSON.parse(item === null || item === void 0 ? void 0 : item.description), star: +(item === null || item === void 0 ? void 0 : item.star), title: item === null || item === void 0 ? void 0 : item.title, users: item === null || item === void 0 ? void 0 : item.users })));
        }
        return null;
    });
    var handlePrev = function () {
        setCurrentPage(function (prevPage) { return Math.max(prevPage - 1, 1); });
    };
    var handleNext = function () {
        setCurrentPage(function (prevPage) { return Math.min(prevPage + 1, total); });
    };
    var handleChange = function (page) {
        setCurrentPage(page);
    };
    return (react_1["default"].createElement("div", { className: "" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "box" }, showPage),
            react_1["default"].createElement("div", { className: "box-btn flex" },
                react_1["default"].createElement(Button_tsx_1["default"], { text: 'Trang trước', onClick: handlePrev, className: "m-[5px] p-[5px] border-[2px]", icon: undefined }),
                number.map(function (it) { return (react_1["default"].createElement(Button_tsx_1["default"], { text: it, onClick: function () { return handleChange(it); }, className: "m-[5px] p-[5px] border-[2px] text-center " + (currentPage === it ? "bg-red-700 text-white" : ""), icon: undefined })); }),
                react_1["default"].createElement(Button_tsx_1["default"], { text: 'Trang sau', onClick: handleNext, className: 'm-[5px] p-[5px] border-[2px] text-center', icon: undefined })))));
};
exports["default"] = Pagination;
