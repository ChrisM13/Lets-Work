import React from 'react';
import {Input} from 'react-materialize'

const Employee = (props) => {
    const employees = props.employees;
    const shifts = props.shifts;
    console.log('employees =', employees)
    console.log('shifts =', shifts)
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    

    return (
        employees.map((employee, idx) => 
            <tr className="hoverable striped" key={idx}>
                <td key={employee._id}>{employee.name}</td>
                {days.map((day, id) => (
                    <td key={id}>
                        <Input s={12} type='select' label="Select Shift" onChange={(evt) => props.handleDropdownChange(evt, day, employee._id)}>
                            {shifts.map(shift => {
                                return(
                                <option key={shift._id} value={shift.time}>{shift.time}</option>
                                )
                            })}
                        </Input>
                    </td>
                ))}
                        <td><button className="btn btn-default" onClick={ props.saveSchedule }>SAVE</button></td>
                        <td><button className="btn btn-default red">CLEAR</button></td>
            </tr>
        )
    )
}

export default Employee