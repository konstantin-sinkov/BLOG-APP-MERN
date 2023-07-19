import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {userService} from "../../services";


const Header = () => {
    const [username, setUsername] = useState(null);
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await userService.profile();
                const userInfo = response.data;
    
                console.log(userInfo);
                setUsername(userInfo.userName);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    
        // fetch("http://localhost:4005/profile", {
        //     credentials: "include"
        // }).then(response => {
        //     response.json().then(userInfo => {
        //         console.log(userInfo);
        //         setUsername(userInfo.userName);
        //     });
        // });
    }, []);
    console.log(username);
    return (
        <header>
            <Link to="/" className="logo">My Blog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Add new post</Link>
                        <a>Logout</a>
                    </>
                )}
    
                {!username && (
                    <>
                        <Link to="/login">Login page</Link>
                        <Link to="/register">Register</Link><
                    />)
                }
            </nav>
        </header>
    );
}

export {Header};
