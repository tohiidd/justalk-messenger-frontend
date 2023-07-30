"use client";

import {ReactNode} from "react";
import {ColorModeContextProvider} from "context/ColorModeContext";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import "./styles.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

interface Props {
  children: ReactNode;
}
export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <ColorModeContextProvider>{children}</ColorModeContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
