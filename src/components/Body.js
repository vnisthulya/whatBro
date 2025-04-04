import searchIcon from '../../img/search.png';
import RestoCard from './RestoCard';
import { restoList } from '../utils/constants';

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

export default Body;