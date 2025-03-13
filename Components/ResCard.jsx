import resList from "../Utils/resList";
import starIcon from '../img/star.png';

 const resDataList = resList?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log("resDataList", resList)
    console.log("resList", resDataList);

        

const ResCard = ()=>{
    
    return (
        <div className='res-card'>
            <div>Hi hello Restaurant</div>
            <h2 className='restName'> </h2>
            <div className='starNtime'>
            <img src={starIcon} alt='star' />
            <h3 className='ratings'> </h3>
            </div>
            <h4 className='cuisine'></h4>
            <h4 className='place' ></h4>
        </div>        
    )
}

const RestoCard = (props) => {
    console.log(props, "this is the props u get");
    const {resData} = props;
    const resDataList = resData.card.gridElements.infoWithStyle.restaurants;

    console.log(restaurantsList, "::::::", resDataList);

    return(
        <div className='res-card'>
            <img src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                resDataList[0].info.cloudinaryImageId
                } 
                alt='biriyani' className='food-img' />
            <h2 className='resto-name'> {resDataList[0].info.name} </h2>
            <div className='starNtime'>
                <img src={starIcon} alt='star' />
                <h3 className='ratings'> {resDataList[0].info.avgRating}</h3>
            </div>
            <h4 className='cuisine'> {resDataList[0].info.cuisines}</h4>
            <h4 className='place' >{resDataList[0].info.locality}</h4>
        </div>
    );
}

export default ResCard;