import React, {useState} from 'react';

import {userService} from "../../services";
import axios from "axios";

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const handleSubmit = async (ev) => {
      ev.preventDefault();
      
      const userData = {
          userName,
          userPassword
      };
      
      try {
          if (userName && userPassword) {
              await userService.registerUser(userData);
          }
          // const response = await axios.post("http://localhost:4005/register", userData);
          // console.log(response);
      } catch (e) {
          console.log(e);
      }
    }
    
    // const register = async (e) => {
    //     e.preventDefault();
    //
    //     await userService.registerUser({
    //         name: userName,
    //         password: userPassword
    //     })
    // }
    
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
