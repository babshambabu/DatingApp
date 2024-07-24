import React, { useEffect, useState } from 'react';
import FrameComponent from "../components/FrameComponent";
import CardThree from "../components/CardThree";
import styles from "./dashboard.module.css";

const Root = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Function to chunk array into groups of a given size
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Chunk the users array into groups of 3
  const userGroups = chunkArray(users, 3);

  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />

      <main className={styles.content}>
        <FrameComponent />

          {userGroups.map((group, groupIndex) => (
        <section className={styles.cardRowTwo}>
              {group.map(user => {
                const imageUrl = user.profilePicture
                  ? `http://localhost:3001/${user.profilePicture.replace('\\', '/')}`
                  : "/icons/rectangle-346248512@2x.png";
                return (
                  <CardThree
                    key={user._id}
                    profilephoto={imageUrl}
                    profilename={user.name}
                    profilelocation={user.location}
                    user={user}
                  />
                );
              })}
        </section>
          ))}

      </main>
    </div>
  );
};

export default Root;
