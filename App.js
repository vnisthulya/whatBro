import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Logo.png';
import searchIcon from './img/search.png';
import starIcon from './img/star.png';



/*
header :: components>>

    :: logo-img | logo-name
    :: navigation items

body :: components>>

    :: search bar | button    
    :: restaurant card
        :: img
        :: Restaurant name
        :: cuisines
        :: delivery time
        :: price

Footer :: components>>

    :: copy rights
    :: footer links    

*/


// React Elements : logo

const Logo = () => {
    return (
    <div className='logo-container'>
        <img src={logo} alt='logo' width='150px' />
    </div>
    );
}


// React functional components

const Header = () => {
    return (
    <div id='header-container' className='header-container'>
        <Logo />
        <div className='navList'>
            <ul>
                <li><a href='#'> Home </a></li>
                <li><a href='#'> Products </a></li>
                <li><a href='#'> Contact us </a></li>
                <li><a href='#'> Cart </a></li>
            </ul>
        </div>
    </div>
);
}

const RestoCard = (props) => {

    const {resData} = props;
    const {
        name, 
        avgRating, 
        cuisines, 
        costForTwo, 
        locality
            } = resData?.info;
    console.log(props, "props get")
    return(
        <div className='res-card'>
            <img className="food-img" alt={resData.info.name} src={ 
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId
                                } 
                 />
            <h2 className='resto-name'> {name}</h2>
            <div className='starNtime'>
                <img src={starIcon} alt='star' />
                <h3 className=''>{avgRating}</h3>
            </div>
            <h4 className='cuisine'> {cuisines.join(", ")}</h4>
            <h4 className='cuisine'> {costForTwo}</h4>
            <h4 className='place' >{locality}</h4>
        </div>
    );
}
const Body = () => {
    return(
        <div className='body'>
            <div className='search-bar'>      
                <a href='#'>Search <img src={searchIcon} alt='search-icon' /></a>
            </div>
            <div className='resto-container'>
                {
                    restoList.map( (restaurant) => ( 
                    <RestoCard key={restaurant.info.id}  resData = {restaurant} /> 
                    
                    ))
                }
            </div>
        </div>

    );
}

const restoList = [
    {
        "info": {
          "id": "1003414",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
          "locality": "Chhindwara",
          "areaName": "Parasia Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "39",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 11.9,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "11.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "774546",
          "name": "Shree Naivedyam",
          "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
          "locality": "Khajri Road",
          "areaName": "Chhindwara City",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "South Indian",
            "Pizzas",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "428968",
          "avgRatingString": "4.3",
          "totalRatingsString": "108",
          "sla": {
            "deliveryTime": 60,
            "lastMileTravel": 11.7,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "11.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
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
            "header": "₹40 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "912754",
          "name": "Urban Cafe",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
          "locality": "SOUTH CIVIL LINE",
          "areaName": "Chhindwara City",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Snacks",
            "Pizzas",
            "Pastas",
            "Fast Food",
            "Burgers",
            "Cafe"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "1330",
          "avgRatingString": "4.7",
          "totalRatingsString": "6",
          "sla": {
            "deliveryTime": 58,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
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
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "213358",
          "name": "Apni Rasoi Family Dhaba",
          "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
          "locality": "Vishnu Nagar",
          "areaName": "Parasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Indian",
            "South Indian",
            "Chinese"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "35024",
          "avgRatingString": "4.2",
          "totalRatingsString": "1.2K+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 13.9,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "13.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
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
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-rest213358",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "618037",
          "name": "Jai Ganesh Bhojnalaya",
          "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
          "locality": "Railway Colony",
          "areaName": "Bus stand",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Chinese"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "368432",
          "avgRatingString": "4.0",
          "totalRatingsString": "341",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 11.4,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "11.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
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
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "151649",
          "name": "Hotel Sai Nath & Sai Restaurant",
          "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
          "locality": "railway station",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "101802",
          "avgRatingString": "4.3",
          "totalRatingsString": "973",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 22:30:00",
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
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "151661",
          "name": "Bharat Mewad Ice Cream",
          "cloudinaryImageId": "auczcmkdvvxzt2mswvcc",
          "locality": "Teacher's Colony",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "44378",
          "avgRatingString": "4.4",
          "totalRatingsString": "458",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 12.8,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "12.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
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
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/bharat-mewad-ice-cream-teachers-colony-chhindwara-locality-rest151661",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "658210",
          "name": "The Fusion Lounge",
          "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          "locality": "Triloki nagar",
          "areaName": "Railway Station",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "395453",
          "avgRatingString": "4.1",
          "totalRatingsString": "323",
          "sla": {
            "deliveryTime": 64,
            "lastMileTravel": 10,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-09 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
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
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-085f93f8-ff9a-4d9c-8b22-830116074301"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }    
];
const Footer = () => {
    return(
        <div className='footer-container'>
            <h4 className='' > © 2025 WhatBro. All rights reserved.</h4>
            <div className='navList'>
                <ul className='footer-nav'>
                    <li><a href='#' >site map</a></li>
                    <li><a href='#' >compliance</a></li>
                    <li><a href='#' >Contact us</a></li>
                </ul>
            </div>
        </div>
    );
}


// React functional component
const AppLayout = () => {
    return(
        <div className='app-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
    


// Render area

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
