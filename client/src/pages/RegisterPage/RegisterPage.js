import React from 'react';

const RegisterPage = () => {
    return (
        <form className="register">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    );
}

export {RegisterPage};
