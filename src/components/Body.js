import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MoakData";
import { useState } from "react";


const Body=()=>{
  const [ListOfRestaurant, setListOfRestaurant]=useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  let filteredList = ListOfRestaurant.filter((res)=> res.info.avgRating>=4.5)
                  setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                ListOfRestaurant.map((Restaurant)=>{
                  return <RestaurantCard key={Restaurant.info.id} resData={Restaurant}/>
                })
              }
                {/* <RestaurantCard resData={resList[0]}/> 
                we can also create like this manual way but above map function is dynamic and good practice*/}        
            </div>
        </div>
    )
}

export default Body;