import React, { useEffect, useState } from 'react'
import ConstructorIndCard from './constructorIndCard';

var parseString = require('xml2js').parseString;

function ConstructorsCard() {

    const [constructorsData, setConstructorsData] = useState([]);

    useEffect(() => {
        async function apicall() {
            await fetch('https://ergast.com/api/f1/current/constructors')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setConstructorsData(result);
                        console.log(err)
                    })

                })
                .catch(err => console.log(err));
        }
        apicall()
    }, [])
    return (
        <div className="container" id="constructorCard">
            <div className="row  text-center">
                <ConstructorIndCard constructorsList={constructorsData} />
            </div>
        </div>
    )
}

export default ConstructorsCard