import React, { useEffect, useState } from 'react'
import CircuitIndCard from './circuitIndCard';

var parseString = require('xml2js').parseString;

function CircuitCard() {

    const [circuitsData, setCircuitsData] = useState([]);

    useEffect(() => {
        async function apicall() {
            await fetch('https://ergast.com/api/f1/current/circuits')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setCircuitsData(result);
                    })

                })
                .catch(err => console.log(err));
        }

        apicall()

    }, [])
    if (circuitsData.length === 0) {
        return (
            <div className="mx-auto large">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        <div className="container text-center" id="circuitCard">
            <h1 className="pt-4">Constructors of {circuitsData.MRData.CircuitTable[0].$.season} Season</h1>
            <div className="row  text-center">

                <CircuitIndCard circuitsList={circuitsData} />

            </div>
        </div>
    )
}

export default CircuitCard