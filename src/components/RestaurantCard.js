import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>
   {
     const {resData}=props;
     const {name, cloudinaryImageId, avgRating,areaName}= resData;
     const imageUrl = CDN_URL+ cloudinaryImageId;
      return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt="res-logo" className="res-logo" src={imageUrl}/>
            <h3>{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{areaName}</h3>     
        </div>
    );
   }
export default RestaurantCard;