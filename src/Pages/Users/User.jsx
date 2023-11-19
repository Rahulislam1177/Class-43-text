import React from 'react';

const User = ({user}) => {
    const {name,email,phone} = user;
    return (
        <div className='card   m-4 p-4 center'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Number: {phone}</p>
            <button>Show details of user</button>
        </div>
    );
};

export default User;