import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LogninPage = (props) => {
    return (
        <div className='LoginPage'>
            <LoginForm
                {...props}
                />
        </div>
    );
};