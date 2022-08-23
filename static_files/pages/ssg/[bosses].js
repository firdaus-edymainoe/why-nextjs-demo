"use strict";
(() => {
var exports = {};
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 5454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _bosses_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SSG-bosses.svg
/* harmony default export */ const SSG_bosses = ({"src":"/_next/static/media/SSG-bosses.96016158.svg","height":986,"width":807});
// EXTERNAL MODULE: ./components/codeSnippetCard.tsx
var codeSnippetCard = __webpack_require__(5295);
;// CONCATENATED MODULE: ./pages/ssg/[bosses].tsx





const Bosses = (params)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                    sx: {
                        height: "80vh",
                        maxHeight: "500px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginBottom: "2ch"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            align: "center",
                            variant: "h5",
                            dangerouslySetInnerHTML: {
                                __html: params.desc
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "caption",
                            align: "center",
                            sx: {
                                marginTop: "2ch"
                            },
                            children: [
                                "This page was built on ",
                                params.builtDate
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(codeSnippetCard/* default */.Z, {
                image: SSG_bosses,
                text: "Below is the simplified code snippet for this page."
            })
        ]
    });
};
/* harmony default export */ const _bosses_ = (Bosses);
const getStaticPaths = async ()=>{
    return {
        paths: [
            {
                params: {
                    bosses: "Amin"
                }
            },
            {
                params: {
                    bosses: "Harsha"
                }
            }, 
        ],
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    console.log(context);
    let desc = "";
    let builtDate = new Date().toLocaleString("en-GB", {
        dateStyle: "long",
        timeStyle: "medium",
        hour12: false,
        timeZone: "Asia/Singapore"
    });
    if (context.params.bosses === "Amin") {
        desc = "<p>Hi Amin, me beloved real boss!</p><p>Happy birthday boss!!! \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89</p>";
    } else {
        desc = "Hi Harsha, me beloved mini boss! \uD83E\uDD2A";
    }
    return {
        props: {
            desc: desc,
            builtDate: builtDate
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,295], () => (__webpack_exec__(5454)));
module.exports = __webpack_exports__;

})();