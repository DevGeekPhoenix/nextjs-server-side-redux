import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import {
  getPhotos,
  RTKQuerySSRApi,
} from "../../domains/RTKQuery-SSR/RTKQuery-SSR.sevices";
import { wrapper } from "../../libs/store";

const RTKQuerySSR = dynamic(() => import("../../domains/RTKQuery-SSR"));

type RTKQuerySSRPageProps = {};

const RTKQuerySSRPage: NextPage<RTKQuerySSRPageProps> = ({}) => {
  return <RTKQuerySSR />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getPhotos.initiate(null));

    await Promise.all(
      store.dispatch(RTKQuerySSRApi.util.getRunningQueriesThunk())
    );

    return {
      props: {},
    };
  }
);

export default RTKQuerySSRPage;
