import React, { useState, useEffect } from 'react';
import users from '../../hooks/users'; // Adjust the path as necessary
import '../scoreboard/scoreboard.css'
import useSwipe from '../useSwipe';

const Scoreboard = () => {
    useSwipe();
    const [userList, setUserList] = useState(users);

    useEffect(() => {
        // Sort users by hcp
        const sortedUsers = [...users].sort((a, b) => b.score - a.score);
        setUserList(sortedUsers);
    }, []);

    return (
        <div className="scoreboard-content">
            <h1>Scoreboard</h1>
            <table className="scoreboard-table">
                <thead>
                    <tr>
                        <th>Förnamn</th>
                        <th>Efternamn</th>
                        <th>HCP</th>
                        <th>Vinst</th>
                        <th>Poäng</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.hcp}</td>
                            <td>{user.wins}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <a href="/"><button>Gå tillbaka</button></a> */}
        </div>
    );
};

export default Scoreboard;
