import React, { useEffect, useState } from 'react'
import { RaceCard, NextRace } from './RaceCard';
var parseString = require('xml2js').parseString;
function HomeCard() {

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


    useEffect(() => {
        async function apicall1() {
            await fetch('http://ergast.com/api/f1/current/last/results')
                .then(res => res.text())
                .then(data => {
                    let parser = new DOMParser()
                    let xmlDoc = parser.parseFromString(data, 'text/xml')
                    console.log(xmlDoc)
                    parseString(data, function (err, result) {
                        console.log('call 1', result);
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
                .catch(err => console.log(err));
        }

        apicall1()

    }, [])

    useEffect(() => {
        async function apicall2() {
            console.log(roundPrevious)
            fetch(`https://ergast.com/api/f1/current/${roundPrevious}/results`)
                .then(res => res.text())
                .then(data => {
                    let parser = new DOMParser()
                    let xmlDoc = parser.parseFromString(data, 'text/xml')
                    console.log(xmlDoc)
                    parseString(data, function (err, result) {
                        console.log(result);
                        console.log('call 2')
                        // setRoundPrevious(result.MRData.RaceTable[0].$.round)
                        setCircuitPrevious(result.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName)
                        setRaceNamePrevious(result.MRData.RaceTable[0].Race[0].RaceName)
                        setFirstPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[0].Driver[0].FamilyName)
                        setSecondPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[1].Driver[0].FamilyName)
                        setThirdPrevious(result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].GivenName + ' ' + result.MRData.RaceTable[0].Race[0].ResultsList[0].Result[2].Driver[0].FamilyName)
                    })
                })
                .catch(err => console.log(err));
        }
        if (roundPrevious > 0)
            apicall2()
    }, [roundPrevious])


    useEffect(() => {
        async function apicall3() {
            console.log(roundNext)
            fetch(`https://ergast.com/api/f1/current/${roundNext}`)
                .then(res => res.text())
                .then(data => {
                    let parser = new DOMParser()
                    let xmlDoc = parser.parseFromString(data, 'text/xml')
                    console.log(xmlDoc)
                    parseString(data, function (err, result) {
                        console.log(result);
                        console.log('call 3')
                        setCircuitNext(result.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName)
                        setRaceNameNext(result.MRData.RaceTable[0].Race[0].RaceName)
                    })
                })
                .catch(err => console.log(err));
        }
        if (roundNext > 0)
            apicall3()
    }, [roundNext])

    return (
        <div className="row">
            <div className="container">
                <div className="card-deck">
                    <div className="col-lg-4" id="previous_card">
                        <RaceCard round={roundPrevious} circuit_name={circuitPrevious} driver_first={firstPrevious} driver_second={secondPrevious} driver_third={thirdPrevious} />
                    </div>
                    <div className="col-lg-4" id="current_card">
                        <RaceCard round={roundCurrent} circuit_name={circuitCurrent} driver_first={firstCurrent} driver_second={secondCurrent} driver_third={thirdCurrent} />
                    </div>
                    <div className="col-lg-4" id="next_card">
                        <NextRace round={roundNext} circuit={circuitNext} race={raceNameNext} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard