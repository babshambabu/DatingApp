import { useCallback } from "react";
import styles from "./Profile.module.css";

const Root = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "6027" to the project
  }, []);

  const onBasicInfoItemsClick = useCallback(() => {
    // Please sync "7- gender" to the project
  }, []);

  const onBasicInfoItemsClick1 = useCallback(() => {
    // Please sync "9- religion" to the project
  }, []);

  const onBasicInfoItemsClick2 = useCallback(() => {
    // Please sync "10- education" to the project
  }, []);

  const onMoreInfoItemsClick = useCallback(() => {
    // Please sync "11- Job" to the project
  }, []);

  const onMoreInfoItemsClick1 = useCallback(() => {
    // Please sync "12- height" to the project
  }, []);

  const onMoreInfoItemsClick2 = useCallback(() => {
    // Please sync "13- languages" to the project
  }, []);

  const onMoreInfoItemsClick3 = useCallback(() => {
    // Please sync "14 interests" to the project
  }, []);

  const onMoreInfoItemsClick4 = useCallback(() => {
    // Please sync "14- family plans" to the project
  }, []);

  const onMoreInfoItemsClick5 = useCallback(() => {
    // Please sync "15- kids" to the project
  }, []);

  const onMoreInfoItemsClick6 = useCallback(() => {
    // Please sync "16- smoke" to the project
  }, []);

  const onMoreInfoItemsClick7 = useCallback(() => {
    // Please sync "17- drink" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "624" to the project
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />
      

      <section className={styles.frameParent}>
 
      <img className={styles.rootChild} alt="" src="/ellipse-722@2x.png" />
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
            onClick={onFrameContainerClick}
          >
            <div className={styles.basicInfoItems}>
              <div className={styles.basicInfoItemDetails}>
                <img
                  className={styles.basicInfoItemDetailsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001.svg"
                />
                <div className={styles.age}>Age</div>
              </div>
              <div className={styles.basicInfoItem}>24</div>
            </div>
            <div
              className={styles.basicInfoItems1}
              onClick={onBasicInfoItemsClick}
            >
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/frame-1000004999.svg"
                />
                <div className={styles.gender}>Gender</div>
              </div>
              <div className={styles.male}>Male</div>
            </div>
            <div className={styles.basicInfoItems2}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-1000005001-1.svg"
                />
                <div className={styles.location}>Location</div>
              </div>
              <div className={styles.tamilNaduIndia}>Tamil Nadu, India</div>
            </div>
            <div
              className={styles.basicInfoItems3}
              onClick={onBasicInfoItemsClick1}
            >
              <div className={styles.frameParent2}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-2.svg"
                />
                <div className={styles.religion}>Religion</div>
              </div>
              <div className={styles.hindu}> Hindu</div>
            </div>
            <div
              className={styles.basicInfoItems4}
              onClick={onBasicInfoItemsClick2}
            >
              <div className={styles.frameParent3}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-3.svg"
                />
                <div className={styles.education}>Education</div>
              </div>
              <div className={styles.masters}>Masters</div>
            </div>
          </div>
          <button className={styles.expandAllParent}>
            <div className={styles.expandAll}>Expand all</div>
            <img className={styles.icons} alt="" src="/icons-3.svg" />
          </button>
          <div className={styles.moreInfoItemsParent}>
            <div
              className={styles.moreInfoItems}
              onClick={onMoreInfoItemsClick}
            >
              <div className={styles.moreInfoItemDetails}>
                <img
                  className={styles.moreInfoItemDetailsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-4.svg"
                />
                <div className={styles.career}>Career</div>
              </div>
              <div className={styles.designer}>Designer</div>
            </div>
            <div
              className={styles.moreInfoItems1}
              onClick={onMoreInfoItemsClick1}
            >
              <div className={styles.frameParent4}>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-5.svg"
                />
                <div className={styles.height}>Height</div>
              </div>
              <div className={styles.div}>6’0”</div>
            </div>
            <div
              className={styles.moreInfoItems2}
              onClick={onMoreInfoItemsClick2}
            >
              <div className={styles.frameParent5}>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-6.svg"
                />
                <div className={styles.language}>Language</div>
              </div>
              <div className={styles.englishTamil}>English, Tamil</div>
            </div>
            <div
              className={styles.moreInfoItems3}
              onClick={onMoreInfoItemsClick3}
            >
              <div className={styles.frameParent6}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-7.svg"
                />
                <div className={styles.interests}>Interests</div>
              </div>
              <a className={styles.viewAll}>View all</a>
            </div>
            <div
              className={styles.moreInfoItems4}
              onClick={onMoreInfoItemsClick4}
            >
              <div className={styles.frameParent7}>
                <img
                  className={styles.frameChild4}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-8.svg"
                />
                <div className={styles.whatAboutKids}>What about kids?</div>
              </div>
              <div className={styles.no}>No</div>
            </div>
            <div
              className={styles.moreInfoItems5}
              onClick={onMoreInfoItemsClick5}
            >
              <div className={styles.frameParent8}>
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="/group-1000005001-9.svg"
                />
                <div className={styles.familyPlans}>Family plans</div>
              </div>
              <div className={styles.wantChildren}>Want children</div>
            </div>
            <div
              className={styles.moreInfoItems6}
              onClick={onMoreInfoItemsClick6}
            >
              <div className={styles.frameParent9}>
                <img
                  className={styles.frameChild6}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-10.svg"
                />
                <div className={styles.doYouSmoke}>Do you smoke?</div>
              </div>
              <div className={styles.no1}>No</div>
            </div>
            <div
              className={styles.moreInfoItems7}
              onClick={onMoreInfoItemsClick7}
            >
              <div className={styles.frameParent10}>
                <img
                  className={styles.frameChild7}
                  loading="lazy"
                  alt=""
                  src="/group-1000005001-11.svg"
                />
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
