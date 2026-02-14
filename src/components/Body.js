import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MoakData";

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="res-container">
              {
                resList.map((Restaurant)=>{
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