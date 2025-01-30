exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 3657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FeaturesSection_FeaturesSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/PartnerSection/index.js
var PartnerSection = __webpack_require__(1332);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./public/images/icons/icon_head.svg
/* harmony default export */ const icon_head = ({"src":"/_next/static/media/icon_head.a20b2f3c.svg","height":77,"width":61});
;// CONCATENATED MODULE: ./public/images/icons/icon_check.svg
/* harmony default export */ const icon_check = ({"src":"/_next/static/media/icon_check.887937b4.svg","height":75,"width":70});
;// CONCATENATED MODULE: ./public/images/icons/icon_like.svg
/* harmony default export */ const icon_like = ({"src":"/_next/static/media/icon_like.5bd121f7.svg","height":76,"width":62});
;// CONCATENATED MODULE: ./public/images/icons/icon_dart_board.svg
/* harmony default export */ const icon_dart_board = ({"src":"/_next/static/media/icon_dart_board.4097493f.svg","height":73,"width":73});
;// CONCATENATED MODULE: ./public/images/about/about_image_1.webp
/* harmony default export */ const about_image_1 = ({"src":"/_next/static/media/about_image_1.e61d8a4a.webp","height":2496,"width":1648,"blurDataURL":"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoFAAgAAkA4JaQAApyT8qnAAP7x/Xv2oNfM+Vs1AAA=","blurWidth":5,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/FeaturesSection/FeaturesSection.js










const FunFact = [
    {
        title: "25",
        subTitle: "Years of experience",
        symbol: "+",
        icon: icon_head
    },
    {
        title: "280",
        subTitle: "Success Stories",
        symbol: "+",
        icon: icon_check
    },
    {
        title: "5.6",
        subTitle: "Companies Trust Us",
        symbol: "K+",
        icon: icon_like
    },
    {
        title: "100",
        subTitle: "Results Guaranteed",
        symbol: "%",
        icon: icon_dart_board
    }
];
const FeaturesSection = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "client_logo_section section_space",
        style: {
            backgroundImage: `url(${"/images/shapes/bg_pattern_1.svg"})`
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section_space pt-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "heading_block text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "heading_focus_text mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "badge bg-secondary text-white",
                                        children: "Brand We"
                                    }),
                                    "Work With"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PartnerSection/* default */.Z, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row funfact_wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: FunFact.map((funfact, fitem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "funfact_block",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "funfact_icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: funfact.icon,
                                                        alt: "Techco - SVG Icon Head"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "funfact_content",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "counter_value",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "odometer",
                                                                    "data-count": "25",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                                        end: funfact.title,
                                                                        enableScrollSpy: true
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: funfact.symbol
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "funfact_title mb-0",
                                                            children: funfact.subTitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, fitem))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "our_world_employees",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image_wrap",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: about_image_1,
                                            alt: "Techco - Employees Guoup"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "content_wrap",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "title_text mb-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    className: "d-block",
                                                    children: "12000+"
                                                }),
                                                " employees in 30 countries in Europe"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const FeaturesSection_FeaturesSection = (FeaturesSection);


/***/ }),

/***/ 8179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6797);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_icons_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6360);
/* harmony import */ var _public_images_icons_icon_twitter_x_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(587);
/* harmony import */ var _public_images_icons_icon_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5865);
/* harmony import */ var _public_images_icons_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4746);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
swiper_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const TeamSection = (props)=>{
    const [hydrated, setHydrated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }
    const ClickHandler = ()=>{
        window.scrollTo(10, 0);
    };
    const displayedTeams = _api_team__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z && _api_team__WEBPACK_IMPORTED_MODULE_2__/* ["default"].length */ .Z.length > 0 ? _api_team__WEBPACK_IMPORTED_MODULE_2__/* ["default"].slice */ .Z.slice(0, 5) : [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "team_section xb-hidden section_space",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "heading_block text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "heading_focus_text",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "badge bg-secondary text-white",
                                    children: "Our Expert"
                                }),
                                "Team Members \uD83D\uDE0D"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "heading_text mb-0",
                            children: "Top Skilled Experts"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "team_carousel",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                        loop: true,
                        spaceBetween: 30,
                        allowTouchMove: true,
                        centeredSlides: true,
                        pagination: {
                            clickable: true
                        },
                        speed: 800,
                        breakpoints: {
                            576: {
                                slidesPerView: 2
                            },
                            1025: {
                                slidesPerView: 3
                            }
                        },
                        children: displayedTeams.map((team)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "team_block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "team_member_image",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                onClick: ClickHandler,
                                                className: "image_wrap",
                                                "aria-label": "Team Details Button",
                                                href: "/team-single/[slug]",
                                                as: `/team-single/${team.slug}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        src: team.tImg,
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa-solid fa-arrow-up-right"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "team_member_info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "team_member_name",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        onClick: ClickHandler,
                                                        href: "/team-single/[slug]",
                                                        as: `/team-single/${team.slug}`,
                                                        children: team.name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "team_member_designation",
                                                    children: team.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "social_icons_block unordered_list justify-content-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                onClick: ClickHandler,
                                                                href: "/team-single/[slug]",
                                                                as: `/team-single/${team.slug}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    src: _public_images_icons_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                                    alt: "Icon Facebook"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                onClick: ClickHandler,
                                                                href: "/team-single/[slug]",
                                                                as: `/team-single/${team.slug}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    src: _public_images_icons_icon_twitter_x_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                                    alt: "Icon Twitter X"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                onClick: ClickHandler,
                                                                href: "/team-single/[slug]",
                                                                as: `/team-single/${team.slug}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    src: _public_images_icons_icon_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                                    alt: "Icon Linkedin"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                onClick: ClickHandler,
                                                                href: "/team-single/[slug]",
                                                                as: `/team-single/${team.slug}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                    src: _public_images_icons_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                                    alt: "Icon Instagram"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, team.Id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "btns_group pb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "btn btn-outline-light",
                            href: "/team",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "btn_label",
                                    "data-text": "Our All Experts",
                                    children: "Our All Experts"
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
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;