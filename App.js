import React from "react";
import ReactDOM from "react-dom/client";

/**
 * planning:
 *    Header
 *     -logo
 *     -nav items
 *    Body
 *     -search
 *     -Restaurant container
 *       -Restaurant card
 *    Footer
 *     -copyright
 *     -links
 *     -Address
 *     -contact
 * 
 * 
 * 
 * 
 * 
 */


   const Header=()=>
   {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHFUZvY35cm9Aw5u4zphsS7fPwaZ0y7fcdw&usqp=CAU"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
   }
   const StyleCard={
      backgroundColor: "#f0f0f0"
   }
   const RestaurantCard=(props)=>
   {
      const {resData}=props;

      const {name, areaName, cuisines,avgRating, cloudinaryImageId}= resData?.info;
    return(
        <div className="res-card" style={StyleCard}>
            <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
   }
   const resList=[
    {
        "info": {
          "id": "40415",
          "name": "Bikanervala",
          "cloudinaryImageId": "bhb6fmjbetmpa2nh3w0t",
          "locality": "Ring Road",
          "areaName": "Rohini",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Snacks",
            "Chaat",
            "Sweets"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "40415",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4300
          },
          "parentId": "45936",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/bikanervala-ring-road-rohini-delhi-40415",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "193493",
          "name": "Haldiram's",
          "cloudinaryImageId": "bczz5ti3gpe2hfnvsgg4",
          "locality": "Rohini",
          "areaName": "Rohini",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Snacks",
            "North Indian",
            "Sweets"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "193493",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "377669",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 03:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/haldirams-rohini-delhi-193493",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "16866",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Sector 3",
          "areaName": "Rohini",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "16866",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "721",
          "avgRatingString": "3.8",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-3-rohini-delhi-16866",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "10392",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Sector 3",
          "areaName": "Rohini",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "10392",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "443492",
          "name": "EatFit",
          "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
          "locality": "Sector 7",
          "areaName": "Rohini",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "443492",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "76139",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹149"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/eatfit-sector-7-rohini-delhi-443492",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "101657",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
          "locality": "Sector 7",
          "areaName": "Rohini",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "101657",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "6249",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-sector-7-rohini-delhi-101657",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "15846",
          "name": "Faasos - Wraps & Rolls",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "Sector 8",
          "areaName": "Rohini",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "15846",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "21809",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-sector-8-rohini-delhi-15846",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "332081",
          "name": "The Brooklyn Creamery - Healthy Ice Cream",
          "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
          "locality": "Sector 2",
          "areaName": "Rohini",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Healthy Food"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "332081",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "236673",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-sector-2-rohini-delhi-332081",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "443086",
          "name": "Nirula's",
          "cloudinaryImageId": "ugwu5o4eaawumpjeceds",
          "locality": "Sector 7",
          "areaName": "Rohini",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Beverages",
            "Ice Cream Cakes",
            "Juices"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "443086",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4300
          },
          "parentId": "1738",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 01:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nirulas-sector-7-rohini-delhi-443086",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "13103",
          "name": "Berco's -If you love Chinese",
          "cloudinaryImageId": "3344b8e498281fdcd461dc1b5f3b44d5",
          "locality": "Rohini",
          "areaName": "Rohini",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Asian",
            "Thai",
            "Chinese",
            "Seafood",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "13103",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "108",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-rohini-delhi-13103",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "157772",
          "name": "The Good Bowl",
          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
          "locality": "Sector 8",
          "areaName": "Rohini",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "157772",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "7918",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-sector-8-rohini-delhi-157772",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "15666",
          "name": "Behrouz Biryani",
          "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
          "locality": "Sector 8",
          "areaName": "Pushpanjali",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "15666",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "1803",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/behrouz-biryani-sector-8-pushpanjali-delhi-15666",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "10321",
          "name": "34 Chowringhee Lane",
          "cloudinaryImageId": "dpo3r8x6mllri7ky1fqq",
          "locality": "Sector 8",
          "areaName": "Rohini",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Fast Food",
            "Snacks",
            "Chinese",
            "Tandoor",
            "Punjabi",
            "Seafood",
            "Beverages",
            "Desserts",
            "Barbecue",
            "Grill",
            "Mughlai",
            "Indian",
            "North Indian",
            "Continental"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "10321",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4400
          },
          "parentId": "11",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-15 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/34-chowringhee-lane-sector-8-rohini-delhi-10321",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "91817",
          "name": "Burgrill - The Win Win Burger",
          "cloudinaryImageId": "985642c79217cabad0c83073692506ca",
          "locality": "Pitampura",
          "areaName": "Pitampura",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Burgers",
            "Healthy Food",
            "Salads",
            "Beverages",
            "Desserts",
            "Snacks"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "91817",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5000
          },
          "parentId": "302366",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 05:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹101 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-pitampura-delhi-91817",
          "type": "WEBLINK"
        }
      }
   ]
    
  

   const Body=()=>
   {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
            </div>
        </div>
    );
   }
  const AppLayout= ()=>
  {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
  };
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>)
















//React.createElement==>object ==>on rendering==>convert to HTML Element

// const heading= React.createElement("h1",{id:"heading"},"namaste react🚀")

// const jsxHeading=<h1 id="heading">Namaste react🚀 using jsx</h1>
// const jsxHeading= (<h1 className="head" tabIndex="1">Namaste react🚀</h1>)

// const heading= React.createElement("h1",{id:"heading"},"hello world from react");

// const parent= React.createElement("div",{id:"parent"},
//         [React.createElement("div",{id:"child1"},
//         [React.createElement("h1",{id:"child"},"Namaste React🚀"),
//         React.createElement("h2",{id:"h2"},"i am h2")
//         ]),
//         React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{id:"child"},"I am h1"),  //This syntax make things complex and code is ugly
//         React.createElement("h2",{id:"h2"},"i am h2")    //This is core react
//         ])]
//             );

//     //JSX will help us


// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);