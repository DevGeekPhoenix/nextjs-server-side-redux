import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { RTKQuerySSRProps } from "./index.d";
import { useGetPhotosQuery } from "./RTKQuery-SSR.sevices";

export const RTKQuerySSR: FC<RTKQuerySSRProps> = () => {
  const { data } = useGetPhotosQuery(null);

  console.log(data);

  return (
    <div className={styles.center}>
      <div className={styles.grid}>
        {data?.slice(0, 12).map((album) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // alignItems: "stretch",
              }}
              key={album.id}
              className={styles.card}
            >
              <h2>{album.title}</h2>
              <div className={styles.thirteen}>
                <img src={album.url} alt="Redux Logo" width={75} height={75} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RTKQuerySSR;
