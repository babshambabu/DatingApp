import React, { useEffect, useState } from 'react';
import styles from "./Profile.module.css";
import { useParams } from 'react-router-dom';

const Root = () => {
 

    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:3001/api/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user:', error));
    }, [userId]);
  
    if (!user) {
      return <div>Loading...</div>;
    }
    console.log(user)
  
    const imageUrl = user.profilePicture
    ? `http://localhost:3001/${user.profilePicture.replace('\\', '/')}`
    : "/uploads/w9.jpg";

  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />
      

      <section className={styles.frameParent}>
      <img className={styles.rootChild} alt="" src={imageUrl} />
      
        <div className={styles.frameGroup}>

          <div className={styles.divider} />
        </div>
      </section>
      <section className={styles.rootInner}>
        <div className={styles.frameContainer}>
          <div
            className={styles.basicInfoItemsParent}
            
          >
            <div className={styles.basicInfoItems}>
              <div className={styles.basicInfoItemDetails}>
                
                <div className={styles.age}>Age</div>
              </div>
              <div className={styles.basicInfoItem}>{user.age}</div>
            </div>
            <div
              className={styles.basicInfoItems1}
             
            >
              <div className={styles.frameDiv}>
                
                <div className={styles.gender}>Gender</div>
              </div>
              <div className={styles.male}>{user.gender}</div>
            </div>
            <div className={styles.basicInfoItems2}>
              <div className={styles.frameParent1}>
                
                <div className={styles.location}>Location</div>
              </div>
              <div className={styles.tamilNaduIndia}> {user.location}</div>
            </div>
           
            <div
              className={styles.basicInfoItems4}
              
            >
              <div className={styles.frameParent3}>
                
                <div className={styles.education}>Education</div>
              </div>
              <div className={styles.masters}>{user.education}</div>
            </div>
          </div>
          
          <div className={styles.moreInfoItemsParent}>
            <div
              className={styles.moreInfoItems}
              
            >
              <div className={styles.moreInfoItemDetails}>
                
                <div className={styles.career}>Job-Title</div>
              </div>
              <div className={styles.designer}>Designer</div>
            </div>
           
           
            <div
              className={styles.moreInfoItems3}
              
            >
              <div className={styles.frameParent6}>
                
                <div className={styles.interests}>Interests</div>
                <div className={styles.masters}>{user.interests}</div>
              </div>
              
            </div>
            
            
            <div
              className={styles.moreInfoItems6}
              
            >
              <div className={styles.frameParent9}>
                
                <div className={styles.doYouSmoke}>Do you smoke?</div>
              </div>
              <div className={styles.no1}>No</div>
            </div>
            <div
              className={styles.moreInfoItems7}
              
            >
              <div className={styles.frameParent10}>
                
                <div className={styles.doYouDrink}>Do you drink?</div>
              </div>
              <div className={styles.yes}>Yes</div>
            </div>
          </div>
        </div>
      </section>
 


    </div>
  );
};

export default Root;
