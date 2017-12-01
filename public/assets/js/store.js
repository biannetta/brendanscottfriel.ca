(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
        } else {
        loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
        domain: 'brendan-scott-friel-music.myshopify.com',
        apiKey: 'da0d623bc57ece1759666ab8ab32597d',
        appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
            id: 21529100331,
            node: document.getElementById('collection-component-46e08e509d1'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
            "product": {
                "buttonDestination": "checkout",
                "variantId": "all",
                "contents": {
                "imgWithCarousel": false,
                "variantTitle": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
                },
                "text": {
                "button": "BUY NOW"
                },
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "calc(33.33333% - 30px)",
                    "margin-left": "30px",
                    "margin-bottom": "50px"
                    }
                },
                "button": {
                    "background-color": "#3e5286",
                    "font-family": "Oxygen, sans-serif",
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px",
                    "padding-left": "15px",
                    "padding-right": "15px",
                    ":hover": {
                    "background-color": "#384a79"
                    },
                    ":focus": {
                    "background-color": "#384a79"
                    },
                    "font-weight": "normal"
                },
                "variantTitle": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "title": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "description": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "price": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "quantityInput": {
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px"
                },
                "compareAt": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                }
                },
                "googleFonts": [
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen"
                ]
            },
            "cart": {
                "contents": {
                "button": true
                },
                "styles": {
                "button": {
                    "background-color": "#3e5286",
                    "font-family": "Oxygen, sans-serif",
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px",
                    ":hover": {
                    "background-color": "#384a79"
                    },
                    ":focus": {
                    "background-color": "#384a79"
                    },
                    "font-weight": "normal"
                },
                "footer": {
                    "background-color": "#ffffff"
                }
                },
                "googleFonts": [
                "Oxygen"
                ]
            },
            "modalProduct": {
                "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
                },
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                    }
                },
                "button": {
                    "background-color": "#3e5286",
                    "font-family": "Oxygen, sans-serif",
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px",
                    "padding-left": "15px",
                    "padding-right": "15px",
                    ":hover": {
                    "background-color": "#384a79"
                    },
                    ":focus": {
                    "background-color": "#384a79"
                    },
                    "font-weight": "normal"
                },
                "variantTitle": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "title": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "description": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "price": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                },
                "quantityInput": {
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px"
                },
                "compareAt": {
                    "font-family": "Oxygen, sans-serif",
                    "font-weight": "normal"
                }
                },
                "googleFonts": [
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen",
                "Oxygen"
                ]
            },
            "toggle": {
                "styles": {
                "toggle": {
                    "font-family": "Oxygen, sans-serif",
                    "background-color": "#3e5286",
                    ":hover": {
                    "background-color": "#384a79"
                    },
                    ":focus": {
                    "background-color": "#384a79"
                    },
                    "font-weight": "normal"
                },
                "count": {
                    "font-size": "13px"
                }
                },
                "googleFonts": [
                "Oxygen"
                ]
            },
            "option": {
                "styles": {
                "label": {
                    "font-family": "Oxygen, sans-serif"
                },
                "select": {
                    "font-family": "Oxygen, sans-serif"
                }
                },
                "googleFonts": [
                "Oxygen",
                "Oxygen"
                ]
            },
            "productSet": {
                "styles": {
                "products": {
                    "@media (min-width: 601px)": {
                    "margin-left": "-30px"
                    }
                }
                }
            }
            }
        });
        });
    }
})();