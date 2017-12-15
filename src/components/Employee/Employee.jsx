import React from 'react';
import {Input} from 'react-materialize';
import {Row, Col, Preloader} from 'react-materialize';
import './Employee.css'

const Employee = (props) => {
    const employees = props.employees;
    const shifts = props.shifts;
    console.log('employees =', employees)
    console.log('shifts =', shifts)
    console.log("Employee PROPS", props)
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    

    return (

         props.allUsers.length ? (props.allUsers.map((employee, idx) => {
            return (
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
                        <td><button className="btn btn-default" onClick={(e) => props.saveSchedule(e, employee._id) }>SAVE</button></td>
                        <td><button className="btn btn-default red">CLEAR</button></td>
            </tr>
            )
        })) :  <Row className="preloader">
                    <Col s={4}>
                        <Preloader flashing size='big'/>
                    </Col>
                </Row> 
    )
}

export default Employee