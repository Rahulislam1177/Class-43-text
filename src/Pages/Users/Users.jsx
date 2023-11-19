import React from 'react';
import Header from '../Shared/Header/Header';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {

    const users = useLoaderData()
    return (


        <div>
            <Header> </Header>
            <h1>Useer show naw {users.length}</h1>
            <div className='container row row-cols-1 row-cols-md-4 mx-auto '>
              {
                users.map(user => <User
                user={user}
                ></User>)
              }
            </div>
        </div>
    );
};

export default Users;