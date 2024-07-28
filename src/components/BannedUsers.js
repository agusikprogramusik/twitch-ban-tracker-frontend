import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const BannedUsers = () => {
  const [bannedUsers, setBannedUsers] = useState([]);

  useEffect(() => {
    const fetchBannedUsers = async () => {
      try {
        // replace your localhost with the IP address of your backend server
        const response = await axios.get('#');
        const formattedUsers = response.data.map(user => ({
          username: user.username,
          bannedAt: user.bannedAt,
          banDuration: user.banDuration,
          lastMessages: user.lastMessages
        }));

        setBannedUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching banned users:', error);
      }
    };

    fetchBannedUsers();
  }, []);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('pl-PL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="banned-users-container">
      {bannedUsers.map((user) => (
        <div key={user.username} className="banned-user-tile">
          <p className="username">{user.username}</p>
          <p className="ban-duration">{user.banDuration}</p>
          <div className="banned-user-messages">
            <ul>
              {user.lastMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
          <p className="banned-at">{formatDateTime(user.bannedAt)}</p>
        </div>
      ))}
    </div>
  );
};

export default BannedUsers;
