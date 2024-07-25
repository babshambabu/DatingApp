//import { useCallback } from "react";
import styles from "./Profile.module.css";

const Root = () => {
 
  

 

  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />
      

      <section className={styles.frameParent}>
 
      
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.iGetAlongBestWithPeopleWParent}>
              <div className={styles.iGetAlong}>
                I get along best with people who
              </div>
              <div className={styles.canHaveA}>
                Can have a good laugh together and understand each other's humor
              </div>
            </div>
          </div>
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
              <div className={styles.basicInfoItem}>24</div>
            </div>
            <div
              className={styles.basicInfoItems1}
             
            >
              <div className={styles.frameDiv}>
                
                <div className={styles.gender}>Gender</div>
              </div>
              <div className={styles.male}>Male</div>
            </div>
            <div className={styles.basicInfoItems2}>
              <div className={styles.frameParent1}>
                
                <div className={styles.location}>Location</div>
              </div>
              <div className={styles.tamilNaduIndia}> Kochi</div>
            </div>
           
            <div
              className={styles.basicInfoItems4}
              
            >
              <div className={styles.frameParent3}>
                
                <div className={styles.education}>Education</div>
              </div>
              <div className={styles.masters}>B-Tech</div>
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
