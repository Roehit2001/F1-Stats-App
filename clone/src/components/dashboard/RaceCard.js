var countryJSON = require('../../JSON/country-nationality.json');

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
                <p>{round}</p>
            </div>
            <div className="card-img-top mx-auto">
                <img id="card-img" src={"/Assets/circuitLayouts/" + circuit_name + ".png"} alt="" />
            </div>
            <div className="card-img-overlay">
                <h3>{circuit_name}</h3>
            </div>
            <div className="card-body pt-5">
                <div className="first card-text"><img className="position" src="/Assets/img/first.png" alt="first" /><p>{driver_first}</p></div>
                <div className="second card-text"><img className="position" src="/Assets/img/second.png" alt="second" /><p>{driver_second}</p></div>
                <div className="third card-text"><img className="position" src="/Assets/img/third.png" alt="third" /><p>{driver_third}</p></div>
            </div>
        </div>
    )

}

const NextRace = ({ round, circuit, race }) => {
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
                <p>{round}</p>
            </div>
            <div className="card-img-top">
                <img src={"/Assets/circuitLayouts/" + circuit + ".png"} alt="" />
            </div>
            <div className="card-img-overlay">
                <h2>{race}</h2>
                <h3>{circuit}</h3>
            </div>
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
        <div className="cardsect">{

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
                    <div key={driver.$.position} className="indCard">
                        <div className="position">
                            {driver.$.position}
                        </div>
                        <div className="number">{driver.Driver[0].PermanentNumber}</div>
                        <div className="name">{driver.Driver[0].GivenName + " " + driver.Driver[0].FamilyName}</div>
                        <div className="points">{driver.$.points}</div>
                        <div className="CCflag" ><img id={driver.$.position + "imageD"} src="/Assets/img/preloader-small.gif" alt="flag" /></div>
                        {setTimeout(function () { flag(); return null }, 500)}
                    </div>
                )
            })}
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
        <div className="cardsect">{
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
                    <div key={constructor.$.position} className="indCard">
                        <div className="position">
                            {constructor.$.position}
                        </div>
                        <div className="number">{constructor.$.wins}</div>
                        <div className="CCflag" ><img id={constructor.$.position + "image"} src="/Assets/img/preloader-small.gif" alt="flag" /></div>
                        <div className="name">{constructor.Constructor[0].Name}</div>

                        <div className="points">{constructor.$.points}</div>
                        {setTimeout(function () { flag(); return null }, 500)}
                    </div>
                )
            })}
        </div>
    )
}

export {
    RaceCard,
    NextRace,
    DriversList,
    ConstructorsList
}