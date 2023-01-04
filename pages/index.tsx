import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("../domains/Home"));

type HomePageProps = {};

const HomePage: NextPage<HomePageProps> = ({}) => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {},
  };
};

export default HomePage;
