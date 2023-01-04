import axios from "axios";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { setPostData } from "../../domains/NextReduxWrapper/NextReduxWrapper.store";
import { wrapper } from "../../libs/store";

const NextReduxWrapper = dynamic(
  () => import("../../domains/NextReduxWrapper")
);

type NextReduxWrapperPageProps = {};

const NextReduxWrapperPage: NextPage<NextReduxWrapperPageProps> = ({}) => {
  return <NextReduxWrapper />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          store.dispatch(setPostData(res.data));
        });
    } catch (error) {
      console.log(error);
    }

    return {
      props: {},
    };
  }
);

export default NextReduxWrapperPage;
