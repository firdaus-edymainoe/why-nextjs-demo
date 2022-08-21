"use strict";
(() => {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 6223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _name_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/codeSnippetCard.tsx
var codeSnippetCard = __webpack_require__(5295);
;// CONCATENATED MODULE: ./public/ssr.svg
/* harmony default export */ const ssr = ({"src":"/_next/static/media/ssr.8dc587a8.svg","height":1210,"width":824});
// EXTERNAL MODULE: ./components/ssr/ssrContent.tsx
var ssrContent = __webpack_require__(5555);
;// CONCATENATED MODULE: ./pages/ssr/name/[name].tsx






const SsrWithName = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ssrContent/* default */.Z, {
                        name: props.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(codeSnippetCard/* default */.Z, {
                        image: ssr,
                        text: "Below is the code snippet for this page. The getServerSideProps() is at the bottom of the snippet. The component receives props from getServerSideProps()"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const _name_ = (SsrWithName);
const getServerSideProps = async (context)=>{
    console.log(context);
    let name = context.query.name;
    return {
        props: {
            name: name
        }
    };
};


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,295,555], () => (__webpack_exec__(6223)));
module.exports = __webpack_exports__;

})();