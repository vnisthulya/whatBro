import searchIcon from '../../img/search.png';
import starIcon from '../../img/star.png';
import RestoCard from './RestoCard';
import SkimmerUI from './SkimmerUI';
import { useEffect, useState } from 'react';




const Body = () => {

  const [ restaurantSortList, setrestaurantSortList ] = useState([]);
  const [filteredRestaurant, setFiteredRestaurant] = useState([]);
  const [ searchText, setSearchText] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  console.log("reconcilation........", restaurantSortList);
  useEffect(() => {
    console.log(" testing useEffect", );
    fetchData();
    }, []
  );
  const fetchData = async () => {
    const restData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await restData.json();
    // console.log("Live API call", jsonData);
    setrestaurantSortList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("filtering the card data::::", restaurantSortList);
  }


  // on change filter with debouncing
  const handleSearch = (text) => { 
    const filterSearch = restaurantSortList.filter((res) => 
      // Search through cusine 
      res.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(text.toLowerCase())
      )
      // Search through Restaurant names 
      // res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiteredRestaurant(filterSearch);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
  
    const newTimeout = setTimeout(() => {
      console.log("Debounced Search...", value);
      handleSearch(value);
    }, 1500); // 1000ms = 1 second
  
    setDebounceTimeout(newTimeout);
  };

  //  debouncing ends

  // conditional rendering :::

  return restaurantSortList.length == 0 ? ( 
  <SkimmerUI /> 
  ) : (
      <div className='body'>
          <div className='search-bar'>
            <div className='search'>
              <img src={searchIcon} alt='search-icon' /> 
              {/* <input type="text"
                className='search-box'
                value={searchText}
                onChange={(e)=> {
                  setSearchText(e.target.value);
                }}
              /> */}
              <input
                type="text"
                className='search-box'
                value={searchText}
                onChange={handleInputChange}
                placeholder="Search cuisines..."
              />
              {/* <button
                onClick={() => {
                  console.log("filtering through searchbox...", searchText);
                  const filterSearch = restaurantSortList.filter((res)=>             
                  res.info.cuisines.some((cuisine) => 
                  cuisine.toLowerCase().includes(searchText.toLowerCase())      
                    // res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFiteredRestaurant(filterSearch);
                }}
              > Search 
              </button> */}
            </div>
            <div className='filterBtn'> 
                <h4> Top rated Restaurant: 4 </h4>
                <img src={starIcon} alt='star' />
                <button onClick={() => {
                  const filteredList = filteredRestaurant.filter(
                  (res) => res.info.avgRating > 4.2
                );                
                setFiteredRestaurant(filteredList);
                }}> CLick </button>
            </div>
              
          </div>
          
          <div className='resto-container'>
              {
                  filteredRestaurant.map( (restaurant) => ( 
                    <RestoCard key={restaurant.info.id}  resData = {restaurant} />                   
                  ))
              }
          </div>
      </div>

  );
}

export default Body;