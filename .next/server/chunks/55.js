"use strict";
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 7418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_calendar.d66f41e6.svg","height":16,"width":18});

/***/ }),

/***/ 6055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BlogSidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./api/blogs.js + 8 modules
var blogs = __webpack_require__(4942);
// EXTERNAL MODULE: ./api/service.js + 17 modules
var service = __webpack_require__(1108);
;// CONCATENATED MODULE: ./public/images/icons/icon_search.svg
/* harmony default export */ const icon_search = ({"src":"/_next/static/media/icon_search.74812261.svg","height":14,"width":14});
// EXTERNAL MODULE: ./public/images/icons/icon_calendar.svg
var icon_calendar = __webpack_require__(7418);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/BlogSidebar/index.js








const BlogSidebar = (props)=>{
    const ClickHandler = ()=>{
        window.scrollTo(10, 0);
    };
    const SubmitHandler = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
            className: "sidebar ps-lg-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "search_form",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "sidebar_widget_title",
                            children: "Search"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "form-group",
                            onSubmit: SubmitHandler,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "form-control",
                                    type: "search",
                                    name: "search",
                                    placeholder: "Search your keyword"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon_search,
                                        alt: "Search Icon"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "post_list_block",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "sidebar_widget_title",
                            children: "Related Posts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "unordered_list_block",
                            children: blogs/* default.slice */.Z.slice(0, 3).map((blog, Bitem)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "post_title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                onClick: ClickHandler,
                                                href: "/blog-single/[slug]",
                                                as: `/blog-single/${blog.slug}`,
                                                children: blog.title
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
                                }, Bitem))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "post_category_wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "sidebar_widget_title",
                            children: "Categories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "post_category_list unordered_list_block",
                            children: service/* default.slice */.Z.slice(0, 6).map((service, srv)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/service-single/[slug]",
                                        as: `/service-single/${service.slug}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-arrow-up-right"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "(0",
                                                    service.Id,
                                                    ")"
                                                ]
                                            })
                                        ]
                                    })
                                }, srv))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "popular_tags",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "sidebar_widget_title",
                            children: "Popular Tags"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "tags_list unordered_list",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Cybersecurity"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "TechSolutions"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "UX Design"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "App Dev"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Data"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Solution"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Consultants"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "IT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Optimization"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        onClick: ClickHandler,
                                        href: "/blog",
                                        children: "Startup"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_BlogSidebar = (BlogSidebar);


/***/ })

};
;