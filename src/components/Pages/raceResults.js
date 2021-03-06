import React, { useState } from 'react';
import Schedule from '../results Dashboard/schedule';

function RaceResults() {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    function handleChange(e) {
        setYear(e.target.value);
    }

    function handlesubmit(e) {
        e.preventDefault();
        console.log(year)
    }


    return (
        <div className="p-lg-5 mx-auto" id="raceResults">
            <form onSubmit={handlesubmit} className="pt-3 mx-auto">
                <select className="  " onChange={handleChange} value={year}>
                    <option value={currentYear - 0} >{currentYear - 0}</option>
                    <option value={currentYear - 1} >{currentYear - 1}</option>
                    <option value={currentYear - 2} >{currentYear - 2}</option>
                    <option value={currentYear - 3} >{currentYear - 3}</option>
                    <option value={currentYear - 4} >{currentYear - 4}</option>
                    <option value={currentYear - 5} >{currentYear - 5}</option>
                    <option value={currentYear - 6} >{currentYear - 6}</option>
                    <option value={currentYear - 7} >{currentYear - 7}</option>
                    <option value={currentYear - 8} >{currentYear - 8}</option>
                    <option value={currentYear - 9} >{currentYear - 9}</option>
                    <option value={currentYear - 10} >{currentYear - 10}</option>
                    <option value={currentYear - 11} >{currentYear - 11}</option>
                </select>
            </form>
            <Schedule schedule={year} />
        </div>
    )
}
export default RaceResults