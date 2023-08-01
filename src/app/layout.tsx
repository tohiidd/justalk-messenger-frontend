"use client";

import {ReactNode} from "react";
import {ColorModeContextProvider} from "context/ColorModeContext";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import "./styles.css";
import {AuthContextProvider} from "context/AuthContext";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
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
          <ColorModeContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
          </ColorModeContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
