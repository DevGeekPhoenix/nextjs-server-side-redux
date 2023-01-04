import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { HomeProps } from "./index.d";

export const Home: FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Nextjs Server Side Redux</title>
        <meta name="description" content="Nextjs Server Side Redux" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/redux.png"
              alt="Redux Logo"
              width={75}
              height={75}
              priority
            />
          </div>
          <div style={{ paddingInline: "20px" }}>
            <h1>With</h1>
          </div>

          <div className={styles.thirteen}>
            <Image
              src="/nextjs.png"
              alt="Next.js Logo"
              width={75}
              height={75}
              priority
            />
          </div>
        </div>
        <div className={styles.description}>
          <Link href={"/NextReduxWrapper"}>
            <a
              className={styles.thirteen}
              style={{
                height: "60px",
                width: 140,
                cursor: "pointer",
                textAlign: "center",
              }}
              href={"/NextReduxWrapper"}
            >
              Redux Toolkit SSR Example
            </a>
          </Link>
          <Link href={"/RTKQuerySSR"}>
            <a
              className={styles.thirteen}
              style={{
                height: "60px",
                width: 140,
                cursor: "pointer",
                textAlign: "center",
              }}
              href={"/RTKQuerySSR"}
            >
              RTK Query SSR Example
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
