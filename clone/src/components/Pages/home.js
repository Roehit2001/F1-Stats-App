import React from "react";
import DriversStandings from "../dashboard/driversStandings";
import HomeCard from "../dashboard/homeCard";
function Home() {
    return (
        <div id="home">
            <HomeCard />
            <div className="row">
                <div className="container">
                    <div className="col-lg-6">
                        <DriversStandings />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home