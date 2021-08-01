import React from "react";
import ConstructorsStandings from "../dashboard/constructorsStandings";
import DriversStandings from "../dashboard/driversStandings";
import HomeCard from "../dashboard/homeCard";
function Home() {
    return (
        <div id="home">
            <HomeCard />
            <div className="row">
                <div className="container">
                    <div className="half-cont col-lg-6">
                        <DriversStandings />
                    </div>
                    <div className="half-cont col-lg-6">
                        <ConstructorsStandings />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home