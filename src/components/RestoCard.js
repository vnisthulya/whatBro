import starIcon from '../../img/star.png';
import { FOOD_IMG } from '../utils/constants';


const RestoCard = (props) => {

    const {resData} = props;
    const {
        name, 
        avgRating, 
        cuisines, 
        costForTwo, 
        locality
            } = resData?.info;

    return(
        <div className='res-card'>
            <img className="food-img" alt={resData.info.name} src={ 
                FOOD_IMG + resData.info.cloudinaryImageId
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


export default RestoCard;