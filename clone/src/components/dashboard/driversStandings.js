import React, { useEffect, useState } from "react";
var parseString = require('xml2js').parseString;

export default function DriversStandings() {

    useEffect(() => {
        async function apicallDriverStandings() {
            await fetch('http://ergast.com/api/f1/current/last/driverStandings')
                .then(res => res.text())
                .then(data => {
                    let parser = new DOMParser()
                    let xmlDoc = parser.parseFromString(data, 'text/xml')
                    console.log(xmlDoc)
                    parseString(data, function (err, result) {
                        console.log('call DS', result);
                    })
                })
                .catch(err => console.log(err));
        }
        apicallDriverStandings()
    })
    const indCard = () => {

    }
    return (
        <div className="container">
            <div className="card_cust h-100">
                <div className="col-12">
                    <h2>Drivers Standings</h2>
                </div>

            </div>
        </div>
    )


}