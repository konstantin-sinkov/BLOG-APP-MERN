import React, {useState} from 'react';
import {userService} from "../../services";
import {Navigate} from "react-router";

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {userName, userPassword};
        
        const response = await userService.loginUser(userData);
        // console.log(response);
        if (response.data === 'ok') {
            setRedirect(true);
        } else {
            alert('wrong credentials!')
        }
    }
    
    if (redirect) {
        return  <Navigate to={'/'} />
    }
    
    return (
       <form className="login" onSubmit={handleSubmit}>
           <h1>Login page</h1>
           <input
               type="text"
               placeholder="username"
               value={userName}
               onChange={event => setUserName(event.target.value)}/>
           <input
               type="password"
               placeholder="password"
               value={userPassword}
               onChange={event => setUserPassword(event.target.value)}/>
           <button>Login</button>
       </form>
    );
}

export {LoginPage};
