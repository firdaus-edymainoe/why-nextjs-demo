(() => {
var exports = {};
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_isg),
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
;// CONCATENATED MODULE: ./public/isg.svg
/* harmony default export */ const isg = ({"src":"/_next/static/media/isg.dab8c6e7.svg","height":1135,"width":833});
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/isg/index.tsx






const IncrementalStaticGeneration = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "ISG - Why NextJS Demo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
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
                                    children: "Incremental Static Generation"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    variant: "body1",
                                    children: "We can also update the static HTML pages by utilizing getStaticProps() with revalidate. By specifying the revalidate value in seconds, NextJS will regenerate the page accordingly."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    align: "center",
                                    variant: "body1",
                                    children: [
                                        "This page is regenerated every 30 seconds...",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "ish?"
                                        }),
                                        " ",
                                        "\uD83D\uDE05"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                        sx: {
                                            padding: "4ch"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                align: "center",
                                                variant: "body1",
                                                children: [
                                                    "This page was built on ",
                                                    props.date,
                                                    " MYT"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                align: "center",
                                                variant: "body1",
                                                children: [
                                                    "Random number is ",
                                                    props.randomNumber
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(codeSnippetCard/* default */.Z, {
                            image: isg,
                            text: "Below is the code snippet for this page."
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages_isg = (IncrementalStaticGeneration);
const getStaticProps = async ()=>{
    let randomNumber = Math.floor(Math.random() * 100);
    return {
        props: {
            randomNumber: randomNumber,
            date: new Date().toLocaleString("en-GB", {
                dateStyle: "long",
                timeStyle: "medium",
                hour12: false,
                timeZone: "Asia/Singapore"
            })
        },
        revalidate: 30
    };
};


/***/ }),

/***/ 9008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4957)


/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,295], () => (__webpack_exec__(1130)));
module.exports = __webpack_exports__;

})();