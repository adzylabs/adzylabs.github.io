"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 1257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_mail_2.5e415b48.svg","height":16,"width":18});

/***/ }),

/***/ 8340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/icons/icon_mail.svg
/* harmony default export */ const icon_mail = ({"src":"/_next/static/media/icon_mail.ef93a291.svg","height":20,"width":22});
;// CONCATENATED MODULE: ./public/images/icons/icon_calling.svg
/* harmony default export */ const icon_calling = ({"src":"/_next/static/media/icon_calling.34cfcb03.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./public/images/icons/icon_map_mark.svg
/* harmony default export */ const icon_map_mark = ({"src":"/_next/static/media/icon_map_mark.7db7bd74.svg","height":22,"width":20});
// EXTERNAL MODULE: ./public/images/icons/icon_mail_2.svg
var icon_mail_2 = __webpack_require__(1257);
// EXTERNAL MODULE: ./api/service.js + 17 modules
var service = __webpack_require__(1108);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/footer/Footer.js









const ClickHandler = ()=>{
    window.scrollTo(10, 0);
};
const SubmitHandler = (e)=>{
    e.preventDefault();
};
const Footer = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "site_footer footer_layout_1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content_box",
                style: {
                    backgroundImage: `url(${"/images/shapes/bg_pattern_3.svg"})`
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "diract_contact_links text-white",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iconbox_block layout_icon_left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "iconbox_icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: icon_mail,
                                                alt: "Mail SVG Icon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "iconbox_content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "iconbox_title",
                                                    children: "Write to us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "hello@adzylabs.com"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iconbox_block layout_icon_left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "iconbox_icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: icon_calling,
                                                alt: "Calling Check SVG Icon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "iconbox_content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "iconbox_title",
                                                    children: " Call Us (USA)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "+(1) 1230 452 8597"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iconbox_block layout_icon_left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "iconbox_icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: icon_map_mark,
                                                alt: "Map Mark Check SVG Icon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "iconbox_content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "iconbox_title",
                                                    children: "Our Office"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-0",
                                                    children: "Waterloo, Park, Australia"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer_main_content",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row justify-content-lg-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer_widget pe-md-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "footer_info_title",
                                                    children: "Newsletter"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Sign up to Techco weekly newsletter to get the latest updates."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    className: "footer_newslatter",
                                                    onSubmit: SubmitHandler,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            htmlFor: "footer_mail_input",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: icon_mail_2/* default */.Z,
                                                                alt: "Mail SVG Icon"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            id: "footer_mail_input",
                                                            type: "email",
                                                            name: "email",
                                                            placeholder: "Enter your email"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-paper-plane"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social_links_block unordered_list",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/",
                                                                children: "Facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/",
                                                                children: "Twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/",
                                                                children: "Linkdin"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer_widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "footer_info_title",
                                                    children: "Services"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "icon_list unordered_list_block",
                                                    children: service/* default.slice */.Z.slice(0, 6).map((service, srv)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: service.title ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/service-single/[slug]",
                                                                as: `/service-single/${service.slug}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: service.title
                                                                })
                                                            }) : ""
                                                        }, srv))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-2 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer_widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "footer_info_title",
                                                    children: "Information"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "icon_list unordered_list_block",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/about",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "About Techco"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/service",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Investors"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/contact",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Contact"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/about",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Affiliate Program"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/portfolio",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Career"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/pricing",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Pricing Plan"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-2 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer_widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "footer_info_title",
                                                    children: "Product"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "icon_list unordered_list_block",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/portfolio",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Case Studies"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/pricing",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Our Pricing"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/service",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Features"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/about",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Overview"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/blog",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "New Releases"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/pricing",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon_list_text",
                                                                    children: "Solutions"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer_bottom",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container d-md-flex align-items-md-center justify-content-md-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "copyright_text m-0",
                            children: "Copyright \xa9 2025 Adzy Labs, All rights reserved."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "copyright_text m-0",
                            children: [
                                "Developed by ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    onClick: ClickHandler,
                                    href: "https://adzylabs.com",
                                    children: "adzy Labs"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);


/***/ }),

/***/ 7698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_icons_icon_wifi_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1131);
/* harmony import */ var _public_images_icons_icon_dollar_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6391);
/* harmony import */ var _public_images_icons_icon_chart_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6435);
/* harmony import */ var _public_images_icons_icon_tag_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9825);
/* harmony import */ var _public_images_icons_icon_user_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9010);
/* harmony import */ var _public_images_icons_icon_users_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8606);
/* harmony import */ var _public_images_icons_icon_pen_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(506);
/* harmony import */ var _public_images_clients_client_logo_9_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6614);
/* harmony import */ var _public_images_clients_client_logo_10_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1884);
/* harmony import */ var _public_images_avatar_avatar_7_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(303);
/* harmony import */ var _public_images_icons_icon_quote_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8575);
/* harmony import */ var _public_images_site_logo_site_logo_3_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7062);
/* harmony import */ var _public_images_case_case_image_4_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6253);
/* harmony import */ var _MobileMenu_MobileMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7300);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_17__);


















const Header = (props)=>{
    const [mobailActive, setMobailState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ClickHandler = ()=>{
        window.scrollTo(10, 0);
    };
    const [isSticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Clean up
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "site_header site_header_1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header_top text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0",
                        children: [
                            "Subscribe us and receive ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "20% bonus"
                            }),
                            " discount on checkout. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                onClick: ClickHandler,
                                href: "/pricing",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                        children: "Learn more"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-solid fa-angle-right"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `header_bottom stricky  ${isSticky ? "stricked-menu stricky-fixed" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-3 col-lg-2 col-5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "site_logo",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                onClick: ClickHandler,
                                                className: "site_link",
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                    src: _public_images_site_logo_site_logo_3_svg__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                                                    alt: "Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "badge bg-danger-subtle text-danger",
                                                children: "We’re Hiring"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-6 col-lg-7 col-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                        className: "main_menu navbar navbar-expand-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main_menu_inner collapse navbar-collapse justify-content-lg-center",
                                            id: "main_menu_dropdown",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "main_menu_list unordered_list justify-content-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ClickHandler,
                                                                className: "nav-link",
                                                                href: "/",
                                                                id: "home_submenu",
                                                                role: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: "Home"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "dropdown-menu",
                                                                "aria-labelledby": "home_submenu",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/",
                                                                            children: "IT Solution"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/home_software_company",
                                                                            children: "Software Company"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/home_business_consulting",
                                                                            children: "Business Consulting"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ClickHandler,
                                                                className: "nav-link",
                                                                href: "/",
                                                                id: "company_submenu",
                                                                role: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: "Company"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "dropdown-menu mega_menu_wrapper",
                                                                "aria-labelledby": "company_submenu",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "container",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-lg-9",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "megamenu_pages_wrapper mb-5",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "row",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/about",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_wifi_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                                                                                            alt: "Wifi SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "About Us"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Learn more about Techco"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/pricing",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_dollar_2_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                                                                                                            alt: "Dollar SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Our Pricing"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Streamlined Pricing"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/portfolio",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_chart_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                                                                                                            alt: "Chart SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Portfolio"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Explore our all overview"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/portfolio_details/Explore-Our-IT-Solutions",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_tag_2_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                                                                                            alt: "Event Tag SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Portfolio Details"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Explore our work overview"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/team",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_user_2_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                                                                                            alt: "User Check SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Team"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "We are friendly Join our team"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/team-single/Atticus-Sterling",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_users_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                                                                                            alt: "Users SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Team Details"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "We are friendly Join our team"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/service",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_pen_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                                                                                            alt: "Pen SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Services"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Happy to help you!"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-lg-3 col-md-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        className: "iconbox_block_2",
                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                className: "icon_title_wrap",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_icon",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                            src: _public_images_icons_icon_pen_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                                                                                            alt: "Pen SVG Icon"
                                                                                                                        })
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                        className: "iconbox_title",
                                                                                                                        children: "Service Details"
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                                                className: "description mb-0",
                                                                                                                children: "Happy to help you!"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                        className: "btns_group p-0 unordered_list justify-content-start",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                    onClick: ClickHandler,
                                                                                                    className: "btn btn-primary",
                                                                                                    href: "/contact",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            className: "btn_label",
                                                                                                            "data-text": "Free Consultation",
                                                                                                            children: "Free Consultation"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            className: "btn_icon",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                className: "fa-solid fa-arrow-up-right"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "review_short_info_2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: "review_admin_logo",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                src: _public_images_clients_client_logo_9_webp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                                                                                alt: "Client Logo"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                            className: "review_info_content",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                                    className: "rating_block unordered_list",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        })
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                    className: "review_counter",
                                                                                                                    children: [
                                                                                                                        "From ",
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                                            children: "200+"
                                                                                                                        }),
                                                                                                                        " reviews"
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "review_short_info_2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: "review_admin_logo",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                                src: _public_images_clients_client_logo_10_webp__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                                                                                alt: "Client Logo"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                            className: "review_info_content",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                                    className: "rating_block unordered_list",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                                className: "fa-solid fa-star fa-fw"
                                                                                                                            })
                                                                                                                        })
                                                                                                                    ]
                                                                                                                }),
                                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                    className: "review_counter",
                                                                                                                    children: [
                                                                                                                        "From ",
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                                            children: "200+"
                                                                                                                        }),
                                                                                                                        " reviews"
                                                                                                                    ]
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "col-lg-3",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "site_author bg-primary",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "author_box",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "author_image bg-light",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                        src: _public_images_avatar_avatar_7_webp__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                                                                                        alt: "Site Author"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "author_box_content",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                                            className: "author_name text-white",
                                                                                                            children: "Maverick Phoenix"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            className: "author_designation text-white",
                                                                                                            children: "CEO At Techco"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "quote_icon",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                                        src: _public_images_icons_icon_quote_svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                                                                                                        alt: "Quote Icon"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: "mb-0 text-white",
                                                                                            children: "As a CEO at Techco  I have been voice crying in the wilderness,  trying to make requirements clear, use every minute to deliver the  result, and not reinvent the wheel. Here at Techco, I made that possible  for the clients."
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ClickHandler,
                                                                className: "nav-link",
                                                                href: "/",
                                                                id: "portfolio_submenu",
                                                                role: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: "Portfolio"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "dropdown-menu",
                                                                "aria-labelledby": "portfolio_submenu",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/portfolio",
                                                                            children: "Portfolio"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/portfolio_details/Explore-Our-IT-Solutions",
                                                                            children: "Portfolio Details"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ClickHandler,
                                                                className: "nav-link",
                                                                href: "/",
                                                                id: "services_submenu",
                                                                role: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: "Services"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "dropdown-menu mega_menu_wrapper p-0",
                                                                "aria-labelledby": "services_submenu",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "container",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "row justify-content-lg-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-lg-8",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "row",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "col-lg-4",
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "megamenu_widget",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                                            className: "megamenu_info_title",
                                                                                                            children: "Services"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                            className: "icon_list unordered_list_block",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "IT Management Services"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/Data-Tracking-and-Security",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Data Tracking Security"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Website Development"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "CRM Solutions and Design"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "UI/UX Design Services"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Technology Solution"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service-single/IT-Management-Services",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Software Development"
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "col-lg-4",
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "megamenu_widget",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                                            className: "megamenu_info_title",
                                                                                                            children: "Our Fields"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                            className: "icon_list unordered_list_block",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Healthcare"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Banks"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Logistics"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Supermarkets"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Industries"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Hotels"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Fintech"
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "col-lg-4",
                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "megamenu_widget",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                                            className: "megamenu_info_title",
                                                                                                            children: "Product"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                            className: "icon_list unordered_list_block",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/portfolio",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Case Studies"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/pricing",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Our Pricing"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Features"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/about",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Overview"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "New Releases"
                                                                                                                        })
                                                                                                                    })
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                                        onClick: ClickHandler,
                                                                                                                        href: "/service",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "icon_list_text",
                                                                                                                            children: "Solutions"
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "social_area",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                className: "social_icons_block unordered_list",
                                                                                                "data-text": "Follow Us:",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                            onClick: ClickHandler,
                                                                                                            href: "/",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                className: "fa-brands fa-facebook-f"
                                                                                                            })
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                            onClick: ClickHandler,
                                                                                                            href: "/",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                className: "fa-brands fa-twitter"
                                                                                                            })
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                            onClick: ClickHandler,
                                                                                                            href: "/",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                className: "fa-brands fa-linkedin-in"
                                                                                                            })
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                            onClick: ClickHandler,
                                                                                                            href: "/",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                                className: "fa-brands fa-dribbble"
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                                className: "career_link m-0",
                                                                                                children: [
                                                                                                    "Looking for new career? ",
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                                        onClick: ClickHandler,
                                                                                                        href: "/",
                                                                                                        children: "We’re Hiring"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "col-lg-3",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "megamenu_case bg-primary",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                            children: "Computer Software"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                            children: "Astarte Medical"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                                                            src: _public_images_case_case_image_4_webp__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                                                                                            alt: "Case"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                            onClick: ClickHandler,
                                                                                            className: "btn",
                                                                                            href: "/portfolio",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "btn_label",
                                                                                                    "data-text": "Read Case",
                                                                                                    children: "Read Case"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "btn_icon",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fa-solid fa-arrow-up-right"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                onClick: ClickHandler,
                                                                className: "nav-link",
                                                                href: "/",
                                                                id: "pages_submenu",
                                                                role: "button",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-expanded": "false",
                                                                children: "Pages"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "dropdown-menu",
                                                                "aria-labelledby": "pages_submenu",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/about",
                                                                            children: "About Us"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "dropdown",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                onClick: ClickHandler,
                                                                                className: "nav-link",
                                                                                href: "/",
                                                                                id: "blog_submenu",
                                                                                role: "button",
                                                                                "data-bs-toggle": "dropdown",
                                                                                "aria-expanded": "false",
                                                                                children: "Blogs"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                className: "dropdown-menu",
                                                                                "aria-labelledby": "blog_submenu",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                            onClick: ClickHandler,
                                                                                            href: "/blog",
                                                                                            children: "Our Blogs"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                            onClick: ClickHandler,
                                                                                            href: "/blog-single/How-Our-Software-Solutions-Drive-Insights.",
                                                                                            children: "Blog Details"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/contact",
                                                                            children: "Help Center"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            onClick: ClickHandler,
                                                                            href: "/",
                                                                            children: [
                                                                                "Careers ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                                    className: "badge bg-danger-subtle text-danger",
                                                                                    children: "We’re Hiring"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            onClick: ClickHandler,
                                                            href: "/contact",
                                                            children: "Contact"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-3 col-lg-3 col-5",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "header_btns_group unordered_list justify-content-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "mobile_menu_btn",
                                                    onClick: ()=>setMobailState(!mobailActive),
                                                    type: "button",
                                                    "data-bs-toggle": "collapse",
                                                    "data-bs-target": "#main_menu_dropdown",
                                                    "aria-expanded": "false",
                                                    "aria-label": "Toggle navigation",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "far fa-bars"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    onClick: ClickHandler,
                                                    className: "btn btn-outline-light",
                                                    href: "/pricing",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "btn_label",
                                                            "data-text": "Get Started",
                                                            children: "Get Started"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "btn_icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa-solid fa-arrow-up-right"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mobail-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `mobail-menu ${mobailActive ? "active" : ""}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "xb-header-menu-scroll",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "xb-menu-close xb-hide-xl xb-close",
                                            onClick: ()=>setMobailState(!mobailActive)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "xb-header-nav",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenu_MobileMenu__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "xb-header-menu-backdrop",
                                onClick: ()=>setMobailState(false)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;