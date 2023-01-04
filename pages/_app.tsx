import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { wrapper } from "../libs/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async (appContext: AppContext): Promise<any> => {
  return {};
};

export default wrapper.withRedux(App);
