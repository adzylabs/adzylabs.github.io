"use strict";
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_clients_client_logo_1_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1032);
/* harmony import */ var _public_images_clients_client_logo_2_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9983);
/* harmony import */ var _public_images_clients_client_logo_3_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2329);
/* harmony import */ var _public_images_clients_client_logo_4_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(941);
/* harmony import */ var _public_images_clients_client_logo_5_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6888);
/* harmony import */ var _public_images_clients_client_logo_6_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9445);
/* harmony import */ var _public_images_clients_client_logo_7_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9311);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);













const partners = [
    {
        pImg: _public_images_clients_client_logo_1_webp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_2_webp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_3_webp__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_4_webp__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_5_webp__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_6_webp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_7_webp__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
    },
    {
        pImg: _public_images_clients_client_logo_2_webp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    }
];
var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const PartnerSection = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "client_logo_carousel",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
            ...settings,
            children: partners.map((partner, pitem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "client_logo_item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_12___default()), {
                        src: partner.pImg,
                        alt: "Techco - Client Logo"
                    })
                }, pitem))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnerSection);


/***/ })

};
;