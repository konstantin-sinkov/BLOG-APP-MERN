import React, {useState} from 'react';

import {userService} from "../../services";

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const register = async (e) => {
        e.preventDefault();
        
        await userService.registerUser({
            name: userName,
            password: userPassword
        })
    }
    
    return (
        <form className="register" onSubmit={register}>
            <h1>Register page</h1>
            <input type="text"
                   placeholder="username"
                   value={userName}
                   onChange={event => setUserName(event.target.value)}/>
            <input type="password"
                   placeholder="password"
                   value={userPassword}
                   onChange={event => setUserPassword((event.target.value))}/>
            <button>Login</button>
        </form>
    );
}

export {RegisterPage};
