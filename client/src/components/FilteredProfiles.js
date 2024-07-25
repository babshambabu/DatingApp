import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardThree from "../components/CardThree";
import styles from "../styles/filteredProfiles.module.css";

const FilteredProfiles = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const location = useLocation();
  const { filters } = location.state;

  useEffect(() => {
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .then(data => setFilteredUsers(data))
    .catch(error => console.error('Error fetching filtered users:', error));
  }, [filters]);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const userGroups = chunkArray(filteredUsers, 3);

  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />
      <main className={styles.content}>
        {userGroups.map((group, groupIndex) => (
          <section key={groupIndex} className={styles.cardRowTwo}>
            {group.map(user => {
              const imageUrl = user.profilePicture
                ? `http://localhost:3001/${user.profilePicture.replace('\\', '/')}`
                : "/uploads/w9.jpg";
              return (
                <CardThree 
                  key={user._id}
                  profilephoto={imageUrl}
                  profilename={user.name}
                  profilelocation={user.location}
                  profileAge={user.age}
                  profileid={user._id}
                />
              );
            })}
          </section>
        ))}
      </main>
    </div>
  );
};

export default FilteredProfiles;
