webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageContainer */ "./components/PageContainer.js");
/* harmony import */ var _LogoSmall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogoSmall */ "./components/LogoSmall.js");

var _jsxFileName = "/Users/pepe/Documents/frontend-test-NextJS/components/Footer.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: flex-start;\n  margin-left: -", ";\n  margin-right: -", ";\n  padding: ", " 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.spacing6;
}, function (props) {
  return props.theme.spacing6;
}, function (props) {
  return props.theme.spacing6;
});

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LogoSmall__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ "./components/Hero.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MoreInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MoreInfo */ "./components/MoreInfo.js");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Introduction */ "./components/Introduction.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");

var _jsxFileName = "/Users/pepe/Documents/frontend-test-NextJS/components/Layout.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n  font-family: \"Open Sans\", sans-serif;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  letter-spacing: 0.3px;\n  color: ", ";\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Body = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].body(_templateObject(), function (props) {
  return props.theme.fontSize4;
}, function (props) {
  return props.theme.lineHeight3;
}, function (props) {
  return props.theme.fontRegular;
}, function (props) {
  return props.theme.lightGrey;
});

var Layout = function Layout() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "This is a page title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MoreInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Introduction__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LogoSmall.js":
/*!*********************************!*\
  !*** ./components/LogoSmall.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/pepe/Documents/frontend-test-NextJS/components/LogoSmall.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: ", ";\n  margin-right: ", ";\n  padding-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var LogoSmallContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject(), function (props) {
  return props.theme.spacing6;
}, function (props) {
  return props.theme.spacing5;
}, function (props) {
  return props.theme.spacing4;
});

var LogoSmall = function LogoSmall() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoSmallContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    title: "Basement logo",
    xmlns: "http://www.w3.org/2000/svg",
    width: "121",
    height: "26",
    viewBox: "0 0 121 26",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M33.6 19C35.1 19 36 18.1 36 16.8 36 15.5 35.2 14.6 33.6 14.6H31.1V19H33.6ZM33.3 11.9C34.7 11.9 35.6 11.1 35.6 9.8 35.6 8.5 34.8 7.7 33.3 7.7H31.1V11.9H33.3ZM33.8 5C36.9 5 38.6 6.9 38.6 9.5 38.6 11.2 37.6 12.6 36.3 13.1 37.9 13.5 39.1 14.9 39.1 17 39.1 19.7 37.2 21.7 34.2 21.7H28V5H33.8Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M46.9 17V16.5L44.4 16.9C43.6 17 43 17.4 43 18.3 43 19 43.5 19.7 44.4 19.7 45.7 19.7 46.9 19 46.9 17ZM43.3 15L46 14.6C46.7 14.5 46.9 14.2 46.9 13.8 46.9 12.9 46.3 12.3 45 12.3 43.7 12.3 43 13.1 42.9 14.1L40.2 13.6C40.4 11.7 42 9.7 45 9.7 48.5 9.7 49.8 11.8 49.8 14.1V19.8C49.8 20.4 49.9 21.3 49.9 21.7H47.2C47.1 21.3 47.1 20.7 47.1 20.3 46.5 21.2 45.4 22 43.8 22 41.4 22 40 20.3 40 18.5 40 16.4 41.4 15.3 43.3 15Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M53.4 17.8C53.5 18.8 54.2 19.6 55.5 19.6 56.5 19.6 56.9 19.1 56.9 18.5 56.9 17.9 56.6 17.5 55.7 17.3L54.3 17C52.1 16.5 51.2 15.1 51.2 13.5 51.2 11.5 52.9 9.7 55.3 9.7 58.5 9.7 59.5 11.8 59.7 13.1L57.2 13.7C57.1 13 56.6 12.1 55.3 12.1 54.5 12.1 53.9 12.6 53.9 13.3 53.9 13.8 54.3 14.2 54.9 14.3L56.5 14.7C58.7 15.1 59.8 16.5 59.8 18.2 59.8 20.1 58.4 22 55.5 22 52.2 22 51 19.8 50.9 18.4L53.4 17.8Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M68.8 14.6C68.7 13.4 68 12.3 66.3 12.3 64.7 12.3 63.9 13.5 63.8 14.6H68.8ZM71.5 18.3C71 20.3 69.2 22 66.5 22 63.5 22 60.8 19.7 60.8 15.8 60.8 12.1 63.4 9.7 66.2 9.7 69.7 9.7 71.7 12 71.7 15.7 71.7 16.2 71.7 16.7 71.7 16.7H63.7C63.8 18.2 65 19.3 66.5 19.3 67.9 19.3 68.7 18.6 69 17.6L71.5 18.3Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72.9 21.7V10.1H75.7V11.5C76.3 10.4 77.8 9.8 79 9.8 80.5 9.8 81.7 10.5 82.3 11.7 83.2 10.3 84.3 9.8 85.8 9.8 87.8 9.8 89.8 11.1 89.8 14.2V21.7H86.9V14.8C86.9 13.6 86.3 12.6 84.9 12.6 83.7 12.6 82.9 13.6 82.9 14.9V21.7H79.9V14.8C79.9 13.6 79.3 12.6 77.9 12.6 76.6 12.6 75.9 13.6 75.9 14.9V21.7H72.9Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M98.9 14.6C98.9 13.4 98.1 12.3 96.4 12.3 94.9 12.3 94 13.5 93.9 14.6H98.9ZM101.7 18.3C101.1 20.3 99.4 22 96.6 22 93.6 22 90.9 19.7 90.9 15.8 90.9 12.1 93.5 9.7 96.4 9.7 99.8 9.7 101.9 12 101.9 15.7 101.9 16.2 101.8 16.7 101.8 16.7H93.9C93.9 18.2 95.2 19.3 96.7 19.3 98.1 19.3 98.8 18.6 99.2 17.6L101.7 18.3Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M106 21.7H103V10.1H105.9V11.5C106.6 10.3 107.9 9.8 109.1 9.8 111.9 9.8 113.1 11.8 113.1 14.4V21.7H110.1V14.9C110.1 13.6 109.5 12.6 108.1 12.6 106.8 12.6 106 13.7 106 15V21.7Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M118.8 10.1H121V12.9H118.8V17.7C118.8 18.7 119.2 19 120.1 19 120.4 19 120.8 19 121 19V21.5C120.7 21.7 120.2 21.8 119.3 21.8 117.1 21.8 115.8 20.5 115.8 18.2V12.9H113.8V10.1H114.4C115.5 10.1 116.1 9.3 116.1 8.3V6.6H118.8V10.1Z",
    class: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M10.5 24.2L1.5 15 10.4 5.8 10.5 5.8 15.4 11 14.4 12.1 10.5 8.1 3.7 15 3.7 15 10.4 21.9 10.5 22 19.6 12.5 19.6 14.8 10.5 24.2ZM1.2 11.3L10.4 1.8 19.3 11 10.4 20.2 10.4 20.2 5.5 15 6.5 13.9 10.4 17.9 17.2 11 17.2 11 10.5 4.1 10.4 4 1.3 13.5 1.2 11.3ZM20.8 11.3V10.8L20.2 10.1 10.4 0 0 10.7 0 14.7 0 15 0 15.3 10.5 26 20.9 15.3 20.8 11.3Z",
    fill: "#FF5D1A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoSmall);

/***/ })

})
//# sourceMappingURL=index.js.70847137e81c43636025.hot-update.js.map