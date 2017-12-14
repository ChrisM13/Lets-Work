import React from 'react';
import Employee from '../Employee/Employee';

const WeeklySchedule = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th data-field="name">Name</th>
                    <th data-field="Mon">Monday</th>
                    <th data-field="Tues">Tuesday</th>
                    <th data-field="Wed">Wednesday</th>
                    <th data-field="Thurs">Thursday</th>
                    <th data-field="Fri">Friday</th>
                    <th data-field="Sat">Saturday</th>
                    <th data-field="Sun">Sunday</th>
                </tr>
            </thead>
            <tbody className="bordered striped" >
                <Employee 
                {...props}
                saveSchedule={props.saveSchedule}
                handleChange={props.handleChange}
                handleDropdownChange={props.handleDropdownChange}
                 />

            </tbody>
        </table>
    )
}

export default WeeklySchedule