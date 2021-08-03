const YearTableCard = ({ yearData }) => {
    if (yearData.length === 0) {
        return (
            <div className="card race h-100">
                <h2>Loading..</h2>
            </div>
        )
    }
    console.log(yearData)

    return (
        <div className="col-12 mt-5">
            <table id="yearTable_Table" class="table table-hover table-sm  table-bordered">
                <thead>
                    <tr className="table-success">
                        <th scope="col">Round</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Circuit</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody >
                    {

                        yearData.MRData.RaceTable[0].Race.map(race => {
                            return (
                                <tr className="table-info">
                                    <th scope="row">{race.$.round}</th>
                                    <td>{race.Date}</td>
                                    <td>{race.RaceName}</td>
                                    <td>{race.Circuit[0].CircuitName}</td>
                                    <td>{race.Circuit[0].Location[0].Locality + ", " + race.Circuit[0].Location[0].Country}</td>
                                </tr>
                            )


                        })
                    }
                </tbody>
            </table>
        </div>
    )

}
export default YearTableCard