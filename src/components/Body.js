import searchIcon from '../../img/search.png';
import RestoCard from './RestoCard';
import { restoList } from '../utils/constants'; 
import { useState } from 'react';




const Body = () => {

  const [ restaurantSortList, setrestaurantSortList ] = useState(restoList);

    return(
        <div className='body'>
            <div className='search-bar'>      
                <a href='#'>Search <img src={searchIcon} alt='search-icon' /></a>
            </div>
            <div className='filterBtn'> 
              <h4> Top rated Restaurant </h4>
              <button onClick={() => {
                const filteredList = restaurantSortList.filter(
                  (res) => res.info.avgRating > 4.2
                );                
                setrestaurantSortList(filteredList);
              }}> CLick </button>
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