import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { NextReduxWrapperProps } from "./index.d";
import { usePostDataSelector } from "./NextReduxWrapper.store";

export const NextReduxWrapper: FC<NextReduxWrapperProps> = () => {
  const postData = usePostDataSelector();

  console.log(postData);

  return (
    <div className={styles.center}>
      <div className={styles.grid}>
        {postData?.slice(0, 12).map((post) => {
          return (
            <div key={post.id} className={styles.card}>
              <h2>
                {post.title} <span>-&gt;</span>
              </h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextReduxWrapper;
