import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CardThree.module.css";

const CardThree = ({
  className = "",
  profilephoto,
  profilename,
  profilelocation,
  propBackgroundImage,
  user,
}) => {
  const cardThreeStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (

    <div
      className={[styles.cardThree, className].join(" ")}
      style={{ ...cardThreeStyle, backgroundImage: `url(${profilephoto})` }}
    >
      <img className={styles.cardThreeChild} alt="" src={profilephoto} />
      <div className={styles.cardThreeLabels}>
        <div className={styles.cardThreeLabelsChild} />
        <div className={styles.profilename}>{profilename}</div>
        <div className={styles.profilename}>{user.name}</div>
        <div className={styles.profilelocation}>{profilelocation}</div>
      </div>
    </div>

  );
};

CardThree.propTypes = {
  className: PropTypes.string,
  profilephoto: PropTypes.string,
  profilename: PropTypes.string,
  profilelocation: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default CardThree;
