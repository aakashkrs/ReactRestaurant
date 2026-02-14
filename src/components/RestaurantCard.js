import { CDN_URL } from "../Utils/constant";

const RestaurantCard = ({ resData }) => {

  if (!resData?.info) return null;

  const { name, areaName, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating}</p>
    </div>
  );
};

export default RestaurantCard;