import React, {useState} from 'react';

import {userService} from "../../services";

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const handleSubmit = async (ev) => {
      ev.preventDefault();
      const userData = {userName, userPassword};
      
      const response = await userService.registerUser(userData);
      
      response.status === 200 ? alert('Registration succeed!') : alert('Registration failed!');
      
      //
      // try {
      //     if (userName && userPassword) {
      //         await userService.registerUser(userData);
      //     }
      // } catch (e) {
      //     console.log(e);
      // }
    }
    
    return (
        <form className="register" onSubmit={handleSubmit}>
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
