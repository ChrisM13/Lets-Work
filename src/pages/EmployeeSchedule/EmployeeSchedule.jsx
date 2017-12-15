import React, {Component} from 'react';
import AddEmployeeModal from '../../components/AddEmployeeModal/AddEmployeeModal';
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule';
import Header from '../../components/Header/Header';
import {Row, Col, Preloader} from 'react-materialize';
import './EmployeeSchedule.css';



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
        
        // console.log('making api call for employee')
        // fetch('/api/employees/' + this.state.id).then(employees=>this.setState({employees: employees}))
        
        
        
        //------AJ---------
        // get data of employee list
        // update state with employee list
        // this.setState({})
        //make fetch call
        //then set state with data from api call
                                this.setState({employees: [
                                    {
                                        _id: 1,
                                        name: 'Chris',
                                        manager: false,
                                        scheudle: []
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
                                    }
                                ]})
        
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

    handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
        name: this.state.name,
        email: this.state.email
    }
    this.setState({name: '', email: ''})

    this.props.handleAddEmployee(newEmployee)
    }

    handleChange(field, e) {
        this.setState({
            [field]: e.target.value
        })
    }

    // handleWeeklySchedule(e) {
    //     this.setState({
    //         employees: employees.push()
    //     })
    // }

    handleDropdownChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleAddEmployee = (newEmployee) => {
        console.log('newEmployee =', newEmployee)
        // fetch('api/users', {
        //     method: "POST",
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         employees: [...this.state.employees, response]
        //     })
        // })
        //     .then(res => res.json())
        //     .catch(err => {
        //         console.error(err);
        //     });
        // make fetch request
        // upon succesful response, update the states like this:
        const response = newEmployee // mock response
        this.setState({ 
            employees: [...this.state.employees, response]
        })
    }
    
    render() {
        if (this.state.employees.length === 0) {
            return (
                <Row className="preloader">
                    <Col s={4}>
                        <Preloader flashing size='big'/>
                    </Col>
                </Row>
            )
        } 
        //if manager then render buttons and add employee component
        if(this.props.user.manager ? true : false) {
            return(
                <div>
                    <Header 
                    {...this.props}
                    />
                    <div className="container">
                        <WeeklySchedule 
                            handleChange={this.handleChange}
                            employees ={this.state.employees}
                            shifts ={this.state.shifts}
                            saveSchedule={this.props.saveSchedule}
                            handleDropdownChange={this.props.handleDropdownChange}
                        />
                        <AddEmployeeModal
                            handleAddEmployee={this.handleAddEmployee}
                        />
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
                        handleChange={this.handleChange}    
                        employees = {this.state.employees}
                        shifts = {this.state.shifts}
                        handleDropdownChange={this.props.handleDropdownChange}
                        saveSchedule = {this.props.saveSchedule}
                    />
                </div>
            )
        }
    }
}

export default EmployeeSchedule