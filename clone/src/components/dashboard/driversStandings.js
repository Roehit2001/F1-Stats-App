import React, { useEffect, useState } from "react";
import { DriversList } from "./RaceCard";
var parseString = require('xml2js').parseString;

function DriversStandings() {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        async function apicallDriverStandings() {
            await fetch('https://ergast.com/api/f1/current/last/driverStandings')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setDriverStandings(result)
                    })
                })
                .catch(err => console.log(err));
        }
        apicallDriverStandings()
    }, [])





    return (
        <div className="row pointsTable">
            <div className="container">
                <div className="card_cust h-100">
                    <div className="col-12">
                        <h2>Drivers Standings</h2>
                    </div>
                    <DriversList driversList={driverStandings} />
                </div>
            </div>
        </div>
    )
}

export default DriversStandings