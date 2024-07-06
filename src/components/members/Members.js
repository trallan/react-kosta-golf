import React, { useState } from 'react';
import users from '../../hooks/users'; // Adjust the path as necessary
import '../members/members.css'
import useSwipe from '../useSwipe';

const Members = () => {
    useSwipe();
    const [userList] = useState(users);

    return (
        <div className="members-content">
        <h1>Medlemmar</h1>
            <table className="members-table">
                <thead>
                    <tr>
                        <th>Förnamn</th>
                        <th>Efternamn</th>
                        <th>Golf klubb</th>
                        <th>HCP</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.golf_club}</td>
                            <td>{user.hcp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/*<a href="/"><button>Gå tillbaka</button></a>*/}
        </div>
    );
};

export default Members;
