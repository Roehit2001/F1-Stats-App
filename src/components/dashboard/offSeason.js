import React, { useEffect, useState } from 'react'
const { default: Countdown } = require('./countdown');

export default function OffSeason() {
    const year = new Date().getFullYear()
    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [third, setThird] = useState([])
    const [race1Name, setRace1Name] = useState('')
    const [race1Date, setRace1Date] = useState('')
    const [race1Circuit, setRace1Circuit] = useState('')
    useEffect(() => {
        async function apicall() {
            await fetch(`https://ergast.com/api/f1/${year - 1}/driverStandings.json?limit=3`)
                .then(res => res.text())
                .then(data => {
                    data = JSON.parse(data)
                    setFirst(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
                    setSecond(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1])
                    setThird(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2])
                })
                .catch(err => {
                    console.log(err)
                });
        }

        apicall()
    }, [year])

    useEffect(() => {
        async function apicall() {
            await fetch('https://ergast.com/api/f1/2022/1.json')
                .then(res => res.text())
                .then(data => {
                    data = JSON.parse(data)
                    setRace1Circuit(data.MRData.RaceTable.Races[0].Circuit.circuitName)
                    setRace1Date(data.MRData.RaceTable.Races[0].date)
                    setRace1Name(data.MRData.RaceTable.Races[0].raceName)
                })
                .catch(err => {
                    console.log(err)
                });
        }

        apicall()
    }, [first])

    if (first.length !== 0 && second.length !== 0 && third.length !== 0) {
        return (
            <div className="row">
                <div className="container-cust">
                    <div className="card-deck">
                        <div className="col-lg-8">
                            <div className="card offseason h-100">
                                <h1>{year - 1} Standings</h1>
                                <div className="podium">
                                    <div className="podium__place podium__2st-place">
                                        {/* <div className="podium__medal">🥈</div> */}
                                        <div className="podium__image"><img alt={year - 1 + "Champions"} src={"/Assets/driversImages/" + second.Driver.permanentNumber + ".png"} /></div>
                                        <div className="podium_name">{second.Driver.givenName + " " + second.Driver.familyName}</div>
                                        <div className="podium__box">
                                            <div className="podium__number">2</div>
                                            <div className="podium__border podium__border--left"></div>
                                            <div className="podium__border podium__border--top"></div>
                                        </div>
                                    </div>
                                    <div className="podium__place podium__1st-place">
                                        {/* <div className="podium__medal">🥇</div> */}
                                        <div className="podium__image"><img alt={year - 1 + "Champions"} src={"/Assets/driversImages/" + first.Driver.permanentNumber + ".png"} /></div>
                                        <div className="podium_name">{first.Driver.givenName + " " + first.Driver.familyName}</div>
                                        <div className="podium__box">
                                            <div className="podium__number">1</div>
                                            <div className="podium__border podium__border--left"></div>
                                            <div className="podium__border podium__border--top"></div>
                                            <div className="podium__border podium__border--right"></div>
                                        </div>
                                    </div>
                                    <div className="podium__place podium__3st-place">
                                        {/* <div className="podium__medal">🥉</div> */}
                                        <div className="podium__image"><img alt={year - 1 + "Champions"} src={"/Assets/driversImages/" + third.Driver.permanentNumber + ".png"} /></div>
                                        <div className="podium_name">{third.Driver.givenName + " " + third.Driver.familyName}</div>
                                        <div className="podium__box">
                                            <div className="podium__number">3</div>
                                            <div className="podium__border podium__border--top"></div>
                                            <div className="podium__border podium__border--right"></div>
                                        </div>
                                    </div>
                                    <div className="podium__border podium__border--bottom">
                                        <div className="podium__bubbles podium__bubbles--style1 podium__bubbles--style1-left"></div>
                                        <div className="podium__bubbles podium__bubbles--style2 podium__bubbles--style2-left"></div>
                                        <div className="podium__bubbles podium__bubbles--style1 podium__bubbles--style1-right"></div>
                                        <div className="podium__bubbles podium__bubbles--style2 podium__bubbles--style2-right"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4" id="next_card">
                            <div className="card race h-100">
                                <div className="card-img-top mx-auto ">
                                    <img id="card-img-NEXT" src={"/Assets/circuitLayouts/" + race1Circuit + ".png"} alt="" />
                                </div>
                                <div className="card-body pt-5 text-center">
                                    <h2 className="card-title">{race1Name}</h2>
                                    <h4 className="card-text">{race1Circuit}</h4>
                                </div>
                                <Countdown date={race1Date} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div>Hi, The Site is under API maintenance. Pls feel free to check other tabs out!</div>
    )
}