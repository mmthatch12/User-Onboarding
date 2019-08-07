import React from 'react';

const UserCard = ({ userdata }) => {
    console.log("users into UserCard from form.js", userdata)
    return (
        <div>
            {userdata.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                </div>
            ))}
        </div>
    )
}

export default UserCard