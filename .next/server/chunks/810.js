"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 3664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pricing_Policy)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/icons/icon_doc.svg
/* harmony default export */ const icon_doc = ({"src":"/_next/static/media/icon_doc.0674a04c.svg","height":24,"width":20});
;// CONCATENATED MODULE: ./public/images/icons/icon_analysis.svg
/* harmony default export */ const icon_analysis = ({"src":"/_next/static/media/icon_analysis.519f7983.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/images/icons/icon_headphone_2.svg
/* harmony default export */ const icon_headphone_2 = ({"src":"/_next/static/media/icon_headphone_2.464b119f.svg","height":24,"width":24});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/pricing/Policy.js






const Policy = [
    {
        title: "Rich Documentation",
        subTitle: 'Rich Documentation" refers to comprehensive and detailed',
        icon: icon_doc
    },
    {
        title: "Fastest Delivery",
        subTitle: 'Fastest Delivery" typically refers to service or process that emphasizes',
        icon: icon_analysis
    },
    {
        title: "Lifetime Support",
        subTitle: 'Lifetime Support" refers to a by a product or service provider',
        icon: icon_headphone_2
    }
];
const PolicySection = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "policy_section section_space",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "heading_block",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-lg-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "heading_text mb-0",
                                    children: "Celebrating Features Discover What Sets Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "heading_description mb-0",
                                    children: "We take pride in celebrating the features that set us apart and make us a leader in the IT solutions. What truly distinguishes us is our unwavering commitment to innovation, excellence, and client satisfaction."
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row pricing_policy_wrap",
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
            ]
        })
    });
};
/* harmony default export */ const pricing_Policy = (PolicySection);


/***/ })

};
;