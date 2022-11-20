import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorModeContextProvider } from "context/ColorModeContext";
import { Provider } from "react-redux";
import { store } from "redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ColorModeContextProvider>
        <Component {...pageProps} />
      </ColorModeContextProvider>
    </Provider>
  );
}
