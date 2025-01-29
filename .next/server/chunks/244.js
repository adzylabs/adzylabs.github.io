"use strict";
exports.id = 244;
exports.ids = [244];
exports.modules = {

/***/ 3244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_WhyUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/about/about_image_5.webp
/* harmony default export */ const about_image_5 = ({"src":"/_next/static/media/about_image_5.1d7229fd.webp","height":998,"width":1100,"blurDataURL":"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoIAAcAAkA4JaQAA3AA/vDTduqQmnDcerdh/fepp40AzAAA","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/images/icons/icon_check_2.svg
/* harmony default export */ const icon_check_2 = ({"src":"/_next/static/media/icon_check_2.bd3ad7d5.svg","height":22,"width":20});
;// CONCATENATED MODULE: ./public/images/icons/icon_leaf.svg
/* harmony default export */ const icon_leaf = ({"src":"/_next/static/media/icon_leaf.c91d1cb8.svg","height":22,"width":20});
;// CONCATENATED MODULE: ./public/images/icons/icon_box.svg
/* harmony default export */ const icon_box = ({"src":"/_next/static/media/icon_box.d45adeca.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./public/images/icons/icon_receipt_add.svg
/* harmony default export */ const icon_receipt_add = ({"src":"/_next/static/media/icon_receipt_add.6dead46a.svg","height":23,"width":22});
;// CONCATENATED MODULE: ./public/images/icons/icon_monitor.svg
/* harmony default export */ const icon_monitor = ({"src":"/_next/static/media/icon_monitor.8ed983fc.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./public/images/icons/icon_microscope.svg
/* harmony default export */ const icon_microscope = ({"src":"/_next/static/media/icon_microscope.7069a37b.svg","height":22,"width":21});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/about/WhyUs.js










const Policy = [
    {
        title: "Quality Comes First",
        icon: icon_check_2
    },
    {
        title: "Flexible Cooperation",
        icon: icon_leaf
    },
    {
        title: "On-time Delivery",
        icon: icon_box
    },
    {
        title: "Transparent Costs",
        icon: icon_receipt_add
    },
    {
        title: "Qualified Developers",
        icon: icon_monitor
    },
    {
        title: "Quick Scale-up",
        icon: icon_microscope
    }
];
const WhyUs = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "service_section section_space bg-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center justify-content-lg-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image_wrap",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: about_image_5,
                                alt: "Techco - About"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ps-lg-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading_block",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading_focus_text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "badge bg-secondary text-white",
                                                    children: "Why Us"
                                                }),
                                                "Better"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "heading_text mb-0",
                                            children: "Why Our Services are Better Than Others?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "service_facilities_group unordered_list",
                                    children: Policy.map((policy, pitem)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                className: "iconbox_block layout_icon_left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "iconbox_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: policy.icon,
                                                            alt: "Dollar SVG Icon"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "iconbox_content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            className: "iconbox_title mb-0",
                                                            children: policy.title
                                                        })
                                                    })
                                                ]
                                            })
                                        }, pitem))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const about_WhyUs = (WhyUs);


/***/ })

};
;