

const Countdown = ({ date }) => {
    if (date === null) {
        <div className="card countdownCard">
            <div className="card-body">
                <h3 className="card-title">Its Race Day</h3>
            </div>
        </div>



    }
    const d = new Date(date);
    const d1 = new Date();
    const gap = Math.trunc(((((d.getTime() - d1.getTime()) / 1000) / 60) / 60) / 24);
    console.log(gap)
    return (
        <div className="card countdownCard text-center">
            <div className="card-body">
                <h5 className="card-title"><span color="#e10600">{gap}</span> Days left for Race Day</h5>
            </div>
        </div>

    )
}

export default Countdown