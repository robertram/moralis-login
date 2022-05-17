import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // appId={process.env.APP_ID}
      // serverUrl={process.env.SERVER_URL}
      appId="LKSGoUEGA9xYR5qd8EoO9gRW0YgkqKC4eitdgk79"
      serverUrl="https://svibnmb99tae.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
