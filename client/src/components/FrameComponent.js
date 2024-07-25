import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.footerWrapper, className].join(" ")}>
      <div className={styles.footer}>
        <div className={styles.footerSeparator} />
        <div className={styles.messageWrapper}>
          <img
            className={styles.messageIcon}
            loading="lazy"
            alt=""
            src="/icons/message.svg"
          />
        </div>
        <div className={styles.home}>
          <img
            className={styles.horizontalLogoIcon}
            loading="lazy"
            alt=""
            src="/icons/horizontal-logo@2x.png"
          />
        </div>
        <div className={styles.addButtonWrapper}>
          <img
            className={styles.addButtonIcon}
            loading="lazy"
            alt=""
            src="/icons/ellipse-716@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
