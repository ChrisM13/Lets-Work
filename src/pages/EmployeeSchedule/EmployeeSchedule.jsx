import React, {Component} from 'react';
import AddEmployeeModal from '../../components/AddEmployeeModal/AddEmployeeModal';
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule'
import Header from '../../components/Header/Header'



class EmployeeSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            shifts: [],
            email: '',
            message: ''
        }
    }

    componentDidMount() {
        //make api call for employees and shifts


        // 1. make it work with these commented out
        // 2. make these update state without calling the api 
        // at end of 2. you should be able to render 
        // 3. make it call the api for real data
        console.log("Mounted")
        console.log("----------")
        this.getEmployees();
        this.getShifts();
        console.log(this.props.user ? true : "loading")
    }

    getEmployees() {
        console.log('Getting Employees')
        this.setState({employees: [
            {
                _id: 1,
                name: 'Chris',
                manager: false
            },
            {
                _id: 2,
                name: 'Sam',
                manager: false
            },
            {
                _id: 3,
                name: 'Nancy',
                manager: false
            },
        ]})

        // console.log('making api call for employee')
         // fetch('/api/employees/' + this.state.id).then(employees=>this.setState({employees: employees}))
        

        
        //------AJ---------
        // get data of employee list
        // update state with employee list
        // this.setState({})
        //make fetch call
        //then set state with data from api call
        
    }

    getShifts() {
        // get data for shifts
        // update state with shifts
        console.log('Getting Shifts')
        this.setState({shifts: [
            {
                _id: 1,
                time: ''
            },
            {
                _id: 2,
                time: '8AM - 5PM'
            },
            {
                _id: 3,
                time: '9AM - 6PM'
            },
        ]})
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    handleChange = (field, e) => {
        console.log("handleChange props", this.props)
        this.updateMessage('');
    }

    handleAddEmployee = (newEmployee) => {
        console.log('newEmployee =', newEmployee)
        const response = newEmployee
        this.setState({ 
            employees: [...this.state.employees, response]
        })
    }
    
    render() {
        console.log("Employee Schedule Employees ",this.state.employees)
        console.log("Employee Schedule USER", this.props.user)
        if (this.state.employees.length === 0) {
            return (<div>Loading</div>)
        } 
        //if manager then render buttons and add employee component
        if(this.props.user.manager ? true : "Loading") {
            return(
                <div>
                    <Header 
                    {...this.props}
                    />
                    <div className="container">
                        <WeeklySchedule 
                            employees = {this.state.employees}
                            shifts = {this.state.shifts}
                        />
                        <AddEmployeeModal
                            handleAddEmployee={this.handleAddEmployee}
                        />

                        <div onClick={()=>this.handleAddEmployee()}>test</div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <Header 
                    {...this.props}
                    />
                    Hellow World
                    <WeeklySchedule 
                        employees = {this.state.employees}
                        shifts = {this.state.shifts}
                    />
                </div>
            )
        }
    }
}

// const EmployeeSchedule = (props) => {

//     return(
//         <div className="container">
//             <table>
//                 <thead>
//                    
//                     <tr>
//                         <th data-field="name">Name</th>
//                         <th data-field="Mon">Monday</th>
//                         <th data-field="Tues">Tuesday</th>
//                         <th data-field="Wed">Wednesday</th>
//                         <th data-field="Thurs">Thursday</th>
//                         <th data-field="Fri">Friday</th>
//                         <th data-field="Sat">Saturday</th>
//                         <th data-field="Sun">Sunday</th>
//                     </tr>
//                 </thead>
//                     <tbody className="bordered striped" >
//                         <tr className="hoverable striped">
//                             <td>Chris Mosier</td>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td> <Row>
//                                     <Input s={12} type='select' label="Select Shift" onChange={(e) => this.handleChange('manager', e)}>
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
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                         <tr className="hoverable">
//                             <td>Chris Mosier</td>
//                             <td>8AM - 9PM</td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td></td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td>8AM - 5PM</td>
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                         <tr className="hoverable">
//                             <td>Chris Mosier</td>
//                             <td>8AM - 9PM</td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td></td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td>8AM - 5PM</td>
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                         <tr className="hoverable">
//                             <td>Chris Mosier</td>
//                             <td>8AM - 9PM</td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td></td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td>8AM - 5PM</td>
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                         <tr className="hoverable">
//                             <td>Chris Mosier</td>
//                             <td>8AM - 9PM</td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td></td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td>8AM - 5PM</td>
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                         <tr className="hoverable">
//                             <td>Chris Mosier</td>
//                             <td>8AM - 9PM</td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td></td>
//                             <td></td>
//                             <td>8AM - 5PM</td>
//                             <td>8AM - 5PM</td>
//                             <td><button className="btn btn-default">Add</button></td>
//                             <td><button className="btn btn-default red">Remove</button></td>
//                         </tr>
//                     </tbody>
//             </table>

//         </div>
//     )

// }

export default EmployeeSchedule