

const Countdown = ({ date }) => {

    if (date) {
        const d = new Date(date);
        const d1 = new Date();
        const gap = Math.trunc((((+(d.getTime() - d1.getTime()) / 1000) / 60) / 60) / 24);
        if (+d.getFullYear() === +d1.getFullYear()) {
            return (
                <div className="card countdownCard text-center">
                    <div className="card-body">
                        <h5 className="card-title"><span color="#e10600">{gap}</span> Days left for Race Day</h5>
                    </div>
                </div>

            )
        }
        return (
            <div className="card countdownCard text-center">
                <div className="card-body">
                    <h5 className="card-title"><span className="NextSeasonCountdown" color="#e10600">{d.getFullYear()}</span></h5>
                </div>
            </div >
        )
    }
    return (
        <div className="card countdownCard">
            <div className="card-body">
                <h3 className="card-title">Its Race Day</h3>
            </div>
        </div>
    )
}

export default Countdown