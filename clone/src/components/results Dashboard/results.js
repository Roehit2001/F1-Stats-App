import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResultsTable from './resultsTable';
import { Link } from 'react-router-dom'
var parseString = require('xml2js').parseString;

function Results() {

    const [raceResults, setRaceResults] = useState([]);
    const { year, round, totalRound } = useParams();



    useEffect(() => {
        const url = "http://ergast.com/api/f1/" + year + "/" + round + "/results";

        async function apicall() {
            await fetch(url)
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setRaceResults(result);
                    })
                })
                .catch(err => console.log(err));
        }
        apicall()

    }, [round])

    if (+round === 1) {
        return (
            <div>
                <div className="d-block headercomp">
                    <button className="float-left" disabled>Round {+round - 1}</button>
                    <Link to={'/results/' + year + '/' + (+round + 1) + "/" + totalRound}><button className="float-right" >Round {+round + 1}</button></Link>
                </div>
                <br /><ResultsTable results={raceResults} year={year} round={round} />
            </div>
        )
    }

    else if (+round === +totalRound) {

        return (
            <div>
                <div className="d-block headercomp">
                    <Link to={'/results/' + year + '/' + (+round - 1) + "/" + totalRound}><button className="float-left">Round {+round - 1}</button></Link>
                    <button className="float-right" disabled >Round {+round + 1}</button>
                </div>
                <br /><ResultsTable results={raceResults} year={year} round={round} />
            </div>
        )
    }
    return (
        <div>
            <div className="d-block headercomp">
                <Link to={'/results/' + year + '/' + (+round - 1) + "/" + totalRound}><button className="float-left">Round {+round - 1}</button></Link>
                <Link to={'/results/' + year + '/' + (+round + 1) + "/" + totalRound}><button className="float-right" >Round {+round + 1}</button></Link>
            </div>
            <br /><ResultsTable results={raceResults} year={year} round={round} />
        </div>
    )
}


export default Results
