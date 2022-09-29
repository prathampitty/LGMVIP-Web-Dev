import React, { useState } from 'react'
import logo from "../logo.png"
import Loading from './loading';
import Usersui from './usersui';

const First = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://reqres.in/api/users');
            const data = await response.json()
            // console.log(data.data)
            setUsers(data.data)
            setTimeout(() => {
                setLoading(false);
            },2000)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    if(loading){
        return <Loading />
    }

    return (
        <>
            <header className="app">
                <title>Pratham : Task 2 </title>
                <img className="lgm" src={logo} alt="LetsGrowMore" />
                <div className="btn" onClick={getUsers}>
                Fetch Users
                </div>
            </header>
            <div className="task">
                <h3>Task Details: </h3>
                <p>Name: Pratham Pitty</p>
                <p>Task: #2 - Intermediate Level Task </p>
                <p>
                Description: Create a React app with a button to fetch the Users from
                a given API.
                </p>
            </div>
            <>
             <Usersui users={users}/>        
            </>
        </>
    );
}

export default First
