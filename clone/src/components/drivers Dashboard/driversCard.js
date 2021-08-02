import React, { useEffect, useState } from 'react'
import DriverIndCard from './driverIndCard';

var parseString = require('xml2js').parseString;

function DriversCard() {

    const [driversData, setDriversData] = useState([]);

    useEffect(() => {
        async function apicall() {
            await fetch('http://ergast.com/api/f1/current/drivers')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setDriversData(result);
                    })

                })
                .catch(err => console.log(err));
        }
        apicall()
    }, [])
    return (
        <div className="container" id="driverCard">
            <div className="row  text-center">
                <DriverIndCard driversList={driversData} />
            </div>
        </div>
    )
}

export default DriversCard