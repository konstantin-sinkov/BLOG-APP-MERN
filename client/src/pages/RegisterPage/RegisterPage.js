import React, {useState} from 'react';

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const register = (e) => {
        e.preventDefault();
        
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
