import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/filterModal.module.css';

const FilterModal = ({ isOpen, onClose, onApply, filters }) => {
  const [gender, setGender] = useState('both');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState('');

  const handleApply = () => {
    const filters = {
      gender,
      education,
      location,
    };
    onApply(filters);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Filter Profiles</h2>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="both">Both</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Education:</label>
          <input 
            type="text" 
            value={education} 
            onChange={(e) => setEducation(e.target.value)} 
          />
        </div>
        <div>
          <label>Location:</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>
        <button onClick={handleApply}>Apply Filters</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default FilterModal;
