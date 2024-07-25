import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent = ({ className = "" }) => {
  const onOptionIconsContainerClick = useCallback(() => {
    // Please sync "644" to the project
  }, []);

  const onOptionIconsContainerClick1 = useCallback(() => {
    // Please sync "6025" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "639" to the project
  }, []);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.profileOptionsParent}>
        <div className={styles.profileOptions}>
          <div className={styles.profileOptionsChild} />
          <div
            className={styles.optionIcons}
            onClick={onOptionIconsContainerClick}
          >
            <a className={styles.matches}>Matches</a>
          </div>
          <div className={styles.optionIcons1}>
            <a className={styles.likes}>Likes</a>
          </div>
          <div
            className={styles.optionIcons2}
            onClick={onOptionIconsContainerClick1}
          >
            <a className={styles.requests}>Requests</a>
          </div>
        </div>

      </div>
      <div className={styles.profileCards}>
        <div className={styles.cardRowOne}>
          <div className={styles.cardOne}>
            <div className={styles.cardOneLabels}>
              <div className={styles.received}>Received</div>
            </div>
          </div>
          <div className={styles.cardTwo}>
            <img
              className={styles.cardTwoChild}
              alt=""
              src="/rectangle-34624851@2x.png"
            />
            <div className={styles.cardTwoLabels}>
              <div className={styles.cardTwoLabelsChild} />
              <div className={styles.priya26y}>Priya, 26y</div>
              <div className={styles.comupterScienceCanada}>
                Comupter science, canada
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardRowOne1}>
          <div className={styles.cardRowOneInner}>
            <div className={styles.sentWrapper} onClick={onFrameContainerClick}>
              <div className={styles.sent}>Sent</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-346248511@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.aarna32y}>Aarna, 32y</div>
              <div className={styles.doctorCanada}>Doctor, canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
