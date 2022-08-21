"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ssg),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/codeSnippetCard.tsx
var codeSnippetCard = __webpack_require__(5295);
;// CONCATENATED MODULE: ./public/ssg.svg
/* harmony default export */ const ssg = ({"src":"/_next/static/media/ssg.fa89eb31.svg","height":670,"width":690});
;// CONCATENATED MODULE: ./pages/ssg/index.tsx





const StaticSiteGeneration = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                        sx: {
                            marginBottom: "20px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h5",
                                children: "Static Site Generation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body1",
                                children: "NextJS will automatically generate all static HTML whenever possible upon build time."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                                    sx: {
                                        padding: "4ch"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        align: "center",
                                        variant: "body1",
                                        children: [
                                            "This page was built on",
                                            " ",
                                            props.builtDate,
                                            " MYT"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(codeSnippetCard/* default */.Z, {
                        image: ssg,
                        text: "Below is the simplified code snippet for this page."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pages_ssg = (StaticSiteGeneration);
const getStaticProps = async ()=>{
    return {
        props: {
            builtDate: new Date().toLocaleString("en-GB", {
                dateStyle: "long",
                timeStyle: "medium",
                hour12: false,
                timeZone: "Asia/Singapore"
            })
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,295], () => (__webpack_exec__(5414)));
module.exports = __webpack_exports__;

})();