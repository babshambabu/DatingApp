import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CardThree.module.css";

const CardThree = ({
  className = "",
  profilephoto,
  profilename,
  profilelocation,
  propBackgroundImage,
  profileAge,
}) => {
  const cardThreeStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (

    <div
      className={[styles.cardThree, className].join(" ")}
      style={{ ...cardThreeStyle, backgroundImage: `url(${profilephoto})`}}
    >
      {/* <img className={styles.cardThreeChild} alt="" src={profilephoto} /> */}
      <div className={styles.cardThreeLabels} style={{ padding:"340px 20px 30px 20px"}}>
        <div className={styles.cardThreeLabelsChild} />
        <div className={styles.profilename}>{profilename}</div>
        <div className={styles.age}>{profileAge}</div>
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
