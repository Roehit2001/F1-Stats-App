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
                        // console.log(result)
                    })

                })
                .catch(err => console.log(err));
        }
        apicall()
    }, [])
    if (constructorsData.length === 0) {
        return (
            <div className="mx-auto large">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        <div className="container text-center" id="constructorCard">
            <h1 className="pt-4">Constructors of {constructorsData.MRData.ConstructorTable[0].$.season} Season</h1>
            <div className="row  text-center">
                <ConstructorIndCard constructorsList={constructorsData} />
            </div>
        </div>
    )
}

export default ConstructorsCard