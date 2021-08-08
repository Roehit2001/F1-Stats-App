import moment from 'moment'
const ResultsTable = ({ results, year, round }) => {
    if (results.length === 0) {
        return (
            <div className="mx-auto large">
                <img className="preloader" src="/Assets/img/preloader.gif" alt="preloader" />
            </div>
        )
    }
    return (
        <div className="col-12 mt-5 resultsTab">
            <div className="header-year row">
                <p className="float-left font-weight-bold col-4">{year}</p>
                <p className="text-center font-weight-bold col-4">{moment(results.MRData.RaceTable[0].Race[0].Date, "YYYY-MM-DD").format('DD MMM YYYY')}</p>
                <p className="text-right font-weight-bold col-4">{round}</p>
            </div>
            <h1 className="text-center">{results.MRData.RaceTable[0].Race[0].RaceName}</h1>
            <h3 className="text-center">{results.MRData.RaceTable[0].Race[0].Circuit[0].CircuitName}</h3>
            <h5 className="text-center">{results.MRData.RaceTable[0].Race[0].Circuit[0].Location[0].Locality + ", " + results.MRData.RaceTable[0].Race[0].Circuit[0].Location[0].Country}</h5>
            <table id="ResultsTable_Table" className="table table-hover table-sm">
                <thead>
                    <tr className="">
                        <th scope="col">Position</th>
                        <th scope="col">Driver</th>
                        <th scope="col">Constructor</th>
                        <th scope="col">Race Time</th>
                        <th scope="col">Total Laps</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody >
                    {

                        results.MRData.RaceTable[0].Race[0].ResultsList[0].Result.map(result => {
                            if (result.Time) {
                                return (
                                    <tr key={result.$.position} className="">
                                        <th scope="row">{result.$.position}</th>
                                        <td>{result.Driver[0].GivenName + " " + result.Driver[0].FamilyName}</td>
                                        <td>{result.Constructor[0].Name}</td>
                                        <td>{result.Time[0]._}</td>
                                        <td>{result.Laps[0]}</td>
                                        <td>{result.Status[0]._}</td>
                                    </tr>
                                )
                            }
                            else if (result.Status[0].$.statusId > 10 && result.Status[0].$.statusId < 20) {
                                return (
                                    <tr key={result.$.position} className="">
                                        <th scope="row">{result.$.position}</th>
                                        <td>{result.Driver[0].GivenName + " " + result.Driver[0].FamilyName}</td>
                                        <td>{result.Constructor[0].Name}</td>
                                        <td>{result.Status[0]._}</td>
                                        <td>{result.Laps[0]}</td>
                                        <td>{"Finished (" + result.Status[0]._ + ")"}</td>
                                    </tr>
                                )
                            }
                            else if ((result.Status[0].$.statusId > 1 && result.Status[0].$.statusId < 11) || (result.Status[0].$.statusId > 10 && result.Status[0].$.statusId < 20) || result.Status[0].$.statusId > 19) {
                                return (
                                    <tr key={result.$.position} className="">
                                        <th scope="row">{result.$.position}</th>
                                        <td>{result.Driver[0].GivenName + " " + result.Driver[0].FamilyName}</td>
                                        <td>{result.Constructor[0].Name}</td>
                                        <td className="text-danger">DNF</td>
                                        <td>{result.Laps[0]}</td>
                                        <td>{"(" + result.Status[0]._ + ")"}</td>
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
export default ResultsTable