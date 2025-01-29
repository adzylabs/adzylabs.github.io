"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 9105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_Policy)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/icons/icon_clock.svg
/* harmony default export */ const icon_clock = ({"src":"/_next/static/media/icon_clock.38bc6a3d.svg","height":36,"width":36});
;// CONCATENATED MODULE: ./public/images/icons/icon_dart_board_2.svg
/* harmony default export */ const icon_dart_board_2 = ({"src":"/_next/static/media/icon_dart_board_2.b40c3756.svg","height":40,"width":40});
;// CONCATENATED MODULE: ./public/images/icons/icon_target.svg
/* harmony default export */ const icon_target = ({"src":"/_next/static/media/icon_target.c7619c2d.svg","height":40,"width":40});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/about/Policy.js






const Policy = [
    {
        title: "Our History",
        subTitle: "Since 1997 we have been a visionary and a reliable software engineering partner for world-class brands. abbreviated as co.",
        icon: icon_clock
    },
    {
        title: "Our Mission",
        subTitle: "A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand",
        icon: icon_dart_board_2
    },
    {
        title: "Our Vision",
        subTitle: "A vision statement for a company or organization focuses on the potential inherent in the companys future; its about what they intend to be how you",
        icon: icon_target
    }
];
const PolicySection = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "policy_section bg-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: Policy.map((policy, pitem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "iconbox_block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "iconbox_icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: policy.icon,
                                        alt: "Dollar SVG Icon"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iconbox_content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "iconbox_title",
                                            children: policy.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-0",
                                            children: policy.subTitle
                                        })
                                    ]
                                })
                            ]
                        })
                    }, pitem))
            })
        })
    });
};
/* harmony default export */ const about_Policy = (PolicySection);


/***/ })

};
;