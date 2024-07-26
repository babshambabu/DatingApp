import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CardThree.module.css";
import { useNavigate } from "react-router-dom";

const CardThree = ({
  className = "",
  profilephoto,
  profilename,
  profilelocation,
  propBackgroundImage,
  profileAge,
  profileid
}) => {
  const cardThreeStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);


  const navigate = useNavigate()

  const gotToNewPage=(id)=>{
    navigate("/profile/"+id);
  }

  return (

    <div
      className={[styles.cardThree, className].join(" ")}
      style={{ ...cardThreeStyle, backgroundImage: `url(${profilephoto})`, cursor: "pointer"}}
      onClick={ () => gotToNewPage(profileid)}
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
  profileid: PropTypes.string,
  /** Style props */
  profileAge: PropTypes.string,
  propBackgroundImage: PropTypes.any,
};

export default CardThree;
