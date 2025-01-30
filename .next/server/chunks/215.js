"use strict";
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 2483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogSection_BlogSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./api/blogs.js + 8 modules
var blogs = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/shapes/bg_pattern_1.svg
/* harmony default export */ const bg_pattern_1 = ({"src":"/_next/static/media/bg_pattern_1.3afcc34a.svg","height":1215,"width":2433});
// EXTERNAL MODULE: ./public/images/icons/icon_calendar.svg
var icon_calendar = __webpack_require__(7418);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/BlogSection/BlogSection.js







const BlogSection = (props)=>{
    const ClickHandler = ()=>{
        window.scrollTo(10, 0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog_section section_space bg-light",
        style: {
            backgroundImage: `url(${bg_pattern_1})`
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "heading_block text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "heading_focus_text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "badge bg-secondary text-white",
                                    children: "Blog"
                                }),
                                "Updates"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "heading_text mb-0",
                            children: "Latest Articles Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blogs/* default.slice */.Z.slice(0, 3).map((blog, Bitem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "blog_post_block",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "blog_post_image",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            onClick: ClickHandler,
                                            href: "/blog-single/[slug]",
                                            as: `/blog-single/${blog.slug}`,
                                            className: "image_wrap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: blog.screens,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog_post_content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post_meta_wrap",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "category_btns_group unordered_list",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                onClick: ClickHandler,
                                                                href: "/blog-single/[slug]",
                                                                as: `/blog-single/${blog.slug}`,
                                                                children: blog.thumb
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "post_meta unordered_list",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    onClick: ClickHandler,
                                                                    href: "/blog-single/[slug]",
                                                                    as: `/blog-single/${blog.slug}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: icon_calendar/* default */.Z,
                                                                            alt: "Icon Calendar"
                                                                        }),
                                                                        " ",
                                                                        blog.create_at
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    onClick: ClickHandler,
                                                                    href: "/blog-single/[slug]",
                                                                    as: `/blog-single/${blog.slug}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa-regular fa-comment-lines"
                                                                        }),
                                                                        " ",
                                                                        blog.comment
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "blog_post_title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    onClick: ClickHandler,
                                                    href: "/blog-single/[slug]",
                                                    as: `/blog-single/${blog.slug}`,
                                                    children: blog.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                onClick: ClickHandler,
                                                href: "/blog-single/[slug]",
                                                as: `/blog-single/${blog.slug}`,
                                                className: "btn_unfill",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "btn_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-arrow-up-right"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "btn_label",
                                                        children: "Read More"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, Bitem))
                })
            ]
        })
    });
};
/* harmony default export */ const BlogSection_BlogSection = (BlogSection);


/***/ }),

/***/ 7799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PolicySection_PolicySection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/icons/icon_user_check.svg
/* harmony default export */ const icon_user_check = ({"src":"/_next/static/media/icon_user_check.79402d1e.svg","height":36,"width":32});
;// CONCATENATED MODULE: ./public/images/icons/icon_headphone.svg
/* harmony default export */ const icon_headphone = ({"src":"/_next/static/media/icon_headphone.9496920c.svg","height":36,"width":36});
;// CONCATENATED MODULE: ./public/images/icons/icon_dollar.svg
/* harmony default export */ const icon_dollar = ({"src":"/_next/static/media/icon_dollar.91ed8d18.svg","height":36,"width":36});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/PolicySection/PolicySection.js






const Policy = [
    {
        title: "Expert Team Members",
        subTitle: "We take pride in assembling a diverse and highly skilled.",
        icon: icon_user_check
    },
    {
        title: "Fastest Customer Service",
        subTitle: "We pride ourselves on providing the fastest customer service industry.",
        icon: icon_headphone
    },
    {
        title: "reasonable Pricing",
        subTitle: "We believe in providing reasonable pricing that offers exceptional.",
        icon: icon_dollar
    }
];
const PolicySection = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "policy_section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: Policy.map((policy, pitem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "iconbox_block layout_icon_left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "iconbox_icon bg-secondary-subtle",
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
/* harmony default export */ const PolicySection_PolicySection = (PolicySection);


/***/ }),

/***/ 1224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProjectSection = ()=>{
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
    const displayedProjects = _api_project__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _api_project__WEBPACK_IMPORTED_MODULE_6__/* ["default"].length */ .Z.length > 0 ? _api_project__WEBPACK_IMPORTED_MODULE_6__/* ["default"].slice */ .Z.slice(0, 5) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "portfolio_section xb-hidden section_space pb-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "heading_block",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row align-items-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-7",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "heading_focus_text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "badge bg-secondary text-white",
                                                children: "Crafting"
                                            }),
                                            "Success With \uD83D\uDE0D Project"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "heading_text",
                                        children: "Our Recent Best Works"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "heading_description mb-0",
                                        children: "Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients, custom software."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5 d-none d-lg-flex justify-content-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    onClick: ClickHandler,
                                    href: "/portfolio",
                                    className: "btn btn-primary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "btn_label",
                                            "data-text": "All Works",
                                            children: "All Works"
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "portfolio_carousel",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                        swiper__WEBPACK_IMPORTED_MODULE_3__.A11y
                    ],
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 30,
                    allowTouchMove: true,
                    centeredSlides: true,
                    pagination: {
                        clickable: true
                    },
                    speed: 400,
                    parallax: true,
                    breakpoints: {
                        1025: {
                            slidesPerView: 2
                        }
                    },
                    children: displayedProjects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "portfolio_block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "portfolio_image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            onClick: ClickHandler,
                                            className: "portfolio_image_wrap bg-light",
                                            href: "/portfolio_details/[slug]",
                                            as: `/portfolio_details/${project.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                src: project.pImg,
                                                alt: project.title,
                                                fill: true,
                                                style: {
                                                    objectFit: "cover"
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "portfolio_content",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "portfolio_title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    onClick: ClickHandler,
                                                    href: "/portfolio_details/[slug]",
                                                    as: `/portfolio_details/${project.slug}`,
                                                    children: project.title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "category_list unordered_list",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        onClick: ClickHandler,
                                                        href: "/portfolio_details/[slug]",
                                                        as: `/portfolio_details/${project.slug}`,
                                                        children: project.sub
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                onClick: ClickHandler,
                                                className: "btn btn-outline-light",
                                                href: "/portfolio_details/[slug]",
                                                as: `/portfolio_details/${project.slug}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "btn_label",
                                                        "data-text": "Explore",
                                                        children: "Explore"
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
                                ]
                            })
                        }, project.Id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container text-center d-block d-lg-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "btns_group pb-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        onClick: ClickHandler,
                        className: "btn btn-primary",
                        href: "/pricing",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "btn_label",
                                "data-text": "All Works",
                                children: "All Works"
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Testimonial_Testimonial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/avatar/avatar_4.webp
/* harmony default export */ const avatar_4 = ({"src":"/_next/static/media/avatar_4.afc7ec2c.webp","height":1520,"width":1320,"blurDataURL":"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAAAwAQCdASoHAAgAAkA4JaQAA3AA/vDTc4CE3Z2EFNbitYhgAAA=","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./public/images/avatar/avatar_6.webp
var avatar_6 = __webpack_require__(114);
// EXTERNAL MODULE: ./public/images/avatar/avatar_5.webp
var avatar_5 = __webpack_require__(1324);
// EXTERNAL MODULE: ./public/images/avatar/avatar_7.webp
var avatar_7 = __webpack_require__(303);
;// CONCATENATED MODULE: ./public/images/shapes/bg_pattern_2.svg
/* harmony default export */ const bg_pattern_2 = ({"src":"/_next/static/media/bg_pattern_2.b66f5ebd.svg","height":2448,"width":2433});
// EXTERNAL MODULE: external "react-responsive-masonry"
var external_react_responsive_masonry_ = __webpack_require__(9242);
var external_react_responsive_masonry_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_masonry_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Testimonial/Testimonial.js









const testimonial = [
    {
        id: "01",
        tImg: avatar_4,
        Title: "Amazing services",
        Des: "As a startup, we needed a technology partner who could help us bring our vision to life. Itsafe exceeded our expectations with their innovative solutions and proactive approach. They guided us through every step of the process, our journey together.",
        Name: "Roman Dymtro",
        sub: "Director of Marketing"
    },
    {
        id: "02",
        tImg: avatar_6/* default */.Z,
        Title: "We Are Satisfied",
        Des: "We've been partnering with Techco for several years, and they have consistently delivered exceptional results. From custom software development to cloud services integration, their solutions have helped us stay ahead of the competition and adapt to evolving market demands. Their team's expertise, reliability, and commitment to customer satisfaction make them our go-to IT partner.",
        Name: "Michel johnson",
        sub: "Tech Startup Founder"
    },
    {
        id: "03",
        tImg: avatar_5/* default */.Z,
        Title: "Fast Respond",
        Des: "Working with Techco was a seamless experience from start to finish. Their team took the time to understand our business goals and challenges, and they delivered a solution that addressed our needs perfectly. Their professionalism, expertise, and dedication to customer satisfaction were evident throughout the project. We look forward to working with Techco on future initiatives.",
        Name: "Bohdan Maksym",
        sub: "Monprofit Director"
    },
    {
        id: "04",
        tImg: avatar_7/* default */.Z,
        Title: "Amazing services",
        Des: "The team at Techco surpassed our expectations. Their meticulous project management and technical prowess were exceptional. They closely collaborated with us, ensuring a that not only met but exceeded our needs. We are thrilled with the outcome.",
        Name: "Anatoliy Vasyl",
        sub: "Director of Marketing"
    }
];
const Testimonial = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "review_section section_space bg-light",
        style: {
            backgroundImage: `url(${bg_pattern_2})`
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "heading_block text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "heading_focus_text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "badge bg-secondary text-white",
                                    children: "Client"
                                }),
                                "Testimonial \uD83D\uDE42"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "heading_text mb-0",
                            children: "What clients say"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_masonry_.ResponsiveMasonry, {
                        columnsCountBreakPoints: {
                            350: 1,
                            750: 1,
                            991: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_responsive_masonry_default()), {
                            columnsCount: 4,
                            gutter: "30px",
                            children: testimonial.map((testimonial, tsm)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "review_block pb-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "review_title",
                                            children: [
                                                "“",
                                                testimonial.Title,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "review_commtent",
                                            children: testimonial.Des
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review_admin",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "review_admin_image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: testimonial.tImg,
                                                        alt: "Roman Dymtro"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "review_admin_info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "review_admin_name",
                                                            children: testimonial.Name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "review_admin_designation",
                                                            children: testimonial.sub
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, tsm))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Testimonial_Testimonial = (Testimonial);


/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/about/about_image_9.webp
/* harmony default export */ const about_image_9 = ({"src":"/_next/static/media/about_image_9.9e4c1bda.webp","height":1928,"width":3856,"blurDataURL":"data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAQAAkA4JaQAAu18LYAA/u3Zk62OnciCbgj4QAA=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/images/about/about_image_11.webp
/* harmony default export */ const about_image_11 = ({"src":"/_next/static/media/about_image_11.e461708b.webp","height":292,"width":308,"blurDataURL":"data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABYFpr25Iv/ZFDgwFcVvQ1PDmTQCSS/oizwa9DRMQEQNBu56iC+xNCyKrNRJofsgXLjlA2ol3ABujNfWYKAFZQOCBMAAAA8AEAnQEqCAAIAAJAOCWwAnS6AAMIP/t8AP73bEJE5E59Fc+z4+JqzVt4JtIk30XFaz4CyFGK+DYO/X5fH/07v8sRawNb4NY5vEAAAA==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/about/about_image_10.webp
/* harmony default export */ const about_image_10 = ({"src":"/_next/static/media/about_image_10.b440727b.webp","height":479,"width":322,"blurDataURL":"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSCkAAAAAY9aXAQDz//9mAMr///U+xv//54C8///9nWL9/+e1ADnTxdEAAANz2ABWUDggRgAAABACAJ0BKgUACAACQDglsAJ0ugACt3p92YAA/mSiv+oFhXSlgiFWxLcJeGx/4xCR+/vG0hMyM10xWWeH+OWkCQkAIvvybAA=","blurWidth":5,"blurHeight":8});
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/about/about.js








const About = (props)=>{
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    const ClickHandler = ()=>{
        window.scrollTo(10, 0);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "about_section section_space",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-lg-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "about_image_1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: about_image_9,
                                        alt: "Techco - About"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: about_image_11,
                                        "data-parallax": '{"y" : 80, "smoothness": 6}',
                                        alt: "Techco - About"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: about_image_10,
                                        "data-parallax": '{"y" : -80, "smoothness": 6}',
                                        alt: "Techco - About"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "about_content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "heading_block",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "heading_focus_text",
                                                children: [
                                                    "We are \uD83D\uDE03",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "badge bg-secondary text-white",
                                                        children: "Techco"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "heading_text",
                                                children: "Our Commitment to Client Satisfaction"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "heading_description mb-0",
                                                children: "At Techco, our commitment to client satisfaction is at the core of everything we do. We understand clients' success."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "icon_list unordered_list_block mb-5",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-circle fa-fw"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_text",
                                                        children: "Grow your business the right way."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-circle fa-fw"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_text",
                                                        children: "Let business growth help your business grow."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-circle fa-fw"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon_list_text",
                                                        children: "Helping you to get better."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "btns_group unordered_list p-0 justify-content-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    onClick: ClickHandler,
                                                    href: "/pricing",
                                                    className: "btn",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "btn_label",
                                                            "data-text": "Get Started",
                                                            children: "Get Started"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "btn_icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-arrow-up-right"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "video_btn",
                                                    onClick: ()=>setOpen(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "btn_icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-play"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "btn_label",
                                                            children: "How We Works"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_video_default()), {
                channel: "youtube",
                autoplay: true,
                isOpen: isOpen,
                videoId: "7e90gBu4pas",
                onClose: ()=>setOpen(false)
            })
        ]
    });
};
/* harmony default export */ const about = (About);


/***/ }),

/***/ 2923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/hero/it_solution_hero_image_1.webp
/* harmony default export */ const it_solution_hero_image_1 = ({"src":"/_next/static/media/it_solution_hero_image_1.51e5aaaa.webp","height":1400,"width":1400,"blurDataURL":"data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vDTc4DPI2XrfatxVfd1YohAAA==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/icons/icon_stars_trustpilot.svg
/* harmony default export */ const icon_stars_trustpilot = ({"src":"/_next/static/media/icon_stars_trustpilot.42ebf56c.svg","height":23,"width":129});
// EXTERNAL MODULE: ./public/images/avatar/avatar_1.webp
var avatar_1 = __webpack_require__(4581);
// EXTERNAL MODULE: ./public/images/avatar/avatar_2.webp
var avatar_2 = __webpack_require__(4600);
// EXTERNAL MODULE: ./public/images/avatar/avatar_3.webp
var avatar_3 = __webpack_require__(7565);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/hero/hero.js









const Hero = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "it_solution_hero_section",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "it_solution_hero_content",
                            style: {
                                backgroundImage: `url(${"/images/shapes/it_solution_hero_bg_1.svg"})`
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "heading_focus_text mb-0 d-inline-flex align-items-center",
                                    children: [
                                        "\uD83D\uDC4B Hi We ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "badge bg-secondary text-white",
                                            children: "Are Techco"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Grow your Business Organic & IT Solution Technology"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "In today's competitive business, the demand for efficient and cost-effective IT solutions has never been more critical."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "btns_group unordered_list p-0 justify-content-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                className: "btn",
                                                href: "/pricing",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "btn_label",
                                                        "data-text": "Get Started",
                                                        children: "Get Started"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "btn_icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-arrow-up-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "review_short_info",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: icon_stars_trustpilot,
                                                                alt: "Techco - Trustpilot Review"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "4.8"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "review_counter",
                                                        children: [
                                                            "From ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                children: "200+"
                                                            }),
                                                            " reviews"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "it_solution_hero_images unordered_list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: it_solution_hero_image_1,
                                        alt: "Techco - IT Solution - Hero"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "worldwide_clients",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "counter_value",
                                                children: "150+"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Worldwide Country has lots of clients"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "avatar_group unordered_list",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: avatar_1/* default */.Z,
                                                            alt: "Techco - Avatar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: avatar_2/* default */.Z,
                                                            alt: "Techco - Avatar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: avatar_3/* default */.Z,
                                                            alt: "Techco - Avatar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: "5k+"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "categories unordered_list_block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Data Security"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-plus"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-plus"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Web Development"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Analytics & Optimization"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa-solid fa-plus"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "business_growth_content",
                                        style: {
                                            backgroundImage: `url(${"/images/hero/it_solution_hero_image_2.webp"})`
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "business_growth",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "progress_content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        role: "progressbar",
                                                        width: "260",
                                                        height: "260",
                                                        viewBox: "0 0 100 100",
                                                        "aria-valuemin": "0",
                                                        "aria-valuemax": "100",
                                                        "aria-valuenow": "88",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                cx: "50%",
                                                                cy: "50%",
                                                                r: "42",
                                                                shapeRendering: "geometricPrecision",
                                                                fill: "none",
                                                                stroke: "#f1f1f1",
                                                                strokeWidth: "5"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                cx: "50%",
                                                                cy: "50%",
                                                                r: "42",
                                                                shapeRendering: "geometricPrecision",
                                                                className: "business_growth-circle-58",
                                                                fill: "none",
                                                                strokeWidth: "10",
                                                                strokeDashoffset: "31.680000000000007",
                                                                strokeDasharray: "264",
                                                                strokeLinecap: "round",
                                                                style: {
                                                                    transform: "rotate(-90deg)",
                                                                    transformOrigin: "50% 50%"
                                                                },
                                                                stroke: "#fff",
                                                                "data-angel": "88"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("text", {
                                                                className: "business_growth-text-58",
                                                                x: "50%",
                                                                y: "50%",
                                                                fill: "#fff",
                                                                textAnchor: "middle",
                                                                dy: "0.35em",
                                                                fontSize: "1.6rem",
                                                                fontWeight: "400",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("tspan", {
                                                                        className: "business_growth-percent-58",
                                                                        children: "88"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("tspan", {
                                                                        className: "business_growth-unit-58",
                                                                        children: "%"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "get 88% of the best services and growth business"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const hero = (Hero);


/***/ })

};
;