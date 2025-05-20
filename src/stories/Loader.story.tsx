import { Loader } from "@faridsh69/react-utils";
import { SizesEnum } from "@faridsh69/react-utils";

import styles from "./Story.module.scss";

export const LoaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>10 Loader </h4>
      <code>
        {'<Loader title="Loading users..." description="Please wait" />'}
      </code>
      <h5>A loader comblined with title text</h5>
      <div className={styles.story}>
        {Object.values(SizesEnum).map((size) => (
          <Loader size={size} key={size} />
        ))}
      </div>
    </div>
  );
};
