
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./dashboard.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundShadow} />
      <FrameComponent1 />
    </div>
  );
};

export default Root;
