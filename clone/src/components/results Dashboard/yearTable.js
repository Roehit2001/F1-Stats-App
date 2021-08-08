import moment from 'moment'
import { Link } from 'react-router-dom'
const YearTableCard = ({ yearData }) => {
    if (yearData.length === 0) {
        return (
            <div className="card race h-100">
                <h2>Loading..</h2>
            </div>
        )
    }
    const d1 = new Date;
    const totalRound = yearData.MRData.RaceTable[0].Race.length;
    const TodayDate = moment(d1).format('DD MMM YY')
    return (
        <div className="col-12 mt-5">
            <table id="yearTable_Table" className="table table-hover table-sm  table-bordered">
                <thead>
                    <tr className="table-success">
                        <th scope="col">Round</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Circuit</th>
                        <th scope="col">Location</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        yearData.MRData.RaceTable[0].Race.map(race => {

                            if (new Date(race.Date).getTime() < new Date(TodayDate).getTime()) {
                                return (

                                    <tr className="table-info" key={race.$.round}>
                                        <th scope="row">{race.$.round}</th>
                                        <td>{moment(race.Date, "YYYY-MM-DD").format('DD MMM YY')}</td>
                                        <td>{race.RaceName}</td>
                                        <td>{race.Circuit[0].CircuitName}</td>
                                        <td>{race.Circuit[0].Location[0].Locality + ", " + race.Circuit[0].Location[0].Country}</td>
                                        <td><Link to={'/results/' + race.$.season + '/' + race.$.round + "/" + totalRound}><button className="btn btn-primary">Results</button></Link></td>
                                    </tr>
                                )
                            }
                            else if (new Date(race.Date).getTime() > new Date(TodayDate).getTime()) {
                                return (

                                    <tr className="table-info" key={race.$.round}>
                                        <th scope="row">{race.$.round}</th>
                                        <td>{moment(race.Date, "YYYY-MM-DD").format('DD MMM YY')}</td>
                                        <td>{race.RaceName}</td>
                                        <td>{race.Circuit[0].CircuitName}</td>
                                        <td>{race.Circuit[0].Location[0].Locality + ", " + race.Circuit[0].Location[0].Country}</td>
                                        <td><Link to={'/results/' + race.$.season + '/' + race.$.round + "/" + totalRound}><button disabled className="btn btn-primary">N/A</button></Link></td>
                                    </tr>
                                )
                            }

                        })
                    }
                </tbody>
            </table>
        </div>
    )

}
export default YearTableCard