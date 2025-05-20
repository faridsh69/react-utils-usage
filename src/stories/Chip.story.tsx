import { Chip } from "@faridsh69/react-utils";
import { SizesEnum } from "@faridsh69/react-utils";

import styles from "./Story.module.scss";

export const ChipStory = () => {
  return (
    <div className={styles.story}>
      <h4>12 Chip</h4>
      <div className={styles.story}>
        {Object.values(SizesEnum).map((size) => (
          <Chip
            label="Label sample Gg Label sample Gg"
            bold={false}
            width="100px"
            size={size}
            key={size}
          />
        ))}
      </div>
    </div>
  );
};
