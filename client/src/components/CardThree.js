import React, { useState, useEffect, useContext } from 'react';
import styles from "./CardThree.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';


const CardThree = ({ user }) => {
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if(user.likes)
    if (user.likes.includes(currentUser._id)) {
          setLiked(true);
      }
  }, [user.likes, currentUser._id]);

  const handleLikeToggle = async (e) => {
    e.stopPropagation();
      try {
          const response = await fetch(`http://localhost:3001/api/users/${user._id}/like`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
              },
        body: JSON.stringify({ likedBy: currentUser._id }),
          });

          if (!response.ok) {
              throw new Error('Failed to like/unlike the profile');
          }

          const data = await response.json();
          console.log('Profile liked/unliked successfully:', data);
          setLiked(!liked);
      } catch (error) {
          console.error('Error liking/unliking profile:', error);
      }
  };

  const imageUrl = user.profilePicture
  ? `http://localhost:3001/${user.profilePicture.replace('\\', '/')}`
  : "http://localhost:3001/uploads/w9.jpg";

  const navigate = useNavigate();

  const goToNewPage = (id) => {
    navigate("/profile/" + id);
  };

  return (
    <div
      className={styles.cardThree}
      style={{ backgroundImage: `url(${imageUrl})`, cursor: "pointer" }}
      onClick={() => goToNewPage(user._id)}
    >
      <div className={styles.cardThreeLabels} style={{ padding: "340px 20px 30px 20px" }}>
        <div className={styles.cardThreeLabelsChild} />
        <div className={styles.profilename}>{user.name}</div>
        <div className={styles.age}>{user.age}</div>
        <div className={styles.profilelocation}>{user.location}</div>
        <div 
          style={{ color: "red", position: "relative", right: "0px" }} 
          onClick={handleLikeToggle}
        >
          {liked ? 'Unlike' : 'Like'}
        </div>
      </div>
    </div>
  );
};

export default CardThree;
