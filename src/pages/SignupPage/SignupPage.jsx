import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

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
            <div className="container">
                <div className='SignupPage'>
                    <SignupForm
                    {...this.props}
                    updateMessage={this.updateMessage}
                    handleSignup={this.props.handleSignup}
                    />
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }
};

export default SignupPage