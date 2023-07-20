import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {userService} from "../../services";
import {UserContext} from "../../contexts";


const Header = () => {
    // const [username, setUsername] = useState(null);
    const {setUserInfo, userInfo} = useContext(UserContext);
    
    const username = userInfo?.userName; //might be null
    
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await userService.profile();
                const userInfo = response.data;
                
                setUserInfo(userInfo);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        
    }, []);
    
    //logout func for invalidating cookie
    const handleLogout = () => {
        userService.logout();
        setUserInfo(null);
    }
    
    return (
        <header>
            <Link to="/" className="logo">My Blog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Add new post</Link>
                        <a onClick={handleLogout}>Logout</a>
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
