import React, { useEffect, useState } from 'react'
import { RaceCard, NextRace } from './RaceCard';
import OffSeason from './offSeason';
var parseString = require('xml2js').parseString;
function HomeCard() {
    const year = new Date().getFullYear();
    const [errorFree, SetErrorFree] = useState(1);
    const [roundCurrent, setRoundCurrent] = useState(0);
    const [roundPrevious, setRoundPrevious] = useState(0);
    const [roundNext, setRoundNext] = useState(0);
    const [circuitCurrent, setCircuitCurrent] = useState('');
    const [circuitPrevious, setCircuitPrevious] = useState('');
    const [circuitNext, setCircuitNext] = useState('');
    const [raceNameCurrent, setRaceNameCurrent] = useState('');
    const [raceNamePrevious, setRaceNamePrevious] = useState('');
    const [raceNameNext, setRaceNameNext] = useState('');
    const [firstCurrent, setFirstCurrent] = useState('');
    const [firstPrevious, setFirstPrevious] = useState('');
    const [secondCurrent, setSecondCurrent] = useState('');
    const [secondPrevious, setSecondPrevious] = useState('');
    const [thirdCurrent, setThirdCurrent] = useState('');
    const [thirdPrevious, setThirdPrevious] = useState('');
    const [raceDateNext, setRaceDateNext] = useState('');



    useEffect(() => {
        async function apicall1() {
            await fetch('https://ergast.com/api/f1/' + year + '/last/results')
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setRoundCurrent(result.MRData.RaceTable[0].$.round)
                        setRoundPrevious(+result.MRData.RaceTable[0].$.round - 1)
                        setRoundNext(+result.MRData.RaceTable[0].$.round + 1)
                        setCircuitCurrent(result.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName)
                        setRaceNameCurrent(result.MRData.RaceTable[0].Race[0].RaceName)
                        setFirstCurrent(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].FamilyName)
                        setSecondCurrent(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].FamilyName)
                        setThirdCurrent(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].FamilyName)
                    })

                })
                .catch(err => {
                    if (err.name === 'TypeError') {
                        SetErrorFree(0);
                    }
                });
        }

        apicall1()

    }, [year, errorFree])

    useEffect(() => {
        async function apicall2() {
            // console.log(roundPrevious)
            fetch(`https://ergast.com/api/f1/` + year + `/${roundPrevious}/results`)
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setCircuitPrevious(result.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName)
                        setRaceNamePrevious(result.MRData.RaceTable[0].Race[0].RaceName)
                        setFirstPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].FamilyName)
                        setSecondPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].FamilyName)
                        setThirdPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].FamilyName)
                    })
                })
                .catch(err => console.log(err));
        }
        if (roundPrevious > 0 && errorFree)
            apicall2()
    }, [roundPrevious, year, errorFree])


    useEffect(() => {
        async function apicall3() {
            fetch(`https://ergast.com/api/f1/` + year + `/${roundNext}`)
                .then(res => res.text())
                .then(data => {
                    parseString(data, function (err, result) {
                        setCircuitNext(result.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName)
                        setRaceNameNext(result.MRData.RaceTable[0].Race[0].RaceName)
                        setRaceDateNext(result.MRData.RaceTable[0].Race[0].Date);
                    })
                })
                .catch(err => console.log(err));
        }
        if (roundNext > 0 && errorFree)
            apicall3()
    }, [roundNext, year, errorFree])


    if (errorFree) {
    return (
        <div className="row">
            <div className="container-cust">
                <div className="card-deck">
                    <div className="col-lg-4" id="previous_card">
                        <RaceCard round={roundPrevious} race_name={raceNamePrevious} circuit_name={circuitPrevious} driver_first={firstPrevious} driver_second={secondPrevious} driver_third={thirdPrevious} />
                    </div>
                    <div className="col-lg-4" id="current_card">
                        <RaceCard round={roundCurrent} race_name={raceNameCurrent} circuit_name={circuitCurrent} driver_first={firstCurrent} driver_second={secondCurrent} driver_third={thirdCurrent} />
                    </div>
                    <div className="col-lg-4" id="next_card">
                        <NextRace round={roundNext} circuit={circuitNext} race={raceNameNext} date={raceDateNext} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (

        <OffSeason />


    )
}

export default HomeCard