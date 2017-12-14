import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class AddNewEmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: 'a',
            email: 'a@g.com'
        };
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
    
    isFormInvalid() {
        return !(this.state.name && this.state.email);
    }
    
    render() {
    return(
        <div>
            <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
                <div className="form-group">
                        <div className="col-sm-12">
                        <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                        </div>
                </div>
                <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)}  />
                        </div>
                </div>
                <div className="form-group">
                        <div className="col-sm-12 text-center">
                        <button className="btn btn-default" disabled={this.isFormInvalid()}>Add</button>&nbsp;&nbsp;
                        <button className="btn btn-default red"><Link to='/manager/scheduler'>Cancel</Link></button>
                </div>
                </div>
            </form>
        </div>
    )
}
}

export default AddNewEmployeeForm