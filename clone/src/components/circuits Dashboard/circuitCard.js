import React, { useEffect, useState } from 'react'
import CircuitIndCard from './circuitIndCard';

var parseString = require('xml2js').parseString;

function CircuitCard() {

    const [circuitsData, setCircuitsData] = useState([]);

    useEffect(() => {
        async function apicall() {
            await fetch('http://ergast.com/api/f1/current/circuits')
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
    return (
        <div className="container" id="circuitCard">
            <div className="row  text-center">

                <CircuitIndCard circuitsList={circuitsData} />

            </div>
        </div>
    )
}

export default CircuitCard