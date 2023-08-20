import { GlobalStyle } from "../styles/globalStyles";
import ApiKeysProvider from "../src/components/provider/ApiKeys/";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ApiKeysProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApiKeysProvider>
  );
}

export default MyApp;
