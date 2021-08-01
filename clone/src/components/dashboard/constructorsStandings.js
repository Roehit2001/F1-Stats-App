import React, { useEffect, useState } from "react";
import { ConstructorsList } from "./RaceCard";
var parseString = require('xml2js').parseString;

function ConstructorsStandings() {
    const [constructorsStandings, setConstructorsStandings] = useState([]);

    useEffect(() => {
        async function apicallconstructorsStandings() {
            await fetch('http://ergast.com/api/f1/current/last/constructorStandings')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        console.log('call DS', result)
                        setConstructorsStandings(result)
                        console.log(constructorsStandings)
                    })
                })
                .catch(err => console.log(err));
        }
        apicallconstructorsStandings()
    }, [])





    return (
        <div className="row pointsTable">
            <div className="container">
                <div className="card_cust h-100">
                    <div className="col-12">
                        <h2>Constructors Standings</h2>
                    </div>
                    <ConstructorsList constructorsList={constructorsStandings} />
                </div>
            </div>
        </div>
    )
}

export default ConstructorsStandings