(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/codeSnippetCard.tsx
var codeSnippetCard = __webpack_require__(5295);
;// CONCATENATED MODULE: ./public/ssg.svg
/* harmony default export */ const ssg = ({"src":"/_next/static/media/ssg.5027b6a6.svg","height":839,"width":791});
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/ssg/index.tsx







const StaticSiteGeneration = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "SSG - Why NextJS Demo"
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
                                    children: "Static Site Generation"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    variant: "body1",
                                    children: [
                                        'NextJS will automatically generate all static HTML whenever possible upon build time. This page utililzes the getStaticProps() function to get the built date. The "',
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        }),
                                        '" and "',
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/pros-cons",
                                            children: "Pros & Cons"
                                        }),
                                        '" pages are 100% static without adding any functions.'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    variant: "body1",
                                    sx: {
                                        marginTop: "2ch"
                                    },
                                    children: [
                                        "You can create statuc dynamic routes by implementing getStaticPaths(). Check out the special ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/ssg/Amin",
                                            children: "Boss"
                                        }),
                                        " and ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/ssg/Harsha",
                                            children: "mini boss"
                                        }),
                                        " pages."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    sx: {
                                        marginTop: "1ch"
                                    },
                                    children: [
                                        "Click",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://github.com/firdaus-edymainoe/why-nextjs-demo/tree/main/static_files/pages",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "here"
                                        }),
                                        " ",
                                        "to view the all static files for this app."
                                    ]
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
                                                "This page was built on ",
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
        ]
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,964,675,952,664,295], () => (__webpack_exec__(5414)));
module.exports = __webpack_exports__;

})();