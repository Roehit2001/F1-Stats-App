import React, { useEffect, useState } from 'react'
import DriverIndCard from './driverIndCard';

var parseString = require('xml2js').parseString;

function DriversCard() {

    const [driversData, setDriversData] = useState([]);

    useEffect(() => {
        async function apicall() {
            await fetch('https://ergast.com/api/f1/current/drivers')
                .then(res => res.text())
                .then(data => {
                    localStorage.setItem("localDriversData", data)
                    parseString(data, function (err, result) {
                        setDriversData(result);
                        console.log("this is from api!!!")
                    })
                })
                .catch(err => console.log(err));
            // console.log(localStorage)

        }
        async function localStorageCall() {
            const data = await localStorage.getItem("localDriversData");
            // console.log(data)
            parseString(data, function (err, result) {
                console.log("This is from Local Storage")
                setDriversData(result);
            })
        }
        if (localStorage.localDriversData) {
            localStorageCall()
        }
        else {
            apicall()
        }
    }, [])
    // useEffect(()=>{

    // })
    console.log(driversData)
    if (driversData.length === 0) {

        return (
            <div className="mx-auto large">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )

    }
    return (

        <div className="container text-center" id="driverCard">
            <h1 className="pt-4">Drivers of {driversData.MRData.DriverTable[0].$.season} Season</h1>
            <div className="row  text-center">
                <DriverIndCard driversList={driversData} />
            </div>
        </div>
    )
}

export default DriversCard