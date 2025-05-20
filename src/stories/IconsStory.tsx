import { Icon } from "@faridsh69/react-utils";
import { IconsEnum } from "@faridsh69/react-utils";

import styles from "./Story.module.scss";

export const IconsStory = () => {
  return (
    <div className={styles.story}>
      <h4>17 Icons</h4>
      <div style={{ gap: 20, display: "flex" }}>
        {Object.values(IconsEnum).map((icon) => (
          <span key={icon}>
            <Icon icon={icon} />
            <br />
            <br />
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};
