import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return (
            <div className='LoginPage'>
                <LoginForm
                {...this.props}
                updateMessage={this.updateMessage}
                handleSignup={this.props.handleSignup}
                />
                <p>{this.state.message}</p>
            </div>
        );
    }
};

export default SignupPage