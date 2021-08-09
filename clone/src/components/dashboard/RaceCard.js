var countryJSON = require('../../JSON/country-nationality.json');
const { default: Countdown } = require('./countdown');

const RaceCard = ({ round, circuit_name, driver_first, driver_second, driver_third }) => {
    if (round < 1) {
        return (
            <div className="small mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        <div className="card race h-100">
            <div className="race_number">
                <p>Round: {round}</p>
            </div>
            <div className="card-img-top mx-auto h-100">
                <img id="card-img" src={"/Assets/circuitLayouts/" + circuit_name + ".png"} alt="" />
            </div>

            <div className="card-body pt-1 text-center">
                <h3 className="card-title">{circuit_name}</h3>
                <div className="first card-text"><img className="position" src="/Assets/img/first.png" alt="first" /><p>{driver_first}</p></div>
                <div className="second card-text"><img className="position" src="/Assets/img/second.png" alt="second" /><p>{driver_second}</p></div>
                <div className="third card-text"><img className="position" src="/Assets/img/third.png" alt="third" /><p>{driver_third}</p></div>
            </div>
        </div>
    )

}

const NextRace = ({ round, circuit, race, date }) => {
    if (round < 1) {
        return (
            <div className="small mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        <div className="card race h-100">
            <div className="race_number">
                <p>Round: {round}</p>
            </div>
            <div className="card-img-top mx-auto ">
                <img id="card-img-NEXT" src={"/Assets/circuitLayouts/" + circuit + ".png"} alt="" />
            </div>
            <div className="card-body pt-5 text-center">
                <h2 className="card-title">{race}</h2>
                <h4 className="card-text">{circuit}</h4>
            </div>
            <Countdown date={date} />
        </div>
    )


}

const DriversList = ({ driversList }) => {
    if (driversList.length === 0) {
        return (
            <div className="small mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        // console.log('step')
        <div className="cardsect">
            <table id="DriversStandings_Table" className="home_Table table table-sm">
                <thead>
                    <tr className="">
                        <th scope="col">Position</th>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody >{
                    driversList.MRData.StandingsTable[0].StandingsList[0].DriverStanding.map(driver => {
                        function flag() {

                            for (var i = 0; i < countryJSON.length; i++) {
                                if (countryJSON[i].nationality.includes(driver.Driver[0].Nationality)) {
                                    const CC = countryJSON[i].alpha_2_code;
                                    document.getElementById(driver.$.position + "imageD").src = "https://www.countryflags.io/" + CC + "/flat/64.png"
                                }
                            }
                            return null;
                        }
                        return (
                            <tr key={driver.$.position}>
                                <td className="positionTable">
                                    {driver.$.position}
                                </td>
                                <td className="number">{driver.Driver[0].PermanentNumber}</td>
                                <td className="name">{driver.Driver[0].GivenName + " " + driver.Driver[0].FamilyName}</td>
                                <td className="CCflag" ><img id={driver.$.position + "imageD"} src="/Assets/img/preloader-small.gif" alt="flag" /></td>
                                <td className="points">{driver.$.points}</td>
                                {setTimeout(function () { flag(); return null }, 500)}
                            </tr>
                        )
                    })}</tbody>
            </table>
        </div>
    )
}
const ConstructorsList = ({ constructorsList, }) => {
    if (constructorsList.length === 0) {
        return (
            <div className="small mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        // console.log('step')
        <div className="cardsect">
            <table id="DriversStandings_Table" className="home_Table table table-sm">
                <thead>
                    <tr className="">
                        <th scope="col">Position</th>
                        <th scope="col">Name</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody >{
                    constructorsList.MRData.StandingsTable[0].StandingsList[0].ConstructorStanding.map(constructor => {
                        function flag() {
                            for (var i = 0; i < countryJSON.length; i++) {
                                if (countryJSON[i].nationality.includes(constructor.Constructor[0].Nationality)) {
                                    const CC = countryJSON[i].alpha_2_code;
                                    document.getElementById(constructor.$.position + "image").src = "https://www.countryflags.io/" + CC + "/flat/64.png"
                                }
                            }
                            return null;
                        }
                        return (
                            <tr key={constructor.$.position} className="indCard">
                                <td className="positionTable">
                                    {constructor.$.position}
                                </td><td className="name">{constructor.Constructor[0].Name}</td>

                                <td className="CCflag" ><img id={constructor.$.position + "image"} src="/Assets/img/preloader-small.gif" alt="flag" /></td>

                                <td className="number">{constructor.$.wins}</td>
                                <td className="points">{constructor.$.points}</td>
                                {setTimeout(function () { flag(); return null }, 500)}
                            </tr>
                        )
                    })}</tbody>
            </table>
        </div>
    )
}

export {
    RaceCard,
    NextRace,
    DriversList,
    ConstructorsList
}