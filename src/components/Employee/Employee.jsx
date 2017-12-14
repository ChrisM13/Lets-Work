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
                        <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('shift-' + day , e)}>
                            {shifts.map(shift => {
                                return(
                                <option key ={shift._id} value={shift.time}>{shift.time}</option>
                                )
                            })}
                        </Input>
                    </td>

                ))}
            </tr>
        )
    )
}

//                         <tr className="hoverable striped">
//                             
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('shift', e)}>
//                                     <option value={0}></option>
//                                     <option value={1}>8AM - 5PM</option>
//                                     <option value={2}>9AM - 6PM</option>
//                                     <option value={3}>10AM - 7PM</option>
//                                     <option value={4}>11AM - 8PM</option>
//                                     <option value={5}>12PM - 9PM</option>
//                                     <option value={6}>1PM - 10PM</option>
//                                     <option value={7}>2PM - 11PM</option>
//                                     <option value={8}>3PM - 12PM</option>
//                                     </Input>
//                                 </Row></td>





export default Employee