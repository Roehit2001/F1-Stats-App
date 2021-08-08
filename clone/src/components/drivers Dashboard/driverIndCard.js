const DriverIndCard = ({ driversList }) => {
    if (driversList.length === 0) {
        return (
            <div className="card race h-100">
                <h2>Loading..</h2>
            </div>
        )
    }
    return (
        <div className="card-deck">
            {

                driversList.MRData.DriverTable[0].Driver.map(driver => {
                    return (
                        <div className="col-lg-4 mt-5" key={driver.$.driverId}>
                            <div className="driverCard card h-100" >
                                <img id={driver.$.driverId + "img"} className="card-img-top mx-auto my-auto" src={"/Assets/driversImages/" + driver.PermanentNumber + ".png"} alt="" />
                                <div className="card-body">
                                    <a href={driver.$.url}><h5 className="card-title">{driver.GivenName + " " + driver.FamilyName}</h5></a>
                                    <p className="card-text">{"Date of Birth: " + driver.DateOfBirth}</p>
                                    <p className="card-text">{"Nationality: " + driver.Nationality}</p>
                                </div>
                                {/* <div className="card-footer">
                                <small className="text-muted col-6" id={driver.$.driverId + "len"}>Resource not Available</small>
                                <small className="text-muted col-6" id={driver.$.driverId + "alt"}>Resource not Available</small>
                            </div> */}
                            </div>
                        </div>
                    )
                })}
        </div>
    )

}
export default DriverIndCard