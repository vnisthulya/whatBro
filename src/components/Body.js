import searchIcon from '../../img/search.png';
import starIcon from '../../img/star.png';
import RestoCard from './RestoCard';
import { restoList } from '../utils/constants'; 
import { useEffect, useState } from 'react';




const Body = () => {

  const [ restaurantSortList, setrestaurantSortList ] = useState(restoList);

  useEffect(() => {
    console.log(" testing useEffect", );
    fetchData();
    }, []
  );
  const fetchData = async () => {
    const restData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await restData.json();
    console.log("Live API call", jsonData);
    setrestaurantSortList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("filtering the card data::::", restaurantSortList);
  }

  console.log("rendering cycle: ", );
  return(
      <div className='body'>
          <div className='search-bar'>
            <form >
              <label>Search </label>
              <img src={searchIcon} alt='search-icon' />
              
            </form>   
            <div className='filterBtn'> 
                <h4> Top rated Restaurant: 4 </h4>
                <img src={starIcon} alt='star' />
                <button onClick={() => {
                  const filteredList = restaurantSortList.filter(
                  (res) => res.info.avgRating > 4.2
                );                
                setrestaurantSortList(filteredList);
                }}> CLick </button>
            </div>
              
          </div>
          
          <div className='resto-container'>
              {
                  restaurantSortList.map( (restaurant) => ( 
                  <RestoCard key={restaurant.info.id}  resData = {restaurant} />                   
                  ))
              }
          </div>
      </div>

  );
}

export default Body;