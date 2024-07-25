import React, { useEffect, useState } from 'react';
// import FrameComponent from "../components/FrameComponent";
import CardThree from "../components/CardThree";
import styles from "./dashboard.module.css";
import FilterModal from "../components/FilterModal";
import filterImg from "../assets/filter.jpeg"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    gender: 'both',
    education: '',
    location: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);


  const handleFilterButtonClick = () => {
    setIsModalOpen(true);
  };


  const handleFilterApply = (filters) => {
   
    setFilters(filters);

    setIsModalOpen(false);
    navigate('/filteredProfiles', { state: { filters } });
  };


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
    <>
    <div className={styles.filterButtonContainer}>
        <img 
          src={filterImg} 
          alt="Filter" 
          className={styles.filterButton} 
          onClick={handleFilterButtonClick} 
        />
      </div>
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
      {isModalOpen && (
        <FilterModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onApply={handleFilterApply}
        />
      )}
    </div>
    </>
  );
};

export default Dashboard;
