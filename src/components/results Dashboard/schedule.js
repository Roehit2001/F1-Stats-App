import React, { useEffect, useState } from 'react'
import YearTableCard from './yearTable';
var parseString = require('xml2js').parseString;

function Schedule(schedule) {

    const [selectedSchedule, setSelectedSchedule] = useState([]);
    useEffect(() => {
        const url = "https://ergast.com/api/f1/" + schedule.schedule
        async function apicall() {
            await fetch(url)
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setSelectedSchedule(result);
                    })
                })
                .catch(err => console.log(err));
        }
        apicall()
    }, [schedule])
    return (
        <div className="container">
            <YearTableCard yearData={selectedSchedule} />
        </div>
    );

}

export default Schedule