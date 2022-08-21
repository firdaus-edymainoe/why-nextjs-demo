(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8470:
/***/ ((module) => {

// Exports
module.exports = {
	"contentBody": "_app_contentBody__dRuTF"
};


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/createEmotionCache.ts
var createEmotionCache = __webpack_require__(3221);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar/topbar.tsx





const Topbar = ({ toggleDrawer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
            position: "fixed",
            sx: {
                zIndex: (theme)=>theme.zIndex.drawer + 1
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        size: "large",
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        sx: {
                            mr: 2
                        },
                        onClick: toggleDrawer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            children: "NextJS Demo"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const topbar = (Topbar);

;// CONCATENATED MODULE: ./components/navbar/customLink.tsx





const LinkText = (0,styles_.styled)(material_.Typography)({
    "&:hover": {
        color: "blue"
    }
});
const CustomLink = ({ href , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkText, {
            variant: "body1",
            sx: {
                paddingTop: "10px",
                width: "100%"
            },
            children: label
        })
    });
};
/* harmony default export */ const customLink = (CustomLink);

;// CONCATENATED MODULE: ./components/navbar/drawer.tsx




const drawerWidth = 240;
const LeftDrawer = ({ showDrawer , toggleDrawer  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.SwipeableDrawer, {
            anchor: "left",
            sx: {
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            },
            open: showDrawer,
            onOpen: toggleDrawer,
            onClose: toggleDrawer,
            hysteresis: 0.01,
            minFlingVelocity: 250,
            swipeAreaWidth: 80,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    onClick: toggleDrawer,
                    sx: {
                        margin: "0px 2ch"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/",
                            label: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/router",
                            label: "Built-in Router"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/csr",
                            label: "Client Side Rendering"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/ssr",
                            label: "Server Side Rendering"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/ssg",
                            label: "Static Site Generation"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/isg",
                            label: "Incremental Static Regeneration"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                            href: "/ssr",
                            label: "Pros & Cons (vs CRA)"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const drawer = (LeftDrawer);

;// CONCATENATED MODULE: ./components/navbar/navbar.tsx




const Navbar = ()=>{
    const [showDrawer, setShowDrawer] = external_react_.useState(false);
    function toggleDrawer() {
        setShowDrawer(!showDrawer);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(topbar, {
                toggleDrawer: toggleDrawer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(drawer, {
                showDrawer: showDrawer,
                toggleDrawer: toggleDrawer
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./pages/_app.module.css
var _app_module = __webpack_require__(8470);
var _app_module_default = /*#__PURE__*/__webpack_require__.n(_app_module);
;// CONCATENATED MODULE: ./pages/_app.tsx











const _app_drawerWidth = 240;
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps ,  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (_app_module_default()).contentBody,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

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

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,964,952,664,886], () => (__webpack_exec__(6356)));
module.exports = __webpack_exports__;

})();