import React from 'react';

const UserCard = ({ userdata }) => {
    return (
        <div>
            {userdata.map(user => (
                <div key={user.id} className="userCardDiv">
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Favorite Color: {user.color}</h3>
                    <h3>Signed Terms of Use: {user.tos.toString() === 'true' ? "Yes" : "Not yet signed"}</h3>
                </div>
            ))}
        </div>
    )
}

export default UserCard