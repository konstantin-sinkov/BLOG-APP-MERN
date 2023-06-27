import React from 'react';

const LoginPage = () => {
    return (
       <form className="login">
           <input type="text" placeholder="username"/>
           <input type="password" placeholder="password"/>
           <button>Login</button>
       </form>
    );
}

export {LoginPage};
