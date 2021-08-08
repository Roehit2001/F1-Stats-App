var countryJSON = require('../../JSON/country-code.json');
var circuitJSON = require('../../JSON/circuit-data.json');

const CircuitIndCard = ({ circuitsList }) => {
    if (circuitsList.length === 0) {
        return (
            <div className="mx-auto">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    // console.log(circuitsList)
    return (
        <div className="card-deck">
            {

                circuitsList.MRData.CircuitTable[0].Circuit.map(circuit => {
                    function flag() {

                        for (var i = 0; i < countryJSON.length; i++) {
                            if (countryJSON[i].name.includes(circuit.Location[0].Country)) {
                                const CC = countryJSON[i].code;
                                document.getElementById(circuit.$.circuitId + "img").src = "https://www.countryflags.io/" + CC + "/flat/64.png"
                            }
                        }
                        for (i = 0; i < circuitJSON.length; i++) {
                            if (circuitJSON[i].Name.includes(circuit.CircuitName)) {
                                document.getElementById(circuit.$.circuitId + "len").innerHTML = "Length: " + circuitJSON[i].Length
                                document.getElementById(circuit.$.circuitId + "alt").innerHTML = "Altitude: " + circuitJSON[i].Altitude
                                document.getElementById(circuit.$.circuitId + "fgp").innerHTML = "First Grand Prix: " + circuitJSON[i].FirstGP
                            }
                        }
                        return null;
                    }
                    return (
                        <div className="col-lg-4 mt-5" key={circuit.$.circuitId}>
                            <div className="circuitCard card h-100" >
                                <img id={circuit.$.circuitId + "img"} className="card-img-top mx-auto" src="/Assets/img/preloader.gif" alt="" />
                                <div className="card-body">
                                    <img className="layout" src={"/Assets/circuitLayouts/" + circuit.CircuitName + ".png"} alt="here" />
                                    <a href={circuit.$.url}><h5 className="card-title">{circuit.CircuitName}</h5></a>
                                    <p className="card-text">{circuit.Location[0].Locality + ", " + circuit.Location[0].Country}</p>
                                    <p className="card-text" id={circuit.$.circuitId + "fgp"}>Resource not Available</p>
                                </div>
                                <div className="card-footer">
                                    <small className=" col-6" id={circuit.$.circuitId + "len"}>Resource not Available</small>
                                    <small className="col-6" id={circuit.$.circuitId + "alt"}>Resource not Available</small>
                                </div>
                            </div>
                            {setTimeout(function () { flag(); return null }, 500)}
                        </div>
                    )
                })}
        </div>
    )

}
export default CircuitIndCard