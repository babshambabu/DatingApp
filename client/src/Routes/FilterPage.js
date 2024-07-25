import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/filterPage.module.css';

const FilterPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [gender, setGender] = useState('both');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleFilter = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gender, education, location }),
      });
      const data = await response.json();
      console.log(data); // Handle the filtered data as needed
    } catch (error) {
      console.error('Error fetching filtered users:', error);
    }
    closeModal();
  };

  return (
    <div className={styles.filterPage}>
      <h1>Filter</h1>
      <button onClick={openModal}>Open Filter</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Filter Options</h2>
        <div>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="both">Both</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Education:
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter education preference"
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location preference"
            />
          </label>
        </div>
        <button onClick={handleFilter}>Apply Filter</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default FilterPage;
