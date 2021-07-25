const RaceCard = ({ round, circuit_name, driver_first, driver_second, driver_third }) => {

    return (
        <div id="PreviousRace" className="card race h-100">
            <div className="race_number">
                <p>{round}</p>
            </div>
            <div className="card-img-top">
                <img id="prev-card-img" src="" alt="" />
            </div>
            <div className="card-img-overlay">
                <h3>{circuit_name}</h3>
            </div>
            <div className="card-body">
                <div className="first card-text"><p>{driver_first}</p></div>
                <div className="Second card-text"><p>{driver_second}</p></div>
                <div className="Third card-text"><p>{driver_third}</p></div>
            </div>
        </div>
    )

}

const NextRace = ({ round, circuit, race }) => {

    return (
        <div className="card race h-100">
            <div className="race_number">
                <p>{round}</p>
            </div>
            <div className="card-img-top">
                <img src="" alt="" />
            </div>
            <div className="card-img-overlay">
                <h2>{race}</h2>
                <h3>{circuit}</h3>
            </div>
        </div>
    )


}

export {
    RaceCard,
    NextRace
}