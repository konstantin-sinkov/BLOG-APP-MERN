import React from 'react';

const RegisterPage = () => {
    return (
        <form className="register">
            <h1>Register page</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    );
}

export {RegisterPage};
