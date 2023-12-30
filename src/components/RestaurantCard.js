import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla } =
    resData?.info;
  const imageUrl = CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="res-logo" className="res-logo" src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h3>{costForTwo}</h3>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
